'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { extraTranslations } from './translations-data'

export type Language = 'en' | 'hi' | 'ja'

type TranslationDict = {
  nav: {
    about: string
    experience: string
    projects: string
    blogs: string
    contact: string
  }
  hero: {
    title: string
    description: string
    ctaTouch: string
    ctaResume: string
    powerOn: string
    powerOff: string
    location: string
    name: string
  }
  skills: {
    title: string
  }
  AiSkills: {
    title: string
  }
  experience: {
    title: string
  }
  projects: {
    title: string
    taglines: {
      snappy: string
      deeptab: string
      shopxindia: string
      socialpedia: string
    }
  }
  resume: {
    title: string
    subtitle: string
    download: string
    view: string
  }
  contact: {
    title: string
    heading: string
    subtitle: string
    name: string
    email: string
    subject: string
    message: string
    send: string
    sending: string
    success: string
    error: string
  }
  contributions: {
    title: string
    totalCount: string
    loading: string
  }
  commandPalette: {
    searchPlaceholder: string
    langEnTitle: string
    langEnSubtitle: string
    langHiTitle: string
    langHiSubtitle: string
    langJaTitle: string
    langJaSubtitle: string
  }
  extra: typeof extraTranslations.en
}

const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      about: 'about',
      experience: 'experience',
      projects: 'projects',
      blogs: 'blogs',
      contact: 'contact',
    },
    hero: {
      title: 'Software Development Engineer',
      description: 'Building scalable, reliable, production-grade systems and applications.',
      ctaTouch: 'Get in Touch',
      ctaResume: 'View Resume',
      powerOn: 'Power: ON',
      powerOff: 'Power: OFF',
      location: 'India',
      name: 'Kishan Vishwakarma',
    },
    skills: {
      title: 'Tech Stack',
    },
    AiSkills: {
      title: "Ai's Skill",
    },
    experience: {
      title: 'Work Experience',
    },
    projects: {
      title: 'Featured Projects',
      taglines: {
        snappy: 'A fast, secure URL shortener and link manager with real-time analytics.',
        deeptab: 'A productivity browser extension to organize tabs and manage workspace clutter.',
        shopxindia: 'An e-commerce platform offering end-to-end seller tools and order tracking.',
        socialpedia: 'A lightweight social network platform for community building and media sharing.',
      },
    },
    resume: {
      title: 'My Resume',
      subtitle: 'View or download my full professional resume for offline reference.',
      download: 'Download PDF',
      view: 'View Full Screen',
    },
    contact: {
      title: 'Get In Touch',
      heading: "Let's Build Something Together",
      subtitle: "Have a question or want to work together? Drop a message and I'll get back to you.",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Something went wrong. Please try again.',
    },
    contributions: {
      title: 'Contributions',
      totalCount: 'contributions in the last year',
      loading: 'Loading...',
    },
    commandPalette: {
      searchPlaceholder: 'Search for a section or action…',
      langEnTitle: 'Change language to English',
      langEnSubtitle: 'English language mode',
      langHiTitle: 'Change language to Hindi',
      langHiSubtitle: 'हिन्दी भाषा मोड (Hindi)',
      langJaTitle: 'Change language to Japanese',
      langJaSubtitle: '日本語の表示モード (Japanese)',
    },
    extra: extraTranslations.en,
  },
  hi: {
    nav: {
      about: 'परिचय',
      experience: 'अनुभव',
      projects: 'प्रोजेक्ट्स',
      blogs: 'ब्लॉग्स',
      contact: 'संपर्क',
    },
    hero: {
      title: 'सॉफ्टवेयर डेवलपमेंट इंजीनियर',
      description: 'स्केलेबल, भरोसेमंद और प्रोडक्शन-ग्रेड सिस्टम व एप्लिकेशन बनाना।',
      ctaTouch: 'संपर्क करें',
      ctaResume: 'रिज्यूमे देखें',
      powerOn: 'पावर: चालू',
      powerOff: 'पावर: बंद',
      location: 'भारत',
      name: 'किशन विश्वकर्मा',
    },
    skills: {
      title: 'टेक स्टैक',
    },
    AiSkills: {
      title: 'एआई स्किल्स',
    },
    experience: {
      title: 'कार्य अनुभव',
    },
    projects: {
      title: 'मुख्य प्रोजेक्ट्स',
      taglines: {
        snappy: 'रियल-टाइम एनालिटिक्स के साथ एक तेज़ और सुरक्षित URL शॉर्टनर व लिंक मैनेजर।',
        deeptab: 'टैब व्यवस्थित करने और वर्कस्पेस क्लटर कम करने के लिए एक प्रोडक्टिविटी ब्राउज़र एक्सटेंशन।',
        shopxindia: 'एंड-टू-एंड सेलर टूल्स और ऑर्डर ट्रैकिंग वाला एक ई-कॉमर्स प्लेटफॉर्म।',
        socialpedia: 'कम्युनिटी बिल्डिंग और मीडिया शेयरिंग के लिए एक हल्का सोशल नेटवर्क प्लेटफॉर्म।',
      },
    },
    resume: {
      title: 'मेरा रिज्यूमे',
      subtitle: 'ऑफ़लाइन संदर्भ के लिए मेरा पूरा प्रोफेशनल रिज्यूमे देखें या डाउनलोड करें।',
      download: 'PDF डाउनलोड करें',
      view: 'फुल स्क्रीन में देखें',
    },
    contact: {
      title: 'संपर्क करें',
      heading: 'आइए मिलकर कुछ शानदार बनाते हैं',
      subtitle: 'कोई सवाल है या साथ काम करना चाहते हैं? मुझे संदेश भेजें, मैं जल्द जवाब दूँगा।',
      name: 'नाम',
      email: 'ईमेल',
      subject: 'विषय',
      message: 'संदेश',
      send: 'संदेश भेजें',
      sending: 'भेजा जा रहा है...',
      success: 'संदेश सफलतापूर्वक भेजा गया!',
      error: 'कुछ गलत हो गया। कृपया फिर से कोशिश करें।',
    },
    contributions: {
      title: 'योगदान',
      totalCount: 'पिछले एक वर्ष में योगदान',
      loading: 'लोड हो रहा है...',
    },
    commandPalette: {
      searchPlaceholder: 'किसी सेक्शन या एक्शन को खोजें…',
      langEnTitle: 'भाषा अंग्रेज़ी में बदलें',
      langEnSubtitle: 'अंग्रेज़ी भाषा मोड',
      langHiTitle: 'भाषा हिन्दी में बदलें',
      langHiSubtitle: 'हिन्दी भाषा मोड',
      langJaTitle: 'भाषा जापानी में बदलें',
      langJaSubtitle: 'जापानी भाषा मोड',
    },
    extra: extraTranslations.hi,
  },
  ja: {
    nav: {
      about: '自己紹介',
      experience: '経験',
      projects: 'プロジェクト',
      blogs: 'ブログ',
      contact: 'お問い合わせ',
    },
    hero: {
      title: 'ソフトウェア開発エンジニア',
      description: 'スケーラブルで信頼性が高く、本番運用に適したシステムとアプリケーションを構築します。',
      ctaTouch: 'お問い合わせ',
      ctaResume: '履歴書を見る',
      powerOn: '電源: ON',
      powerOff: '電源: OFF',
      location: 'インド',
      name: 'キシャン・ヴィシュワカルマ',
    },
    skills: {
      title: '技術スタック',
    },
    AiSkills: {
      title: 'AIスキル',
    },
    experience: {
      title: '職務経験',
    },
    projects: {
      title: '注目のプロジェクト',
      taglines: {
        snappy: 'リアルタイム分析機能を備えた、高速で安全なURL短縮・リンク管理サービス。',
        deeptab: 'タブを整理し、ワークスペースの煩雑さを減らすための生産性向上ブラウザ拡張機能。',
        shopxindia: '販売者向けツールと注文追跡機能を備えた、エンドツーエンドのECプラットフォーム。',
        socialpedia: 'コミュニティ形成とメディア共有のための軽量ソーシャルネットワークプラットフォーム。',
      },
    },
    resume: {
      title: '履歴書',
      subtitle: 'オフラインで参照できるよう、私の職務経歴書を閲覧またはダウンロードできます。',
      download: 'PDFをダウンロード',
      view: '全画面で表示',
    },
    contact: {
      title: 'お問い合わせ',
      heading: '一緒に素晴らしいものを作りましょう',
      subtitle: 'ご質問やお仕事のご相談があれば、お気軽にメッセージをお送りください。できるだけ早くご返信します。',
      name: '名前',
      email: 'メールアドレス',
      subject: '件名',
      message: 'メッセージ',
      send: 'メッセージを送信',
      sending: '送信中...',
      success: 'メッセージが正常に送信されました！',
      error: 'エラーが発生しました。もう一度お試しください。',
    },
    contributions: {
      title: 'コントリビューション',
      totalCount: '過去1年間のコントリビューション数',
      loading: '読み込み中...',
    },
    commandPalette: {
      searchPlaceholder: 'セクションまたはアクションを検索…',
      langEnTitle: '英語に切り替える',
      langEnSubtitle: '英語表示モード',
      langHiTitle: 'ヒンディー語に切り替える',
      langHiSubtitle: 'ヒンディー語表示モード',
      langJaTitle: '日本語に切り替える',
      langJaSubtitle: '日本語表示モード',
    },
    extra: extraTranslations.ja,
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationDict
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load language preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('language_pref') as Language
    if (saved === 'en' || saved === 'hi' || saved === 'ja') {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language_pref', lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
