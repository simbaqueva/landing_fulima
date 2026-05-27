# FULIMA - Fundación Líderes del Mañana

Landing page oficial de FULIMA, una fundación dedicada a brindar oportunidades, disciplina, liderazgo y propósito a los niños y jóvenes del sur de Bogotá, Colombia.

## 🌐 Sitio Web

**URL:** `https://www.fulima.com` (configurar en deploy)

## 🚀 Tecnologías

- **HTML5** semántico y accesible
- **Tailwind CSS** vía CDN para estilos utilitarios
- **CSS3 personalizado** con animaciones, variables y diseño responsivo
- **JavaScript** vanilla (ES6+) para interactividad
- **AOS** (Animate On Scroll) para animaciones al hacer scroll
- **Font Awesome** para iconografía
- **Formspree** para envío de formularios de contacto

## 📁 Estructura del Proyecto

```
landing-page/
├── index.html              # Página principal
├── manifest.json           # PWA manifest
├── service-worker.js       # Service Worker (PWA offline)
├── sitemap.xml             # Sitemap para SEO
├── robots.txt              # Instrucciones para crawlers
├── netlify.toml            # Configuración de deploy en Netlify
├── _headers                # Headers HTTP de seguridad
├── _redirects              # Reglas de redirección
├── package.json            # Dependencias y scripts de build
├── .gitignore
├── README.md
│
├── css/
│   ├── styles.css          # Estilos personalizados (completo)
│   └── styles.min.css      # Versión minificada (generada en build)
│
├── js/
│   ├── main.js             # Código JS principal
│   └── main.min.js         # Versión minificada (generada en build)
│
└── assets/
    ├── images/             # Imágenes (5.png, 6.png, 7.png, 8.png, 9.png)
    ├── logo/               # Logos en múltiples resoluciones
    └── videos/             # Videos (opcional)
```

## 🔧 Instalación y Desarrollo

```bash
# 1. Navegar al directorio del proyecto
cd landing-page

# 2. Instalar dependencias de desarrollo
npm install

# 3. Servir localmente (puerto 8080)
npm run preview

# 4. Construir versión de producción (minificar CSS/JS)
npm run build
```

## 🚢 Deploy a Producción

### Opción 1: Netlify (Recomendada)

1. Conecta el repositorio a [Netlify](https://app.netlify.com/)
2. Configura:
   - **Branch a deploy:** `main` (o `master`)
   - **Comando de build:** `npm run build`
   - **Directorio de publish:** `.` (el directorio raíz del proyecto)
3. Netlify detectará automáticamente el archivo `netlify.toml`

### Opción 2: Vercel

1. Conecta el repositorio a [Vercel](https://vercel.com/)
2. Configura:
   - **Framework:** `Other`
   - **Build command:** `npm run build`
   - **Output directory:** `.`
3. Vercel manejará los headers desde `_headers` automáticamente

### Opción 3: Servidor HTTP Tradicional

Sube todo el contenido de `landing-page/` a la raíz de tu servidor web.

## 🌍 SEO

- Meta tags Open Graph para redes sociales
- Sitemap XML (`sitemap.xml`)
- Robots.txt optimizado
- Datos estructurados y semántica HTML5
- URLs amigables (Netlify maneja `pretty_urls`)

## 📱 PWA (Progressive Web App)

- **Manifest:** `manifest.json` con iconos y configuración
- **Service Worker:** `service-worker.js` con caching offline
- **Theme Color:** `#003366` (azul corporativo)
- **Apple Touch Icon:** configurado
- La página se puede instalar como app en dispositivos móviles

## 🔒 Seguridad

Headers HTTP configurados en `_headers` y `netlify.toml`:
- **X-Frame-Options:** DENY (protección clickjacking)
- **X-Content-Type-Options:** nosniff
- **Strict-Transport-Security:** HSTS forzado
- **Content-Security-Policy:** restricción de orígenes
- **Permissions-Policy:** deshabilitar APIs no necesarias
- **Cache-Control:** assets inmutables por 1 año

## 📧 Formularios

- **Contacto:** Formspree (`https://formspree.io/f/mpqnklzd`)
- **Newsletter:** Simulado con JavaScript (requiere backend real para producción)

## 🎨 Branding

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Oscuro | `#003366` | Primario |
| Dorado | `#FFD700` | Acento/CTA |
| Azul Claro | `#29ABE2` | Secundario |
| Verde | `#7BC043` | Éxito |
| Rojo | `#E32636` | Alertas |
| Crema | `#F8F7F4` | Fondos alternos |

## 📄 Licencia

Todos los derechos reservados © 2026 FULIMA - Fundación Líderes del Mañana.