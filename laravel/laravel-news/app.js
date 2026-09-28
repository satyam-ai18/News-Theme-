/**
 * =========================================================================
 * LARAVEL NEWS - MULTI-LANGUAGE ENGINE & APPLICATION LOGIC
 * =========================================================================
 */

// 1. Available Languages Configuration
const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', dir: 'rtl' }
];

// 2. Multi-Language UI Translations Dictionary
const TRANSLATIONS = {
  en: {
    ticker_badge: 'LATEST UPDATE',
    ticker_text: 'Laravel 11.24 released with enhanced Concurrency Support, faster Queue Workers & Native Distributed Locks!',
    logo_tagline: 'Official Community Portal',
    search_placeholder: 'Search tutorials, packages, news...',
    select_language: 'Select Website Language',
    instant_translation_hint: '⚡ Instant Live Translation',
    nav_newsletter: 'Newsletter',
    cat_all: 'All Updates',
    cat_news: 'News',
    cat_tutorials: 'Tutorials',
    cat_packages: 'Packages',
    cat_releases: 'Releases',
    cat_podcasts: 'Podcasts',
    cat_community: 'Community',
    tag_featured: '✨ FEATURED STORY',
    read_time_5: '5 min read',
    role_creator: 'Laravel Core Team',
    btn_read_article: 'Read Full Story',
    trending_topics: 'Trending Topics',
    live_pill: 'LIVE',
    ecosystem_box_title: 'Laravel Ecosystem',
    ecosystem_box_desc: 'Supercharge your workflow with modern first-party tooling: Livewire 3, Inertia 2, Filament v3, and Herd Pro.',
    multilingual_hub_title: 'Global Multi-Language Laravel Hub',
    multilingual_hub_desc: 'Switch languages instantly using the selector above or the quick buttons below:',
    explore_curated: 'EXPLORE CURATED CONTENT',
    latest_news_tutorials: 'Latest Articles & Tutorials',
    showing_count: 'Showing {count} of {total} stories',
    empty_search_title: 'No matching stories found',
    empty_search_desc: 'Try searching for different keywords or reset your category filter.',
    btn_reset_filters: 'Reset Filters',
    badge_tooling: 'DEVELOPER TOOLING',
    showcase_title: "Master Modern PHP with Laravel's Elegant Tooling",
    showcase_desc: 'From zero-configuration local environments with Herd to real-time application monitoring with Pulse and full-stack reactive components with Livewire 3.',
    feat_herd_title: 'Laravel Herd',
    feat_herd_desc: 'Blazing fast native PHP and Node environment for macOS and Windows.',
    feat_pulse_title: 'Laravel Pulse',
    feat_pulse_desc: 'Real-time application performance and queue health insights.',
    feat_sanctum_title: 'Sanctum & Pennant',
    feat_sanctum_desc: 'Featherweight API auth and seamless feature flag management.',
    newsletter_title: 'Join 60,000+ Laravel Developers',
    newsletter_desc: 'Get the latest Laravel news, package releases, and in-depth tutorials delivered directly to your inbox every single week. No spam, unsubscribe anytime.',
    email_placeholder: 'Enter your email address...',
    btn_subscribe: 'Subscribe Free',
    newsletter_privacy: '🔒 We respect your privacy. Instant unsubscribe available in every email.',
    btn_listen: 'Listen (Audio)',
    btn_listening: 'Playing...',
    btn_stop_audio: 'Stop Audio',
    saved_bookmarks_title: 'Saved Bookmarks',
    no_bookmarks: 'No saved articles yet. Click the bookmark icon on any card to save it.',
    footer_about: 'The official community portal for all things Laravel, PHP, Livewire, and modern web development.',
    footer_categories: 'Categories',
    footer_ecosystem: 'Ecosystem',
    footer_languages: 'Languages',
    footer_copyright: '© 2026 Laravel News. Multi-Language Global Edition. All rights reserved.',
    privacy_policy: 'Privacy Policy',
    terms_service: 'Terms of Service',
    advertise: 'Advertise',
    lang_switched_toast: 'Language changed to {lang} successfully!',
    newsletter_success: 'Thank you for subscribing to Laravel News Weekly! 🎉'
  },
  hi: {
    ticker_badge: 'ताज़ा अपडेट',
    ticker_text: 'लारवेल 11.24 जारी: उन्नत कन्करेन्सी सपोर्ट, तेज़ क्यू वर्कर्स और नेटिव डिस्ट्रीब्यूटेड लॉक्स के साथ!',
    logo_tagline: 'आधिकारिक कम्युनिटी पोर्टल',
    search_placeholder: 'ट्यूटोरियल, पैकेज, समाचार खोजें...',
    select_language: 'वेबसाइट की भाषा चुनें',
    instant_translation_hint: '⚡ तुरंत लाइव अनुवाद',
    nav_newsletter: 'न्यूज़लेटर',
    cat_all: 'सभी अपडेट',
    cat_news: 'समाचार',
    cat_tutorials: 'ट्यूटोरियल',
    cat_packages: 'पैकेजेस',
    cat_releases: 'रिलीज़',
    cat_podcasts: 'पॉडकास्ट',
    cat_community: 'कम्युनिटी',
    tag_featured: '✨ मुख्य आकर्षण',
    read_time_5: '5 मिनट पढ़ें',
    role_creator: 'लारवेल कोर टीम',
    btn_read_article: 'पूरी कहानी पढ़ें',
    trending_topics: 'ट्रेंडिंग विषय',
    live_pill: 'लाइव',
    ecosystem_box_title: 'लारवेल इकोसिस्टम',
    ecosystem_box_desc: 'आधुनिक टूल्स के साथ अपनी कोडिंग को गति दें: Livewire 3, Inertia 2, Filament v3 और Herd Pro।',
    multilingual_hub_title: 'ग्लोबल बहुभाषी लारवेल हब',
    multilingual_hub_desc: 'ऊपर दिए गए चयनकर्ता या नीचे दिए गए त्वरित बटनों का उपयोग करके तुरंत भाषा बदलें:',
    explore_curated: 'क्यूरेटेड सामग्री देखें',
    latest_news_tutorials: 'नवीनतम लेख और ट्यूटोरियल',
    showing_count: '{total} में से {count} लेख दिखाए जा रहे हैं',
    empty_search_title: 'कोई मेल खाते लेख नहीं मिले',
    empty_search_desc: 'कृपया भिन्न कीवर्ड खोजें या श्रेणी फ़िल्टर रीसेट करें।',
    btn_reset_filters: 'फ़िल्टर रीसेट करें',
    badge_tooling: 'डेवलपर टूल्स',
    showcase_title: 'लारवेल के आधुनिक टूल्स के साथ PHP में महारत हासिल करें',
    showcase_desc: 'हर्ड (Herd) के साथ आसान लोकल सेटअप से लेकर पल्स (Pulse) और लाइववायर (Livewire 3) तक का संपूर्ण अनुभव।',
    feat_herd_title: 'लारवेल हर्ड (Herd)',
    feat_herd_desc: 'macOS और Windows के लिए सुपरफास्ट नेटिव PHP और Node वातावरण।',
    feat_pulse_title: 'लारवेल पल्स (Pulse)',
    feat_pulse_desc: 'रियल-टाइम एप्लिकेशन प्रदर्शन और क्यू स्वास्थ्य ट्रैकिंग।',
    feat_sanctum_title: 'सैंक्टम और पेनेंट',
    feat_sanctum_desc: 'हल्का-फुल्का API ऑथेंटिकेशन और फीचर फ्लैग प्रबंधन।',
    newsletter_title: '60,000+ लारवेल डेवलपर्स से जुड़ें',
    newsletter_desc: 'हर हफ्ते सीधे अपने इनबॉक्स में ताज़ा लारवेल समाचार, पैकेज और गहन ट्यूटोरियल प्राप्त करें। कोई स्पैम नहीं।',
    email_placeholder: 'अपना ईमेल पता दर्ज करें...',
    btn_subscribe: 'मुफ़्त सब्सक्राइब करें',
    newsletter_privacy: '🔒 हम आपकी गोपनीयता का सम्मान करते हैं। हर ईमेल में अनसब्सक्राइब का विकल्प है।',
    btn_listen: 'ऑडियो सुनें (Listen)',
    btn_listening: 'चल रहा है...',
    btn_stop_audio: 'ऑडियो रोकें',
    saved_bookmarks_title: 'सहेजे गए बुकमार्क',
    no_bookmarks: 'अभी कोई लेख सहेजा नहीं गया है। किसी भी कार्ड पर बुकमार्क आइकन पर क्लिक करें।',
    footer_about: 'लारवेल, PHP, लाइववायर और आधुनिक वेब डेवलपमेंट के लिए आधिकारिक पोर्टल।',
    footer_categories: 'श्रेणियां',
    footer_ecosystem: 'इकोसिस्टम',
    footer_languages: 'भाषाएं',
    footer_copyright: '© 2026 लारवेल न्यूज़। बहुभाषी वैश्विक संस्करण। सर्वाधिकार सुरक्षित।',
    privacy_policy: 'गोपनीयता नीति',
    terms_service: 'सेवा की शर्तें',
    advertise: 'विज्ञापन दें',
    lang_switched_toast: 'भाषा सफलतापूर्वक {lang} में बदल दी गई!',
    newsletter_success: 'लारवेल न्यूज़ वीकली की सदस्यता लेने के लिए धन्यवाद! 🎉'
  },
  es: {
    ticker_badge: 'ÚLTIMA HORA',
    ticker_text: '¡Laravel 11.24 lanzado con soporte de concurrencia mejorado y bloqueos distribuidos nativos!',
    logo_tagline: 'Portal Oficial de la Comunidad',
    search_placeholder: 'Buscar tutoriales, paquetes, noticias...',
    select_language: 'Seleccionar idioma',
    instant_translation_hint: '⚡ Traducción en vivo instantánea',
    nav_newsletter: 'Boletín',
    cat_all: 'Todo',
    cat_news: 'Noticias',
    cat_tutorials: 'Tutoriales',
    cat_packages: 'Paquetes',
    cat_releases: 'Lanzamientos',
    cat_podcasts: 'Pódcasts',
    cat_community: 'Comunidad',
    tag_featured: '✨ HISTORIA DESTACADA',
    read_time_5: '5 min de lectura',
    role_creator: 'Equipo Central de Laravel',
    btn_read_article: 'Leer historia completa',
    trending_topics: 'Temas destacados',
    live_pill: 'EN VIVO',
    ecosystem_box_title: 'Ecosistema Laravel',
    ecosystem_box_desc: 'Potencia tu flujo de trabajo con Livewire 3, Inertia 2, Filament v3 y Herd Pro.',
    multilingual_hub_title: 'Centro Multilingüe Global de Laravel',
    multilingual_hub_desc: 'Cambia de idioma al instante usando el selector arriba o los botones rápidos:',
    explore_curated: 'EXPLORAR CONTENIDO',
    latest_news_tutorials: 'Últimos Artículos y Tutoriales',
    showing_count: 'Mostrando {count} de {total} historias',
    empty_search_title: 'No se encontraron resultados',
    empty_search_desc: 'Intenta con otras palabras clave o restablece los filtros.',
    btn_reset_filters: 'Restablecer filtros',
    badge_tooling: 'HERRAMIENTAS DE DESARROLLO',
    showcase_title: 'Domina el PHP Moderno con las Herramientas de Laravel',
    showcase_desc: 'Desde entornos locales sin configuración con Herd hasta monitoreo en tiempo real con Pulse.',
    feat_herd_title: 'Laravel Herd',
    feat_herd_desc: 'Entorno PHP nativo ultrarrápido para macOS y Windows.',
    feat_pulse_title: 'Laravel Pulse',
    feat_pulse_desc: 'Rendimiento de aplicaciones y estado de colas en tiempo real.',
    feat_sanctum_title: 'Sanctum & Pennant',
    feat_sanctum_desc: 'Autenticación de API ligera y banderas de funciones.',
    newsletter_title: 'Únete a más de 60,000 desarrolladores',
    newsletter_desc: 'Recibe las últimas noticias, paquetes y tutoriales directo en tu bandeja cada semana.',
    email_placeholder: 'Introduce tu correo electrónico...',
    btn_subscribe: 'Suscribirse Gratis',
    newsletter_privacy: '🔒 Respetamos tu privacidad. Puedes darte de baja cuando quieras.',
    btn_listen: 'Escuchar',
    btn_listening: 'Reproduciendo...',
    btn_stop_audio: 'Detener',
    saved_bookmarks_title: 'Marcadores Guardados',
    no_bookmarks: 'No hay artículos guardados todavía.',
    footer_about: 'El portal comunitario oficial de Laravel, PHP y desarrollo web moderno.',
    footer_categories: 'Categorías',
    footer_ecosystem: 'Ecosistema',
    footer_languages: 'Idiomas',
    footer_copyright: '© 2026 Laravel News. Edición Global Multilingüe.',
    privacy_policy: 'Política de Privacidad',
    terms_service: 'Términos de Servicio',
    advertise: 'Publicidad',
    lang_switched_toast: '¡Idioma cambiado a {lang} con éxito!',
    newsletter_success: '¡Gracias por suscribirte a Laravel News! 🎉'
  },
  fr: {
    ticker_badge: 'DERNIÈRE MINUTE',
    ticker_text: 'Laravel 11.24 disponible avec un support de concurrence amélioré et des verrous distribués natifs !',
    logo_tagline: 'Portail Officiel de la Communauté',
    search_placeholder: 'Rechercher tutoriels, packages, actualités...',
    select_language: 'Choisir la langue du site',
    instant_translation_hint: '⚡ Traduction instantanée en direct',
    nav_newsletter: 'Infolettre',
    cat_all: 'Tous',
    cat_news: 'Actualités',
    cat_tutorials: 'Tutoriels',
    cat_packages: 'Packages',
    cat_releases: 'Versions',
    cat_podcasts: 'Podcasts',
    cat_community: 'Communauté',
    tag_featured: '✨ EN VEDETTE',
    read_time_5: '5 min de lecture',
    role_creator: 'Équipe Principale Laravel',
    btn_read_article: 'Lire l’article complet',
    trending_topics: 'Tendances',
    live_pill: 'DIRECT',
    ecosystem_box_title: 'Écosystème Laravel',
    ecosystem_box_desc: 'Accélérez votre développement avec Livewire 3, Inertia 2, Filament v3 et Herd Pro.',
    multilingual_hub_title: 'Hub Multilingue Global Laravel',
    multilingual_hub_desc: 'Changez de langue instantanément avec le sélecteur ci-dessus ou les boutons rapides :',
    explore_curated: 'EXPLORER LE CONTENU',
    latest_news_tutorials: 'Derniers Articles & Tutoriels',
    showing_count: 'Affichage de {count} sur {total} articles',
    empty_search_title: 'Aucun article trouvé',
    empty_search_desc: 'Essayez d’autres mots-clés ou réinitialisez les filtres.',
    btn_reset_filters: 'Réinitialiser les filtres',
    badge_tooling: 'OUTILS DÉVELOPPEUR',
    showcase_title: 'Maîtrisez le PHP Moderne avec les Outils Laravel',
    showcase_desc: 'Des environnements locaux ultra-rapides avec Herd à la surveillance en temps réel avec Pulse.',
    feat_herd_title: 'Laravel Herd',
    feat_herd_desc: 'Environnement PHP et Node natif ultra-rapide pour macOS et Windows.',
    feat_pulse_title: 'Laravel Pulse',
    feat_pulse_desc: 'Surveillance des performances d’applications en direct.',
    feat_sanctum_title: 'Sanctum & Pennant',
    feat_sanctum_desc: 'Authentification d’API légère et gestion des feature flags.',
    newsletter_title: 'Rejoignez plus de 60 000 développeurs',
    newsletter_desc: 'Recevez les dernières actualités et tutoriels Laravel chaque semaine.',
    email_placeholder: 'Entrez votre adresse email...',
    btn_subscribe: 'S’abonner Gratuitement',
    newsletter_privacy: '🔒 Nous respectons votre vie privée. Désinscription en un clic.',
    btn_listen: 'Écouter',
    btn_listening: 'Lecture en cours...',
    btn_stop_audio: 'Arrêter',
    saved_bookmarks_title: 'Favoris Enregistrés',
    no_bookmarks: 'Aucun article enregistré pour le moment.',
    footer_about: 'Le portail communautaire officiel pour Laravel, PHP et Livewire.',
    footer_categories: 'Catégories',
    footer_ecosystem: 'Écosystème',
    footer_languages: 'Langues',
    footer_copyright: '© 2026 Laravel News. Édition Multilingue.',
    privacy_policy: 'Politique de confidentialité',
    terms_service: 'Conditions d’utilisation',
    advertise: 'Publicité',
    lang_switched_toast: 'Langue modifiée en {lang} avec succès !',
    newsletter_success: 'Merci de votre inscription à Laravel News ! 🎉'
  },
  de: {
    ticker_badge: 'NEUIGKEITEN',
    ticker_text: 'Laravel 11.24 veröffentlicht mit verbesserter Nebenläufigkeit & nativen Distributed Locks!',
    logo_tagline: 'Offizielles Community-Portal',
    search_placeholder: 'Tutorials, Pakete, News durchsuchen...',
    select_language: 'Sprache wählen',
    instant_translation_hint: '⚡ Sofortige Live-Übersetzung',
    nav_newsletter: 'Newsletter',
    cat_all: 'Alle Updates',
    cat_news: 'News',
    cat_tutorials: 'Tutorials',
    cat_packages: 'Pakete',
    cat_releases: 'Releases',
    cat_podcasts: 'Podcasts',
    cat_community: 'Community',
    tag_featured: '✨ HIGHLIGHT',
    read_time_5: '5 Min. Lesezeit',
    role_creator: 'Laravel Core Team',
    btn_read_article: 'Ganzen Artikel lesen',
    trending_topics: 'Trends',
    live_pill: 'LIVE',
    ecosystem_box_title: 'Laravel Ökosystem',
    ecosystem_box_desc: 'Beschleunigen Sie Ihren Workflow mit Livewire 3, Inertia 2, Filament v3 und Herd Pro.',
    multilingual_hub_title: 'Globales Mehrsprachiges Laravel-Portal',
    multilingual_hub_desc: 'Wechseln Sie die Sprache oben über das Menü oder über die Schnellschaltflächen:',
    explore_curated: 'INHALTE ENTDECKEN',
    latest_news_tutorials: 'Aktuelle Artikel & Tutorials',
    showing_count: '{count} von {total} Artikeln angezeigt',
    empty_search_title: 'Keine passenden Artikel gefunden',
    empty_search_desc: 'Versuchen Sie andere Suchbegriffe oder setzen Sie den Filter zurück.',
    btn_reset_filters: 'Filter zurücksetzen',
    badge_tooling: 'ENTWICKLER-WERKZEUGE',
    showcase_title: 'Modernes PHP meistern mit den eleganten Laravel-Tools',
    showcase_desc: 'Von schnellen lokalen Umgebungen mit Herd bis hin zu Live-Monitoring mit Pulse.',
    feat_herd_title: 'Laravel Herd',
    feat_herd_desc: 'Blitzschnelle native PHP- und Node-Umgebung für macOS und Windows.',
    feat_pulse_title: 'Laravel Pulse',
    feat_pulse_desc: 'Echtzeit-Überwachung von Performance und Warteschlangen.',
    feat_sanctum_title: 'Sanctum & Pennant',
    feat_sanctum_desc: 'Schlanke API-Authentifizierung und Feature-Flags.',
    newsletter_title: 'Schließen Sie sich 60.000+ Laravel-Entwicklern an',
    newsletter_desc: 'Erhalten Sie wöchentlich die neuesten Laravel-Nachrichten und Tutorials per E-Mail.',
    email_placeholder: 'Geben Sie Ihre E-Mail-Adresse ein...',
    btn_subscribe: 'Kostenlos abonnieren',
    newsletter_privacy: '🔒 Wir respektieren Ihre Privatsphäre. Jederzeit abbestellbar.',
    btn_listen: 'Vorlesen',
    btn_listening: 'Wiedergabe...',
    btn_stop_audio: 'Stopp',
    saved_bookmarks_title: 'Gespeicherte Lesezeichen',
    no_bookmarks: 'Noch keine Artikel gespeichert.',
    footer_about: 'Das offizielle Community-Portal für Laravel, PHP und modernes Webdesign.',
    footer_categories: 'Kategorien',
    footer_ecosystem: 'Ökosystem',
    footer_languages: 'Sprachen',
    footer_copyright: '© 2026 Laravel News. Globale mehrsprachige Ausgabe.',
    privacy_policy: 'Datenschutz',
    terms_service: 'AGB',
    advertise: 'Werbung',
    lang_switched_toast: 'Sprache erfolgreich auf {lang} umgestellt!',
    newsletter_success: 'Vielen Dank für die Anmeldung zum Newsletter! 🎉'
  },
  ja: {
    ticker_badge: '最新情報',
    ticker_text: 'Laravel 11.24 リリース：並行処理サポートの強化とネイティブ分散ロックを搭載！',
    logo_tagline: '公式コミュニティポータル',
    search_placeholder: 'チュートリアル、パッケージ、ニュースを検索...',
    select_language: '言語を選択',
    instant_translation_hint: '⚡ リアルタイム即時翻訳',
    nav_newsletter: 'メルマガ',
    cat_all: 'すべての更新',
    cat_news: 'ニュース',
    cat_tutorials: 'チュートリアル',
    cat_packages: 'パッケージ',
    cat_releases: 'リリース',
    cat_podcasts: 'ポッドキャスト',
    cat_community: 'コミュニティ',
    tag_featured: '✨ 注目のストーリー',
    read_time_5: '読了時間 5分',
    role_creator: 'Laravel コアチーム',
    btn_read_article: '記事を読む',
    trending_topics: 'トレンドトピック',
    live_pill: 'LIVE',
    ecosystem_box_title: 'Laravel エコシステム',
    ecosystem_box_desc: 'Livewire 3、Inertia 2、Filament v3、Herd Pro で開発効率を飛躍的に向上。',
    multilingual_hub_title: 'グローバル多言語 Laravel ハブ',
    multilingual_hub_desc: '上の言語セレクターまたは下のクイックボタンで瞬時に言語を変更できます：',
    explore_curated: '厳選されたコンテンツ',
    latest_news_tutorials: '最新の記事とチュートリアル',
    showing_count: '{total} 件中 {count} 件を表示',
    empty_search_title: '該当する記事が見つかりません',
    empty_search_desc: '別のキーワードで検索するか、フィルターをリセットしてください。',
    btn_reset_filters: 'フィルターをリセット',
    badge_tooling: '開発ツール',
    showcase_title: 'LaravelのエレガントなツールでモダンPHPを極める',
    showcase_desc: 'Herd による設定不要のローカル環境から、Pulse によるリアルタイム監視まで。',
    feat_herd_title: 'Laravel Herd',
    feat_herd_desc: 'macOS と Windows 向けの超高速ネイティブ PHP & Node 環境。',
    feat_pulse_title: 'Laravel Pulse',
    feat_pulse_desc: 'リアルタイムのパフォーマンスとキューの健全性監視。',
    feat_sanctum_title: 'Sanctum & Pennant',
    feat_sanctum_desc: '軽量な API 認証とスムーズな機能フラグ管理。',
    newsletter_title: '60,000人以上のLaravel開発者に参加',
    newsletter_desc: '最新のニュース、パッケージ、詳細なチュートリアルを毎週お届けします。',
    email_placeholder: 'メールアドレスを入力...',
    btn_subscribe: '無料で登録',
    newsletter_privacy: '🔒 プライバシーを尊重します。いつでも配信停止可能です。',
    btn_listen: '音声を聞く',
    btn_listening: '再生中...',
    btn_stop_audio: '停止',
    saved_bookmarks_title: '保存されたブックマーク',
    no_bookmarks: '保存された記事はありません。',
    footer_about: 'Laravel、PHP、モダンWeb開発の公式コミュニティポータル。',
    footer_categories: 'カテゴリー',
    footer_ecosystem: 'エコシステム',
    footer_languages: '言語',
    footer_copyright: '© 2026 Laravel News. 多言語グローバル版。',
    privacy_policy: 'プライバシーポリシー',
    terms_service: '利用規約',
    advertise: '広告掲載',
    lang_switched_toast: '言語を {lang} に変更しました！',
    newsletter_success: 'ニュースレターへのご登録ありがとうございます！ 🎉'
  },
  ar: {
    ticker_badge: 'آخر الأخبار',
    ticker_text: 'إطلاق لارافيل 11.24 مع دعم التزامن المحسّن والأقفال الموزعة المدمجة!',
    logo_tagline: 'البوابة الرسمية للمجتمع',
    search_placeholder: 'ابحث عن الدروس، الحزم، الأخبار...',
    select_language: 'اختر لغة الموقع',
    instant_translation_hint: '⚡ ترجمة حية فورية',
    nav_newsletter: 'النشرة البريدية',
    cat_all: 'جميع التحديثات',
    cat_news: 'أخبار',
    cat_tutorials: 'شروحات',
    cat_packages: 'حزم برمجية',
    cat_releases: 'إصدارات',
    cat_podcasts: 'بودكاست',
    cat_community: 'المجتمع',
    tag_featured: '✨ قصة مميزة',
    read_time_5: 'قراءة في 5 دقائق',
    role_creator: 'فريق عمل لارافيل الأساسي',
    btn_read_article: 'اقرأ المقال كاملاً',
    trending_topics: 'المواضيع الشائعة',
    live_pill: 'مباشر',
    ecosystem_box_title: 'بيئة عمل لارافيل',
    ecosystem_box_desc: 'عزز إنتاجيتك مع أدوات Livewire 3 و Inertia 2 و Filament v3 و Herd Pro.',
    multilingual_hub_title: 'مركز لارافيل العالمي متعدد اللغات',
    multilingual_hub_desc: 'غيّر اللغة فوراً عبر القائمة العلوية أو الأزرار السريعة أدناه:',
    explore_curated: 'استكشف المحتوى المختار',
    latest_news_tutorials: 'أحدث المقالات والدروس',
    showing_count: 'عرض {count} من أصل {total} قصة',
    empty_search_title: 'لم يتم العثور على مقالات مطابقة',
    empty_search_desc: 'جرّب البحث بكلمات أخرى أو إعادة ضبط الفلاتر.',
    btn_reset_filters: 'إعادة ضبط الفلاتر',
    badge_tooling: 'أدوات المطورين',
    showcase_title: 'احترف لغة PHP الحديثة مع أدوات لارافيل الأنيقة',
    showcase_desc: 'من بيئات العمل المحلية فائقة السرعة مع Herd إلى المراقبة الحية مع Pulse.',
    feat_herd_title: 'لارافيل هيرد (Herd)',
    feat_herd_desc: 'بيئة PHP و Node أصلية وسريعة جداً لأنظمة macOS و Windows.',
    feat_pulse_title: 'لارافيل بلس (Pulse)',
    feat_pulse_desc: 'مراقبة أداء التطبيقات وطوابير المهام في الوقت الفعلي.',
    feat_sanctum_title: 'Sanctum و Pennant',
    feat_sanctum_desc: 'مصادقة خفيفة للـ API وإدارة إشارات الميزات البرمجية.',
    newsletter_title: 'انضم إلى أكثر من 60,000 مطور لارافيل',
    newsletter_desc: 'احصل على آخر أخبار لارافيل والشروحات الحصرية في بريدك الإلكتروني أسبوعياً.',
    email_placeholder: 'أدخل بريدك الإلكتروني...',
    btn_subscribe: 'اشتراك مجاني',
    newsletter_privacy: '🔒 نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.',
    btn_listen: 'استمع للمقال',
    btn_listening: 'جارٍ التشغيل...',
    btn_stop_audio: 'إيقاف',
    saved_bookmarks_title: 'المقالات المحفوظة',
    no_bookmarks: 'لا توجد مقالات محفوظة حتى الآن.',
    footer_about: 'البوابة الرسمية لمجتمع لارافيل و PHP و Livewire وتطوير الويب الحديث.',
    footer_categories: 'الأقسام',
    footer_ecosystem: 'النظام البيئي',
    footer_languages: 'اللغات',
    footer_copyright: '© 2026 أخبار لارافيل. النسخة العالمية متعددة اللغات.',
    privacy_policy: 'سياسة الخصوصية',
    terms_service: 'شروط الخدمة',
    advertise: 'الإعلان معنا',
    lang_switched_toast: 'تم تغيير اللغة إلى {lang} بنجاح!',
    newsletter_success: 'شكراً لاشتراكك في نشرة أخبار لارافيل! 🎉'
  }
};

// 3. Dynamic Curated Articles Data (with Multi-Language Content)
const ARTICLES = [
  {
    id: 1,
    category: 'news',
    image: 'assets/images/hero_banner.jpg',
    readTime: '5 min read',
    date: 'Aug 24, 2026',
    author: 'Taylor Otwell',
    authorAvatar: '👨‍💻',
    trending: true,
    translations: {
      en: {
        title: 'Laravel 11 Revolution: Next-Generation Streamlined Architecture & Concurrency Control',
        excerpt: 'Discover the streamlined directory structure, native concurrency primitives, optimized model caching, and lightning-fast Pest PHP integration in Laravel 11.',
        content: `
          <p>Laravel 11 introduces an ultra-minimal application skeleton that dramatically speeds up onboarding and simplifies project maintenance. With over 40% reduction in boilerplate files, configuration files and middleware have been moved into lean bootstrap callbacks.</p>
          <h3>⚡ Native Concurrency Primitives</h3>
          <p>You can now easily dispatch concurrent tasks and wait for their execution using the native <code>Concurrency</code> facade:</p>
          <pre class="modal-code-box"><code>use Illuminate\\Support\\Facades\\Concurrency;

[$user, $analytics, $orders] = Concurrency::run([
    fn () => User::find($id),
    fn () => Analytics::forUser($id),
    fn () => Order::recentFor($id),
]);</code></pre>
          <h3>🔒 Distributed Locks for Eloquent Models</h3>
          <p>Concurrency collisions in high-traffic APIs are now prevented effortlessly with atomic model locking features directly in the framework core.</p>
        `
      },
      hi: {
        title: 'लारवेल 11 क्रांति: अगली पीढ़ी का स्ट्रीमलाइंड आर्किटेक्चर और कन्करेन्सी कंट्रोल',
        excerpt: 'लारवेल 11 में नए सुव्यवस्थित डायरेक्टरी स्ट्रक्चर, नेटिव कन्करेन्सी प्रिमिटिव्स, मॉडल कैशिंग और सुपरफास्ट पेस्ट PHP एकीकरण की खोज करें।',
        content: `
          <p>लारवेल 11 एक बेहद हल्का और आधुनिक ऐप्लिकेशन स्केलेटन पेश करता है जो प्रोजेक्ट सेटअप को आसान बनाता है। 40% कम बॉयलरप्लेट कोड के साथ सभी मिडलवेयर और सेटिंग्स को बूटस्ट्रैप कॉलबैक में स्थानांतरित किया गया है।</p>
          <h3>⚡ नेटिव कन्करेन्सी सपोर्ट</h3>
          <p>अब आप <code>Concurrency</code> फसाड का उपयोग करके एक साथ कई समानांतर टास्क आसानी से चला सकते हैं:</p>
          <pre class="modal-code-box"><code>use Illuminate\\Support\\Facades\\Concurrency;

[$user, $analytics, $orders] = Concurrency::run([
    fn () => User::find($id),
    fn () => Analytics::forUser($id),
    fn () => Order::recentFor($id),
]);</code></pre>
          <h3>🔒 एलोक्वेंट मॉडल्स के लिए डिस्ट्रीब्यूटेड लॉक्स</h3>
          <p>हाई-ट्रैफिक सिस्टम में डेटा की सुरक्षा के लिए नेटिव एटॉमिक लॉकिंग की सुविधा सीधे फ्रेमवर्क में जोड़ी गई है।</p>
        `
      },
      es: {
        title: 'Revolución Laravel 11: Arquitectura Optimizada y Control de Concurrencia',
        excerpt: 'Descubre la estructura de directorios optimizada, primitivas de concurrencia nativas y la integración ultrarrápida con Pest PHP en Laravel 11.',
        content: `
          <p>Laravel 11 presenta una estructura minimalista que reduce el código repetitivo en un 40%, simplificando middlewares y archivos de configuración.</p>
          <h3>⚡ Primitivas de Concurrencia Nativas</h3>
          <p>Ejecuta tareas en paralelo fácilmente con el facade <code>Concurrency</code> de Laravel.</p>
        `
      },
      fr: {
        title: 'Révolution Laravel 11 : Architecture Simplifiée & Contrôle de Concurrence',
        excerpt: 'Découvrez la structure ultra-légère, la gestion native de la concurrence et l’intégration de Pest PHP dans Laravel 11.',
        content: `
          <p>Laravel 11 réduit le code passe-partout de 40% pour offrir une expérience développeur incomparable.</p>
        `
      },
      de: {
        title: 'Laravel 11 Revolution: Schlanke Architektur & Native Nebenläufigkeit',
        excerpt: 'Entdecken Sie die neue Verzeichnisstruktur, native Concurrency-Primitiven und blitzschnelle Pest PHP-Integration in Laravel 11.',
        content: `
          <p>Laravel 11 reduziert Boilerplate-Code um über 40% und optimiert die gesamte Entwicklererfahrung.</p>
        `
      },
      ja: {
        title: 'Laravel 11 革命：次世代の洗練されたアーキテクチャと並行処理制御',
        excerpt: 'Laravel 11 のスリム化されたディレクトリ構造、ネイティブ並行処理、高速な Pest PHP 統合を体験しましょう。',
        content: `
          <p>Laravel 11 はボイラープレートコードを40%削減し、かつてないほどシンプルで強力な開発体験を提供します。</p>
        `
      },
      ar: {
        title: 'ثورة لارافيل 11: بنية معمارية انسيابية وتحكم كامل في التزامن',
        excerpt: 'اكتشف هيكل المجلدات الجديد، وأدوات التزامن الأصلية، والتكامل السريع مع Pest PHP في لارافيل 11.',
        content: `
          <p>يقدم لارافيل 11 هيكلاً فائق البساطة يقلل من الملفات المتكررة بنسبة 40% مع أداء استثنائي.</p>
        `
      }
    }
  },
  {
    id: 2,
    category: 'tutorials',
    image: 'assets/images/tutorial_banner.jpg',
    readTime: '7 min read',
    date: 'Aug 23, 2026',
    author: 'Freek Van der Herten',
    authorAvatar: '🧑‍💻',
    trending: true,
    translations: {
      en: {
        title: 'Mastering Laravel Lock: Distributed Locking Strategies for High-Scale APIs',
        excerpt: 'Learn how to prevent race conditions and synchronize sensitive background processes across multi-server Laravel architectures.',
        content: `
          <p>When handling payment webhooks, inventory deductions, or wallet transactions across multiple load-balanced workers, race conditions can cause severe balance discrepancies.</p>
          <h3>🔒 Using Redis & Cache Locks</h3>
          <p>Laravel provides built-in atomic lock drivers backed by Redis, Memcached, and Database engines:</p>
          <pre class="modal-code-box"><code>use Illuminate\\Support\\Facades\\Cache;

$lock = Cache::lock('process-payment:'.$orderId, 10);

if ($lock->get()) {
    try {
        // Execute critical payment settlement
        $order->charge();
    } finally {
        $lock->release();
    }
}</code></pre>
        `
      },
      hi: {
        title: 'लारवेल लॉक में महारत: हाई-स्केल APIs के लिए डिस्ट्रीब्यूटेड लॉकिंग तकनीक',
        excerpt: 'जानें कि कैसे मल्टी-सर्वर सिस्टम में रेस कंडीशंस (Race Conditions) को रोकें और सुरक्षित बैकग्राउंड प्रोसेस चलाएं।',
        content: `
          <p>पेमेंट वेबहुक्स, वॉलेट ट्रांजेक्शन या इन्वेंट्री मैनेजमेंट में एक साथ आने वाली रिक्वेस्ट्स से बचने के लिए डिस्ट्रीब्यूटेड लॉकिंग सबसे सुरक्षित समाधान है।</p>
          <h3>🔒 रेडिस (Redis) और कैश लॉक्स का उपयोग</h3>
          <pre class="modal-code-box"><code>use Illuminate\\Support\\Facades\\Cache;

$lock = Cache::lock('process-payment:'.$orderId, 10);

if ($lock->get()) {
    try {
        $order->charge();
    } finally {
        $lock->release();
    }
}</code></pre>
        `
      },
      es: {
        title: 'Dominando Laravel Lock: Estrategias de Bloqueo Distribuido',
        excerpt: 'Aprende a evitar condiciones de carrera y sincronizar procesos en múltiples servidores Laravel.',
        content: '<p>Asegura transacciones financieras y pagos con bloqueos atómicos de Redis en Laravel.</p>'
      },
      fr: {
        title: 'Maîtriser Laravel Lock : Verrous Distribués pour API Haute Échelle',
        excerpt: 'Évitez les conditions de course et synchronisez vos processus d’arrière-plan sous Laravel.',
        content: '<p>Gérez les transactions critiques en toute sécurité grâce aux verrous atomiques.</p>'
      },
      de: {
        title: 'Laravel Lock Meistern: Verteilte Sperrstrategien für APIs',
        excerpt: 'Vermeiden Sie Race Conditions und synchronisieren Sie Hintergrundprozesse sicher.',
        content: '<p>Sichern Sie kritische Zahlungsabwicklungen mit atomaren Redis-Sperren ab.</p>'
      },
      ja: {
        title: 'Laravel Lock をマスターする：大規模API向け分散ロック戦略',
        excerpt: 'マルチサーバー環境で競合状態を防ぎ、安全なバックグラウンド処理を実現する方法を解説。',
        content: '<p>Redis を用いたアトミックロックで決済処理や在庫管理の安全性を確保します。</p>'
      },
      ar: {
        title: 'احتراف Laravel Lock: استراتيجيات الأقفال الموزعة للأنظمة الضخمة',
        excerpt: 'تعلم كيفية منع تعارض العمليات وتأمين المعاملات المالية الحساسة عبر خوادم متعددة.',
        content: '<p>استخدم أقفال Redis الذرية لحماية عمليات الدفع وتحديث المخزون بأمان تام.</p>'
      }
    }
  },
  {
    id: 3,
    category: 'packages',
    image: 'assets/images/packages_banner.jpg',
    readTime: '4 min read',
    date: 'Aug 22, 2026',
    author: 'Caleb Porzio',
    authorAvatar: '🚀',
    trending: true,
    translations: {
      en: {
        title: 'Livewire 3.5 Released: Instant SPA Navigation & Alpine Island Hydration',
        excerpt: 'Explore the new declarative wire:navigate transitions, automatic component lazy-loading, and zero-latency UI morphing.',
        content: `
          <p>Livewire 3.5 brings true SPA-like speed to classic Blade templates without writing a single line of client JavaScript.</p>
          <pre class="modal-code-box"><code>&lt;a href="/dashboard" wire:navigate.hover&gt;
    Dashboard (Preloaded on Hover)
&lt;/a&gt;</code></pre>
        `
      },
      hi: {
        title: 'Livewire 3.5 रिलीज़: इंस्टेंट SPA नेविगेशन और अल्पाइन आइलैंड हाइड्रेशन',
        excerpt: 'नए डिक्लेरेटिव wire:navigate ट्रांज़िशन, स्वचालित कंपोनेंट लेज़ी-लोडिंग और ज़ीरो-लेटेंसी UI मॉर्फिंग देखें।',
        content: `
          <p>Livewire 3.5 बिना किसी जटिल जावास्क्रिप्ट फ्रेमवर्क के ब्लेड टेम्प्लेट में SPA जैसा तेज़ अनुभव प्रदान करता है।</p>
          <pre class="modal-code-box"><code>&lt;a href="/dashboard" wire:navigate.hover&gt;
    Dashboard (Preloaded on Hover)
&lt;/a&gt;</code></pre>
        `
      },
      es: {
        title: 'Lanzamiento de Livewire 3.5: Navegación SPA Instantánea',
        excerpt: 'Descubre las transiciones wire:navigate y la carga diferida automática en Livewire 3.5.',
        content: '<p>Obtén la velocidad de una SPA en Blade clásico con Livewire 3.5.</p>'
      },
      fr: {
        title: 'Sortie de Livewire 3.5 : Navigation SPA Instantanée',
        excerpt: 'Découvrez les transitions wire:navigate et le chargement différé sans effort.',
        content: '<p>Une rapidité incroyable dans vos templates Blade avec Livewire 3.5.</p>'
      },
      de: {
        title: 'Livewire 3.5 Veröffentlicht: Sofortige SPA-Navigation',
        excerpt: 'Erleben Sie blitzschnelle Übergänge mit wire:navigate und Zero-Latency Morphing.',
        content: '<p>SPA-Geschwindigkeit in reinen Blade-Templates ohne JavaScript-Überbau.</p>'
      },
      ja: {
        title: 'Livewire 3.5 リリース：瞬時のSPAナビゲーションと最適化',
        excerpt: 'wire:navigate による事前読み込みと超高速なUIレンダリングを実現。',
        content: '<p>JavaScript を書くことなく Blade だけで SPA のような快適な操作感を提供します。</p>'
      },
      ar: {
        title: 'إطلاق Livewire 3.5: تنقل فوري شبيه بتطبيقات SPA',
        excerpt: 'استمتع بالتحميل المسبق الفوري وسرعة الاستجابة الخارقة مع wire:navigate.',
        content: '<p>حوّل صفحات Blade التقليدية إلى تطبيق فائق السرعة بدون تعقيدات جافاسكريبت.</p>'
      }
    }
  },
  {
    id: 4,
    category: 'releases',
    image: 'assets/images/hero_banner.jpg',
    readTime: '3 min read',
    date: 'Aug 21, 2026',
    author: 'Nuno Maduro',
    authorAvatar: '⚡',
    trending: false,
    translations: {
      en: {
        title: 'Pest PHP v3.2: Mutation Testing & AI-Assisted Architecture Assertions',
        excerpt: 'Pest continues to redefine PHP testing with built-in mutation scoring, parallel snapshots, and strict architectural rules.',
        content: `
          <p>Pest 3.2 makes writing beautiful, expressive tests easier than ever with architectural boundaries checking:</p>
          <pre class="modal-code-box"><code>test('controllers do not access database directly')
    -&gt;expect('App\\Http\\Controllers')
    -&gt;not-&gt;toUse('Illuminate\\Database\\Eloquent\\Model');</code></pre>
        `
      },
      hi: {
        title: 'Pest PHP v3.2: म्यूटेशन टेस्टिंग और AI-असिस्टेड आर्किटेक्चर असर्शन्स',
        excerpt: 'Pest PHP अब म्यूटेशन स्कोरिंग, पैरेलल स्नैपशॉट्स और सख्त आर्किटेक्चरल नियमों के साथ टेस्टिंग को और आसान बनाता है।',
        content: `
          <p>Pest 3.2 के साथ अपने कोड के आर्किटेक्चरल नियमों को सीधे टेस्ट में लागू करें:</p>
          <pre class="modal-code-box"><code>test('controllers do not access database directly')
    -&gt;expect('App\\Http\\Controllers')
    -&gt;not-&gt;toUse('Illuminate\\Database\\Eloquent\\Model');</code></pre>
        `
      },
      es: {
        title: 'Pest PHP v3.2: Pruebas de Mutación y Reglas de Arquitectura',
        excerpt: 'Pest redefine las pruebas unitarias en PHP con reglas de arquitectura estrictas y puntuación de mutación.',
        content: '<p>Escribe pruebas limpias y elegantes con Pest 3.2.</p>'
      },
      fr: {
        title: 'Pest PHP v3.2 : Tests de Mutation et Assertions d’Architecture',
        excerpt: 'Une syntaxe élégante pour des tests PHP robustes et modernes.',
        content: '<p>Validez l’architecture de votre code grâce aux tests Pest 3.2.</p>'
      },
      de: {
        title: 'Pest PHP v3.2: Mutationstests & Architektur-Prüfungen',
        excerpt: 'Pest revolutioniert das Testen in PHP mit integriertem Mutations-Scoring.',
        content: '<p>Erstellen Sie ausdrucksstarke und wartbare Tests mit Pest 3.2.</p>'
      },
      ja: {
        title: 'Pest PHP v3.2：ミューテーションテストとアーキテクチャ検証',
        excerpt: 'エレガントな構文でPHPのテストを再定義する Pest PHP 3.2 の新機能。',
        content: '<p>クリーンで直感的なテストコードを素早く作成できます。</p>'
      },
      ar: {
        title: 'إطلاق Pest PHP v3.2: اختبارات الطفرات وقواعد البنية البرمجية',
        excerpt: 'يعيد Pest صياغة اختبارات PHP البرمجية بأناقة وسلاسة لا مثيل لها.',
        content: '<p>تأكد من سلامة معمارية تطبيقك واختبر الكود بدقة وسرعة فائقة.</p>'
      }
    }
  },
  {
    id: 5,
    category: 'tutorials',
    image: 'assets/images/tutorial_banner.jpg',
    readTime: '6 min read',
    date: 'Aug 20, 2026',
    author: 'Dan Harrin',
    authorAvatar: '🛠️',
    trending: false,
    translations: {
      en: {
        title: 'Building Enterprise Admin Panels with Filament v3 & Real-Time Charts',
        excerpt: 'Step-by-step guide to generating reactive CRUD interfaces, role-based permissions, and dynamic analytics widgets in minutes.',
        content: `
          <p>Filament v3 allows you to build complete admin panels in pure PHP without having to touch frontend build pipelines.</p>
        `
      },
      hi: {
        title: 'Filament v3 और रियल-टाइम चार्ट्स के साथ एंटरप्राइज एडमिन पैनल बनाना',
        excerpt: 'मिनटों में रिएक्टिव CRUD इंटरफेस, भूमिका-आधारित अनुमतियां (Permissions) और डायनामिक एनालिटिक्स विजेट्स बनाने की संपूर्ण गाइड।',
        content: `
          <p>Filament v3 आपको बिना किसी अतिरिक्त फ्रंटेंड कॉन्फ़िगरेशन के शुद्ध PHP में शक्तिशाली एडमिन डैशबोर्ड बनाने की सुविधा देता है।</p>
        `
      },
      es: {
        title: 'Creación de Paneles de Administración con Filament v3',
        excerpt: 'Guía paso a paso para generar interfaces CRUD reactivas y gráficos en tiempo real.',
        content: '<p>Construye paneles empresariales potentes con Filament v3 en minutos.</p>'
      },
      fr: {
        title: 'Créer des Tableaux de Bord Entreprise avec Filament v3',
        excerpt: 'Générez des interfaces CRUD réactives et des widgets d’analyse en quelques minutes.',
        content: '<p>Développez des panneaux d’administration complets en PHP pur.</p>'
      },
      de: {
        title: 'Enterprise Admin Panels erstellen mit Filament v3',
        excerpt: 'Schritt-für-Schritt-Anleitung für reaktive CRUD-Interfaces und Live-Diagramme.',
        content: '<p>Leistungsstarke Dashboards schnell und elegant mit Filament aufbauen.</p>'
      },
      ja: {
        title: 'Filament v3 で構築するエンタープライズ管理画面とリアルタイムチャート',
        excerpt: 'わずか数分でリアクティブな CRUD 画面と権限管理ダッシュボードを作成する手順。',
        content: '<p>純粋な PHP だけで高機能な管理画面を即座に構築できます。</p>'
      },
      ar: {
        title: 'بناء لوحات تحكم للشركات باستخدام Filament v3 والرسوم البيانية الحية',
        excerpt: 'دليل شامل لإنشاء واجهات CRUD سريعة وإدارة الصلاحيات ولوحات التحليلات في دقائق.',
        content: '<p>قم ببناء لوحات تحكم احترافية ومتطورة بلغة PHP الخالصة بكل سهولة.</p>'
      }
    }
  },
  {
    id: 6,
    category: 'podcasts',
    image: 'assets/images/packages_banner.jpg',
    readTime: '35 min listen',
    date: 'Aug 19, 2026',
    author: 'Michael Dyrynda',
    authorAvatar: '🎙️',
    trending: false,
    translations: {
      en: {
        title: 'Laravel News Podcast #215: The Future of PHP JIT & Fullstack In-Memory Servers',
        excerpt: 'Taylor Otwell joins the podcast to discuss PHP 8.4 property hooks, frankenphp workers, and the future of Laravel cloud infrastructure.',
        content: `
          <p>In this episode, we dive deep into FrankenPHP, Caddy server integration, and the lightning performance of in-memory Octane workers.</p>
        `
      },
      hi: {
        title: 'लारवेल न्यूज़ पॉडकास्ट #215: PHP JIT और इन-मेमोरी सर्वर्स का भविष्य',
        excerpt: 'टेलर ऑटवेल पॉडकास्ट में PHP 8.4 प्रॉपर्टी हुक्स, FrankenPHP वर्कर्स और लारवेल क्लाउड के भविष्य पर चर्चा करते हैं।',
        content: `
          <p>इस एपिसोड में हम FrankenPHP, Caddy सर्वर और ऑक्टेन (Octane) के सुपरफास्ट परफॉरमेंस की गहराई से चर्चा करते हैं।</p>
        `
      },
      es: {
        title: 'Laravel News Pódcast #215: El Futuro de PHP y Servidores en Memoria',
        excerpt: 'Taylor Otwell charla sobre PHP 8.4, FrankenPHP y la infraestructura en la nube de Laravel.',
        content: '<p>Un análisis profundo sobre el rendimiento de Laravel Octane y servidores modernos.</p>'
      },
      fr: {
        title: 'Podcast Laravel News #215 : L’Avenir de PHP & Serveurs en Mémoire',
        excerpt: 'Taylor Otwell discute de PHP 8.4, FrankenPHP et des déploiements cloud.',
        content: '<p>Découvrez les innovations de performance avec Octane et FrankenPHP.</p>'
      },
      de: {
        title: 'Laravel News Podcast #215: Die Zukunft von PHP & In-Memory Servern',
        excerpt: 'Taylor Otwell spricht über PHP 8.4 Property Hooks und die Cloud-Infrastruktur.',
        content: '<p>Spannende Einblicke in moderne PHP-Performance und FrankenPHP.</p>'
      },
      ja: {
        title: 'Laravel News ポッドキャスト #215：PHP の未来とインメモリサーバー',
        excerpt: 'Taylor Otwell が PHP 8.4 の新機能と FrankenPHP、クラウド展開について語ります。',
        content: '<p>次世代の高速な PHP 実行環境について徹底解説します。</p>'
      },
      ar: {
        title: 'بودكاست أخبار لارافيل #215: مستقبل PHP وخوادم الذاكرة الفائقة',
        excerpt: 'يتحدث تايلور أوتويل عن مزايا PHP 8.4 الجديدة وخوادم FrankenPHP السريعة.',
        content: '<p>حلقة مميزة تناقش تحسين الأداء الاستثنائي مع Laravel Octane و Caddy.</p>'
      }
    }
  }
];

// 4. Application State Management
const state = {
  currentLang: 'en',
  currentCategory: 'all',
  searchQuery: '',
  theme: 'dark',
  viewMode: 'grid',
  bookmarks: [],
  activeArticleId: null,
  isSpeaking: false
};

// 5. DOM Elements
const DOM = {
  html: document.documentElement,
  body: document.body,
  siteHeader: document.getElementById('siteHeader'),
  langDropdownWrapper: document.getElementById('langDropdownWrapper'),
  langDropdownBtn: document.getElementById('langDropdownBtn'),
  activeLangFlag: document.getElementById('activeLangFlag'),
  activeLangName: document.getElementById('activeLangName'),
  langMenu: document.getElementById('langMenu'),
  langList: document.getElementById('langList'),
  quickLangButtons: document.getElementById('quickLangButtons'),
  floatingLangBtn: document.getElementById('floatingLangBtn'),
  floatingFlag: document.getElementById('floatingFlag'),
  floatingCode: document.getElementById('floatingCode'),
  langToast: document.getElementById('langToast'),
  langToastText: document.getElementById('langToastText'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  bookmarksBtn: document.getElementById('bookmarksBtn'),
  bookmarkCount: document.getElementById('bookmarkCount'),
  bookmarksDrawer: document.getElementById('bookmarksDrawer'),
  closeBookmarksBtn: document.getElementById('closeBookmarksBtn'),
  bookmarksList: document.getElementById('bookmarksList'),
  categoryList: document.getElementById('categoryList'),
  searchInput: document.getElementById('searchInput'),
  clearSearch: document.getElementById('clearSearch'),
  articlesGrid: document.getElementById('articlesGrid'),
  articleCountLabel: document.getElementById('articleCountLabel'),
  emptyState: document.getElementById('emptyState'),
  resetFilterBtn: document.getElementById('resetFilterBtn'),
  gridViewBtn: document.getElementById('gridViewBtn'),
  listViewBtn: document.getElementById('listViewBtn'),
  trendingList: document.getElementById('trendingList'),
  newsletterForm: document.getElementById('newsletterForm'),
  newsletterEmail: document.getElementById('newsletterEmail'),
  articleModal: document.getElementById('articleModal'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  modalMeta: document.getElementById('modalMeta'),
  modalBody: document.getElementById('modalBody'),
  ttsBtn: document.getElementById('ttsBtn'),
  shareBtn: document.getElementById('shareBtn')
};

// 6. Initialize App
function initApp() {
  loadSavedState();
  renderLanguageDropdown();
  renderTrendingList();
  renderArticles();
  setupEventListeners();
  updateUILanguage(state.currentLang);
}

// 7. Load Persistent State
function loadSavedState() {
  const savedLang = localStorage.getItem('ln_lang');
  if (savedLang && LANGUAGES.some(l => l.code === savedLang)) {
    state.currentLang = savedLang;
  }

  const savedTheme = localStorage.getItem('ln_theme');
  if (savedTheme === 'light') {
    state.theme = 'light';
    DOM.body.classList.remove('dark-theme');
    DOM.body.classList.add('light-theme');
  }

  const savedBookmarks = localStorage.getItem('ln_bookmarks');
  if (savedBookmarks) {
    try {
      state.bookmarks = JSON.parse(savedBookmarks);
      updateBookmarkCount();
    } catch (e) {
      state.bookmarks = [];
    }
  }
}

// 8. Render Language Dropdown Options
function renderLanguageDropdown() {
  DOM.langList.innerHTML = '';
  LANGUAGES.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = `lang-option ${lang.code === state.currentLang ? 'active' : ''}`;
    btn.dataset.lang = lang.code;
    btn.innerHTML = `
      <div class="lang-option-left">
        <span class="lang-option-flag">${lang.flag}</span>
        <div>
          <div class="lang-option-native">${lang.native}</div>
          <div class="lang-option-en">${lang.name}</div>
        </div>
      </div>
      <i class="fa-solid fa-check lang-option-check"></i>
    `;
    btn.addEventListener('click', () => {
      setLanguage(lang.code);
      closeLanguageDropdown();
    });
    DOM.langList.appendChild(btn);
  });
}

// 9. Set & Switch Language Dynamically
function setLanguage(langCode) {
  const selectedLang = LANGUAGES.find(l => l.code === langCode);
  if (!selectedLang) return;

  state.currentLang = langCode;
  localStorage.setItem('ln_lang', langCode);

  // Set Document Lang & Direction (RTL for Arabic)
  DOM.html.setAttribute('lang', selectedLang.code);
  DOM.html.setAttribute('dir', selectedLang.dir);

  // Update Active Lang Indicators
  DOM.activeLangFlag.textContent = selectedLang.flag;
  DOM.activeLangName.textContent = selectedLang.native;
  DOM.floatingFlag.textContent = selectedLang.flag;
  DOM.floatingCode.textContent = selectedLang.code.toUpperCase();

  // Update Dropdown Active states
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === langCode);
  });

  // Update Quick bar active states
  document.querySelectorAll('.quick-lang-btn, .footer-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === langCode);
  });

  // Update UI Translations
  updateUILanguage(langCode);

  // Re-render dynamic content (Articles & Trending)
  renderTrendingList();
  renderArticles();

  // If modal is open, re-render modal content
  if (state.activeArticleId) {
    openArticleModal(state.activeArticleId);
  }

  // Show Toast
  const toastMsg = getTranslation('lang_switched_toast').replace('{lang}', `${selectedLang.flag} ${selectedLang.native}`);
  showToast(toastMsg);
}

// Helper to get translated string
function getTranslation(key) {
  const langDict = TRANSLATIONS[state.currentLang] || TRANSLATIONS['en'];
  return langDict[key] || TRANSLATIONS['en'][key] || key;
}

// 10. Update Static UI Elements with data-i18n
function updateUILanguage(langCode) {
  const dict = TRANSLATIONS[langCode] || TRANSLATIONS['en'];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Hero Featured Article Update
  const heroArticle = ARTICLES.find(a => a.id === 1);
  if (heroArticle) {
    const trans = heroArticle.translations[langCode] || heroArticle.translations['en'];
    const titleEl = document.getElementById('heroTitle');
    const excerptEl = document.getElementById('heroExcerpt');
    if (titleEl) titleEl.textContent = trans.title;
    if (excerptEl) excerptEl.textContent = trans.excerpt;
  }
}

// 11. Render Articles Grid
function renderArticles() {
  const lang = state.currentLang;
  const filtered = ARTICLES.filter(art => {
    const matchesCategory = state.currentCategory === 'all' || art.category === state.currentCategory;
    const trans = art.translations[lang] || art.translations['en'];
    const matchesSearch = !state.searchQuery ||
      trans.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      trans.excerpt.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Update count
  const countText = getTranslation('showing_count')
    .replace('{count}', filtered.length)
    .replace('{total}', ARTICLES.length);
  DOM.articleCountLabel.textContent = countText;

  if (filtered.length === 0) {
    DOM.articlesGrid.innerHTML = '';
    DOM.emptyState.style.display = 'block';
    return;
  }

  DOM.emptyState.style.display = 'none';
  DOM.articlesGrid.innerHTML = '';

  filtered.forEach(art => {
    const trans = art.translations[lang] || art.translations['en'];
    const isBookmarked = state.bookmarks.includes(art.id);
    const catLabel = getTranslation(`cat_${art.category}`);

    const card = document.createElement('article');
    card.className = 'article-card';
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${art.image}" alt="${trans.title}" class="card-img" loading="lazy">
        <span class="card-category-badge">${catLabel}</span>
        <button class="card-bookmark-btn ${isBookmarked ? 'saved' : ''}" data-id="${art.id}" title="Save article">
          <i class="fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span><i class="fa-regular fa-clock"></i> ${art.readTime}</span>
          <span class="meta-dot"></span>
          <span><i class="fa-regular fa-calendar"></i> ${art.date}</span>
        </div>
        <h3 class="card-title">${trans.title}</h3>
        <p class="card-excerpt">${trans.excerpt}</p>
        <div class="card-footer">
          <div class="card-author">
            <span class="card-author-avatar">${art.authorAvatar}</span>
            <span>${art.author}</span>
          </div>
          <button class="card-read-link read-article-btn" data-id="${art.id}">
            <span>${getTranslation('btn_read_article')}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    // Click handler to open article reader
    card.querySelector('.read-article-btn').addEventListener('click', () => {
      openArticleModal(art.id);
    });

    // Bookmark toggle
    card.querySelector('.card-bookmark-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(art.id);
    });

    DOM.articlesGrid.appendChild(card);
  });
}

// 12. Render Trending Sidebar List
function renderTrendingList() {
  const lang = state.currentLang;
  const trendingArticles = ARTICLES.filter(a => a.trending).slice(0, 3);
  DOM.trendingList.innerHTML = '';

  trendingArticles.forEach((art, index) => {
    const trans = art.translations[lang] || art.translations['en'];
    const item = document.createElement('div');
    item.className = 'trending-item';
    item.innerHTML = `
      <div class="trending-rank">0${index + 1}</div>
      <div class="trending-info">
        <div class="trending-meta">
          <span>${getTranslation(`cat_${art.category}`)}</span>
          <span>•</span>
          <span>${art.readTime}</span>
        </div>
        <h4 class="trending-title">${trans.title}</h4>
      </div>
    `;
    item.addEventListener('click', () => openArticleModal(art.id));
    DOM.trendingList.appendChild(item);
  });
}

// 13. Open & Render Article Reader Modal
function openArticleModal(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  state.activeArticleId = articleId;
  const lang = state.currentLang;
  const trans = article.translations[lang] || article.translations['en'];

  DOM.modalMeta.innerHTML = `
    <span class="badge badge-primary">${getTranslation(`cat_${article.category}`)}</span>
    <span class="meta-dot"></span>
    <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
    <span class="meta-dot"></span>
    <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
  `;

  DOM.modalBody.innerHTML = `
    <h2 class="modal-article-title">${trans.title}</h2>
    <img src="${article.image}" alt="${trans.title}" class="modal-article-img">
    <div class="modal-article-content">
      ${trans.content}
    </div>
  `;

  // Reset TTS button
  stopTextToSpeech();
  DOM.ttsBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>${getTranslation('btn_listen')}</span>`;

  DOM.articleModal.classList.add('open');
  DOM.articleModal.setAttribute('aria-hidden', 'false');
  DOM.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  DOM.articleModal.classList.remove('open');
  DOM.articleModal.setAttribute('aria-hidden', 'true');
  DOM.body.style.overflow = '';
  state.activeArticleId = null;
  stopTextToSpeech();
}

// 14. Text to Speech Audio Player in Active Language
function toggleTextToSpeech() {
  if (!('speechSynthesis' in window)) {
    showToast('Speech synthesis not supported in this browser.');
    return;
  }

  if (state.isSpeaking) {
    stopTextToSpeech();
    return;
  }

  const article = ARTICLES.find(a => a.id === state.activeArticleId);
  if (!article) return;

  const trans = article.translations[state.currentLang] || article.translations['en'];
  const textToRead = `${trans.title}. ${trans.excerpt}`;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(textToRead);

  // Map language codes to TTS voice locales
  const localeMap = {
    en: 'en-US',
    hi: 'hi-IN',
    es: 'es-ES',
    fr: 'fr-FR',
    de: 'de-DE',
    ja: 'ja-JP',
    ar: 'ar-SA'
  };

  utterance.lang = localeMap[state.currentLang] || 'en-US';
  utterance.rate = 0.95;

  utterance.onstart = () => {
    state.isSpeaking = true;
    DOM.ttsBtn.innerHTML = `<i class="fa-solid fa-stop text-accent"></i> <span>${getTranslation('btn_listening')}</span>`;
  };

  utterance.onend = () => {
    stopTextToSpeech();
  };

  utterance.onerror = () => {
    stopTextToSpeech();
  };

  window.speechSynthesis.speak(utterance);
}

function stopTextToSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  state.isSpeaking = false;
  DOM.ttsBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span>${getTranslation('btn_listen')}</span>`;
}

// 15. Bookmark System
function toggleBookmark(articleId) {
  const index = state.bookmarks.indexOf(articleId);
  if (index > -1) {
    state.bookmarks.splice(index, 1);
    showToast('Article removed from bookmarks.');
  } else {
    state.bookmarks.push(articleId);
    showToast('Article added to bookmarks! 🔖');
  }

  localStorage.setItem('ln_bookmarks', JSON.stringify(state.bookmarks));
  updateBookmarkCount();
  renderArticles();
  renderBookmarksDrawer();
}

function updateBookmarkCount() {
  DOM.bookmarkCount.textContent = state.bookmarks.length;
}

function renderBookmarksDrawer() {
  DOM.bookmarksList.innerHTML = '';
  if (state.bookmarks.length === 0) {
    DOM.bookmarksList.innerHTML = `
      <div class="bookmark-empty">
        <i class="fa-regular fa-bookmark" style="font-size: 2rem; margin-bottom: 8px; opacity: 0.5;"></i>
        <p>${getTranslation('no_bookmarks')}</p>
      </div>
    `;
    return;
  }

  state.bookmarks.forEach(id => {
    const art = ARTICLES.find(a => a.id === id);
    if (!art) return;
    const trans = art.translations[state.currentLang] || art.translations['en'];

    const item = document.createElement('div');
    item.className = 'trending-item';
    item.innerHTML = `
      <div class="trending-info">
        <div class="trending-meta">
          <span>${getTranslation(`cat_${art.category}`)}</span>
          <span>•</span>
          <span>${art.readTime}</span>
        </div>
        <h4 class="trending-title">${trans.title}</h4>
      </div>
      <button class="icon-btn remove-bm-btn" data-id="${art.id}" title="Remove"><i class="fa-solid fa-trash-can"></i></button>
    `;

    item.querySelector('.trending-title').addEventListener('click', () => {
      DOM.bookmarksDrawer.classList.remove('open');
      openArticleModal(art.id);
    });

    item.querySelector('.remove-bm-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(art.id);
    });

    DOM.bookmarksList.appendChild(item);
  });
}

// 16. Toast Notifications
let toastTimeout;
function showToast(message) {
  DOM.langToastText.textContent = message;
  DOM.langToast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    DOM.langToast.classList.remove('show');
  }, 3200);
}

// 17. Dropdown Toggling Helper
function toggleLanguageDropdown() {
  const isOpen = DOM.langMenu.classList.contains('open');
  if (isOpen) {
    closeLanguageDropdown();
  } else {
    DOM.langMenu.classList.add('open');
    DOM.langDropdownBtn.setAttribute('aria-expanded', 'true');
  }
}

function closeLanguageDropdown() {
  DOM.langMenu.classList.remove('open');
  DOM.langDropdownBtn.setAttribute('aria-expanded', 'false');
}

// 18. Event Listeners Setup
function setupEventListeners() {
  // Dropdown button
  DOM.langDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleLanguageDropdown();
  });

  // Floating Language Button opens dropdown & scrolls to top
  DOM.floatingLangBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toggleLanguageDropdown();
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!DOM.langDropdownWrapper.contains(e.target)) {
      closeLanguageDropdown();
    }
  });

  // Quick Language Bar Buttons
  document.querySelectorAll('.quick-lang-btn, .footer-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Category Filtering
  DOM.categoryList.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
      DOM.categoryList.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      state.currentCategory = item.dataset.category;
      renderArticles();
    });
  });

  // Footer Category links
  document.querySelectorAll('.cat-filter-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = link.dataset.category;
      const targetNav = DOM.categoryList.querySelector(`[data-category="${targetCat}"]`);
      if (targetNav) {
        targetNav.click();
        document.getElementById('articlesSection').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Search Filtering
  DOM.searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    DOM.clearSearch.style.display = state.searchQuery ? 'block' : 'none';
    renderArticles();
  });

  DOM.clearSearch.addEventListener('click', () => {
    DOM.searchInput.value = '';
    state.searchQuery = '';
    DOM.clearSearch.style.display = 'none';
    renderArticles();
  });

  // Reset Filters
  DOM.resetFilterBtn.addEventListener('click', () => {
    state.searchQuery = '';
    DOM.searchInput.value = '';
    DOM.clearSearch.style.display = 'none';
    DOM.categoryList.querySelector('[data-category="all"]').click();
  });

  // Grid / List View Toggle
  DOM.gridViewBtn.addEventListener('click', () => {
    DOM.gridViewBtn.classList.add('active');
    DOM.listViewBtn.classList.remove('active');
    DOM.articlesGrid.classList.remove('list-layout');
  });

  DOM.listViewBtn.addEventListener('click', () => {
    DOM.listViewBtn.classList.add('active');
    DOM.gridViewBtn.classList.remove('active');
    DOM.articlesGrid.classList.add('list-layout');
  });

  // Theme Toggle
  DOM.themeToggleBtn.addEventListener('click', () => {
    const isDark = DOM.body.classList.contains('dark-theme');
    if (isDark) {
      DOM.body.classList.remove('dark-theme');
      DOM.body.classList.add('light-theme');
      localStorage.setItem('ln_theme', 'light');
    } else {
      DOM.body.classList.remove('light-theme');
      DOM.body.classList.add('dark-theme');
      localStorage.setItem('ln_theme', 'dark');
    }
  });

  // Bookmarks Drawer
  DOM.bookmarksBtn.addEventListener('click', () => {
    renderBookmarksDrawer();
    DOM.bookmarksDrawer.classList.add('open');
  });

  DOM.closeBookmarksBtn.addEventListener('click', () => {
    DOM.bookmarksDrawer.classList.remove('open');
  });

  DOM.bookmarksDrawer.addEventListener('click', (e) => {
    if (e.target === DOM.bookmarksDrawer) {
      DOM.bookmarksDrawer.classList.remove('open');
    }
  });

  // Modal actions
  DOM.closeModalBtn.addEventListener('click', closeArticleModal);
  DOM.articleModal.addEventListener('click', (e) => {
    if (e.target === DOM.articleModal) closeArticleModal();
  });

  DOM.ttsBtn.addEventListener('click', toggleTextToSpeech);

  DOM.shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Link copied to clipboard! 📋');
    }
  });

  // Hero Featured article button
  const heroBtn = document.querySelector('#heroFeaturedCard .read-article-btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => openArticleModal(1));
  }

  const heroBmBtn = document.querySelector('#heroFeaturedCard .bookmark-trigger');
  if (heroBmBtn) {
    heroBmBtn.addEventListener('click', () => toggleBookmark(1));
  }

  // Newsletter Form
  DOM.newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (DOM.newsletterEmail.value) {
      showToast(getTranslation('newsletter_success'));
      DOM.newsletterEmail.value = '';
    }
  });
}

// Start application
document.addEventListener('DOMContentLoaded', initApp);
