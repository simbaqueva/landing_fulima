# FULIMA - Fundación Líderes del Mañana

Landing page oficial de **FULIMA**, una fundación dedicada a brindar oportunidades, disciplina, liderazgo y propósito a los niños y jóvenes del sur de Bogotá, Colombia.

🌐 **Sitio Web:** [https://simbaqueva.github.io/landing_fulima](https://simbaqueva.github.io/landing_fulima)

---

## 🚀 Tecnologías

- **HTML5** semántico y accesible
- **Tailwind CSS** + **CSS3** personalizado con animaciones
- **JavaScript** vanilla (ES6+) para interactividad
- **AOS** (Animate On Scroll) para animaciones
- **Font Awesome** para iconografía
- **Formspree** para formulario de contacto
- **PWA** (Service Worker + Manifest)

## 📁 Estructura del Proyecto

```
LANDING PAGE FULIMA/
├── index.html                 # Página principal
├── manifest.json              # PWA manifest
├── service-worker.js           # Service Worker (PWA offline)
├── sitemap.xml                 # Sitemap para SEO
├── robots.txt                  # Instrucciones para crawlers
├── netlify.toml                # Configuración Netlify
├── _headers                    # Headers HTTP de seguridad
├── _redirects                  # Reglas de redirección
├── package.json                # Dependencias y scripts
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js           # Configuración de PostCSS
├── .gitignore
├── README.md
│
├── css/
│   ├── styles.css              # Estilos personalizados
│   ├── tailwind.css            # Input de Tailwind
│   └── tailwind-compiled.css   # Tailwind compilado (prod)
│
├── js/
│   └── main.js                 # Código JS principal
│
├── assets/
│   ├── images/                 # Imágenes (5.png, 6.png, ...)
│   ├── logo/                   # Logos en múltiples resoluciones
│   └── videos/                 # Videos (opcional)
│
├── resources/
│   ├── branding/               # Recursos de marca originales
│   ├── data/                   # Datos extraídos
│   ├── original-images/        # Imágenes originales (alta resolución)
│   ├── original-logos/         # Logos originales
│   └── original-videos/        # Videos originales (enlaces)
│
├── scripts/
│   ├── extract_details.py      # Script de extracción
│   └── read_xlsx.py            # Script para leer Excel
│
└── docs/                       # Documentación adicional
```

## 🔧 Instalación y Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/simbaqueva/landing_fulima.git
cd landing_fulima

# 2. Instalar dependencias
npm install

# 3. Servir localmente (puerto 8080)
npx http-server . -p 8080 -c-1 --cors

# 4. Construir versión de producción
npm run build
```

## 🚢 Deploy

### GitHub Pages (recomendado)

El sitio está configurado para **GitHub Pages** desde la rama `main`, carpeta raíz (`/`).

**Para activar:**
1. Ve a Settings → Pages del repositorio
2. En "Source", selecciona: **Deploy from a branch**
3. Branch: `main` | Folder: `/ (root)`
4. Guarda

El sitio quedará disponible en: `https://simbaqueva.github.io/landing_fulima/`

### Netlify (alternativa)

```bash
npm run build
npx netlify deploy --prod --dir=.
```

## 🌍 SEO

- Meta tags Open Graph para redes sociales
- Sitemap XML (`sitemap.xml`)
- Robots.txt optimizado
- Datos estructurados y semántica HTML5

## 📱 PWA (Progressive Web App)

- **Manifest:** `manifest.json` con iconos y configuración
- **Service Worker:** `service-worker.js` con caching offline
- **Theme Color:** `#003366` (azul corporativo)
- La página se puede instalar como app en dispositivos móviles

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

Todos los derechos reservados © 2026 **FULIMA** - Fundación Líderes del Mañana.