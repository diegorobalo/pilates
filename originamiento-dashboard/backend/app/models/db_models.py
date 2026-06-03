from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, JSON, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from app.models.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(255), unique=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    chat_histories = relationship("ChatHistory", back_populates="user")

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    odoo_id = Column(Integer, unique=True, index=True)
    name = Column(String(255), index=True)
    default_code = Column(String(255), nullable=True)
    barcode = Column(String(255), nullable=True)
    list_price = Column(Float, default=0)
    qty_available = Column(Float, default=0)
    standard_price = Column(Float, default=0)
    weight = Column(Float, default=0)
    volume = Column(Float, default=0)
    data = Column(JSON, nullable=True)
    last_sync = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Partner(Base):
    __tablename__ = "partners"

    id = Column(Integer, primary_key=True, index=True)
    odoo_id = Column(Integer, unique=True, index=True)
    name = Column(String(255), index=True)
    email = Column(String(255), nullable=True)
    phone = Column(String(255), nullable=True)
    country_id = Column(String(255), nullable=True)
    is_company = Column(Boolean, default=False)
    is_transporter = Column(Boolean, default=False)
    data = Column(JSON, nullable=True)
    last_sync = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    odoo_id = Column(Integer, unique=True, index=True)
    name = Column(String(255), index=True)
    partner_id = Column(Integer, nullable=True)
    state = Column(String(50), index=True)
    amount_total = Column(Float, default=0)
    amount_untaxed = Column(Float, default=0)
    date_order = Column(DateTime, nullable=True)
    expected_date = Column(DateTime, nullable=True)
    data = Column(JSON, nullable=True)
    order_type = Column(String(50), default="sale")  # 'sale' or 'purchase'
    last_sync = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class ChatHistory(Base):
    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    question = Column(String(2000))
    answer = Column(String(5000))
    context_data = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="chat_histories")
