from app.models.database import engine, Base
from app.models.db_models import User
from sqlalchemy.orm import sessionmaker

# Crear tablas
Base.metadata.create_all(bind=engine)

# Crear sesión
Session = sessionmaker(bind=engine)
session = Session()

# Verificar si el usuario ya existe
existing_user = session.query(User).filter(User.username == "demo").first()
if existing_user:
    print("Usuario demo ya existe")
else:
    # Crear usuario
    user = User(
        username="demo",
        email="demo@example.com",
        hashed_password="demo123",
        is_active=True
    )
    session.add(user)
    session.commit()
    print("Usuario demo creado correctamente")

session.close()
