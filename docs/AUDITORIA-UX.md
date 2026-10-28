# Auditoría de Usabilidad UX/UI - App de Notas

**Proyecto:** Rediseño de Interfaz de Aplicación de Notas (`app-notas`)  
**Estudiante:** Diana Alizee Flores Carpio  
**Repositorio:** https://github.com/dianaflores-sudo/app-notas  
**Página Publicada:** https://dianaflores-sudo.github.io/app-notas/  

---

## 1. Tabla de Evaluación Heurística (5 Heurísticas de Nielsen)

| Heurística | Problema Encontrado (Antes) | Solución Aplicada (Después) |
| :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar o eliminar una nota no aparecía ningún aviso en la pantalla. | Se implementó una zona de mensajes dinámicos con `role="status"` que notifica *"Nota agregada con éxito"* o *"Nota eliminada"*. |
| **Coincidencia con el mundo real** | Los botones tenían íconos ambiguos o textos genéricos como "OK" o "X". | Se cambiaron las etiquetas a lenguaje claro e intuitivo: *"Guardar Nota"*, *"Cancelar"* y *"Eliminar"*. |
| **Control y libertad** | Al presionar eliminar, la nota se borraba de inmediato sin opción de arrepentirse. | Se añadió un cuadro de confirmación modal (`confirm()`) previo a la eliminación que permite cancelar la acción destructiva. |
| **Prevención de errores** | Se permitía registrar notas totalmente vacías enviando campos en blanco. | Se aplicó validación `required` nativa y validación en JS con el estado `disabled` en el botón hasta que los campos tengan contenido válido. |
| **Reconocer, no recordar** | Los campos solo dependían de atributos `placeholder` que desaparecían al escribir. | Se integraron etiquetas `<label>` permanentes y visibles encima de cada campo de texto (`textarea` y `input`). |

---

## 2. Justificación de Leyes de Usabilidad Aplicadas

* **Ley de Fitts:** El botón principal de envío ("Guardar Nota") se amplió a un alto mínimo de $44\text{px}$ (`min-height: 44px`) y un ancho completo (`width: 100%`), colocándose a una distancia segura de $24\text{px}$ respecto a las acciones de descarte para evitar clics accidentales.
* **Ley de Hick:** Se agruparon las notas por categorías visuales (Ej. *Trabajo*, *Personal*, *Estudios*) mediante un menú desplegable `<select>` con grupos `<optgroup>`, reduciendo el tiempo de elección al acotar las opciones disponibles.
* **Ley de Miller:** Se dividió la pantalla en dos secciones claramente delimitadas mediante `<fieldset>`: **1. Crear nueva nota** y **2. Mis notas guardadas**, organizando la información en fragmentos cortos (chunking) para no sobrecargar la memoria de trabajo.

---

## 3. Criterios de Accesibilidad y Principios Visuales Implementados

* **Jerarquía visual:** Se configuró un único título `<h1>` de $28\text{px}$ para la cabecera principal y encabezados `<h2>` de $20\text{px}$ para las secciones secundarias.
* **Sistema de Color y Contraste:** Definición de variables globales CSS en `:root` con contraste superior a 14:1 para texto normal (`#1f2933` sobre fondo `#ffffff`).
* **Indicador de Foco Visible:** Eliminación total de `outline: none` e implementación de `:focus-visible` con borde naranja de $3\text{px}$ y desplazamiento (`outline-offset: 2px`) para la navegación fluida con teclado (`Tab`).
* **Texto Alternativo e Identificadores:** Inclusión de atributos `alt` descriptivos en todas las imágenes e igualación estricta entre el atributo `for` de cada `<label>` y el `id` de su campo respectivo.

---

## 4. Auditoría de Accesibilidad Lighthouse

* **Puntaje Antes:** 68/100 (Debido a la ausencia de labels, bajo contraste en grises y falta de `:focus-visible`).
* **Puntaje Después:** **100/100** (Verificado en la pestaña Accessibility de Chrome DevTools en Desktop/Mobile).