---
type: concept
title: "Awesome Open AI Developer Tools"
source: "https://sami-uysal.github.io/awesome-open-ai-developer-tools/languages/tr/"
path: /languages/tr/
updated: 2026-08-20
okf:
  generated_by: "@docmd/plugin-okf"
  generated_at: "2026-08-20T14:29:39.099Z"
---
# Awesome Open AI Developer Tools

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**Açık kaynak yapay zekâ yığınının her katmanı için derlenmiş rehber — ve yerine geçtiği her ücretli ürün.**

Kodlama ajanları · yerel çıkarım · ajan çatıları · vektör veritabanları · RAG · değerlendirme · gözlemlenebilirlik

[English](../index.md) · **Türkçe** · [简体中文](./zh.md) · [Español](./es.md) · [kendi dilini ekle](../community/translations.md) · [🌐 Web sitesi](https://sami-uysal.github.io/awesome-open-ai-developer-tools/)


---

Her madde üç soruya cevap verir:

1. **Ne işe yarar?**
2. **Hangi kapalı kaynak ürünün yerine geçer?**
3. **Alternatiflerine karşı neden bunu seçersin?**

Her madde bir olgunluk rozeti de taşır: 🟢 stable (üretime hazır) · 🟡 active (harika çalışır, hızlı değişir) · 🟠 experimental (erken aşama, pürüz beklenir).

Affiliate link yok. Sponsorlu sıra yok. Yalnızca OSI onaylı lisanslar — kaynağı görünür ama tam açık olmayan araçlar listeye girebilir, ancak açıkça etiketlenir.

> **Lisanslar hakkında:** bir maddede yazan lisans işarettir, garanti değil — projeler lisans değiştirir ve bu liste geriden gelir. Ticari olarak bir araca bağımlı olmadan önce repo'daki `LICENSE` dosyasını oku. Lisans yazmayan maddeler, doğrulamadıklarımızdır.

---

## İçindekiler

- [Kodlama Ajanları ve Eşli Programlama](#kodlama-ajanları-ve-eşli-programlama)
- [Prompt'tan Uygulamaya Üreticiler](#prompttan-uygulamaya-üreticiler)
- [Otonom ve Kalıcı Ajanlar](#otonom-ve-kalıcı-ajanlar)
- [Ajan Kum Havuzları ve Tarayıcı Kontrolü](#ajan-kum-havuzları-ve-tarayıcı-kontrolü)
- [Ajan Çatıları ve Orkestrasyon](#ajan-çatıları-ve-orkestrasyon)
- [Model Context Protocol (MCP)](#model-context-protocol-mcp)
- [Yerel Çıkarım Motorları](#yerel-çıkarım-motorları)
- [Çıkarım Sunucuları ve Ağ Geçitleri](#çıkarım-sunucuları-ve-ağ-geçitleri)
- [Sohbet Arayüzleri](#sohbet-arayüzleri)
- [Vektör Veritabanları](#vektör-veritabanları)
- [Embedding'ler ve Yeniden Sıralayıcılar](#embeddingler-ve-yeniden-sıralayıcılar)
- [RAG Çatıları](#rag-çatıları)
- [İnce Ayar ve Eğitim](#ince-ayar-ve-eğitim)
- [Değerlendirme, Test ve Koruma Katmanları](#değerlendirme-test-ve-koruma-katmanları)
- [Gözlemlenebilirlik ve LLMOps](#gözlemlenebilirlik-ve-llmops)
- [Ses, Görüntü ve Çok Kipli](#ses-görüntü-ve-çok-kipli)
- [Az Kodlu / Görsel Üreticiler](#az-kodlu--görsel-üreticiler)
- [Açık Kaynak Alternatifler Tablosu](#açık-kaynak-alternatifler-tablosu)
- [Yığınını Seçmek](#yığınını-seçmek)
- [Katkı](#katkı)

---

## Kodlama Ajanları ve Eşli Programlama

Depondaki kodu okuyan, yazan ve yeniden düzenleyen ajanlar.

### [aider](https://github.com/Aider-AI/aider)
`Python` · `Apache-2.0` · CLI · 🟡 active

Terminalde yapay zekâ ile eşli programlama. Deponun tamamının haritasını çıkarır, dosyaları doğrudan düzenler ve kendi git commit'lerini yazar.

- **Yerine geçtiği:** GitHub Copilot, Cursor
- **Arka uçlar:** LiteLLM üzerinden 100+ model — Claude, GPT, Gemini; ayrıca Ollama veya OpenAI uyumlu herhangi bir uç nokta üzerinden yerel modeller
- **Farkı:** Depo haritası, her dosyayı prompt'a doldurmadan tüm kod tabanı bağlamını verir. Otomatik commit'ler sayesinde her yapay zekâ düzenlemesi geri alınabilir bir kontrol noktası olur. Editörden bağımsız — VS Code, Neovim, Emacs ile ya da hiçbiriyle çalışır.

### [OpenCode](https://github.com/sst/opencode)
`TypeScript` · `MIT` · TUI · 🟢 stable

LSP entegrasyonlu, terminal yerlisi kodlama ajanı — doğru dil sunucusunu yükler, böylece model tahmin yerine gerçek tip bilgisini görür.

- **Yerine geçtiği:** Claude Code, Cursor
- **Arka uçlar:** Anthropic, OpenAI, Google, yerel modeller; tasarımı gereği sağlayıcıdan bağımsız
- **Farkı:** LSP'ye dayalı öneriler uydurma API çağrılarını azaltır. İstemci/sunucu ayrımı tek oturumu birden çok istemciden sürmeyi mümkün kılar.

### [Cline](https://github.com/cline/cline)
`TypeScript` · `Apache-2.0` · VS Code eklentisi · 🟢 stable

VS Code içinde otonom kodlama ajanı. Planlar, dosyaları düzenler, terminal komutları çalıştırır ve tarayıcı kullanır — her adımda izin isteyerek.

- **Yerine geçtiği:** Cursor Composer, Devin
- **Arka uçlar:** Anthropic, OpenAI, Google, AWS Bedrock, Azure, OpenRouter, Ollama, LM Studio
- **Farkı:** Varsayılan olarak insan onaylı — her dosya farkı ve kabuk komutu onay ister. Plan/Act ayrımı ajanın kod tabanını buldozerle geçmesini engeller.

### [Continue](https://github.com/continuedev/continue)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains · 🟢 stable

Kendi yapay zekâ kod asistanını kur — otomatik tamamlama, sohbet ve düzenleme; kendi modellerin ve kendi bağlam sağlayıcılarınla.

- **Yerine geçtiği:** GitHub Copilot
- **Arka uçlar:** Hepsi — yerel (Ollama, llama.cpp) veya bulut
- **Farkı:** Tamamen yapılandırılabilir bağlam sağlayıcıları (dokümanlar, terminal, git diff, kod tabanı). Sekme tamamlaması küçük yerel modellerle bile iyi çalışır, yani gerçekten çevrimdışı kullanabilirsin.

### [OpenHands](https://github.com/All-Hands-AI/OpenHands)
`Python` · `MIT` · Web + başsız · 🟢 stable

Bir geliştiricinin yaptığını yapan ajanlar — kodu değiştirir, komut çalıştırır, web'de gezinir, API çağırır — hepsi izole bir çalışma ortamında.

- **Yerine geçtiği:** Devin
- **Arka uçlar:** LiteLLM'in desteklediği her şey
- **Farkı:** Gerçek izole çalıştırma (Docker) — komut çalıştırıyormuş gibi yapan bir sohbet değil. Başsız ve CLI modları CI içinde betiklenebilir kılar.

### [SWE-agent](https://github.com/SWE-agent/SWE-agent)
`Python` · `MIT` · CLI · 🟡 active

Bir GitHub issue'sunu pull request'e dönüştüren, araştırma seviyesinde ajan.

- **Yerine geçtiği:** Devin, issue'dan PR üreten botlar
- **Farkı:** Asıl mesele ajan-bilgisayar arayüzü (ACI): iyi tasarlanmış araçlar, daha büyük modeli yener. Kendi ajanını yazacaksan önce bu kod tabanını oku.

### [Goose](https://github.com/block/goose)
`Rust` · `Apache-2.0` · CLI + masaüstü · 🟢 stable

Block'un geliştirdiği, artık Linux Foundation yönetimindeki genişletilebilir otonom ajan. Kurar, çalıştırır, düzenler ve test eder — sadece öneri sunmaz.

- **Yerine geçtiği:** Devin, Cursor ajan modu
- **Arka uçlar:** Her sağlayıcı, ayrıca birinci sınıf MCP eklenti desteği
- **Farkı:** aider'dan daha otonom — daha az yönlendirmeyle planlar ve yineler. Linux Foundation altındaki tarafsız yönetişim, ekip standardı hâline getireceğin bir araçta lisans değişikliği riskini ortadan kaldırır.

### [Kilo Code](https://github.com/Kilo-Org/kilocode)
`TypeScript` · `Apache-2.0` · VS Code + JetBrains · 🟢 stable

Roo Code ve Cline'ın en iyi yanlarını tek eklentide birleştiren açık kaynak IDE ajanı.

- **Yerine geçtiği:** Cursor, Windsurf
- **Farkı:** Orchestrator modu büyük bir görevi uzmanlaşmış modların üstlendiği alt görevlere böler. İki ana projeden de özellik devraldığı için ikisinin tek başına ilerlediğinden hızlı ilerliyor.

### [Tabby](https://github.com/TabbyML/tabby)
`Rust` · `Apache-2.0` · Kendi sunucunda · 🟢 stable

Kendi çıkarım sunucusuyla gelen, dışarıya hiçbir API çağrısı yapmayan kod asistanı.

- **Yerine geçtiği:** GitHub Copilot (kurumsal)
- **Farkı:** Tüketici GPU'larında çalışır, OpenAPI arayüzü sunar ve "kodumuz nereye gidiyor?" sorusuna "hiçbir yere" cevabını verir.

### [gpt-engineer](https://github.com/gpt-engineer-org/gpt-engineer)
`Python` · `MIT` · CLI · 🟠 experimental

Bir projeyi doğal dille tarif et; tüm kod tabanını yazar ve üzerinde yineler.

- **Farkı:** Mevcut bir depoda cerrahi düzenlemeler yerine sıfırdan iskelet kurmak için uygun.

---

## Prompt'tan Uygulamaya Üreticiler

Prompt gir, dağıtıma hazır tam yığın uygulama çık.

### [bolt.diy](https://github.com/stackblitz-labs/bolt.diy)
`TypeScript` · `MIT` · 🟢 stable

Bolt.new'in resmî açık kaynak çatallanması. Tarayıcıda tam yığın web uygulamalarını prompt'la, çalıştır, düzenle ve dağıt — istediğin LLM ile.

- **Yerine geçtiği:** Bolt.new, v0, Replit Agent
- **Arka uçlar:** OpenAI, Anthropic, Google, Groq, Mistral, DeepSeek, xAI, Ollama, LM Studio, OpenRouter, OpenAI uyumlu her uç nokta
- **Farkı:** Sıfır telemetriyle kendi sunucunda barındırılabilir. Proje ortasında sağlayıcı değiştirebilmek, ucuz bir modelle başlayıp yalnızca gereken yerde yukarı çıkmanı sağlar.

### [Open Design](https://github.com/nexu-io/open-design)
`TypeScript` · `Apache-2.0` · Masaüstü + web · 🟠 experimental

Zaten kullandığın kodlama ajanını bir tasarım motoruna dönüştürür — prototipler, açılış sayfaları, panolar, sunumlar, görseller ve video; HTML/PDF/PPTX/MP4 olarak dışa aktarılır.

- **Yerine geçtiği:** Claude Design, Figma Make
- **Arka uçlar:** PATH'inde ne varsa onunla BYOK — Claude Code, Codex, Cursor, Gemini, OpenCode, Qwen ve 20+ CLI
- **Farkı:** Marka seviyesinde geniş bir tasarım sistemi kütüphanesiyle gelir ve her render `DESIGN.md` marka sözleşmesini okur; yani çıktı rastgele biçimlenmez, tutarlı olur. Yerel öncelikli: marka varlıkların makineden çıkmaz.

### [OpenUI](https://github.com/wandb/openui)
`Python + TypeScript` · `Apache-2.0` · 🟡 active

Bir arayüzü tarif et, canlı render'ını izle, React/Svelte/Vue'ya çevir.

- **Yerine geçtiği:** v0.dev
- **Farkı:** Canlı yineleme döngüsü — değişikliği tarif et, anında gör. Ollama üzerinden yerel modellerle çalışır.

### [Dyad](https://github.com/dyad-sh/dyad)
`TypeScript` · `Apache-2.0` · Masaüstü · 🟢 stable

Yerel çalışan açık kaynak yapay zekâ uygulama üreticisi. Kendi makinende çalışır, kendi API anahtarlarını kullanır.

- **Yerine geçtiği:** Lovable, v0, Bolt
- **Farkı:** Sağlayıcıya bağımlılık yok ve kaynak kodun bulut turuna çıkmıyor.

---

## Otonom ve Kalıcı Ajanlar

Belleği, hedefleri ve kendi yönelimi olan uzun soluklu ajanlar.

### [OpenClaw](https://github.com/openclaw/openclaw)
`TypeScript` · `MIT` · 🟡 active

Her işletim sisteminde çalışan, sana her platformdan ulaşan kişisel yapay zekâ asistanı. Tarihin en hızlı büyüyen açık kaynak projelerinden biri.

- **Yerine geçtiği:** ChatGPT masaüstü, Claude Desktop, Microsoft Copilot
- **Arka uçlar:** OpenAI uyumlu her API, Ollama, LocalAI
- **Farkı:** Telegram, Discord, Slack, WhatsApp, Signal, e-posta ve CLI ağ geçitleri sayesinde ajan seni zaten bulunduğun yerde yakalar — ve sana kendisi mesaj atabilir. Geniş beceri/eklenti ekosistemi. **Güvenlik notu:** mesajlaşma hesaplarının kimlik bilgilerini tutar ve otonom çalışır; hassas hiçbir şeye yöneltmeden önce izole et ve izin modelini oku.

### [Hermes Agent](https://github.com/NousResearch/hermes-agent)
`Python` · `MIT` · 🟡 active

Nous Research'ün kendini geliştiren ajanı — kalıcı bellek, yeniden kullanılabilir beceriler, zamanlanmış görevler ve 20+ mesajlaşma yüzeyi.

- **Yerine geçtiği:** OpenAI Operator, Claude Desktop
- **Farkı:** Kapalı öğrenme döngüsü: deneyimden beceri üretir, kullanırken bu becerileri iyileştirir, belleği ve oturum geçmişini yeniden başlatmalar arasında SQLite'ta saklar. Ucuz bir VPS'te veya sunucusuz ortamda boşta maliyet üretmeden çalışır.

### [DeerFlow](https://github.com/bytedance/deer-flow)
`Python` · `MIT` · 🟡 active

ByteDance'in uzun soluklu "SuperAgent" koşum takımı — dakikalardan saatlere uzayan görevler için kum havuzları, bellek, beceriler, alt ajanlar ve mesaj ağ geçidi.

- **Farkı:** LangGraph üzerine kurulu, ama bir ajanın gerçekten ihtiyaç duyduğu tüm çalışma ortamını (dosya sistemi, bellek, izole çalıştırma, alt ajan üretimi) hazır verir; parçaları sana birleştirtmez. 2.0 sürümüyle GitHub Trending'de bir numaraya çıktı.

### [Open-Sable](https://github.com/IdeoaLabs/Open-Sable)
`Python` · Yerel öncelikli ajan çatısı · 🟡 active

AGI esinli bilişsel alt sistemlere sahip otonom ajan — hedefler, çalışma/epizodik/uzun vadeli bellek, üstbiliş ve araç kullanımı.

- **Farkı:** Bulut yedeğiyle Ollama öncelikli çalışır ve düşük VRAM modu vardır; yani gerçekten kendi donanımında koşar. Bellek sönümlemesi ve konsolidasyonu, artı watchdog/sıcak yeniden yükleme denetleyicisi, 7/24 çalışmayı temenni olmaktan çıkarıp gerçekçi kılar.

### [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)
`Python + TypeScript` · MIT (klasik ajan) / Polyform Shield (platform) · 🟢 stable

Otonom ajan dalgasını başlatan proje; bugün sürekli çalışan ajanlar kurmak için az kodlu bir platform.

- **Farkı:** Blok tabanlı görsel üretici ve hazır ajan kütüphanesi. Lisans ayrımına dikkat — klasik ajan MIT, yeni platform kaynağı görünür ama OSI onaylı değil.

### [Letta](https://github.com/letta-ai/letta)
`Python` · `Apache-2.0` · 🟢 stable

Eski adıyla MemGPT. Gerçek uzun vadeli belleğe sahip durum tutan ajanlar — ajan kendi bağlam penceresini yönetir, anıları içeri ve dışarı sayfalar.

- **Yerine geçtiği:** OpenAI Assistants API
- **Farkı:** Bellek, vektör aramaya sonradan eklenmiş bir yama değil, veritabanıyla desteklenen birinci sınıf bir kavram. Ajanlar oturumlar arasında yaşar ve modeller arasında taşınabilir.

### [Mem0](https://github.com/mem0ai/mem0)
`Python + TypeScript` · `Apache-2.0` · 🟢 stable

Herhangi bir ajana takabileceğin bellek katmanı — kullanıcı hakkındaki bilgileri oturumlar boyunca çıkarır, saklar ve geri getirir.

- **Farkı:** Çatıdan bağımsız. Hibrit vektör + graf deposu, sohbet günlüğünü olduğu gibi vektör veritabanına doldurmaktan çok daha iyi sonuç verir.

### [Khoj](https://github.com/khoj-ai/khoj)
`Python` · `AGPL-3.0` · 🟢 stable

Notlarında, belgelerinde ve web'de arama yapan, kendi sunucunda çalışan kişisel yapay zekâ; tarayıcıdan, Obsidian'dan ve Emacs'ten erişilir.

- **Yerine geçtiği:** Bellekli ChatGPT, Notion AI
- **Farkı:** *Senin* arşivini yerelde indeksler. Yerel modellerle tamamen çevrimdışı çalışır.

---

## Ajan Kum Havuzları ve Tarayıcı Kontrolü

Ajanın ürettiği kod nerede çalışıyor ve ajan web'e nasıl dokunuyor.

### [E2B](https://github.com/e2b-dev/E2B)
`TypeScript + Go` · `Apache-2.0` · SDK + kendi sunucunda kurulabilir altyapı · 🟢 stable

Yapay zekânın ürettiği kodu çalıştırmak için Firecracker microVM üzerine kurulu güvenli bulut kum havuzları.

- **Yerine geçtiği:** kapalı kaynak kod yorumlayıcı arka uçları
- **Farkı:** microVM izolasyonu her kum havuzuna kendi çekirdeğini verir — namespace ayrımı değil, gerçek bir güvenlik sınırı. Bir modelin yazdığı kodu çalıştırdığın anda bu ayrım önem kazanır. Python ve JS SDK'ları var; tüm platformu kendin çalıştırmak istersen [e2b-dev/infra](https://github.com/e2b-dev/infra).

### [Daytona](https://github.com/daytonaio/daytona)
`Go + TypeScript` · `Apache-2.0` · Sunucu + SDK · 🟠 experimental

Hızlı sıcak havuz başlatma ve oturumlar arası kalıcı dosya sistemi sunan ajan kum havuzu çalışma ortamı.

- **Yerine geçtiği:** E2B (izolasyon gücü yerine kalıcılık gerektiğinde)
- **Farkı:** kum havuzları duraklatılabilir, devam ettirilebilir ve tek bir oturumdan uzun yaşayabilir — uzun soluklu ajanların gerçekten ihtiyaç duyduğu şey bu. microVM değil konteyner tabanlı, yani izolasyonu E2B'den zayıf kabul et: kendi kodun için uygun, gerçekten güvenilmeyen girdi için iki kere düşün.

### [browser-use](https://github.com/browser-use/browser-use)
`Python` · `MIT` · Kütüphane · 🟡 active

Bir LLM'i gerçek bir tarayıcıya bağlar; gezinir, form doldurur, veri çeker.

- **Yerine geçtiği:** Stagehand, MultiOn
- **Farkı:** en yaygın kullanılan açık tarayıcı ajanı; çoklu sekme yönetimi ve DOM yetmediğinde görsel yedeği var. **Bilinen zayıflık:** deterministik değil — aynı hedef her koşuda farklı yoldan gidiyor, bu da hataları tekrar üretmeyi zorlaştırıyor; karmaşık sayfalarda görsel çağrılar pahalıya patlıyor. Yeniden deneme payı bırak ve harcamana tavan koy.

### [Skyvern](https://github.com/Skyvern-AI/skyvern)
`Python` · `AGPL-3.0` · Kütüphane + sunucu · 🟢 stable

DOM seçicileri yerine bilgisayarlı görü ile sürülen tarayıcı otomasyonu.

- **Yerine geçtiği:** Stagehand, kırılgan Playwright kazıma paketleri
- **Farkı:** görsel olarak gezindiği için site tasarımı değiştiğinde seçicilerin bozulmuyor — kazıma hatlarının çürümesinin bilinen sebebi buydu. **Lisansa dikkat:** AGPL-3.0 ve anti-bot parçaları ücretli buluta saklanmış. Bu ikili bazı ticari kullanımları tamamen eliyor.

---

## Ajan Çatıları ve Orkestrasyon

Çok ajanlı ve araç kullanan sistemler kurmak için kütüphaneler.

### [LangGraph](https://github.com/langchain-ai/langgraph)
`Python + JS` · `MIT` · 🟢 stable

Ajanları durum tutan graflar olarak kur — düğümler, kenarlar ve açık akış kontrolü; kontrol noktaları ve insan onayı için kesintilerle birlikte.

- **Farkı:** Dayanıklı çalıştırma: bir ajan insan onayı için saatlerce duraklayıp tüm durumuyla kaldığı yerden devam edebilir. Demo değil *güvenilir* bir ajan gerektiğinde doğru tercih.

### [CrewAI](https://github.com/crewAIInc/crewAI)
`Python` · `MIT` · 🟢 stable

İş birliği yapan rol oyunculu otonom ajanlar — tanımlı roller, hedefler ve görevlerden oluşan bir "ekip".

- **Yerine geçtiği:** AutoGen, OpenAI Swarm
- **Farkı:** LangChain'den bağımsız, hafif çalışma zamanı. Rol/görev soyutlaması çok ajanlı tasarıma en sezgisel giriş yolu. Ekipler fazla gevşek kaldığında Flows olay güdümlü kontrol verir.

### [AutoGen](https://github.com/microsoft/autogen)
`Python + .NET` · `MIT` · 🟢 stable

Microsoft'un çok ajanlı konuşma çatısı — ajanlar birbirleriyle konuşur, kod çalıştırır ve insanı sürece katar.

- **Farkı:** Asenkron, olay güdümlü çekirdek; dağıtık çalışma zamanı ve diller arası destek. AutoGen Studio kod yazmadan prototipleme arayüzü sunar.

### [smolagents](https://github.com/huggingface/smolagents)
`Python` · `Apache-2.0` · 🟢 stable

Hugging Face'in minimal ajan kütüphanesi — çekirdek mantık yaklaşık bin satır.

- **Farkı:** Çalışan tek ajan döngüsüne en kısa yol. Kod ajanları JSON araç çağrısı üretmek yerine Python eylemleri yazar; çok adımlı görevlerde bu ölçülebilir biçimde daha güvenilir. Bir öğleden sonrada baştan sona okunur.

### [Google ADK](https://github.com/google/adk-python)
`Python + Java` · `Apache-2.0` · 🟢 stable

Çok ajanlı sistemler kurmak, değerlendirmek ve dağıtmak için kod öncelikli araç seti.

- **Farkı:** Google adına rağmen modelden ve dağıtım ortamından bağımsız. Yerleşik değerlendirme ve yerel geliştirme arayüzü, çoğu çatının görmezden geldiği "ajanım kötüleşti mi nereden bileceğim?" boşluğunu kapatır.

### [Pydantic AI](https://github.com/pydantic/pydantic-ai)
`Python` · `MIT` · 🟢 stable

Pydantic ekibinden ajan çatısı — tip güvenli, yapılandırılmış çıktılar, bağımlılık enjeksiyonu.

- **Farkı:** Doğrulama için Pydantic'e zaten güveniyorsan, aynı titizliği LLM girdi/çıktısına taşır. Ajanlar için FastAPI hissi verir.

### [DSPy](https://github.com/stanfordnlp/dspy)
`Python` · `MIT` · 🟢 stable

LLM'lere prompt yazmak yerine onları programla — modülleri tanımla, prompt'ları optimize ediciler derlesin.

- **Farkı:** Elle prompt kurcalamayı, bir metriğe karşı sistematik optimizasyonla değiştirir. Modeli değiştir, yeniden derle, kaliteyi koru.

### [LiteLLM](https://github.com/BerriAI/litellm)
`Python` · `MIT` · 🟢 stable

100+ LLM sağlayıcısı için tek OpenAI uyumlu arayüz; üstüne anahtar, bütçe, hız sınırı ve yedekleme yöneten bir proxy.

- **Yerine geçtiği:** OpenRouter (bulut)
- **Farkı:** Yığındaki en işe yarar tesisat parçası. Sağlayıcı çöktü → otomatik yedeğe düşer. Ekip bazlı bütçe ve harcama takibi bedava gelir.

### [Haystack](https://github.com/deepset-ai/haystack)
`Python` · `Apache-2.0` · 🟢 stable

Birleştirilebilir RAG ve ajan hatları için üretim odaklı çatı.

- **Farkı:** Açık ve incelenebilir hat grafikleri. Güçlü retriever/ranker ekosistemi — asıl zorluk arama kalitesiyse tercih edilir.

---

## Model Context Protocol (MCP)

Modelleri araçlara ve veriye bağlamak için yükselen standart.

### [MCP Spesifikasyonu](https://github.com/modelcontextprotocol/modelcontextprotocol)
`MIT` · 🟢 stable

Protokolün kendisi — araçları, kaynakları ve prompt'ları herhangi bir LLM istemcisine açmak için açık standart.

- **Farkı:** Entegrasyonu bir kez yaz; MCP destekleyen her istemci (Claude Code, OpenCode, Cline, Continue ve dahası) kullanabilsin.

### [MCP Sunucuları](https://github.com/modelcontextprotocol/servers)
`MIT` · 🟡 active

Referans uygulamalar — dosya sistemi, git, fetch, bellek ve onlarca topluluk sunucusu.

- **Farkı:** Protokolü öğrenmenin en hızlı yolu, hâlihazırda çalışan 200 satırlık bir sunucuyu okumaktır.

### [MCP Inspector](https://github.com/modelcontextprotocol/inspector)
`TypeScript` · `MIT` · 🟡 active

MCP sunucularını test etmek ve hata ayıklamak için resmî geliştirici aracı.

- **Farkı:** gerçek protokol trafiğini gösterir — araç çağrıları, kaynaklar, hatalar — böylece istemcinin sunucunu neden yüklemediğini tahmin etmeye çalışmazsın. Bir MCP entegrasyonu sessizce hiçbir şey yapmadığında ilk uzanacağın araç.

### [FastMCP](https://github.com/jlowin/fastmcp)
`Python` · `Apache-2.0` · 🟡 active

MCP sunucusu ve istemcisi yazmanın konforlu yolu — FastAPI gibi dekoratör tabanlı.

- **Farkı:** ~10 satırda çalışan sunucu. Kimlik doğrulama, dağıtım, proxy'leme ve sunucu birleştirmeyi üstlenir.

---

## Yerel Çıkarım Motorları

Modelleri kendi donanımında çalıştır.

### [Ollama](https://github.com/ollama/ollama)
`Go` · `MIT` · 🟢 stable

Açık modelleri tek komutla indir ve çalıştır. Yerel LLM'lere varsayılan giriş kapısı.

- **Yerine geçtiği:** OpenAI API (yerel iş yükleri için)
- **Farkı:** `ollama run <model>` ve bitti — indirme, niceleme (quantization), GPU'ya aktarma ve OpenAI uyumlu API sunma işini kendisi halleder. Yerel çalışma zamanları arasında en geniş model kütüphanesi ve en yaygın araç desteği onda.

### [llama.cpp](https://github.com/ggml-org/llama.cpp)
`C/C++` · `MIT` · 🟢 stable

Yerel araçların çoğunun üzerine kurulduğu çıkarım motoru. LLM'leri CPU, CUDA, Metal, ROCm, Vulkan ve daha fazlasında çalıştırır.

- **Farkı:** Uç noktada taşınabilirlik — dizüstü, Raspberry Pi, Mac Studio, sunucu çiftliği. Büyük bir modelin tüketici donanımına sığmasının sebebi GGUF nicelemesidir.

### [Jan](https://github.com/menloresearch/jan)
`TypeScript` · `AGPL-3.0` · Masaüstü · 🟢 stable

Tamamen kendi makinende çalışan çevrimdışı ChatGPT alternatifi.

- **Yerine geçtiği:** ChatGPT masaüstü, LM Studio (yalnızca kısmen açık kaynak)
- **Farkı:** Tam açık masaüstü deneyimi, yerel öncelikli veri saklama ve isteğe bağlı OpenAI uyumlu yerel sunucu.

### [MLC LLM](https://github.com/mlc-ai/mlc-llm)
`Python + C++` · `Apache-2.0` · 🟢 stable

Evrensel LLM dağıtım motoru — iOS, Android, masaüstü ve tarayıcıda yerel GPU hızlandırma.

- **Yerine geçtiği:** Ollama (mobilde), cihaz içi uygulamalar için bulut çıkarımı
- **Farkı:** bir LLM'i telefonun GPU'sunda çalıştırmanın ciddi tek yolu. **Bilinen zayıflık:** model desteği hedef için derlenmiş olanlarla sınırlı ve derleme ya da çıkarım başarısız olduğunda hatalar anlaşılmaz.

### [WebLLM](https://github.com/mlc-ai/web-llm)
`TypeScript` · `Apache-2.0` · 🟢 stable

WebGPU ile tamamen tarayıcı içinde LLM çıkarımı.

- **Farkı:** sunucu yok, API anahtarı yok, sekmeden çıkan veri yok — bu da bütün bir gizlilik hassasiyetli uygulama sınıfını mümkün kılıyor. **Bilinen zayıflık:** WebGPU gerektirir, yani Safari ve Firefox desteği sınırlayıcı etken; mütevazı GPU'larda bellek taşması kaynaklı "device lost" hataları sık.

### [llamafile](https://github.com/Mozilla-Ocho/llamafile)
`C/C++` · `Apache-2.0` · 🟢 stable

Bütün bir LLM'i, birden çok işletim sisteminde kurulum gerektirmeden çalışan tek bir çalıştırılabilir dosya olarak dağıt.

- **Farkı:** Teknik olmayan bir kullanıcıya model göndermek için rakipsiz. Tek dosya. Çift tıkla. Bitti.

---

## Çıkarım Sunucuları ve Ağ Geçitleri

Modelleri ölçekte sunmak.

### [vLLM](https://github.com/vllm-project/vllm)
`Python + CUDA` · `Apache-2.0` · 🟢 stable

Yüksek verimli, bellek açısından verimli çıkarım ve sunum motoru — kendi sunucunda üretim LLM servisi için fiilî standart.

- **Yerine geçtiği:** OpenAI API, Together AI
- **Farkı:** PagedAttention ve sürekli yığınlama (continuous batching), naif sunuma göre kat kat verim sağlar. Tensör/hat paralelliği GPU'lar arasında ölçeklenir; OpenAI uyumlu API sayesinde istemcilerde değişiklik gerekmez.

### [SGLang](https://github.com/sgl-project/sglang)
`Python` · `Apache-2.0` · 🟢 stable

RadixAttention önek önbelleği ve yapılandırılmış üretim dili sunan hızlı sunum çatısı.

- **Farkı:** Ortak önekin ağır bastığı iş yüklerinde (ajanlar, few-shot, çok turlu sohbet) önek önbelleği yeniden kullanımı sayesinde öne çıkar. Kısıtlı kod çözme desteği çok iyi.

### [LocalAI](https://github.com/mudler/LocalAI)
`Go` · `MIT` · 🟢 stable

OpenAI API'sinin yerel çalışan birebir yerine geçeni; birçok arka uç ve kip destekler — metin, görüntü, ses, embedding.

- **Yerine geçtiği:** OpenAI API, ElevenLabs API
- **Farkı:** Tek sunucu, çok arka uç (llama.cpp, vLLM, transformers, whisper, diffusers). GPU şart değil. Mevcut OpenAI SDK'sını ona yönlendir, başka hiçbir şeyi değiştirme.

### [Text Generation Inference](https://github.com/huggingface/text-generation-inference)
`Rust + Python` · `Apache-2.0` · 🟢 stable

Hugging Face'in üretim sunum yığını — kendi çıkarım uç noktalarının arkasındaki motor.

- **Farkı:** Sahada denenmiş Rust web sunucusu, token akışı ve HF ekosistemiyle sıkı entegrasyon.

### [Ray](https://github.com/ray-project/ray)
`Python` · `Apache-2.0` · 🟢 stable

Yapay zekâ iş yüklerini ölçeklemek için dağıtık hesaplama çatısı — Ray Serve ile eğitim, ayar ve çok modelli sunum.

- **Farkı:** Tek makinede tek model artık sorun olmaktan çıktığında devreye girer. Küme genelinde model birleştirme ve otomatik ölçekleme.

---

## Sohbet Arayüzleri

### [Open WebUI](https://github.com/open-webui/open-webui)
`Python + Svelte` · `BSD-3-Clause` (marka koşuluyla) · 🟢 stable

Özellik dolu, kendi sunucunda çalışan yapay zekâ arayüzü — Ollama ve OpenAI uyumlu arka uçlar için varsayılan UI.

- **Yerine geçtiği:** ChatGPT Plus, Claude Pro
- **Farkı:** RBAC ile çok kullanıcı, yüklenen belgeler üzerinde yerleşik RAG, web araması, görsel üretimi, ses ve Python fonksiyon/hat eklenti sistemi. Tamamen çevrimdışı çalışır.

### [LibreChat](https://github.com/danny-avila/LibreChat)
`TypeScript` · `MIT` · 🟢 stable

Tüm yapay zekâ sağlayıcıları tek, cilalı ChatGPT tarzı arayüzde.

- **Yerine geçtiği:** ChatGPT Plus, Poe
- **Farkı:** Tek konuşmada çoklu sağlayıcı, ajanlar, kod yorumlayıcı, artifact'ler, MCP desteği ve gerçekten iyi çok kullanıcılı kimlik doğrulama. Marka kısıtı olmayan MIT lisansı.

### [Lobe Chat](https://github.com/lobehub/lobe-chat)
`TypeScript` · `Apache-2.0` (koşullu) · 🟢 stable

Eklenti ve ajan pazarı ekosistemine sahip modern sohbet çatısı.

- **Farkı:** Görsel olarak en iyi görünen seçenek; PWA ve mobil desteği ile tek tıkla Vercel dağıtımı.

### [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)
`JavaScript` · `MIT` · 🟢 stable

Hepsi bir arada masaüstü ve Docker uygulaması: belgelerinle sohbet et; ajanlar ve çok kullanıcılı çalışma alanları hazır gelir.

- **Farkı:** Her şey dahil RAG — embedder, vektör veritabanı ve arayüz birlikte gelir. "Elimde PDF'ler var"dan "onlara soru sorabiliyorum"a en kısa yol.

---

## Vektör Veritabanları

### [Qdrant](https://github.com/qdrant/qdrant)
`Rust` · `Apache-2.0` · 🟢 stable

Zengin payload filtrelemesi olan, üretim için tasarlanmış vektör arama motoru.

- **Yerine geçtiği:** Pinecone
- **Farkı:** Rust ile yazıldığı için yük altında gecikmesi öngörülebilir. Skaler/çarpım/ikili niceleme RAM kullanımını ciddi ölçüde düşürür. Filtreli arama, naif ön/son filtrelemedeki gibi bozulmaz, doğruluğunu korur.

### [Milvus](https://github.com/milvus-io/milvus)
`Go + C++` · `Apache-2.0` · 🟢 stable

Milyar ölçekli iş yükleri için dağıtık vektör veritabanı.

- **Farkı:** Depolama ve hesaplama ayrımı, GPU indeksleme — arşiv gerçekten devasaysa en ağır iş için doğru seçenek. Yerel geliştirme için Milvus Lite var.

### [Weaviate](https://github.com/weaviate/weaviate)
`Go` · `BSD-3-Clause` · 🟢 stable

Yerleşik vektörleştirme modülleri ve GraphQL API'si olan vektör veritabanı.

- **Farkı:** Modül sistemi veriyi alım anında senin yerine embedding'e çevirir. Yerleşik hibrit (BM25 + vektör) arama ve çok kiracılılık.

### [Chroma](https://github.com/chroma-core/chroma)
`Rust + Python` · `Apache-2.0` · 🟢 stable

Yapay zekâ uygulamaları için her şeyi hazır gelen embedding veritabanı.

- **Farkı:** `pip install chromadb` ve dört satırda çalışan bir vektör deposu. Prototipler için doğru varsayılan; gerekirse sonra ölçeklendirirsin.

### [pgvector](https://github.com/pgvector/pgvector)
`C` · `PostgreSQL Lisansı` · 🟢 stable

PostgreSQL içinde vektör benzerlik araması.

- **Farkı:** Yeni altyapı yok. Embedding'lerin ilişkisel verinin yanında yaşar; gerçek transaction, join ve yedekleme ile. Aksini ölçmediysen buradan başla.

### [MongrelDB](https://github.com/visorcraft/MongrelDB)
`Rust` · `MIT OR Apache-2.0` · Embedded + sunucu · 🟠 experimental

AI-native retrieval özellikli columnar veritabanı — tek transactional motorda dense ANN, sparse vektörler, tam metin ve metadata filtreleri.

- **Yerine geçtiği:** Pinecone + RAG/ajan belleği için ayrı bir operasyonel veritabanı
- **Farkı:** Saf bir vektör deposu değil — dense ANN, sparse ve tam metin indeksleri tek transactional satır deposunu paylaşır; bu yüzden RRF fusion'lı hybrid search, ayrı bir vektör servisi olmadan çalışır, SQL, encryption-at-rest ve çok kullanıcılı erişimi korur. Şema, SQL ve ANN keşfi için eşlik eden [MongrelDB Viewer](https://github.com/visorcraft/MongrelDB-Viewer).

---

## Embedding'ler ve Yeniden Sıralayıcılar

Getirme kalitesi katmanı. Embedding modelini değiştirmek, genelde vektör veritabanını değiştirmekten daha çok işe yarar.

### [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding)
`Python` · `MIT` · 🟢 stable

BGE ailesi — BGE-M3 embedding'leri ve BGE yeniden sıralayıcı modelleri.

- **Yerine geçtiği:** OpenAI text-embedding-3, Cohere Embed, Cohere Rerank
- **Farkı:** BGE-M3 tek modelde 100+ dilde yoğun, seyrek (sözcüksel) ve çok vektörlü getirme yapar; yani iki sistem çalıştırmadan hibrit arama elde edersin. BGE-M3 + BGE yeniden sıralayıcı ikilisi varsayılan açık getirme yığını ve sorgu başına maliyet olmadan kendi donanımında koşar.

### [Sentence Transformers](https://github.com/UKPLab/sentence-transformers)
`Python` · `Apache-2.0` · 🟢 stable

Metin embedding'lerini hesaplama, eğitme ve ince ayarlama kütüphanesi.

- **Farkı:** neredeyse her açık embedding modelinin uyduğu arayüz — bir kez öğren, Hugging Face'teki her model kullanılabilir hâle gelsin. Bir embedding modelini kendi alanında ince ayarlamak genelde RAG'da tek başına en yüksek getirili iyileştirmedir ve bunu bununla yaparsın.

---

## RAG Çatıları

### [LlamaIndex](https://github.com/run-llama/llama_index)
`Python + TypeScript` · `MIT` · 🟢 stable

LLM uygulamaları için veri çatısı — verinin alımı, indekslenmesi, getirilmesi ve üzerinde ajan akışları.

- **Farkı:** Yüzlerce veri bağlayıcısı (LlamaHub) ve en derin getirme stratejisi kütüphanesi — hiyerarşik, özyinelemeli, hibrit, otomatik birleştirmeli. Naif top-k getirme yetmediğinde çözüm büyük ihtimalle burada zaten yazılmıştır.

### [RAGFlow](https://github.com/infiniflow/ragflow)
`Python` · `Apache-2.0` · 🟢 stable

Derin belge anlama üzerine kurulu RAG motoru — PDF, tablo ve taramalarda yerleşim duyarlı ayrıştırma.

- **Farkı:** RAG sistemlerinin çoğu aslında belge ayrıştırmada çöker. RAGFlow bunu asıl problem kabul eder ve alıntıya bağlı parçaları göstererek getirmeyi görsel olarak ayıklamana izin verir.

### [Dify](https://github.com/langgenius/dify)
`Python + TypeScript` · `Apache-2.0` (koşullu) · 🟢 stable

Ajan akışları için üretime hazır platform — görsel üretici, RAG hattı, model yönetimi ve gözlemlenebilirlik tek pakette.

- **Yerine geçtiği:** OpenAI GPTs platformu, Vertex AI Agent Builder
- **Farkı:** Mühendis olmayanlar kod yazmadan iç kullanıma araç çıkarabilir, mühendisler her şeye API erişimini korur. Kendi sunucunda çalıştığı için veri yerinde kalır.

### [Docling](https://github.com/docling-project/docling)
`Python` · `MIT` · 🟢 stable

PDF, DOCX, PPTX, HTML ve görselleri yapılandırılmış, LLM'e hazır biçimlere çevirir.

- **Farkı:** Gerçek dünya belgelerinin altından kalkan yerleşim ve tablo yapısı modelleri. LlamaIndex ve LangChain'e doğrudan takılır.

### [Unstructured](https://github.com/Unstructured-IO/unstructured)
`Python` · `Apache-2.0` · 🟢 stable

Yapılandırılmamış belgeleri ML hatlarına almak için ön işleme kütüphanesi.

- **Farkı:** En geniş biçim desteği. Birçok üretim alım hattının arkasındaki iş beygiri.

---

## İnce Ayar ve Eğitim

### [Unsloth](https://github.com/unslothai/unsloth)
`Python` · `Apache-2.0` · 🟢 stable

LLM'leri kabaca 2 kat hızlı ve çok daha az VRAM ile, doğruluk kaybı olmadan ince ayarla.

- **Farkı:** Elle yazılmış Triton çekirdekleri ve manuel geri yayılım motoru. Orta boy bir modeli tek bir ücretsiz Colab GPU'sunda ince ayarlamayı temenni olmaktan çıkarıp gerçekçi kılar.

### [Axolotl](https://github.com/axolotl-ai-cloud/axolotl)
`Python` · `Apache-2.0` · 🟢 stable

Tamamen YAML ile yapılandırılan eğitim sonrası çatısı — tam ince ayar, LoRA, QLoRA, DPO, ORPO ve dahası.

- **Farkı:** Tek bir yapılandırma dosyası tüm koşuyu tarif eder; bu da deneyleri tekrarlanabilir ve git'te karşılaştırılabilir yapar.

### [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
`Python` · `Apache-2.0` · 🟢 stable

100+ model için birleşik ince ayar, web arayüzüyle.

- **Farkı:** LlamaBoard ile kod yazmadan eğitim. Herhangi bir ayar araç setindeki en geniş model kapsamı.

### [PEFT](https://github.com/huggingface/peft)
`Python` · `Apache-2.0` · 🟢 stable

Hugging Face'in parametre verimli ince ayar kütüphanesi — LoRA, QLoRA, adaptörler, prompt tuning.

- **Farkı:** Diğer her şeyin üzerine kurulduğu referans uygulama. Transformers, Accelerate ve TRL ile doğrudan entegre.

### [Distilabel](https://github.com/argilla-io/distilabel)
`Python` · `Apache-2.0` · 🟢 stable

Argilla ekibinden, SFT ve tercih ayarı için sentetik veri hatları.

- **Farkı:** veri üretimini bir yığın tek seferlik betik yerine tekrarlanabilir bir hat olarak ele alır ve Argilla'dan geçirir; böylece modelin ürettiğini bir insan ayıklayabilir. İnce ayarda darboğaz neredeyse her zaman veridir, hesaplama gücü değil.

### [TRL](https://github.com/huggingface/trl)
`Python` · `Apache-2.0` · 🟢 stable

Transformer modellerini pekiştirmeli öğrenmeyle eğit — SFT, DPO, GRPO, ödül modellemesi.

- **Farkı:** Temel modelden hizalanmış, talimat izleyen modele giden standart yol.

---

## Değerlendirme, Test ve Koruma Katmanları

### [promptfoo](https://github.com/promptfoo/promptfoo)
`TypeScript` · `MIT` · 🟢 stable

Prompt'ları, ajanları ve RAG sistemlerini test et ve değerlendir — ayrıca LLM red team ve güvenlik açığı taraması.

- **Farkı:** CI'da koşan, YAML ile bildirimsel test senaryoları. Yan yana model karşılaştırması ve saldırgan red team aynı araçta. Yerel öncelikli — prompt'ların makineden çıkmaz.

### [DeepEval](https://github.com/confident-ai/deepeval)
`Python` · `Apache-2.0` · 🟢 stable

"LLM'ler için pytest" — LLM çıktılarını araştırmaya dayalı metriklerle birim testine sok.

- **Farkı:** Normal bir test paketi gibi hissettirir. G-Eval, sadakat, cevap uygunluğu, halüsinasyon ve RAG'a özgü metrikler seçtiğin modelle yerelde koşar.

### [Ragas](https://github.com/explodinggradients/ragas)
`Python` · `Apache-2.0` · 🟢 stable

RAG hatları için değerlendirme araç seti.

- **Farkı:** Getirme kalitesiyle üretim kalitesini ayırır, böylece hangi yarıyı düzelteceğini bilirsin. Kendi belgelerinden test kümesi türetebilir.

### [Guardrails](https://github.com/guardrails-ai/guardrails)
`Python` · `Apache-2.0` · 🟢 stable

LLM uygulamalarına girdi/çıktı doğrulayıcıları ekle — yapı, güvenlik, PII ve özel kurallar.

- **Farkı:** Doğrulayıcılar birleştirilebilir ve hata durumunda hata fırlatmak yerine modele yeniden sorar.

### [NeMo Guardrails](https://github.com/NVIDIA/NeMo-Guardrails)
`Python` · `Apache-2.0` · 🟢 stable

Colang modelleme diliyle tanımlanan, konuşma sistemleri için programlanabilir korkuluklar.

- **Farkı:** Diyalog seviyesinde kontrol — botu konu içinde tut, jailbreak'i engelle, konuşma akışını zorunlu kıl.

### [Garak](https://github.com/NVIDIA/garak)
`Python` · `Apache-2.0` · 🟢 stable

LLM güvenlik açığı tarayıcısı — prompt enjeksiyonu, jailbreak, veri sızıntısı ve toksisite sondalar.

- **Farkı:** Dil modelleri için `nmap`. Olaydan sonra değil, yayına almadan önce çalıştır.

---

## Gözlemlenebilirlik ve LLMOps

### [Langfuse](https://github.com/langfuse/langfuse)
`TypeScript` · `MIT` (çekirdek) · 🟢 stable

Açık kaynak LLM mühendisliği platformu — izleme, değerlendirme, prompt yönetimi ve maliyet takibi.

- **Yerine geçtiği:** LangSmith
- **Farkı:** Gerçekten kendi sunucunda çalıştırabileceğin MIT lisanslı çekirdek. OpenTelemetry üzerinden çatıdan bağımsız. İç içe izler çok ajanlı hata ayıklamayı mümkün kılar; prompt sürümleme prompt değişikliklerini dağıtımdan ayırır.

### [Phoenix](https://github.com/Arize-ai/phoenix)
`Python + TypeScript` · `Elastic-2.0` · 🟢 stable

OpenTelemetry ve OpenInference üzerine kurulu yapay zekâ gözlemlenebilirliği ve değerlendirmesi.

- **Farkı:** Yerel hata ayıklama için not defterinde, üretim için sunucu olarak çalışır. Embedding kayması ve getirme kalitesi görselleştirmeleri güçlü.

### [OpenLLMetry](https://github.com/traceloop/openllmetry)
`Python + TypeScript` · `Apache-2.0` · 🟢 stable

LLM uygulamaları için OpenTelemetry enstrümantasyonu.

- **Farkı:** Standartlara dayalı — izleri Datadog, Honeycomb, Grafana veya zaten kullandığın her neyse ona gönder. Yeni bir gözlemlenebilirlik sağlayıcısı gerekmez.

### [Helicone](https://github.com/Helicone/helicone)
`TypeScript` · `Apache-2.0` · 🟢 stable

LLM uygulamaları için gözlemlenebilirlik platformu — tek satırlık proxy entegrasyonu, önbellekleme ve hız sınırlama.

- **Farkı:** Temel URL'yi değiştir, loglama hazır. Bu bölümdeki en düşük sürtünmeli başlangıç.

---

## Ses, Görüntü ve Çok Kipli

### [Whisper](https://github.com/openai/whisper) / [faster-whisper](https://github.com/SYSTRAN/faster-whisper) / [whisper.cpp](https://github.com/ggml-org/whisper.cpp)
`MIT` · 🟢 stable

Konuşmadan metne: orijinal model, CTranslate2 portu (belirgin şekilde daha hızlı) ve C++ portu (her yerde çalışır).

- **Yerine geçtiği:** Google Speech-to-Text, AssemblyAI
- **Farkı:** Kendi donanımında, ücretsiz, son teknoloji çok dilli ASR. `whisper.cpp` dizüstü CPU'da gerçek zamanlı transkripsiyon yapar.

### [WhisperX](https://github.com/m-bain/whisperX)
`Python` · `BSD-2-Clause` · 🟢 stable

Whisper'a kelime düzeyinde zaman damgası ve konuşmacı ayrıştırma ekler.

- **Farkı:** *Kimin* *neyi* *ne zaman* söylediğini bilmen gerekiyorsa — altyazı, toplantı notu — doğru araç bu.

### [Kokoro](https://github.com/hexgrad/kokoro) / [Piper](https://github.com/OHF-Voice/piper1-gpl)
`Apache-2.0` / `GPL-3.0` · 🟢 stable

Metinden konuşmaya. Kokoro, boyutunun (~82M parametre) çok üstünde kalite veren küçük bir model; Piper ise Raspberry Pi kadar küçük cihazlar için optimize edilmiş.

- **Yerine geçtiği:** ElevenLabs
- **Farkı:** CPU'da gerçek zamanlı TTS. Kokoro'nun küçük ayak izi, onu bir uygulamanın içine gömmeyi mümkün kılar.

### [Pipecat](https://github.com/pipecat-ai/pipecat)
`Python` · Kütüphane · 🟢 stable

Gerçek zamanlı sesli ve çok kipli konuşma ajanları için çatı.

- **Yerine geçtiği:** Vapi, Retell
- **Farkı:** WebRTC üzerinde takılabilir STT/TTS/LLM aşamaları ve konuşmadan konuşmaya model desteği; yani sesli ajanı platform kiralamak yerine açık parçalardan kurarsın. **Bilinen zayıflık:** projenin kendi issue listesi pipeline donmalarını, zaman aşımı sonrası zombi fonksiyon çağrısı işleyicilerini ve üretimde saniyeler süren gecikmeyi belgeliyor. Doğrusal pipeline modeli çok taraflı konuşmaya da kötü oturuyor. Ciddi mühendislik eforu bekle.

### [LiveKit Agents](https://github.com/livekit/agents)
`Python + Node` · `Apache-2.0` · Çatı · 🟢 stable

LiveKit'in WebRTC altyapısı üzerine kurulu gerçek zamanlı ajan çatısı.

- **Yerine geçtiği:** Vapi, Retell
- **Farkı:** oda/katılımcı modeli çok taraflılığı ve söz kesmeyi doğal olarak çözer; doğrusal pipeline bunu taklit etmek zorunda kalır. Sesli ajanın çağrıda birden fazla insan gerektiriyorsa pipeline çatısı yerine buradan başla.

### [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
`Python` · `GPL-3.0` · 🟢 stable

Difüzyon modelleri için düğüm tabanlı arayüz — görüntü, video ve ses üretim hatları.

- **Yerine geçtiği:** Midjourney, DALL·E
- **Farkı:** Graf'ın kendisi programdır — her adım incelenebilir ve tekrarlanabilir, akışlar JSON olarak paylaşılabilir. Çıkan hemen her açık görüntü/video modelini günler içinde destekler.

### [Surya](https://github.com/datalab-to/surya)
`Python` · `GPL-3.0` (ticari istisnalarla) · 🟡 active

90+ dilde belge OCR'ı, yerleşim analizi ve okuma sırası tespiti.

- **Farkı:** Sadece karakter tanıma değil; yerleşim, okuma sırası ve tablo yapısı. Her belge RAG'ının öncesinde şart.

---

## Az Kodlu / Görsel Üreticiler

### [n8n](https://github.com/n8n-io/n8n)
`TypeScript` · `Sustainable Use License` (fair-code, kaynağı görünür) · 🟢 stable

Yerleşik yapay zekâ ajan düğümleri olan iş akışı otomasyonu — yüzlerce entegrasyon, kendi sunucunda çalışır.

- **Yerine geçtiği:** Zapier, Make
- **Farkı:** Görsel üretici yetersiz kaldığında herhangi bir düğümde JavaScript'e inebilirsin. Yapay zekâ ajan düğümleri onu sadece tetikleyici-eylem aracı değil, gerçek bir ajan çalışma ortamı yapar. **Not:** fair-code, OSI onaylı değil — ticari kullanımdan önce lisansı oku.

### [Flowise](https://github.com/FlowiseAI/Flowise)
`TypeScript` · `Apache-2.0` (koşullu) · 🟢 stable

LLM akışları ve ajanlar için sürükle-bırak üretici.

- **Farkı:** Bir RAG sohbet botunu görsel olarak prototipleyip API veya gömülebilir bileşen olarak yayınlamanın en hızlı yolu.

### [Langflow](https://github.com/langflow-ai/langflow)
`Python` · `MIT` · 🟢 stable

Çok ajanlı ve RAG uygulamaları kurmak için görsel çatı.

- **Farkı:** Her görsel bileşen dışa aktarıp sahiplenebileceğin gerçek Python koduna karşılık gelir. Prototiple üretim kodu arasında iyi bir köprü.

---

## Açık Kaynak Alternatifler Tablosu

| Parasını ödediğin | Bunu kullan |
|---|---|
| GitHub Copilot | [Continue](https://github.com/continuedev/continue), [Tabby](https://github.com/TabbyML/tabby), [aider](https://github.com/Aider-AI/aider) |
| Cursor / Windsurf | [Cline](https://github.com/cline/cline), [OpenCode](https://github.com/sst/opencode), [Kilo Code](https://github.com/Kilo-Org/kilocode) |
| Devin | [OpenHands](https://github.com/All-Hands-AI/OpenHands), [Goose](https://github.com/block/goose), [SWE-agent](https://github.com/SWE-agent/SWE-agent) |
| Claude Design / Figma Make | [Open Design](https://github.com/nexu-io/open-design) |
| ChatGPT masaüstü / Copilot asistan | [OpenClaw](https://github.com/openclaw/openclaw), [Hermes Agent](https://github.com/NousResearch/hermes-agent) |
| Bolt.new / v0 / Lovable | [bolt.diy](https://github.com/stackblitz-labs/bolt.diy), [OpenUI](https://github.com/wandb/openui), [Dyad](https://github.com/dyad-sh/dyad) |
| ChatGPT Plus / Claude Pro | [Open WebUI](https://github.com/open-webui/open-webui), [LibreChat](https://github.com/danny-avila/LibreChat), [Jan](https://github.com/menloresearch/jan) |
| OpenAI API (çıkarım) | [vLLM](https://github.com/vllm-project/vllm), [Ollama](https://github.com/ollama/ollama), [LocalAI](https://github.com/mudler/LocalAI), [SGLang](https://github.com/sgl-project/sglang) |
| OpenAI Assistants API | [Letta](https://github.com/letta-ai/letta), [Dify](https://github.com/langgenius/dify) |
| Pinecone | [Qdrant](https://github.com/qdrant/qdrant), [pgvector](https://github.com/pgvector/pgvector), [Chroma](https://github.com/chroma-core/chroma), [MongrelDB](https://github.com/visorcraft/MongrelDB) |
| LangSmith | [Langfuse](https://github.com/langfuse/langfuse), [Phoenix](https://github.com/Arize-ai/phoenix) |
| OpenRouter | [LiteLLM](https://github.com/BerriAI/litellm) proxy |
| ElevenLabs | [Kokoro](https://github.com/hexgrad/kokoro), [Piper](https://github.com/OHF-Voice/piper1-gpl) |
| AssemblyAI / Deepgram | [faster-whisper](https://github.com/SYSTRAN/faster-whisper), [WhisperX](https://github.com/m-bain/whisperX) |
| Midjourney / DALL·E | [ComfyUI](https://github.com/comfyanonymous/ComfyUI) |
| Zapier / Make | [n8n](https://github.com/n8n-io/n8n) |
| Vapi / Retell | [LiveKit Agents](https://github.com/livekit/agents), [Pipecat](https://github.com/pipecat-ai/pipecat) |
| Cohere Embed / Rerank | [FlagEmbedding / BGE](https://github.com/FlagOpen/FlagEmbedding) |
| Browserbase / Stagehand | [browser-use](https://github.com/browser-use/browser-use), [Skyvern](https://github.com/Skyvern-AI/skyvern) |
| OpenAI GPTs platformu | [Dify](https://github.com/langgenius/dify), [Flowise](https://github.com/FlowiseAI/Flowise) |

---

## Yığınını Seçmek

Küçük başla. Aşağıdaki her katman, gerekene kadar isteğe bağlıdır.

**Tek geliştirici, yerel öncelikli, sıfır API maliyeti**
```
Ollama → Continue (editör) + aider (terminal) → Open WebUI (sohbet)
```

**Ürün çıkaran küçük ekip**
```
LiteLLM proxy → LangGraph veya CrewAI → pgvector → Langfuse → CI'da promptfoo
```

**Kurumsal, kendi sunucunda, uyumluluk zorunlu**
```
vLLM (kendi GPU'ların) → LiteLLM (anahtar/bütçe) → Qdrant → Dify veya LangGraph
  → Langfuse (izleme) → Garak + NeMo Guardrails (güvenlik)
```

**Belge ağırlıklı RAG**
```
Docling veya RAGFlow (ayrıştırma) → LlamaIndex (getirme) → Qdrant → Ragas (değerlendirme)
```

En çok zaman kazandıran üç kural:

1. **Modellerin önüne ilk günden bir ağ geçidi koy.** LiteLLM bir öğleden sonrana mal olur, karşılığında sağlayıcı değiştirme, bütçe ve yedekleme kabiliyetini kalıcı olarak verir.
2. **Aksini ölçene kadar Postgres + pgvector kullan.** "Vektör veritabanına ihtiyacımız var" diye bilinen sorunların çoğu aslında getirme kalitesi sorunudur.
3. **Özellik eklemeden önce izleme ekle.** İzlenmeyen çok ajanlı bir sistemde hata ayıklamak tahmin yürütmektir.

---

## Katkı

PR'lara açığız. [contributing guide](../community/contributing.md) dosyasına bakın.

Listeye girme çıtası:

- OSI onaylı lisans (kaynağı görünür araçlar kabul edilir ama etiketlenmelidir)
- Anlamlı biçimde bakımı yapılıyor — son 6 ay içinde commit
- Bir geliştiricinin gerçekten yaşadığı bir sorunu çözüyor
- Madde, aracın ne yaptığını değil *neden onu seçeceğini* açıklıyor

> **Not:** İngilizce sürüm kanoniktir. Bu çeviriyle İngilizce metin çelişirse İngilizce geçerlidir. Bkz. [translations guide](../community/translations.md).

## Lisans

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](LICENSE)

Yasaların izin verdiği ölçüde, katkıda bulunanlar bu esere ilişkin tüm telif ve bağlantılı haklarından feragat etmiştir.

