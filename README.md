**Simulador de Cálculo de Redes y Subredes**  
**Versión 1.0**  

---

### **1. Introducción**  
Este proyecto es una herramienta interactiva diseñada para simular el cálculo de redes y subredes IPv4, permitiendo a los usuarios entender cómo se determinan las direcciones de red y qué dispositivos pueden comunicarse entre sí dentro de una misma subred. La aplicación web utiliza JavaScript para procesar las entradas del usuario, validar direcciones IP y máscaras de subred, y mostrar gráficamente las redes generadas junto con sus direcciones IP asociadas.  

---

### **2. Funcionamiento del Cálculo de Redes**  
La herramienta realiza las siguientes operaciones técnicas:  

#### **2.1. Validación de Entradas**  
- **Dirección IP**: Verifica que siga el formato `X.X.X.X`, donde cada `X` está entre 0 y 255 (ej: `192.168.1.1`).  
- **Máscara de Subred**: Valida que sea una máscara correcta (ej: `255.255.255.0`).  

#### **2.2. Cálculo de Dirección de Red**  
- Aplica una operación **AND binaria** entre la dirección IP y la máscara de subred para obtener la dirección de red.  
  **Ejemplo**:  
  ```plaintext
  IP:      192.168.1.1  → 11000000.10101000.00000001.00000001  
  Máscara: 255.255.255.0 → 11111111.11111111.11111111.00000000  
  Red:     192.168.1.0  → 11000000.10101000.00000001.00000000  
  ```  

#### **2.3. Agrupación de IPs por Red**  
- Almacena las direcciones IP en un objeto (`networks`) donde la clave es la dirección de red y el valor es un arreglo de IPs asociadas.  

---

### **3. Comunicación Entre Dispositivos**  
- **Regla básica**: Dos dispositivos pueden comunicarse directamente **si y solo si** pertenecen a la misma red.  
- **Visualización**: La herramienta agrupa las IPs por su red y resalta en bloques alternados (colores claros/oscuros) para identificar rápidamente qué dispositivos están en la misma subred.  

---

### **4. Público Objetivo**  
Este simulador es útil para:  
- **Estudiantes de redes**: Para practicar el cálculo manual de subredes y verificar resultados.  
- **Profesionales de TI**: Para diseñar o diagnosticar configuraciones de red básicas.  
- **Educadores**: Como material didáctico en cursos de redes.  

---

### **5. Estructura del Programa**  
#### **5.1. Componentes Principales**  
| Componente          | Descripción                                                                 |  
|----------------------|-----------------------------------------------------------------------------|  
| **CardIP**           | Clase que genera la interfaz gráfica (campos de entrada, botón y área de resultados). |  
| **InitCardIp()**     | Método que inicializa la UI y vincula eventos.                              |  
| **calculateBtn**     | Botón que dispara el cálculo al hacer clic.                                 |  
| **networks**         | Objeto global que almacena las redes y sus IPs asociadas.                   |  

#### **5.2. Flujo de Trabajo**  
1. El usuario ingresa una IP y una máscara.  
2. Al presionar "Añadir", se validan las entradas.  
3. Se calcula la dirección de red mediante `calculateNetworkAddress()`.  
4. La IP se agrupa en `networks` según su red.  
5. Se actualiza la UI mostrando bloques de redes con sus IPs.  

#### **5.3. Tecnologías Utilizadas**  
- **Frontend**: HTML, CSS y JavaScript (ES6+).  
- **Módulos**: Uso de `import/export` para componentes modulares.  
- **DOM Manipulation**: Creación dinámica de elementos para mostrar resultados.  

---

### **6. Ejemplo de Uso**  
**Entrada**:  
- IP: `192.168.1.5`  
- Máscara: `255.255.255.0`  

**Salida**:  
- **Red**: `192.168.1.0`  
- **Dispositivos en la red**: `192.168.1.5`, `192.168.1.10` (si se añaden más IPs).  

---

### **7. Conclusiones**  
Esta herramienta simplifica la comprensión de conceptos clave de redes mediante una interfaz intuitiva y un código modular. Su enfoque en la agrupación visual de IPs por red facilita la identificación de dispositivos comunicables, convirtiéndola en un recurso valioso para aprendizaje y solución de problemas básicos de redes.  

El Autor soy @juanitoelorigi, pero pueden utilizar mi codigo para investigación o mejoras es licencia abierta MIT.
--- 
**Nota**: El código está diseñado para ejecutarse en navegadores modernos y no requiere dependencias externas.
