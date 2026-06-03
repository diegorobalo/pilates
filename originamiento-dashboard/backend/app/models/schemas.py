from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List, Dict, Any

# User Schemas
class UserBase(BaseModel):
    username: str
    email: EmailStr

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True

# Product Schemas
class ProductBase(BaseModel):
    name: str
    default_code: Optional[str] = None
    barcode: Optional[str] = None
    list_price: float = 0
    qty_available: float = 0

class ProductCreate(ProductBase):
    odoo_id: int

class Product(ProductBase):
    id: int
    odoo_id: int
    qty_available: float
    standard_price: float
    weight: float
    volume: float
    last_sync: datetime

    class Config:
        from_attributes = True

# Partner Schemas
class PartnerBase(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    is_company: bool = False
    is_transporter: bool = False

class PartnerCreate(PartnerBase):
    odoo_id: int

class Partner(PartnerBase):
    id: int
    odoo_id: int
    country_id: Optional[str]
    last_sync: datetime

    class Config:
        from_attributes = True

# Order Schemas
class OrderBase(BaseModel):
    name: str
    state: str
    amount_total: float = 0
    amount_untaxed: float = 0

class OrderCreate(OrderBase):
    odoo_id: int
    partner_id: Optional[int] = None
    order_type: str = "sale"

class Order(OrderBase):
    id: int
    odoo_id: int
    partner_id: Optional[int]
    date_order: Optional[datetime]
    expected_date: Optional[datetime]
    order_type: str
    last_sync: datetime

    class Config:
        from_attributes = True

# Chat Schemas
class ChatRequest(BaseModel):
    question: str
    context: Optional[str] = None

class ChatResponse(BaseModel):
    question: str
    answer: str
    sources: Optional[List[str]] = None
    created_at: datetime

# Auth Schemas
class TokenData(BaseModel):
    username: Optional[str] = None

class Token(BaseModel):
    access_token: str
    token_type: str

class Login(BaseModel):
    username: str
    password: str

# Dashboard Schemas
class Dashboard(BaseModel):
    total_products: int
    total_partners: int
    pending_orders: int
    total_sales: float
    recent_orders: List[Order]
    products_low_stock: List[Product]

class DashboardMetrics(BaseModel):
    key: str
    value: Any
    label: str
    change: Optional[float] = None
