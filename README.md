# 📊 Generación de Datos de Previsión de Ventas

Este proyecto es una herramienta web que permite generar datos sintéticos de previsión de ventas con base en parámetros ingresados por el usuario. Los datos generados se pueden descargar en un archivo **Excel (.xlsx)**, listo para su análisis.

La aplicación está desarrollada en **HTML, CSS y JavaScript** y funciona completamente en el navegador sin necesidad de servidores o bases de datos.
Puedes acceder a la aplicación en el siguiente enlace:

🔗 **[Generador de Datos Sintéticos - GitHub Pages](https://raul27868.github.io/ICEX-GeneracionDatosPrevisionVentas/)**


---

## 🚀 **Características**
✅ **Ingreso de parámetros personalizables**: productos, regiones, facturación, incremento anual, distribución de ventas y más.  
✅ **Generación automática de datos sintéticos** siguiendo las reglas establecidas.  
✅ **Exportación a Excel (.xlsx)** con una estructura clara y organizada.  
✅ **Interfaz responsive** para su uso en escritorio y dispositivos móviles.  
✅ **Funciona sin backend**, solo con JavaScript en el navegador.  
✅ **Fácil despliegue en GitHub Pages**.

---

## 📖 **Instrucciones de Uso**  

### **1️⃣ Ingreso de Parámetros**  

El usuario debe proporcionar los siguientes valores en el formulario de la aplicación web:

- **Facturación (`facturacion`)**: Total de facturación del año base.
- **Año Inicial (`anno`)**: Año de inicio de la generación de datos.
- **Incremento Anual (`incremento_anual`)**: Tasa de crecimiento anual (%) de la facturación.

### **Productos y Distribución de Ventas**
- **Productos (`productos`)**: Lista de productos (ejemplo: `P1, P2, P3`).
- **Distribución de ventas en España (`productos_ventas_spain`)**: Proporción de ventas de cada producto en España (ejemplo: `0.2, 0.5, 0.3`).
- **Distribución de ventas en Portugal (`productos_ventas_portugal`)**: Proporción de ventas de cada producto en Portugal (ejemplo: `0.7, 0.15, 0.15`).

### **Regiones y Distribución de Ventas**
- **Regiones en España (`regiones_spain`)**: Lista de regiones (ejemplo: `ES61, ES30, ES51, ES52, ES21, ES11`).
- **Regiones en Portugal (`regiones_portugal`)**: Lista de regiones (ejemplo: `PT1A, PT11, PT19`).
- **Distribución de ventas por región en España (`regiones_ventas_spain`)**: Proporciones por región (ejemplo: `0.2, 0.4, 0.15, 0.5, 0.1, 0.1`).
- **Distribución de ventas por región en Portugal (`regiones_ventas_portugal`)**: Proporciones por región (ejemplo: `0.4, 0.35, 0.25`).

### **Distribución de Ventas Mensual**
- **Distribución de ventas por mes (`meses`)**: Porcentaje de ventas por mes (ejemplo: `0.085,0.085,0.085,0.085,0.085,0.085,0.06,0.06,0.085,0.085,0.085,0.115`).

---

### **2️⃣ Generación de Datos Sintéticos**  

📌 **Estructura de los datos generados:**
- **3 años** a partir del año base.
- **3 productos**.
- **9 regiones** (6 en España + 3 en Portugal).
- **12 meses** por cada combinación.

📊 **Cálculo de registros totales:**  

📢 **Cálculo de ventas:**  
- Se parte de la facturación base y se aplica el **incremento anual**.
- Se distribuye la facturación entre los **productos** y las **regiones** según las proporciones dadas.
- Se ajusta la facturación mensualmente según la **distribución de ventas por mes**.

📥 **Descarga del archivo Excel:**  
Después de hacer clic en **"Generar"**, se descargará automáticamente un archivo `datos_sinteticos.xlsx` con los datos.

---

## 🌍 **Despliegue en GitHub Pages**
Puedes hospedar esta herramienta fácilmente en **GitHub Pages**:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/TU_USUARIO/GeneracionDatosPrevisionVentas.git
   cd GeneracionDatosPrevisionVentas
