/* ============================================================
   ALL MESSAGES — SINGLE FILE
   Categories: business | maharashtra | festival | saint | maharaj | world
   Each message has 3 languages: en, hi, mr
   ============================================================ */
const ALL_MESSAGES = [

  /* ============================================================
     BUSINESS MESSAGES (non-dated, always available)
     ============================================================ */
  {
    id: "review_request",
    category: "business",
    date: "",
    title: { en: "Google Review Request", hi: "गूगल रिव्यू अनुरोध", mr: "गूगल रिव्ह्यू विनंती" },
    message: {
      en: "🙏 Namaste!\n\nThank you so much for choosing us. Your experience means a lot to us.\n\nPlease take a moment to share your review on Google — it will really help our small business grow.\n\n👉 {MAP_LINK}\n\nYour one review makes our day! ⭐ Please visit again. Thank you!",
      hi: "🙏 नमस्कार!\n\nहमें चुनने के लिए बहुत-बहुत धन्यवाद। आपका अनुभव हमारे लिए बहुत मायने रखता है।\n\nकृपया Google पर अपना रिव्यू शेयर करें — इससे हमारे छोटे व्यवसाय को बहुत मदद मिलेगी।\n\n👉 {MAP_LINK}\n\nआपके एक रिव्यू से हमारा दिन बन जाता है! ⭐ फिर आइए। धन्यवाद!",
      mr: "🙏 नमस्कार!\n\nआम्हाला निवडल्याबद्दल मनःपूर्वक धन्यवाद! तुमचा अनुभव आमच्यासाठी खूप मौल्यवान आहे.\n\nकृपया Google वर तुमचा अनुभव शेअर करा — यामुळे आमच्या छोट्या व्यवसायाला खूप मदत होईल.\n\n👉 {MAP_LINK}\n\nतुमच्या एका रिव्ह्यूने आमचा दिवस बनतो! ⭐ पुन्हा भेट द्या. धन्यवाद!"
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "review_after_purchase",
    category: "business",
    date: "",
    title: { en: "Review After Purchase", hi: "खरेदी के बाद रिव्यू", mr: "खरेदीनंतर रिव्ह्यू" },
    message: {
      en: "🙏 Namaste!\n\nThank you for your purchase today! We are glad you trusted us.\n\nYour honest experience will help other customers make better decisions. Please leave a quick review on Google — it takes just 1 minute.\n\n👉 {MAP_LINK}\n\nYour opinion is our top priority. ⭐ Looking forward to seeing you again!",
      hi: "🙏 नमस्कार!\n\nआज की खरीदारी के लिए बहुत-बहुत धन्यवाद! हमें खुशी है कि आपने हम पर भरोसा किया।\n\nआपका ईमानदार अनुभव दूसरे ग्राहकों को सही निर्णय लेने में मदद करेगा। कृपया Google पर रिव्यू दें — बस 1 मिनट लगेगा।\n\n👉 {MAP_LINK}\n\nआपकी राय हमारे लिए सबसे ज़रूरी है। ⭐ फिर मिलेंगे!",
      mr: "🙏 नमस्कार!\n\nआजच्या खरेदीसाठी खूप खूप धन्यवाद! तुम्ही आमच्यावर विश्वास ठेवला याचा आम्हाला आनंद आहे.\n\nतुमचा प्रामाणिक अनुभव इतर ग्राहकांना निर्णय घेण्यास मदत करेल. कृपया Google वर एक छोटा रिव्ह्यू द्या — फक्त 1 मिनिट लागेल.\n\n👉 {MAP_LINK}\n\nतुमचे मत आमच्यासाठी सर्वोच्च प्राधान्य आहे. ⭐ पुन्हा भेट देण्याची वाट पाहत आहोत!"
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "review_after_service",
    category: "business",
    date: "",
    title: { en: "Review After Service", hi: "सेवा के बाद रिव्यू", mr: "सेवेनंतर रिव्ह्यू" },
    message: {
      en: "🙏 Namaste!\n\nThank you for using our service today! We hope you were happy with it.\n\nSharing your experience will help us serve better. Please take a moment to leave your review on Google.\n\n👉 {MAP_LINK}\n\nYour support means everything to us. ⭐ Hope to see you again soon!",
      hi: "🙏 नमस्कार!\n\nआज हमारी सेवा लेने के लिए धन्यवाद! हमें उम्मीद है कि आपको संतुष्टि मिली।\n\nआपका अनुभव साझा करने से हमें बेहतर सेवा देने में मदद मिलेगी। कृपया Google पर अपना रिव्यू दें।\n\n👉 {MAP_LINK}\n\nआपका सहयोग हमारे लिए सब कुछ है। ⭐ फिर मिलेंगे!",
      mr: "🙏 नमस्कार!\n\nआज आमच्या सेवेचा लाभ घेतल्याबद्दल धन्यवाद! तुम्हाला सेवा आवडली असेल अशी आशा करतो.\n\nतुमचा अनुभव इतरांसोबत शेअर केल्यास आम्हाला अधिक चांगली सेवा देण्यास मदत होईल. कृपया Google वर तुमचा रिव्ह्यू नक्की द्या.\n\n👉 {MAP_LINK}\n\nतुमच्या सहकार्याबद्दल मनःपूर्वक आभार! ⭐ पुन्हा भेटीची अपेक्षा."
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "review_with_photo",
    category: "business",
    date: "",
    title: { en: "Review + Photo Request", hi: "रिव्यू + फोटो अनुरोध", mr: "रिव्ह्यू + फोटो विनंती" },
    message: {
      en: "🙏 Namaste!\n\nThank you for visiting us! We need your help to reach more people.\n\nPlease review us on Google, and if possible, add a photo of your visit. This helps new customers trust us more.\n\n👉 {MAP_LINK}\n\nThank you for your small help! ⭐ You are always welcome at our business.",
      hi: "🙏 नमस्कार!\n\nहमारे यहाँ आने के लिए धन्यवाद! अधिक लोगों तक पहुँचने के लिए हमें आपकी मदद चाहिए।\n\nकृपया Google पर रिव्यू दें, और हो सके तो अपनी विज़िट की फोटो जोड़ें। इससे नए ग्राहकों को हम पर भरोसा बढ़ेगा।\n\n👉 {MAP_LINK}\n\nआपकी छोटी मदद के लिए बहुत धन्यवाद! ⭐ आपका हमारे यहाँ हमेशा स्वागत है।",
      mr: "🙏 नमस्कार!\n\nआमच्याकडे येऊन सेवा घेतल्याबद्दल धन्यवाद! तुमचा अनुभव इतरांपर्यंत पोहोचवण्यासाठी आम्हाला तुमची मदत हवी आहे.\n\nकृपया Google वर रिव्ह्यू द्या आणि शक्य असल्यास एक फोटो जोडा. यामुळे नवीन ग्राहकांना आमच्याविषयी विश्वास बसेल.\n\n👉 {MAP_LINK}\n\nतुमच्या छोट्या मदतीबद्दल खूप खूप धन्यवाद! ⭐ तुमचे नेहमी स्वागत आहे."
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "appointment_confirmation",
    category: "business",
    date: "",
    title: { en: "Appointment Confirmation", hi: "अपॉइंटमेंट पुष्टि", mr: "अपॉइंटमेंट निश्चिती" },
    message: {
      en: "🙏 Namaste!\n\nYour appointment has been confirmed successfully.\n\n📅 Date: {TODAY_DATE}\n📍 Address: {BUSINESS_ADDRESS}\n\nPlease arrive on time. If you need to make any changes, kindly inform us in advance. We look forward to seeing you!",
      hi: "🙏 नमस्कार!\n\nआपका अपॉइंटमेंट सफलतापूर्वक तय हो गया है।\n\n📅 तारीख: {TODAY_DATE}\n📍 पता: {BUSINESS_ADDRESS}\n\nकृपया समय पर पहुँचें। कोई बदलाव करना हो तो पहले बताएं। आपका इंतज़ार रहेगा!",
      mr: "🙏 नमस्कार!\n\nतुमची अपॉइंटमेंट यशस्वीरीत्या निश्चित झाली आहे.\n\n📅 तारीख: {TODAY_DATE}\n📍 पत्ता: {BUSINESS_ADDRESS}\n\nकृपया वेळेवर येण्याची काळजी घ्या. काही बदल असल्यास आधी कळवा. तुमची वाट पाहत आहोत!"
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "appointment_reminder_1day",
    category: "business",
    date: "",
    title: { en: "Appointment Reminder", hi: "अपॉइंटमेंट रिमाइंडर", mr: "अपॉइंटमेंट स्मरण" },
    message: {
      en: "🙏 Namaste!\n\nThis is a gentle reminder — you have an appointment with us tomorrow.\n\n📅 Date: {TODAY_DATE}\n📍 Location: {BUSINESS_ADDRESS}\n\nPlease arrive on time. If there is any problem, let us know today. We look forward to seeing you! 😊",
      hi: "🙏 नमस्कार!\n\nएक छोटी याद दिलाना — कल आपका हमारे यहाँ अपॉइंटमेंट है।\n\n📅 तारीख: {TODAY_DATE}\n📍 स्थान: {BUSINESS_ADDRESS}\n\nकृपया समय पर आएं। कोई दिक्कत हो तो आज बता दें। आपका इंतज़ार रहेगा! 😊",
      mr: "🙏 नमस्कार!\n\nउद्या तुमची आमच्याकडे अपॉइंटमेंट आहे — ही एक छोटीशी आठवण.\n\n📅 तारीख: {TODAY_DATE}\n📍 ठिकाण: {BUSINESS_ADDRESS}\n\nकृपया वेळेवर येण्याची काळजी घ्या. काही अडचण असल्यास आजच कळवा. तुमची वाट पाहत आहोत! 😊"
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "thank_you_visit",
    category: "business",
    date: "",
    title: { en: "Thank You for Visiting", hi: "आने के लिए धन्यवाद", mr: "भेट दिल्याबद्दल धन्यवाद" },
    message: {
      en: "🙏 Namaste!\n\nThank you for visiting us today! We hope you enjoyed your time with us.\n\nYour visit made our day special. Please come again. If you have any suggestions or complaints, do let us know — your feedback matters to us.\n\nVisit again! 😊",
      hi: "🙏 नमस्कार!\n\nआज हमारे यहाँ आने के लिए बहुत-बहुत धन्यवाद! हमें उम्मीद है कि आपको अच्छा लगा।\n\nआपकी विज़िट से हमारा दिन खास बन गया। फिर आइए। कोई सुझाव या शिकायत हो तो ज़रूर बताएं — आपकी राय हमारे लिए ज़रूरी है।\n\nफिर आइए! 😊",
      mr: "🙏 नमस्कार!\n\nआज आमच्याकडे भेट दिल्याबद्दल मनःपूर्वक धन्यवाद! तुम्हाला आनंद झाला असेल अशी आशा करतो.\n\nतुमच्या भेटीमुळे आमचा दिवस खास बनला. पुन्हा भेट द्या. काही सूचना किंवा तक्रार असल्यास नक्की कळवा — तुमचे मत आमच्यासाठी महत्त्वाचे आहे.\n\nपुन्हा भेट द्या! 😊"
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "welcome_new_customer",
    category: "business",
    date: "",
    title: { en: "Welcome New Customer", hi: "नए ग्राहक का स्वागत", mr: "नवीन ग्राहकाचे स्वागत" },
    message: {
      en: "🙏 Welcome!\n\nA warm welcome to our business! We are delighted to have you as our new customer.\n\nWe promise you the best service and quality products. Your satisfaction is our top priority.\n\nSpecial discount on your first purchase! 🎁 Please share your experience with us.\n\nThank you!",
      hi: "🙏 स्वागत है!\n\nहमारे व्यवसाय में आपका हार्दिक स्वागत! हमें खुशी है कि आप हमारे नए ग्राहक बने।\n\nहम आपको बेहतरीन सेवा और गुणवत्ता देने का वादा करते हैं। आपकी संतुष्टि हमारी सर्वोच्च प्राथमिकता है।\n\nपहली खरीद पर खास छूट! 🎁 अपना अनुभव हमें ज़रूर बताएं।\n\nधन्यवाद!",
      mr: "🙏 स्वागत!\n\nआमच्या व्यवसायात तुमचे मनःपूर्वक स्वागत! तुम्ही आमचे नवीन ग्राहक झालात याचा आम्हाला आनंद आहे.\n\nआम्ही तुम्हाला उत्तम सेवा आणि दर्जेदार उत्पादने देण्याचे वचन देतो. तुमचे समाधान आमच्यासाठी सर्वोच्च प्राधान्य आहे.\n\nपहिल्या खरेदीवर खास सवलत! 🎁 तुमचा अनुभव नक्की कळवा.\n\nधन्यवाद!"
    },
    includeOffer: true, includeSignature: true
  },

  /* ============================================================
     MAHARASHTRA SPECIAL DAYS
     ============================================================ */
  {
    id: "maharashtra_day",
    category: "maharashtra",
    date: "2026-05-01",
    title: { en: "Maharashtra Day", hi: "महाराष्ट्र दिवस", mr: "महाराष्ट्र दिन" },
    message: {
      en: "🚩 Happy Maharashtra Day!\n\nToday is the foundation day of our beloved Maharashtra. A day of pride for every Marathi person — celebrating our courage, culture, and traditions.\n\nMay our state keep growing in prosperity, unity, and progress. Let us always carry the pride of being Marathi in our hearts.\n\nJai Maharashtra! 🚩 Jai Hind! 🇮🇳",
      hi: "🚩 महाराष्ट्र दिवस की हार्दिक शुभकामनाएं!\n\nआज हमारे प्यारे महाराष्ट्र राज्य का स्थापना दिवस है। हर मराठी इंसान के लिए गर्व का दिन — हमारी वीरता, संस्कृति और परंपराओं का उत्सव।\n\nहमारा राज्य प्रगति, समृद्धि और एकता में ऐसे ही आगे बढ़ता रहे। मराठी होने का गर्व हमेशा दिल में रखें।\n\nजय महाराष्ट्र! 🚩 जय हिंद! 🇮🇳",
      mr: "🚩 महाराष्ट्र दिनाच्या हार्दिक शुभेच्छा!\n\nआज आपल्या प्रिय महाराष्ट्र राज्याचा स्थापना दिवस. मराठी माणसाची शौर्य, संस्कृती आणि परंपरा जपणारा हा दिवस आपल्या सर्वांसाठी अभिमानाचा आहे.\n\nआपल्या राज्याची प्रगती, समृद्धी आणि एकता अशीच वाढत राहो. मराठी असल्याचा अभिमान नेहमी मनात ठेवूया.\n\nजय महाराष्ट्र! 🚩 जय हिंद! 🇮🇳"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "marathi_bhasha_din",
    category: "maharashtra",
    date: "2026-02-27",
    title: { en: "Marathi Bhasha Din", hi: "मराठी भाषा दिवस", mr: "मराठी भाषा गौरव दिन" },
    message: {
      en: "📚 Happy Marathi Bhasha Din!\n\nToday is the birth anniversary of the great poet Kusumagraj. It is a special day to celebrate the glory and pride of the Marathi language.\n\nOur mother tongue Marathi is one of the sweetest and richest languages in the world. Let us all speak Marathi, read Marathi, and promote Marathi.\n\nMay the Marathi language live forever! 📚",
      hi: "📚 मराठी भाषा दिवस की हार्दिक शुभकामनाएं!\n\nआज महान साहित्यकार कुसुमाग्रज की जयंती है। मराठी भाषा के गौरव और अभिमान का उत्सव मनाने का खास दिन।\n\nहमारी मातृभाषा मराठी दुनिया की सबसे मीठी और समृद्ध भाषाओं में से एक है। चलिए, हम सब मराठी बोलें, मराठी पढ़ें और मराठी का प्रचार करें।\n\nमराठी भाषा अमर रहे! 📚",
      mr: "📚 मराठी भाषा गौरव दिनाच्या हार्दिक शुभेच्छा!\n\nआज महान साहित्यिक कुसुमाग्रज यांची जयंती. मराठी भाषेचा गौरव आणि अभिमान साजरा करण्याचा हा खास दिवस आहे.\n\nआपली मायमराठी भाषा जगात सर्वात गोड आणि समृद्ध आहे. चला, आपण सर्वजण मराठी बोलूया, मराठी वाचूया आणि मराठीचा प्रचार करूया.\n\nमराठी भाषा अमर राहो! 📚"
    },
    includeOffer: true, includeSignature: true
  },

  /* ============================================================
     FESTIVALS
     ============================================================ */
  {
    id: "gudi_padwa",
    category: "festival",
    date: "2026-03-19",
    title: { en: "Gudi Padwa", hi: "गुड़ी पड़वा", mr: "गुढी पाडवा" },
    message: {
      en: "🌾 Happy Gudi Padwa!\n\nToday marks the beginning of the Marathi New Year! We welcome the new year by hoisting the Gudi. This day is all about happiness, prosperity, and new hopes.\n\nMay the new year bring health, success, and joy to your whole family. May the Gudi bring peace and happiness to your home.\n\nHappy New Year! 🌾",
      hi: "🌾 गुड़ी पड़वा की हार्दिक शुभकामनाएं!\n\nआज मराठी नववर्ष की शुरुआत है! गुड़ी उठाकर हम नए साल का स्वागत करते हैं। यह दिन खुशी, समृद्धि और नई उम्मीदों का है।\n\nनया साल आपके पूरे परिवार को स्वास्थ्य, सफलता और खुशियां दे। गुड़ी आपके घर में सुख-शांति लाए।\n\nनया साल मंगलमय हो! 🌾",
      mr: "🌾 गुढी पाडव्याच्या हार्दिक शुभेच्छा!\n\nआज मराठी नववर्षाची सुरुवात! गुढी उभारून आपण नवीन वर्षाचे स्वागत करतो. हा दिवस सुख, समृद्धी आणि नव्या आशांचा आहे.\n\nतुमच्या संपूर्ण कुटुंबाला नवीन वर्षात आरोग्य, यश आणि आनंद लाभो. गुढी तुमच्या घरी सुख-शांती घेऊन येवो.\n\nनवीन वर्ष मंगलमय होवो! 🌾"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "ganesh_chaturthi",
    category: "festival",
    date: "2026-09-14",
    title: { en: "Ganesh Chaturthi", hi: "गणेश चतुर्थी", mr: "गणेश चतुर्थी" },
    message: {
      en: "🐘 Ganpati Bappa Morya!\n\nWishing you and your family a very happy Ganesh Chaturthi! May Bappa remove all your troubles and bring success, peace, and happiness into your home.\n\nCelebrate with modak, devotion, and joy. May the blessings of Bappa always stay with you.\n\nGanpati Bappa Morya! Mangalmurti Morya! 🐘",
      hi: "🐘 गणपति बाप्पा मोरया!\n\nआपको और आपके परिवार को गणेश चतुर्थी की ढेरों शुभकामनाएं! बाप्पा आपकी सारी परेशानियां दूर करें और घर में सुख, शांति और खुशियां लाएं।\n\nमोदक, भक्ति और आनंद के साथ त्योहार मनाएं। बाप्पा का आशीर्वाद हमेशा आपके साथ रहे।\n\nगणपति बाप्पा मोरया! मंगलमूर्ती मोरया! 🐘",
      mr: "🐘 गणपती बाप्पा मोरया!\n\nतुम्हाला आणि तुमच्या कुटुंबाला गणेश चतुर्थीच्या खूप खूप शुभेच्छा! बाप्पा तुमच्या सगळ्या अडचणी दूर करो आणि घरात सुख, शांती आणि आनंद आणो.\n\nमोदक, भक्ती आणि आनंदाने सण साजरा करा. बाप्पांचा आशीर्वाद नेहमी तुमच्यासोबत राहो.\n\nगणपती बाप्पा मोरया! मंगलमूर्ती मोरया! 🐘"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "diwali_lakshmi_pujan",
    category: "festival",
    date: "2026-11-08",
    title: { en: "Lakshmi Pujan", hi: "लक्ष्मी पूजन", mr: "लक्ष्मी पूजन" },
    message: {
      en: "✨ Happy Diwali!\n\nToday is the biggest day of Diwali — Lakshmi Pujan. We worship Goddess Lakshmi and pray for prosperity.\n\nMay Goddess Lakshmi bless your home and business with happiness, wealth, and success. Light diyas, celebrate with joy, and share happiness with your loved ones.\n\nShubh Deepavali! ✨🪔",
      hi: "✨ दिवाली की हार्दिक शुभकामनाएं!\n\nआज दिवाली का सबसे बड़ा दिन — लक्ष्मी पूजन। हम मां लक्ष्मी की पूजा करके समृद्धि की प्रार्थना करते हैं।\n\nमां लक्ष्मी आपके घर और व्यवसाय में सुख, समृद्धि और सफलता लाएं। दीये जलाएं, खुशी से मनाएं और अपनों के साथ आनंद बांटें।\n\nशुभ दीपावली! ✨🪔",
      mr: "✨ दिवाळीच्या हार्दिक शुभेच्छा!\n\nआज दिवाळीचा सर्वात मोठा दिवस — लक्ष्मी पूजन. माता लक्ष्मीची पूजा करून समृद्धीची प्रार्थना करण्याचा पवित्र दिवस.\n\nमाता लक्ष्मी तुमच्या घरी आणि व्यवसायात सुख, समृद्धी आणि यश आणो. दिवे लावा, आनंद साजरा करा आणि आपल्या माणसांसोबत हा सण मनाभर साजरा करा.\n\nशुभ दिवाळी! ✨🪔"
    },
    includeOffer: true, includeSignature: true
  },

  /* ============================================================
     SAINTS & SPIRITUAL
     ============================================================ */
  {
    id: "dnyaneshwar_jayanti",
    category: "saint",
    date: "2026-08-15",
    title: { en: "Sant Dnyaneshwar Jayanti", hi: "संत ज्ञानेश्वर जयंती", mr: "संत ज्ञानेश्वर महाराज जयंती" },
    message: {
      en: "🙏 Sant Dnyaneshwar Maharaj Jayanti!\n\nToday is the birth anniversary of the great saint Dnyaneshwar Maharaj — the first poet of the Marathi language and author of Dnyaneshwari.\n\nAt just 21 years of age, he gave the treasure of knowledge to Marathi. His thoughts still guide us today.\n\nMy humble salutations to Dnyaneshwar Maharaj! 🙏",
      hi: "🙏 संत ज्ञानेश्वर महाराज जयंती!\n\nआज मराठी भाषा के आद्य कवि और ज्ञानेश्वरी के रचनाकार महान संत ज्ञानेश्वर महाराज की जयंती है।\n\nउन्होंने मात्र 21 वर्ष की आयु में मराठी में ज्ञान का सागर उघाड़ दिया। उनके विचार आज भी हमें रास्ता दिखाते हैं।\n\nज्ञानेश्वर महाराज को मेरा कोटि-कोटि नमन! 🙏",
      mr: "🙏 संत ज्ञानेश्वर महाराज जयंती!\n\nआज मराठी भाषेचे आद्य कवी आणि भगवद्गीतेवर ज्ञानेश्वरी लिहिणारे महान संत ज्ञानेश्वर महाराज यांची जयंती.\n\nत्यांनी वयाच्या अवघ्या २१ व्या वर्षी मराठी भाषेत ज्ञानाचा सागर उलगडला. त्यांचे विचार आजही आपल्याला मार्ग दाखवतात.\n\nज्ञानेश्वर महाराजांना मनःपूर्वक वंदन! 🙏"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "dnyaneshwar_punyatithi",
    category: "saint",
    date: "2026-07-24",
    title: { en: "Sant Dnyaneshwar Punyatithi", hi: "संत ज्ञानेश्वर पुण्यतिथि", mr: "संत ज्ञानेश्वर महाराज पुण्यतिथी" },
    message: {
      en: "🙏 Sant Dnyaneshwar Maharaj Punyatithi.\n\nToday is the sacred day when Dnyaneshwar Maharaj took Sanjeevan Samadhi at Alandi.\n\nHe showed us the path of devotion, knowledge, and surrender. His thoughts still live in our hearts.\n\nMy humble salutations to Dnyaneshwar Maharaj! 🙏",
      hi: "🙏 संत ज्ञानेश्वर महाराज पुण्यतिथि।\n\nआज आळंदी में ज्ञानेश्वर महाराज के संजीवन समाधि लेने का पवित्र दिन है।\n\nउन्होंने हमें भक्ति, ज्ञान और समर्पण का मार्ग दिखाया। उनके विचार आज भी हमारे दिलों में जीवित हैं।\n\nज्ञानेश्वर महाराज को मेरा वंदन! 🙏",
      mr: "🙏 संत ज्ञानेश्वर महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज आळंदी येथे ज्ञानेश्वर महाराज संजीवन समाधी घेतल्याचा पवित्र दिवस.\n\nत्यांनी आपल्याला भक्ती, ज्ञान आणि समर्पणाचा मार्ग दाखवला. त्यांचे विचार आजही आपल्या मनात जिवंत आहेत.\n\nज्ञानेश्वर महाराजांना मनःपूर्वक वंदन! 🙏"
    },
    includeOffer: false, includeSignature: true
  },

  /* ============================================================
     MAHARAJ & LEADERS
     ============================================================ */
  {
    id: "shivaji_jayanti",
    category: "maharaj",
    date: "2026-02-19",
    title: { en: "Shivaji Maharaj Jayanti", hi: "शिवाजी महाराज जयंती", mr: "छत्रपती शिवाजी महाराज जयंती" },
    message: {
      en: "🚩 Shivaji Maharaj Jayanti!\n\nToday is the birth anniversary of the great Chhatrapati Shivaji Maharaj — the founder of Hindavi Swarajya.\n\nHe dreamt of a free kingdom, challenged the Mughal empire, and gave pride to every Marathi person.\n\nJai Bhavani, Jai Shivaji! 🚩",
      hi: "🚩 शिवाजी महाराज जयंती!\n\nआज हिंदवी स्वराज्य के संस्थापक महान छत्रपति शिवाजी महाराज की जयंती है।\n\nउन्होंने स्वराज्य का सपना देखा, मुगल साम्राज्य को चुनौती दी और हर मराठी इंसान को गर्व दिया।\n\nजय भवानी, जय शिवाजी! 🚩",
      mr: "🚩 छत्रपती शिवाजी महाराज जयंती!\n\nआज हिंदवी स्वराज्याचे संस्थापक महान छत्रपती शिवाजी महाराज यांची जयंती.\n\nज्यांनी स्वराज्याचे स्वप्न पाहिले, मोगल साम्राज्याला आव्हान दिले आणि मराठी माणसाला अभिमान दिला.\n\nजय भवानी, जय शिवाजी! 🚩"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "shivaji_punyatithi",
    category: "maharaj",
    date: "2026-04-03",
    title: { en: "Shivaji Maharaj Punyatithi", hi: "शिवाजी महाराज पुण्यतिथि", mr: "छत्रपती शिवाजी महाराज पुण्यतिथी" },
    message: {
      en: "🚩 Shivaji Maharaj Punyatithi.\n\nToday is the sacred day when the great Chhatrapati Shivaji Maharaj left us at Raigad.\n\nHe dedicated his entire life to Swarajya and gave self-respect to every Marathi person. His legacy will live forever.\n\nJai Bhavani, Jai Shivaji! My humble salutations to Maharaj! 🚩",
      hi: "🚩 शिवाजी महाराज पुण्यतिथि।\n\nआज रायगड पर महान छत्रपति शिवाजी महाराज के हमें छोड़कर जाने का पवित्र दिन है।\n\nउन्होंने अपना पूरा जीवन स्वराज्य को समर्पित किया और हर मराठी इंसान को स्वाभिमान दिया। उनकी विरासत हमेशा जीवित रहेगी।\n\nजय भवानी, जय शिवाजी! महाराज को वंदन! 🚩",
      mr: "🚩 छत्रपती शिवाजी महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज रायगडावर महान छत्रपती शिवाजी महाराज यांची पुण्यतिथी.\n\nज्यांनी आपले संपूर्ण आयुष्य स्वराज्यासाठी वाहिले आणि मराठी माणसाला स्वाभिमान दिला. त्यांचा वारसा सदैव जिवंत राहील.\n\nजय भवानी, जय शिवाजी! महाराजांना मनःपूर्वक वंदन! 🚩"
    },
    includeOffer: false, includeSignature: true
  },

  {
    id: "sambhaji_balidan",
    category: "maharaj",
    date: "2026-03-11",
    title: { en: "Sambhaji Maharaj Balidan Din", hi: "संभाजी महाराज बलिदान दिवस", mr: "छत्रपती संभाजी महाराज बलिदान दिन" },
    message: {
      en: "🚩 Chhatrapati Sambhaji Maharaj Balidan Din.\n\nToday is the sacred day of the sacrifice of the great Dharmaveer Chhatrapati Sambhaji Maharaj.\n\nHe challenged tyranny for his dharma and Swarajya, and gave his life with a smile. We can never forget his sacrifice.\n\nA heartfelt tribute to Sambhaji Maharaj! 🚩",
      hi: "🚩 छत्रपती संभाजी महाराज बलिदान दिवस।\n\nआज महान धर्मवीर छत्रपती संभाजी महाराज के बलिदान का पवित्र दिन है।\n\nउन्होंने धर्म और स्वराज्य के लिए अत्याचार को चुनौती दी और हंसते-हंसते बलिदान दिया। उनका बलिदान हम कभी नहीं भूल सकते।\n\nसंभाजी महाराज को मेरा श्रद्धांजलि! 🚩",
      mr: "🚩 छत्रपती संभाजी महाराज बलिदान दिनानिमित्त श्रद्धांजली.\n\nआज महान धर्मवीर छत्रपती संभाजी महाराज यांच्या बलिदानाचा पवित्र दिवस.\n\nज्यांनी धर्मासाठी आणि स्वराज्यासाठी अत्याचाराला आव्हान दिले आणि हसत हसत बलिदान दिले. त्यांचे बलिदान आपण कधीच विसरू शकत नाही.\n\nसंभाजी महाराजांना मनःपूर्वक श्रद्धांजली! 🚩"
    },
    includeOffer: false, includeSignature: true
  },

  /* ============================================================
     NATIONAL + WORLD DAYS
     ============================================================ */
  {
    id: "republic_day",
    category: "world",
    date: "2026-01-26",
    title: { en: "Republic Day", hi: "गणतंत्र दिवस", mr: "प्रजासत्ताक दिन" },
    message: {
      en: "🇮🇳 Happy Republic Day!\n\nToday we celebrate the Constitution of India and the spirit of unity in diversity.\n\nLet us honour the sacrifices of our freedom fighters and work towards a better nation. May our tricolour always fly high.\n\nJai Hind! 🇮🇳",
      hi: "🇮🇳 गणतंत्र दिवस की हार्दिक शुभकामनाएं!\n\nआज हम भारत के संविधान और अनेकता में एकता की भावना का जश्न मनाते हैं।\n\nआइए हम अपने स्वतंत्रता सेनानियों के बलिदान का सम्मान करें और एक बेहतर राष्ट्र की दिशा में काम करें। हमारा तिरंगा सदा ऊंचा रहे।\n\nजय हिंद! 🇮🇳",
      mr: "🇮🇳 प्रजासत्ताक दिनाच्या हार्दिक शुभेच्छा!\n\nआज आपण भारताच्या संविधानाचा आणि विविधतेत एकतेच्या भावनेचा उत्सव साजरा करतो.\n\nचला, आपल्या स्वातंत्र्यसैनिकांच्या बलिदानाचा आदर करूया आणि एका उत्तम राष्ट्रासाठी काम करूया. आपला तिरंगा सदैव उंचावला राहो.\n\nजय हिंद! 🇮🇳"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "independence_day",
    category: "world",
    date: "2026-08-15",
    title: { en: "Independence Day", hi: "स्वतंत्रता दिवस", mr: "स्वातंत्र्य दिन" },
    message: {
      en: "🇮🇳 Happy Independence Day!\n\nToday we remember the freedom fighters who gave us this beautiful nation with their sacrifices.\n\nLet us salute their courage and keep the spirit of freedom alive. May our tricolour always fly high.\n\nJai Hind! 🇮🇳",
      hi: "🇮🇳 स्वतंत्रता दिवस की हार्दिक शुभकामनाएं!\n\nआज हम उन स्वतंत्रता सेनानियों को याद करते हैं जिन्होंने अपने बलिदान से हमें यह सुंदर राष्ट्र दिया।\n\nआइए उनके साहस को सलाम करें और आज़ादी की भावना जीवित रखें। हमारा तिरंगा सदा ऊंचा रहे।\n\nजय हिंद! 🇮🇳",
      mr: "🇮🇳 स्वातंत्र्य दिनाच्या हार्दिक शुभेच्छा!\n\nआज ज्यांनी आपल्याला हे सुंदर राष्ट्र दिले त्या स्वातंत्र्यसैनिकांचे स्मरण करूया.\n\nचला, त्यांच्या शौर्याला सलाम करूया आणि स्वातंत्र्याची भावना जिवंत ठेवूया. आपला तिरंगा सदैव उंचावला राहो.\n\nजय हिंद! 🇮🇳"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "womens_day",
    category: "world",
    date: "2026-03-08",
    title: { en: "International Women's Day", hi: "अंतर्राष्ट्रीय महिला दिवस", mr: "जागतिक महिला दिन" },
    message: {
      en: "💐 Happy Women's Day!\n\nToday we celebrate the strength, courage, and achievements of women everywhere.\n\nThank you for making our world better. You are strong, you are powerful, and you are unstoppable.\n\nRespect and salute to all women! 💐",
      hi: "💐 महिला दिवस की हार्दिक शुभकामनाएं!\n\nआज हम दुनिया भर की महिलाओं की ताकत, साहस और उपलब्धियों का जश्न मनाते हैं।\n\nहमारी दुनिया को बेहतर बनाने के लिए धन्यवाद। आप मजबूत हैं, आप शक्तिशाली हैं, आप अजेय हैं।\n\nसभी महिलाओं को नमन! 💐",
      mr: "💐 जागतिक महिला दिनाच्या हार्दिक शुभेच्छा!\n\nआज जगभरातील महिलांची शक्ती, धैर्य आणि यशाचा उत्सव साजरा करत आहोत.\n\nआपल्या जगाला अधिक चांगले बनवल्याबद्दल धन्यवाद. तुम्ही मजबूत आहात, शक्तिशाली आहात आणि अजेय आहात.\n\nसर्व महिलांना मनःपूर्वक नमन! 💐"
    },
    includeOffer: true, includeSignature: true
  },

  {
    id: "yoga_day",
    category: "world",
    date: "2026-06-21",
    title: { en: "International Yoga Day", hi: "अंतर्राष्ट्रीय योग दिवस", mr: "जागतिक योग दिन" },
    message: {
      en: "🧘 Happy International Yoga Day!\n\nYoga brings peace, health, and harmony to body and mind.\n\nLet us embrace this ancient Indian practice for a better life. A few minutes of yoga every day can change your life.\n\nHealthy body, peaceful mind! 🧘",
      hi: "🧘 अंतर्राष्ट्रीय योग दिवस की शुभकामनाएं!\n\nयोग शरीर और मन को शांति, स्वास्थ्य और सामंजस्य देता है।\n\nबेहतर जीवन के लिए इस प्राचीन भारतीय अभ्यास को अपनाएं। रोज़ कुछ मिनट का योग आपकी ज़िंदगी बदल सकता है।\n\nस्वस्थ शरीर, शांत मन! 🧘",
      mr: "🧘 जागतिक योग दिनाच्या शुभेच्छा!\n\nयोग शरीर आणि मनाला शांती, आरोग्य आणि सुसंवाद देतो.\n\nचांगल्या जीवनासाठी या प्राचीन भारतीय पद्धतीचा अवलंब करूया. दररोज काही मिनिटांचा योग तुमचे आयुष्य बदलू शकतो.\n\nनिरोगी शरीर, शांत मन! 🧘"
    },
    includeOffer: true, includeSignature: true
  }

];
