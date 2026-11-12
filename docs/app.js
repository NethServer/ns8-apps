"use strict";

const UI = {
  en: {
    search: "Search apps, developers, categories…",
    tagline: "Every NethServer 8 app you can install from a software repository, official and community, in one place.",
    apps: "apps", developers: "developers", repositories: "repositories", updated: "updated",
    byCategory: "Browse by category", byRepo: "Browse by repository",
    recent: "Recently updated", popular: "Most starred", seeAll: "See all",
    all: "All apps", category: "Category", repository: "Repository",
    filters: "Filters", official: "Official only", showTesting: "Show testing versions", clear: "Clear filters",
    sort: { stars: "Most stars", name: "Name", updated: "Last update" , quality: "Best quality" },
    noResult: "No app matches these filters.", back: "← All apps",
    variants: (n) => `${n} variants`, versionsCol: "Stable", testingCol: "Testing",
    devCol: "Developer", repoCol: "Repository", updatedCol: "Updated",
 officialBadge: "Official",
    code: "Source code", docs: "Documentation", bugs: "Report a bug", releases: "Releases", site: "Developer's site",
    history: "Stable", install: "Install on NS8", noVersion: "no release yet",
    stepOfficial: (n) => `Available by default: open the Software Center, search ${n} and click Install.`,
    stepEnableForge: "Open Software Center › Settings › Software repositories and enable NethForge.",
    stepAddRepo: "Open Software Center › Settings › Software repositories and click Add repository.",
    repoName: "Name:", repoUrl: "URL:",
    stepTesting: "Tick “Enable testing”: this app has no stable release yet.",
    stepInstall: (n) => `Back in the Software Center, search ${n} and click Install.`,
    quality: "Quality", howTo: "How to improve", checks: {"repository": "Published in a software repository", "topic": "GitHub topic “ns8”", "categories": "Standard categories", "logo": "Logo", "screenshots": "Screenshots", "description": "Description of 60+ characters", "translations": "Translated description", "docs": "Documentation and bug links", "min_core": "Minimum core label", "license": "License file"},
    techUi: {"tech": "Technical details", "package": "Package", "rootless": "Runs rootless", "rootfull": "Runs as root", "images": "Container images", "permissions": "Permissions", "noPermissions": "none", "ports": "Ports reserved", "volumes": "Volumes", "tcp": "TCP", "udp": "UDP", "rootfullPerm": "Unlimited access to its node", "generic": "Role {role} of {module} {where}", "coreRoles": {"reader": "Read the configuration and status of {module} {where}", "owner": "Run any action of {module} {where}"}, "roles": {"node_reader": "Read the configuration and status of its node", "node_fwadm": "Open ports and change the firewall of its node", "node_portsadm": "Reserve extra network ports on its node", "node_tunadm": "Create network tunnels and change the firewall of its node", "cluster_reader": "Read the configuration and status of the cluster", "cluster_accountconsumer": "Connect to a user domain to read users and groups", "cluster_accountprovider": "Act as a user domain provider for the cluster", "traefik_routeadm": "Publish and remove web routes {where}", "traefik_certadm": "Request and manage TLS certificates {where}", "traefik_fulladm": "Full control of web routes and TLS certificates {where}", "mail_mailadm": "Read all mailboxes and the mail configuration, change relay and always-BCC rules {where}", "openldap_domadm": "Create, change and delete OpenLDAP users and groups {where}", "samba_domadm": "Create, change and delete Samba users and groups {where}", "nethvoice-proxy_routeadm": "Manage SIP routes of the voice proxy {where}", "nethvoice-proxy_trunkadm": "Manage SIP trunks of the voice proxy {where}", "nethvoice_pbookreader": "Read the NethVoice phonebook database credentials {where}"}, "scope": {"node": "on the default instance of its node at installation time", "any": "on any instance", "cluster": "on the default instance of the cluster at installation time"}, "nodeId": "node {id}"},
    stale: "unmaintained", staleTip: "No stable release for over a year",
    altUrl: "Alternative URL, if the first one does not work:",
    copy: "Copy", copied: "Copied", minCore: "Needs core", sortLabel: "Sort", archived: "archived",
    footer: (d) => `Data crawled from GitHub on ${d}. Stars are the stars of each app's source repository.`,
  },
  fr: {
    search: "Chercher une app, un développeur, une catégorie…",
    tagline: "Toutes les applications NethServer 8 installables depuis un dépôt logiciel, officielles et communautaires, au même endroit.",
    apps: "apps", developers: "développeurs", repositories: "dépôts", updated: "mis à jour",
    byCategory: "Parcourir par catégorie", byRepo: "Parcourir par dépôt",
    recent: "Mises à jour récentes", popular: "Les plus étoilées", seeAll: "Tout voir",
    all: "Toutes les apps", category: "Catégorie", repository: "Dépôt",
    filters: "Filtres", official: "Officielles seulement", showTesting: "Afficher les versions testing", clear: "Effacer les filtres",
    sort: { stars: "Plus d'étoiles", name: "Nom", updated: "Dernière mise à jour" , quality: "Meilleure qualité" },
    noResult: "Aucune app ne correspond à ces filtres.", back: "← Toutes les apps",
    variants: (n) => `${n} variantes`, versionsCol: "Stable", testingCol: "Testing",
    devCol: "Développeur", repoCol: "Dépôt", updatedCol: "Mise à jour",
 officialBadge: "Officiel",
    code: "Code source", docs: "Documentation", bugs: "Signaler un bug", releases: "Versions", site: "Site du développeur",
    history: "Stable", install: "Installer sur NS8", noVersion: "pas encore de release",
    stepOfficial: (n) => `Disponible par défaut : ouvrir le Software Center, chercher ${n} et cliquer sur Installer.`,
    stepEnableForge: "Ouvrir Software Center › Paramètres › Dépôts logiciels et activer NethForge.",
    stepAddRepo: "Ouvrir Software Center › Paramètres › Dépôts logiciels et cliquer sur Ajouter un dépôt.",
    repoName: "Nom :", repoUrl: "URL :",
    stepTesting: "Cocher « Activer testing » : cette app n'a pas encore de version stable.",
    stepInstall: (n) => `De retour dans le Software Center, chercher ${n} et cliquer sur Installer.`,
    quality: "Qualité", howTo: "Comment améliorer", checks: {"repository": "Publiée dans un dépôt logiciel", "topic": "Topic GitHub « ns8 »", "categories": "Catégories standard", "logo": "Logo", "screenshots": "Captures d'écran", "description": "Description de 60 caractères ou plus", "translations": "Description traduite", "docs": "Liens documentation et bugs", "min_core": "Label core minimum", "license": "Fichier de licence"},
    techUi: {"tech": "Détails techniques", "package": "Paquet", "rootless": "Tourne sans root", "rootfull": "Tourne en root", "images": "Images de conteneur", "permissions": "Droits", "noPermissions": "aucun", "ports": "Ports réservés", "volumes": "Volumes", "tcp": "TCP", "udp": "UDP", "rootfullPerm": "Accès illimité à son nœud", "generic": "Rôle {role} de {module} {where}", "coreRoles": {"reader": "Lire la configuration et l'état de {module} {where}", "owner": "Exécuter n'importe quelle action de {module} {where}"}, "roles": {"node_reader": "Lire la configuration et l'état de son nœud", "node_fwadm": "Ouvrir des ports et modifier le pare-feu de son nœud", "node_portsadm": "Réserver des ports réseau supplémentaires sur son nœud", "node_tunadm": "Créer des tunnels réseau et modifier le pare-feu de son nœud", "cluster_reader": "Lire la configuration et l'état du cluster", "cluster_accountconsumer": "Se connecter à un domaine utilisateur pour lire les utilisateurs et groupes", "cluster_accountprovider": "Fournir un domaine utilisateur au cluster", "traefik_routeadm": "Publier et supprimer des routes web {where}", "traefik_certadm": "Demander et gérer des certificats TLS {where}", "traefik_fulladm": "Contrôle complet des routes web et des certificats TLS {where}", "mail_mailadm": "Lire toutes les boîtes mail et la configuration mail, modifier les règles de relais et de copie cachée systématique {where}", "openldap_domadm": "Créer, modifier et supprimer des utilisateurs et groupes OpenLDAP {where}", "samba_domadm": "Créer, modifier et supprimer des utilisateurs et groupes Samba {where}", "nethvoice-proxy_routeadm": "Gérer les routes SIP du proxy voix {where}", "nethvoice-proxy_trunkadm": "Gérer les trunks SIP du proxy voix {where}", "nethvoice_pbookreader": "Lire les identifiants de la base de l'annuaire NethVoice {where}"}, "scope": {"node": "sur l'instance par défaut de son nœud au moment de l'installation", "any": "sur n'importe quelle instance", "cluster": "sur l'instance par défaut du cluster au moment de l'installation"}, "nodeId": "nœud {id}"},
    stale: "non maintenue", staleTip: "Aucune version stable depuis plus d'un an",
    altUrl: "URL alternative, si la première ne fonctionne pas :",
    copy: "Copier", copied: "Copié", minCore: "Core requis", sortLabel: "Trier", archived: "archivé",
    footer: (d) => `Données collectées sur GitHub le ${d}. Les étoiles sont celles du dépôt de code de chaque app.`,
  },
  it: {
    search: "Cerca app, sviluppatori, categorie…",
    tagline: "Tutte le applicazioni NethServer 8 installabili da un repository software, ufficiali e della community, in un unico posto.",
    apps: "app", developers: "sviluppatori", repositories: "repository", updated: "aggiornato",
    byCategory: "Sfoglia per categoria", byRepo: "Sfoglia per repository",
    recent: "Aggiornate di recente", popular: "Le più stellate", seeAll: "Vedi tutte",
    all: "Tutte le app", category: "Categoria", repository: "Repository",
    filters: "Filtri", official: "Solo ufficiali", showTesting: "Mostra versioni testing", clear: "Azzera filtri",
    sort: { stars: "Più stelle", name: "Nome", updated: "Ultimo aggiornamento" , quality: "Qualità migliore" },
    noResult: "Nessuna app corrisponde a questi filtri.", back: "← Tutte le app",
    variants: (n) => `${n} varianti`, versionsCol: "Stabile", testingCol: "Testing",
    devCol: "Sviluppatore", repoCol: "Repository", updatedCol: "Aggiornato",
 officialBadge: "Ufficiale", archived: "archiviato",
    code: "Codice sorgente", docs: "Documentazione", bugs: "Segnala un bug", releases: "Release", site: "Sito dello sviluppatore",
    history: "Stabile", install: "Installa su NS8", noVersion: "nessuna release",
    stepOfficial: (n) => `Disponibile di default: apri il Software Center, cerca ${n} e clicca Installa.`,
    stepEnableForge: "Apri Software Center › Impostazioni › Repository software e attiva NethForge.",
    stepAddRepo: "Apri Software Center › Impostazioni › Repository software e clicca Aggiungi repository.",
    repoName: "Nome:", repoUrl: "URL:",
    stepTesting: "Spunta “Abilita testing”: questa app non ha ancora una versione stabile.",
    stepInstall: (n) => `Torna al Software Center, cerca ${n} e clicca Installa.`,
    quality: "Qualità", howTo: "Come migliorare", checks: {"repository": "Pubblicata in un repository software", "topic": "Topic GitHub “ns8”", "categories": "Categorie standard", "logo": "Logo", "screenshots": "Screenshot", "description": "Descrizione di almeno 60 caratteri", "translations": "Descrizione tradotta", "docs": "Link a documentazione e bug", "min_core": "Label core minimo", "license": "File di licenza"},
    techUi: {"tech": "Dettagli tecnici", "package": "Pacchetto", "rootless": "Gira senza root", "rootfull": "Gira come root", "images": "Immagini container", "permissions": "Permessi", "noPermissions": "nessuno", "ports": "Porte riservate", "volumes": "Volumi", "tcp": "TCP", "udp": "UDP", "rootfullPerm": "Accesso illimitato al suo nodo", "generic": "Ruolo {role} di {module} {where}", "coreRoles": {"reader": "Leggere configurazione e stato di {module} {where}", "owner": "Eseguire qualsiasi azione di {module} {where}"}, "roles": {"node_reader": "Leggere configurazione e stato del suo nodo", "node_fwadm": "Aprire porte e modificare il firewall del suo nodo", "node_portsadm": "Riservare porte di rete aggiuntive sul suo nodo", "node_tunadm": "Creare tunnel di rete e modificare il firewall del suo nodo", "cluster_reader": "Leggere configurazione e stato del cluster", "cluster_accountconsumer": "Collegarsi a un dominio utenti per leggere utenti e gruppi", "cluster_accountprovider": "Fornire un dominio utenti al cluster", "traefik_routeadm": "Pubblicare e rimuovere route web {where}", "traefik_certadm": "Richiedere e gestire certificati TLS {where}", "traefik_fulladm": "Controllo completo di route web e certificati TLS {where}", "mail_mailadm": "Leggere tutte le caselle di posta e la configurazione mail, modificare le regole di relay e di copia nascosta sempre attiva {where}", "openldap_domadm": "Creare, modificare ed eliminare utenti e gruppi OpenLDAP {where}", "samba_domadm": "Creare, modificare ed eliminare utenti e gruppi Samba {where}", "nethvoice-proxy_routeadm": "Gestire le route SIP del proxy voce {where}", "nethvoice-proxy_trunkadm": "Gestire i trunk SIP del proxy voce {where}", "nethvoice_pbookreader": "Leggere le credenziali del database della rubrica NethVoice {where}"}, "scope": {"node": "sull'istanza predefinita del suo nodo al momento dell'installazione", "any": "su qualsiasi istanza", "cluster": "sull'istanza predefinita del cluster al momento dell'installazione"}, "nodeId": "nodo {id}"},
    stale: "non mantenuta", staleTip: "Nessuna versione stabile da oltre un anno",
    altUrl: "URL alternativo, se il primo non funziona:",
    copy: "Copia", copied: "Copiato", minCore: "Core richiesto", sortLabel: "Ordina",
    footer: (d) => `Dati raccolti da GitHub il ${d}. Le stelle sono quelle del repository sorgente di ogni app.`,
  },
  de: {
    search: "Apps, Entwickler, Kategorien suchen…",
    tagline: "Alle NethServer-8-Anwendungen, die sich aus einem Software-Repository installieren lassen, offiziell und aus der Community, an einem Ort.",
    apps: "Apps", developers: "Entwickler", repositories: "Repositorys", updated: "aktualisiert",
    byCategory: "Nach Kategorie stöbern", byRepo: "Nach Repository stöbern",
    recent: "Kürzlich aktualisiert", popular: "Meiste Sterne", seeAll: "Alle anzeigen",
    all: "Alle Apps", category: "Kategorie", repository: "Repository",
    filters: "Filter", official: "Nur offizielle", showTesting: "Testing-Versionen anzeigen", clear: "Filter zurücksetzen",
    sort: { stars: "Meiste Sterne", name: "Name", updated: "Letzte Aktualisierung" , quality: "Beste Qualität" },
    noResult: "Keine App passt zu diesen Filtern.", back: "← Alle Apps",
    variants: (n) => `${n} Varianten`, versionsCol: "Stabil", testingCol: "Testing",
    devCol: "Entwickler", repoCol: "Repository", updatedCol: "Aktualisiert",
 officialBadge: "Offiziell", archived: "archiviert",
    code: "Quellcode", docs: "Dokumentation", bugs: "Fehler melden", releases: "Releases", site: "Website des Entwicklers",
    history: "Stabil", install: "Auf NS8 installieren", noVersion: "noch kein Release",
    stepOfficial: (n) => `Standardmäßig verfügbar: Software Center öffnen, nach ${n} suchen und auf Installieren klicken.`,
    stepEnableForge: "Software Center › Einstellungen › Software-Repositorys öffnen und NethForge aktivieren.",
    stepAddRepo: "Software Center › Einstellungen › Software-Repositorys öffnen und auf Repository hinzufügen klicken.",
    repoName: "Name:", repoUrl: "URL:",
    stepTesting: "„Testing aktivieren“ ankreuzen: diese App hat noch kein stabiles Release.",
    stepInstall: (n) => `Zurück im Software Center nach ${n} suchen und auf Installieren klicken.`,
    quality: "Qualität", howTo: "So verbessern", checks: {"repository": "In einem Software-Repository veröffentlicht", "topic": "GitHub-Topic „ns8“", "categories": "Standardkategorien", "logo": "Logo", "screenshots": "Screenshots", "description": "Beschreibung mit 60+ Zeichen", "translations": "Übersetzte Beschreibung", "docs": "Links zu Doku und Fehlermeldung", "min_core": "Label für Mindest-Core", "license": "Lizenzdatei"},
    techUi: {"tech": "Technische Details", "package": "Paket", "rootless": "Läuft ohne root", "rootfull": "Läuft als root", "images": "Container-Images", "permissions": "Berechtigungen", "noPermissions": "keine", "ports": "Reservierte Ports", "volumes": "Volumes", "tcp": "TCP", "udp": "UDP", "rootfullPerm": "Unbegrenzter Zugriff auf seinen Knoten", "generic": "Rolle {role} von {module} {where}", "coreRoles": {"reader": "Konfiguration und Status von {module} {where} lesen", "owner": "Jede Aktion von {module} {where} ausführen"}, "roles": {"node_reader": "Konfiguration und Status seines Knotens lesen", "node_fwadm": "Ports öffnen und die Firewall seines Knotens ändern", "node_portsadm": "Zusätzliche Netzwerkports auf seinem Knoten reservieren", "node_tunadm": "Netzwerktunnel erstellen und die Firewall seines Knotens ändern", "cluster_reader": "Konfiguration und Status des Clusters lesen", "cluster_accountconsumer": "Mit einer Benutzerdomäne verbinden, um Benutzer und Gruppen zu lesen", "cluster_accountprovider": "Eine Benutzerdomäne für den Cluster bereitstellen", "traefik_routeadm": "Web-Routen {where} veröffentlichen und entfernen", "traefik_certadm": "TLS-Zertifikate {where} anfordern und verwalten", "traefik_fulladm": "Volle Kontrolle über Web-Routen und TLS-Zertifikate {where}", "mail_mailadm": "Alle Postfächer und die Mail-Konfiguration {where} lesen sowie Relay- und Always-BCC-Regeln ändern", "openldap_domadm": "OpenLDAP-Benutzer und -Gruppen {where} anlegen, ändern und löschen", "samba_domadm": "Samba-Benutzer und -Gruppen {where} anlegen, ändern und löschen", "nethvoice-proxy_routeadm": "SIP-Routen des Voice-Proxys {where} verwalten", "nethvoice-proxy_trunkadm": "SIP-Trunks des Voice-Proxys {where} verwalten", "nethvoice_pbookreader": "Zugangsdaten der NethVoice-Telefonbuch-Datenbank {where} lesen"}, "scope": {"node": "auf der Standardinstanz seines Knotens zum Zeitpunkt der Installation", "any": "auf jeder Instanz", "cluster": "auf der Standardinstanz des Clusters zum Zeitpunkt der Installation"}, "nodeId": "Knoten {id}"},
    stale: "nicht gepflegt", staleTip: "Seit über einem Jahr kein stabiles Release",
    altUrl: "Alternative URL, falls die erste nicht funktioniert:",
    copy: "Kopieren", copied: "Kopiert", minCore: "Benötigt Core", sortLabel: "Sortieren",
    footer: (d) => `Daten am ${d} von GitHub gesammelt. Die Sterne sind die des Quell-Repositorys jeder App.`,
  },
  es: {
    search: "Buscar apps, desarrolladores, categorías…",
    tagline: "Todas las aplicaciones de NethServer 8 instalables desde un repositorio de software, oficiales y de la comunidad, en un solo lugar.",
    apps: "apps", developers: "desarrolladores", repositories: "repositorios", updated: "actualizado",
    byCategory: "Explorar por categoría", byRepo: "Explorar por repositorio",
    recent: "Actualizadas recientemente", popular: "Más estrellas", seeAll: "Ver todas",
    all: "Todas las apps", category: "Categoría", repository: "Repositorio",
    filters: "Filtros", official: "Solo oficiales", showTesting: "Mostrar versiones testing", clear: "Borrar filtros",
    sort: { stars: "Más estrellas", name: "Nombre", updated: "Última actualización" , quality: "Mejor calidad" },
    noResult: "Ninguna app coincide con estos filtros.", back: "← Todas las apps",
    variants: (n) => `${n} variantes`, versionsCol: "Estable", testingCol: "Testing",
    devCol: "Desarrollador", repoCol: "Repositorio", updatedCol: "Actualizado",
 officialBadge: "Oficial", archived: "archivado",
    code: "Código fuente", docs: "Documentación", bugs: "Reportar un error", releases: "Versiones", site: "Sitio del desarrollador",
    history: "Estable", install: "Instalar en NS8", noVersion: "sin release todavía",
    stepOfficial: (n) => `Disponible por defecto: abre el Software Center, busca ${n} y haz clic en Instalar.`,
    stepEnableForge: "Abre Software Center › Ajustes › Repositorios de software y activa NethForge.",
    stepAddRepo: "Abre Software Center › Ajustes › Repositorios de software y haz clic en Añadir repositorio.",
    repoName: "Nombre:", repoUrl: "URL:",
    stepTesting: "Marca “Activar testing”: esta app aún no tiene versión estable.",
    stepInstall: (n) => `De vuelta en el Software Center, busca ${n} y haz clic en Instalar.`,
    quality: "Calidad", howTo: "Cómo mejorar", checks: {"repository": "Publicada en un repositorio de software", "topic": "Topic de GitHub “ns8”", "categories": "Categorías estándar", "logo": "Logo", "screenshots": "Capturas de pantalla", "description": "Descripción de 60+ caracteres", "translations": "Descripción traducida", "docs": "Enlaces a documentación y errores", "min_core": "Label de core mínimo", "license": "Archivo de licencia"},
    techUi: {"tech": "Detalles técnicos", "package": "Paquete", "rootless": "Se ejecuta sin root", "rootfull": "Se ejecuta como root", "images": "Imágenes de contenedor", "permissions": "Permisos", "noPermissions": "ninguno", "ports": "Puertos reservados", "volumes": "Volúmenes", "tcp": "TCP", "udp": "UDP", "rootfullPerm": "Acceso ilimitado a su nodo", "generic": "Rol {role} de {module} {where}", "coreRoles": {"reader": "Leer la configuración y el estado de {module} {where}", "owner": "Ejecutar cualquier acción de {module} {where}"}, "roles": {"node_reader": "Leer la configuración y el estado de su nodo", "node_fwadm": "Abrir puertos y cambiar el cortafuegos de su nodo", "node_portsadm": "Reservar puertos de red adicionales en su nodo", "node_tunadm": "Crear túneles de red y cambiar el cortafuegos de su nodo", "cluster_reader": "Leer la configuración y el estado del clúster", "cluster_accountconsumer": "Conectarse a un dominio de usuarios para leer usuarios y grupos", "cluster_accountprovider": "Proveer un dominio de usuarios al clúster", "traefik_routeadm": "Publicar y eliminar rutas web {where}", "traefik_certadm": "Solicitar y gestionar certificados TLS {where}", "traefik_fulladm": "Control total de rutas web y certificados TLS {where}", "mail_mailadm": "Leer todos los buzones y la configuración del correo, cambiar las reglas de relay y de copia oculta permanente {where}", "openldap_domadm": "Crear, modificar y eliminar usuarios y grupos de OpenLDAP {where}", "samba_domadm": "Crear, modificar y eliminar usuarios y grupos de Samba {where}", "nethvoice-proxy_routeadm": "Gestionar las rutas SIP del proxy de voz {where}", "nethvoice-proxy_trunkadm": "Gestionar los troncales SIP del proxy de voz {where}", "nethvoice_pbookreader": "Leer las credenciales de la base de datos de la agenda de NethVoice {where}"}, "scope": {"node": "en la instancia predeterminada de su nodo en el momento de la instalación", "any": "en cualquier instancia", "cluster": "en la instancia predeterminada del clúster en el momento de la instalación"}, "nodeId": "nodo {id}"},
    stale: "sin mantenimiento", staleTip: "Sin versión estable desde hace más de un año",
    altUrl: "URL alternativa, si la primera no funciona:",
    copy: "Copiar", copied: "Copiado", minCore: "Requiere core", sortLabel: "Ordenar",
    footer: (d) => `Datos recopilados de GitHub el ${d}. Las estrellas son las del repositorio de código de cada app.`,
  },
};

const CATEGORY_NAMES = {
  en: {
    collaboration: "Collaboration", communication: "Communication", office: "Office", monitoring: "Monitoring",
    security: "Security", database: "Database", development: "Development", system_administration: "System administration",
    core: "Core", storage: "Storage", multimedia: "Multimedia", web: "Web", ai: "AI", productivity: "Productivity",
    documentation: "Documentation", accounting: "Accounting", business: "Business", integration: "Integration", mail: "Mail",
  },
  fr: {
    collaboration: "Collaboration", communication: "Communication", office: "Bureautique", monitoring: "Supervision",
    security: "Sécurité", database: "Base de données", development: "Développement", system_administration: "Administration système",
    core: "Cœur", storage: "Stockage", multimedia: "Multimédia", web: "Web", ai: "IA", productivity: "Productivité",
    documentation: "Documentation", accounting: "Comptabilité", business: "Entreprise", integration: "Intégration", mail: "Messagerie",
  },
  it: {
    collaboration: "Collaborazione", communication: "Comunicazione", office: "Ufficio", monitoring: "Monitoraggio",
    security: "Sicurezza", database: "Database", development: "Sviluppo", system_administration: "Amministrazione di sistema",
    core: "Core", storage: "Archiviazione", multimedia: "Multimedia", web: "Web", ai: "IA", productivity: "Produttività",
    documentation: "Documentazione", accounting: "Contabilità", business: "Business", integration: "Integrazione", mail: "Posta",
  },
  de: {
    collaboration: "Zusammenarbeit", communication: "Kommunikation", office: "Büro", monitoring: "Überwachung",
    security: "Sicherheit", database: "Datenbank", development: "Entwicklung", system_administration: "Systemverwaltung",
    core: "Kern", storage: "Speicher", multimedia: "Multimedia", web: "Web", ai: "KI", productivity: "Produktivität",
    documentation: "Dokumentation", accounting: "Buchhaltung", business: "Geschäft", integration: "Integration", mail: "E-Mail",
  },
  es: {
    collaboration: "Colaboración", communication: "Comunicación", office: "Ofimática", monitoring: "Monitorización",
    security: "Seguridad", database: "Base de datos", development: "Desarrollo", system_administration: "Administración de sistemas",
    core: "Núcleo", storage: "Almacenamiento", multimedia: "Multimedia", web: "Web", ai: "IA", productivity: "Productividad",
    documentation: "Documentación", accounting: "Contabilidad", business: "Negocios", integration: "Integración", mail: "Correo",
  },
};

const state = { catalog: null, lang: "en" };
const $ = (sel, root = document) => root.querySelector(sel);

function t(key) {
  return (UI[state.lang] || UI.en)[key] ?? UI.en[key];
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function catName(c) {
  return CATEGORY_NAMES[state.lang]?.[c] || CATEGORY_NAMES.en[c] || c.replace(/[_-]/g, " ").replace(/^./, (x) => x.toUpperCase());
}

function describe(v) {
  const d = v.description || {};
  const text = d[state.lang] || d.en || Object.values(d)[0] || "";
  // Many metadata files carry a one-line blurb; the crawler keeps a longer text for those.
  return text.length < 60 && v.about ? v.about : text;
}

function repoOf(v) {
  return v.forges[0];
}

function repoLabel(id) {
  const f = state.catalog.forges.find((x) => x.id === id);
  return f ? (f.kind === "community" ? f.id : f.name) : id;
}

function relDate(iso) {
  if (!iso) return "";
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000);
  const rtf = new Intl.RelativeTimeFormat(state.lang, { numeric: "auto" });
  if (days < 1) return rtf.format(0, "day");
  if (days < 30) return rtf.format(-days, "day");
  if (days < 365) return rtf.format(-Math.round(days / 30), "month");
  // "last year" spans 365 to 547 days, a month and year says more.
  return new Intl.DateTimeFormat(state.lang, { month: "short", year: "numeric" }).format(new Date(iso));
}

function logo(v, cls = "") {
  const letter = esc((v.name || "?")[0].toUpperCase());
  if (!v.logo) return `<span class="logo fallback ${cls}">${letter}</span>`;
  return `<img class="logo ${cls}" src="${esc(v.logo)}" alt="" loading="lazy"
    onerror="this.outerHTML='<span class=&quot;logo fallback ${cls}&quot;>${letter}</span>'">`;
}

/* Data helpers */

function score(v) {
  return Object.values(v.checks || {}).filter(Boolean).length;
}

const YEAR = 365 * 86400000;

function isStale(v) {
  // A testing release newer than the stable one shows the app is still worked on.
  return !!v.released_at && Date.now() - new Date(v.released_at) > YEAR && !v.testing;
}

function healthBadges(v) {
  return [
    v.archived && `<span class="badge archived">${t("archived")}</span>`,
    isStale(v) && `<span class="badge stale" title="${esc(t("staleTip"))}">${t("stale")}</span>`,
  ].filter(Boolean).join("");
}

// Release date, not last push: bots like Renovate push without releasing.
function lastRelease(app) {
  return app.variants.map((v) => v.released_at || "").sort().pop();
}

function isGitHub(url) {
  try {
    return new URL(url).hostname === "github.com";
  } catch {
    return false;
  }
}

function bestVariant(app) {
  return app.variants[0];
}

function count(list, keyFn) {
  const out = new Map();
  for (const item of list) for (const k of keyFn(item)) out.set(k, (out.get(k) || 0) + 1);
  return [...out].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(b[0]));
}

function searchText(app) {
  if (!app._search) {
    app._search = [
      app.id, ...app.categories.map(catName),
      ...app.variants.flatMap((v) => [v.name, v.developer, ...v.authors, ...v.forges, ...Object.values(v.description), v.about]),
    ].join(" ").toLowerCase();
  }
  return app._search;
}

function filterApps(q) {
  const words = (q.q || "").toLowerCase().split(/\s+/).filter(Boolean);
  return state.catalog.apps.filter((app) =>
    words.every((w) => searchText(app).includes(w)) &&
    (!q.cat || app.categories.includes(q.cat)) &&
    (!q.repo || app.variants.some((v) => repoOf(v) === q.repo)) &&
    (!q.official || app.official) &&
    (q.testing || app.variants.some((v) => v.stable) || !app.variants.some((v) => v.testing))
  );
}

function sortApps(apps, by) {
  const cmp = {
    stars: (a, b) => b.stars - a.stars || a.id.localeCompare(b.id),
    name: (a, b) => bestVariant(a).name.localeCompare(bestVariant(b).name),
    updated: (a, b) => (lastRelease(b) || "").localeCompare(lastRelease(a) || ""),
    quality: (a, b) => score(bestVariant(b)) - score(bestVariant(a)) || b.stars - a.stars,
  }[by] || ((a, b) => b.stars - a.stars);
  return [...apps].sort(cmp);
}

/* Routing: #/, #/apps?cat=office&repo=stephdl, #/app/<id>, #/repos */

function parseHash() {
  const [path, query = ""] = location.hash.replace(/^#/, "").split("?");
  return { path: path || "/", q: Object.fromEntries(new URLSearchParams(query)) };
}

function link(q) {
  const params = new URLSearchParams(Object.entries(q).filter(([, v]) => v));
  const s = params.toString();
  return `#/apps${s ? "?" + s : ""}`;
}

function renderFooter() {
  const date = new Date(state.catalog.generated_at).toLocaleString(state.lang);
  $("#footer").innerHTML = `${esc(t("footer")(date))} <a href="https://github.com/stephdl/ns8-apps">GitHub</a>`;
}

function render() {
  const { path, q } = parseHash();
  renderFooter();
  $("#search").value = q.q || "";
  if (path.startsWith("/app/")) renderApp(decodeURIComponent(path.slice(5)));
  else if (path === "/apps") renderBrowse(q);
  else if (path === "/repos") renderRepos();
  else renderHome();
  document.title = path.startsWith("/app/") ? `${$("h1")?.textContent} · NS8 App Index` : "NS8 App Index";
}

/* Views */

function card(app) {
  const v = bestVariant(app);
  const others = app.variants.length > 1 ? `<span class="badge variants">${t("variants")(app.variants.length)}</span>` : "";
  return `<a class="card" href="#/app/${encodeURIComponent(app.id)}">
    <div class="card-head">${logo(v)}<div><h3>${esc(v.name)}</h3>
      <div class="by">${esc(app.variants.map((x) => x.developer).join(", "))}</div></div></div>
    <p>${esc(describe(v))}</p>
    <div class="card-foot">
      ${app.official ? `<span class="badge official">${t("officialBadge")}</span>` : ""}${others}
      ${healthBadges(v)}
      ${v.stable ? `<span class="version">${esc(v.stable)}</span>`
        : v.testing ? `<span class="badge testing">${esc(v.testing)}</span>` : ""}
      <span class="spacer"></span>
      <span class="stars">★ ${app.stars}</span>
    </div></a>`;
}

function tiles(items, hrefFn, labelFn, subFn) {
  return `<div class="tiles">${items.map(([id, n]) => `<a class="tile" href="${hrefFn(id)}">
    <span>${esc(labelFn(id))}${subFn ? `<small>${esc(subFn(id))}</small>` : ""}</span>
    <span class="count">${n}</span></a>`).join("")}</div>`;
}

// Enough to fill two rows on a wide screen, so the home page height does not grow with the number of repositories.
const HOME_REPOS = 12;

function repoTiles(limit) {
  const { apps, forges } = state.catalog;
  const repos = count(apps, (a) => new Set(a.variants.map(repoOf)));
  const repoSub = (id) => forges.find((f) => f.id === id)?.url.replace(/^https:\/\//, "").replace(/\/ns8\/updates\/$/, "") || "";
  return { total: repos.length, html: tiles(repos.slice(0, limit), (r) => link({ repo: r }), repoLabel, repoSub) };
}

function renderRepos() {
  $("#view").innerHTML = `
    <section class="section">
      <div class="section-head"><h2>${t("byRepo")}</h2></div>
      ${repoTiles().html}
    </section>`;
}

function renderHome() {
  const { apps, forges, generated_at } = state.catalog;
  const devs = count(apps, (a) => new Set(a.variants.map((v) => v.developer)));
  const cats = count(apps, (a) => a.categories);
  const repos = repoTiles(HOME_REPOS);

  $("#view").innerHTML = `
    <section class="hero">
      <h1>NS8 App Index</h1>
      <p>${t("tagline")}</p>
      <div class="stats">
        <div class="stat"><b>${apps.length}</b><span>${t("apps")}</span></div>
        <div class="stat"><b>${devs.length}</b><span>${t("developers")}</span></div>
        <div class="stat"><b>${forges.length}</b><span>${t("repositories")}</span></div>
        <div class="stat"><b>${relDate(generated_at)}</b><span>${t("updated")}</span></div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><h2>${t("byCategory")}</h2><a href="#/apps">${t("seeAll")}</a></div>
      ${tiles(cats, (c) => link({ cat: c }), catName)}
    </section>
    <section class="section">
      <div class="section-head"><h2>${t("byRepo")}</h2>${repos.total > HOME_REPOS ? `<a href="#/repos">${t("seeAll")}</a>` : ""}</div>
      ${repos.html}
    </section>
    <section class="section">
      <div class="section-head"><h2>${t("recent")}</h2><a href="${link({ sort: "updated" })}">${t("seeAll")}</a></div>
      <div class="grid">${sortApps(apps, "updated").slice(0, 6).map(card).join("")}</div>
    </section>
    <section class="section">
      <div class="section-head"><h2>${t("popular")}</h2><a href="${link({ sort: "stars" })}">${t("seeAll")}</a></div>
      <div class="grid">${sortApps(apps, "stars").slice(0, 6).map(card).join("")}</div>
    </section>`;
}

function facet(title, items, key, q, labelFn) {
  return `<div><h4>${title}</h4><div class="facet">${items.map(([id, n]) => {
    const on = q[key] === id;
    return `<a class="${on ? "on" : ""}" href="${link({ ...q, [key]: on ? "" : id })}">
      <span>${esc(labelFn(id))}</span><span>${n}</span></a>`;
  }).join("")}</div></div>`;
}

function renderBrowse(q) {
  const apps = sortApps(filterApps(q), q.sort || "stars");
  // Facet counts follow the other active filters, so each choice shows what it would return.
  const without = (key) => filterApps({ ...q, [key]: "" });
  const chips = [
    q.q && `“${esc(q.q)}”`, q.cat && catName(q.cat), q.repo && repoLabel(q.repo),
  ].filter(Boolean);

  const wide = matchMedia("(min-width: 901px)").matches;
  $("#view").innerHTML = `<div class="browse">
    <details class="filters-box" ${wide || q.open ? "open" : ""}><summary>${t("filters")}</summary><aside class="filters">
      ${facet(t("category"), count(without("cat"), (a) => a.categories), "cat", q, catName)}
      ${facet(t("repository"), count(without("repo"), (a) => new Set(a.variants.map(repoOf))), "repo", q, repoLabel)}
      <div>
        <label><input type="checkbox" id="f-official" ${q.official ? "checked" : ""}> ${t("official")}</label>
        <label><input type="checkbox" id="f-testing" ${q.testing ? "checked" : ""}> ${t("showTesting")}</label>
      </div>
    </aside></details>
    <section>
      <div class="result-bar">
        <div><h2>${apps.length} ${t("apps")}</h2>
          ${chips.length ? `<div class="chips">${chips.map((c) => `<span class="chip">${c}</span>`).join("")}
            <a href="#/apps">${t("clear")}</a></div>` : ""}</div>
        <select id="f-sort" aria-label="${t("sortLabel")}">${Object.entries(t("sort")).map(([k, label]) =>
          `<option value="${k}" ${(q.sort || "stars") === k ? "selected" : ""}>${label}</option>`).join("")}</select>
      </div>
      ${apps.length ? `<div class="grid">${apps.map(card).join("")}</div>` : `<div class="empty">${t("noResult")}</div>`}
    </section></div>`;

  $("#f-official").onchange = (e) => (location.hash = link({ ...q, official: e.target.checked ? "1" : "" }));
  $("#f-testing").onchange = (e) => (location.hash = link({ ...q, testing: e.target.checked ? "1" : "" }));
  $("#f-sort").onchange = (e) => (location.hash = link({ ...q, sort: e.target.value }));
}

function installBlock(v) {
  const steps = (items) => `<ol class="steps">${items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
  const name = `<b>${esc(v.name)}</b>`;
  const forge = state.catalog.forges.find((f) => f.id === v.forges[0]);
  if (!forge || forge.kind === "official") return steps([t("stepOfficial")(name)]);
  if (forge.kind === "nethforge") return steps([t("stepEnableForge"), t("stepInstall")(name)]);
  const testing = !v.stable && v.testing ? [t("stepTesting")] : [];
  return steps([
    t("stepAddRepo"),
    `${t("repoName")} <code>${esc(forge.id)}</code>`,
    `${t("repoUrl")} ${code(forge.url)}${forge.alt_url ? `<p class="alt">${t("altUrl")}</p>${code(forge.alt_url)}` : ""}`,
    ...testing,
    t("stepInstall")(name),
  ]);
}

function code(text) {
  return `<pre><button class="copy" type="button">${t("copy")}</button>${esc(text)}</pre>`;
}

function qualityBlock(v) {
  if (!v.checks) return "";
  const guide = "https://github.com/stephdl/ns8-apps#quality-score";
  return `<div class="install"><h4>${t("quality")} · ${score(v)}/${Object.keys(v.checks).length}
    <a href="${guide}" target="_blank" rel="noopener">${t("howTo")}</a></h4></div>`;
}

const MODULE_NAMES = {mail: "Mail", traefik: "Traefik", openldap: "OpenLDAP", samba: "Samba",
  ldapproxy: "LDAP proxy", nethvoice: "NethVoice", "nethvoice-proxy": "NethVoice proxy"};

// Labels come from third-party images, so a name like "constructor" must not reach Object.prototype.
function own(obj, key) {
  return Object.hasOwn(obj, key) ? obj[key] : undefined;
}

function fill(text, vars) {
  // An empty {where} leaves a double or trailing space behind.
  return text.replace(/\{(\w+)\}/g, (m, k) => vars[k] ?? m).replace(/\s+/g, " ").trim();
}

function permissions(x) {
  // Labels look like "traefik@node:routeadm,certadm", "cluster:accountconsumer" or "1:fwadm".
  const ui = t("techUi");
  const items = x.rootfull ? [{raw: "org.nethserver.rootfull", what: ui.rootfullPerm}] : [];
  // Core applies one entry at a time and the last one for a selector wins, roles are not merged.
  const last = new Map();
  x.authorizations.forEach((entry, i) => {
    const sep = entry.indexOf(":");
    if (sep > 0) last.set(entry.slice(0, sep), i);
  });
  const seen = new Set();
  x.authorizations.forEach((entry, i) => {
    const sep = entry.indexOf(":");
    if (sep < 1) {
      items.push({raw: entry, what: "?"});
      return;
    }
    const selector = entry.slice(0, sep);
    if (last.get(selector) !== i) return;
    const [module, scope = ""] = selector.split("@");
    const nodeId = !scope && /^\d+$/.test(module) ? module : "";
    const agent = nodeId ? "node" : module;
    // Without a scope, only node and cluster point to a real agent.
    const resolved = scope || agent === "node" || agent === "cluster";
    const name = nodeId ? fill(ui.nodeId, {id: nodeId}) : own(MODULE_NAMES, module) || module;
    const where = own(ui.scope, scope) || "";
    for (const role of entry.slice(sep + 1).split(",")) {
      const raw = `${selector}:${role}`;
      // Core grants self:selfadm to every app, it gives nothing on other components.
      if (!role || seen.has(raw) || raw === "self:selfadm") continue;
      seen.add(raw);
      // Role sentences say "its node", which is wrong for a node picked by ID.
      const known = resolved && !nodeId && (own(ui.roles, `${agent}_${role}`) || own(ui.coreRoles, role));
      const what = fill(known || ui.generic, {role, module: name, where});
      items.push({raw, what});
    }
  });
  return items;
}

function techBlock(v) {
  const x = v.tech;
  if (!x) return "";
  const ui = t("techUi");
  const perms = permissions(x);
  const ports = [x.tcp_ports && `${x.tcp_ports} ${ui.tcp}`, x.udp_ports && `${x.udp_ports} ${ui.udp}`].filter(Boolean).join(", ");
  const rows = [
    v.source && [ui.package, `<code>${esc(v.source)}</code>`],
    [ui.permissions, perms.length ? `<table class="perm"><tbody>${perms.map((p) => `<tr${p.raw === "org.nethserver.rootfull" ? ' class="rootfull"' : ""}><td><code>${esc(p.raw).replace(/[@:]/g, "$&<wbr>")}</code></td><td>${esc(p.what)}</td></tr>`).join("")}</tbody></table>` : ui.noPermissions],
    [ui.images, x.images.map((i) => `<code>${esc(i)}</code>`).join(" ")],
    ports && [ui.ports, ports],
    x.volumes.length && [ui.volumes, x.volumes.map((i) => `<code>${esc(i)}</code>`).join(" ")],
  ].filter(Boolean);
  return `<section class="tech"><h4>${ui.tech}
      <span class="badge ${x.rootfull ? "rootfull" : ""}">${x.rootfull ? ui.rootfull : ui.rootless}</span></h4>
    <dl>${rows.map(([k, val]) => `<dt>${k}</dt><dd>${val}</dd>`).join("")}</dl></section>`;
}

function renderApp(id) {
  const app = state.catalog.apps.find((a) => a.id === id);
  if (!app) {
    $("#view").innerHTML = `<a class="back" href="#/apps">${t("back")}</a><div class="empty">${t("noResult")}</div>`;
    return;
  }
  const main = bestVariant(app);
  const mainForge = state.catalog.forges.find((f) => f.id === repoOf(main));
  const homepage = mainForge?.homepage;
  const siteTitle = mainForge && mainForge.kind !== "community" ? mainForge.name : `${t("site")} · ${main.developer}`;
  const rows = app.variants.map((v) => {
    const docs = v.docs || {};
    const links = [
      v.code_url && `<a href="${esc(v.code_url)}" target="_blank" rel="noopener">${t("code")}</a>`,
      isGitHub(v.code_url) && `<a href="${esc(v.code_url.replace(/\/$/, ""))}/releases" target="_blank" rel="noopener">${t("releases")}</a>`,
      docs.documentation_url && `<a href="${esc(docs.documentation_url)}" target="_blank" rel="noopener">${t("docs")}</a>`,
      docs.bug_url && `<a href="${esc(docs.bug_url)}" target="_blank" rel="noopener">${t("bugs")}</a>`,
    ].filter(Boolean).join("");
    const history = v.stable
      ? `<span class="version">${esc(v.stable)}</span>`
      : `<span class="badge">${t("noVersion")}</span>`;
    const shots = v.screenshots.length
      ? `<div class="shots">${v.screenshots.map((s) => `<a href="${esc(s)}" target="_blank" rel="noopener"><img src="${esc(s)}" alt="" loading="lazy"></a>`).join("")}</div>` : "";
    const sameText = describe(v) === describe(main);

    return `<details class="variant" ${app.variants.length === 1 ? "open" : ""}>
      <summary>
        <span class="dev"><b>${esc(v.developer)}</b><small>${esc(v.authors.join(", ") || v.name)}</small></span>
        <span class="col-hide">${esc(repoLabel(repoOf(v)))}${v.kind === "official" ? ` <span class="badge official">${t("officialBadge")}</span>` : ""}</span>
        <span class="version">${esc(v.stable || "–")}</span>
        <span class="col-hide">${v.testing ? `<span class="badge testing">${esc(v.testing)}</span>` : ""}</span>
        <span class="stars">${v.stars == null ? "" : "★ " + v.stars}</span>
        <span class="col-hide" title="${esc(v.released_at || "")}">${relDate(v.released_at)}</span>
      </summary>
      <div class="variant-body">
        ${sameText ? "" : `<p>${esc(describe(v))}</p>`}
        ${healthBadges(v) ? `<div class="chips">${healthBadges(v)}</div>` : ""}
        <div class="links">${links}${v.min_core ? `<span>${t("minCore")} ≥ ${esc(v.min_core)}</span>` : ""}</div>
        <div><div class="install"><h4>${t("history")}</h4></div><div class="history">${history}</div></div>
        <div class="install"><h4>${t("install")}</h4>${installBlock(v)}</div>
        ${techBlock(v)}
        ${qualityBlock(v)}
        ${shots}
      </div></details>`;
  }).join("");

  $("#view").innerHTML = `<a class="back" href="#/apps">${t("back")}</a>
    <div class="app-head">${logo(main, "big")}<div>
      <h1>${esc(main.name)}</h1>
      <div class="meta">
        ${app.official ? `<span class="badge official">${t("officialBadge")}</span>` : ""}
        ${app.categories.map((c) => `<a class="badge" href="${link({ cat: c })}">${esc(catName(c))}</a>`).join("")}
        <span class="stars">★ ${app.stars}</span>
        ${homepage ? `<a class="chip site" href="${esc(homepage)}" target="_blank" rel="noopener" title="${esc(siteTitle)}">${esc(homepage.replace(/^https:\/\//, "").replace(/\/$/, ""))} ↗</a>` : ""}
      </div></div></div>
    <p class="lead">${esc(describe(main))}</p>
    <div class="variants">
      <div class="variants-head"><span>${t("devCol")}</span><span>${t("repoCol")}</span><span>${t("versionsCol")}</span>
        <span>${t("testingCol")}</span><span>★</span><span>${t("updatedCol")}</span><span></span></div>
      ${rows}
    </div>`;
}

/* Startup */

function setLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  $("#lang").value = lang;
  $("#search").placeholder = t("search");
  try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
}

function storedLang() {
  try { return localStorage.getItem("lang"); } catch (e) { return null; }
}

async function init() {
  const browser = (navigator.language || "en").slice(0, 2);
  setLang(storedLang() || ($("#lang").querySelector(`option[value="${browser}"]`) ? browser : "en"));
  const res = await fetch("catalog.json", { cache: "no-cache" });
  state.catalog = await res.json();

  $("#lang").onchange = (e) => { setLang(e.target.value); render(); };
  let timer;
  $("#search").oninput = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const { path, q } = parseHash();
      const base = path === "/apps" ? q : {};
      history.replaceState(null, "", link({ ...base, q: e.target.value }));
      render();
      $("#search").focus();
    }, 150);
  };
  $("#search-form").onsubmit = (e) => e.preventDefault();
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".copy");
    if (!btn) return;
    navigator.clipboard.writeText(btn.parentElement.textContent.replace(btn.textContent, "").trim());
    btn.textContent = t("copied");
    setTimeout(() => (btn.textContent = t("copy")), 1500);
  });
  window.addEventListener("hashchange", render);
  render();
}

init().catch((err) => {
  $("#view").innerHTML = `<div class="empty">Could not load catalog.json: ${esc(err.message)}</div>`;
});
