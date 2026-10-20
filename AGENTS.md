# Reglas del proyecto Nuvia

## 1. Propósito
Nuvia es un asistente inteligente para apoyar la gestión de facturas de pequeños y medianos negocios.
Slogan: **Tu negocio, más inteligente.**
Concepto visual: **Nuvia Pulse**.

## 2. Reglas de trabajo
- No agregar tecnologías, dependencias, carpetas ni funcionalidades sin justificar su necesidad y obtener aprobación cuando amplíen el alcance.
- Trabajar por etapas pequeñas y comprobar cada etapa antes de continuar.
- No modificar proyectos de referencia; Sweet Cost es únicamente una referencia de organización.
- No inventar datos de facturas, proveedores, pagos ni resultados de integraciones.
- No afirmar que una integración funciona hasta probarla.

## 3. Tecnologías acordadas
- Frontend: React + Vite + Tailwind CSS, JavaScript.
- Automatización y lógica de flujos: n8n local.
- POO: clases JavaScript dentro de nodos Code de n8n.
- Persistencia: Supabase.
- IA: Groq integrado mediante n8n.
- Correo y recordatorios: Gmail y flujos de n8n.
- No crear un backend independiente (por ejemplo, Express o FastAPI) sin aprobación explícita.

## 4. Organización del frontend
Orden conceptual:
`components/` → `pages/` → `routes/` → `App.jsx` → `main.jsx`.

Carpetas de apoyo permitidas cuando sean necesarias:
`assets/`, `context/`, `data/`, `hooks/`, `lib/`, `services/`, `styles/`, `utils/`.

- Mantener componentes reutilizables separados de las páginas.
- Mantener llamadas a servicios fuera de la presentación cuando sea razonable.
- No crear archivos vacíos sin propósito.
- Evitar duplicar lógica y dependencias.

## 5. Integración con n8n y POO
- n8n gestiona webhooks, orquestación, llamadas a Groq, Gmail y procesos de negocio.
- Las clases JavaScript se implementan dentro de nodos Code de n8n.
- No asumir que clases o variables persisten entre nodos o ejecuciones.
- Verificar compatibilidad antes de usar módulos externos o imports en Code nodes.
- Definir y respetar contratos consistentes de entrada y salida entre nodos y flujos.
- Validar y normalizar datos antes de utilizarlos.
- Usar manejo de errores explícito y no ocultar fallos.

## 6. Supabase y seguridad
- Supabase será la persistencia de datos.
- Diseñar políticas RLS adecuadas antes de exponer datos a usuarios.
- Nunca incluir `service_role`, claves privadas de Groq, contraseñas de Gmail ni otros secretos en el frontend.
- Las variables `VITE_*` son visibles para el navegador y no deben contener secretos.
- Gestionar las credenciales de Groq y Gmail mediante las credenciales seguras de n8n.
- No registrar secretos ni datos sensibles innecesarios en logs.

## 7. Reglas de negocio previstas
- Admitir documentos de factura en PDF o imagen según lo que permitan los flujos implementados.
- Validar campos requeridos, importes, impuestos, identificación fiscal y posibles duplicados.
- No completar datos ausentes mediante suposiciones; solicitar revisión cuando corresponda.
- Permitir buscar y registrar proveedores según los datos disponibles.
- Programar pagos y recordatorios a partir de fechas y estados guardados.
- Las facturas que superen un umbral configurable requieren aprobación humana.
- No marcar pagos como completados sin confirmación verificable.
- Registrar errores y cambios importantes cuando el diseño de datos lo contemple.

## 8. Identidad visual
- Primario: `#7C3AED`.
- Morado profundo: `#4C1D95`.
- Lila: `#A78BFA`.
- Lavanda claro: `#EDE9FE`.
- Blanco: `#FFFFFF`.
- Gris oscuro: `#1F2937`.
- Encabezados y marca: Outfit.
- Texto e interfaz: Nunito Sans.
- Estilo: tecnológico, moderno, profesional y cercano.
- Evitar interfaces genéricas sin identidad propia; priorizar jerarquía clara y flujos visuales comprensibles.

## 9. Protocolo antes de cada cambio
1. Revisar archivos existentes antes de crear o reemplazar.
2. Explicar brevemente qué se va a cambiar y por qué.
3. Evitar cambios fuera del alcance solicitado.
4. Probar los cambios disponibles (por ejemplo, `npm run build`) y comunicar los resultados reales.
5. Si falta información o una integración no puede verificarse, indicarlo claramente.
