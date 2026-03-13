const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Сжатие ответов (gzip/brotli)
	compress: true,

	// Оптимизация изображений
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256],
		minimumCacheTTL: 60,
	},

	// Заголовки безопасности
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "Strict-Transport-Security",
						value: "max-age=63072000; includeSubDomains; preload",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
				],
			},
		];
	},

	// Экспериментальные оптимизации
	experimental: {
		// Оптимизация импортов пакетов
		optimizePackageImports: ["lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-navigation-menu"],
		// Удаление неиспользуемого кода
		optimizeCss: true,
	},

	// Webpack оптимизации
	webpack: (config, { isServer }) => {
		if (!isServer) {
			// Отключение prefetch для уменьшения бандла
			config.optimization.splitChunks = {
				chunks: "all",
				cacheGroups: {
					...config.optimization.splitChunks.cacheGroups,
					// Отдельный чанк для библиотек
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendors",
						priority: 10,
					},
				},
			};
		}
		return config;
	},
};

module.exports = withNextIntl(nextConfig);
