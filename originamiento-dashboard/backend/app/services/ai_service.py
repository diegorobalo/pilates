from anthropic import Anthropic
from app.config import settings
from typing import Optional, Dict, List, Any
import logging

logger = logging.getLogger(__name__)

class AIService:
    def __init__(self):
        self.client = Anthropic(api_key=settings.anthropic_api_key)
        self.model = "claude-3-5-sonnet-20241022"
        self.conversation_history = []

    def build_system_prompt(self, context_data: Optional[Dict[str, Any]] = None) -> str:
        """Build a system prompt with context about the dashboard data"""
        base_prompt = """Eres un asistente inteligente para el dashboard de Originamiento de Argensun Foods.
Tu rol es ayudar a los usuarios a entender y analizar la información de productos, pedidos, transportistas y seguimiento.

Responde en español, de forma clara y concisa.
Cuando hagas análisis, sé específico con números y datos.
Si no tienes la información solicitada en el contexto, indícalo claramente.

Contexto disponible:"""

        if context_data:
            if "products_summary" in context_data:
                summary = context_data["products_summary"]
                base_prompt += f"\n- Total de productos: {summary.get('total', 0)}"
                base_prompt += f"\n- Productos con stock bajo: {summary.get('low_stock_count', 0)}"
                base_prompt += f"\n- Precio promedio: ${summary.get('avg_price', 0):.2f}"

            if "orders_summary" in context_data:
                summary = context_data["orders_summary"]
                base_prompt += f"\n- Pedidos pendientes: {summary.get('pending', 0)}"
                base_prompt += f"\n- Total en ventas: ${summary.get('total_sales', 0):.2f}"
                base_prompt += f"\n- Últimos 7 días: ${summary.get('last_week_sales', 0):.2f}"

            if "partners_summary" in context_data:
                summary = context_data["partners_summary"]
                base_prompt += f"\n- Total de contactos: {summary.get('total', 0)}"
                base_prompt += f"\n- Transportistas registrados: {summary.get('transporters', 0)}"

        return base_prompt

    async def ask(
        self,
        question: str,
        context_data: Optional[Dict[str, Any]] = None,
        use_conversation_history: bool = True
    ) -> str:
        """Ask a question to Claude with optional context data"""
        try:
            system_prompt = self.build_system_prompt(context_data)

            # Add to conversation history if enabled
            if use_conversation_history:
                self.conversation_history.append({
                    "role": "user",
                    "content": question
                })
            else:
                # Reset conversation for new topic
                self.conversation_history = [
                    {
                        "role": "user",
                        "content": question
                    }
                ]

            # Make API call
            response = self.client.messages.create(
                model=self.model,
                max_tokens=1024,
                system=system_prompt,
                messages=self.conversation_history
            )

            answer = response.content[0].text

            # Add response to history
            if use_conversation_history:
                self.conversation_history.append({
                    "role": "assistant",
                    "content": answer
                })

            return answer

        except Exception as e:
            logger.error(f"Error calling Claude API: {str(e)}")
            raise

    def reset_conversation(self):
        """Reset conversation history"""
        self.conversation_history = []

    def get_conversation_history(self) -> List[Dict[str, str]]:
        """Get current conversation history"""
        return self.conversation_history

    async def analyze_products(self, products: List[Dict[str, Any]]) -> str:
        """Analyze product data and provide insights"""
        if not products:
            return "No hay datos de productos para analizar."

        summary = {
            "total": len(products),
            "avg_price": sum(p.get("list_price", 0) for p in products) / len(products),
            "low_stock_count": sum(1 for p in products if p.get("qty_available", 0) < 10),
            "total_stock_value": sum(p.get("qty_available", 0) * p.get("list_price", 0) for p in products)
        }

        question = f"""Analiza este resumen de productos y proporciona insights:
- Total de productos: {summary['total']}
- Precio promedio: ${summary['avg_price']:.2f}
- Productos con stock bajo (<10 unidades): {summary['low_stock_count']}
- Valor total de inventario: ${summary['total_stock_value']:.2f}

¿Cuáles son los principales hallazgos y recomendaciones?"""

        context = {"products_summary": summary}
        return await self.ask(question, context_data=context, use_conversation_history=False)

    async def analyze_orders(self, orders: List[Dict[str, Any]]) -> str:
        """Analyze order data and provide insights"""
        if not orders:
            return "No hay datos de pedidos para analizar."

        summary = {
            "total": len(orders),
            "pending": sum(1 for o in orders if o.get("state") in ["draft", "sent", "waiting_confirmation"]),
            "total_sales": sum(o.get("amount_total", 0) for o in orders),
        }

        question = f"""Analiza este resumen de pedidos y proporciona insights:
- Total de pedidos: {summary['total']}
- Pedidos pendientes: {summary['pending']}
- Total en ventas: ${summary['total_sales']:.2f}

¿Cuál es el estado actual de las operaciones de venta?"""

        context = {"orders_summary": summary}
        return await self.ask(question, context_data=context, use_conversation_history=False)

# Singleton instance
ai_service = AIService()
