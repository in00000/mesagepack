/* ============================================================
   MESSAGE DATA — one sample per category.
   Add more messages later by copying the same structure.
   Categories: festival | special_day | saint_god | business
   ============================================================ */
const ALL_MESSAGES = [

  /* -------- 1) FESTIVAL -------- */
  {
    id: "ganesh_chaturthi",
    category: "festival",
    date: "2026-09-14",
    title: {
      en: "Ganesh Chaturthi",
      hi: "गणेश चतुर्थी",
      mr: "गणेश चतुर्थी"
    },
    message: {
      en: "🐘 Ganpati Bappa Morya! Wishing you and your family a very happy Ganesh Chaturthi. May Bappa remove all your troubles and bring success, peace, and happiness into your home. Celebrate with modak, devotion, and joy. Ganpati Bappa Morya! 🙏",
      hi: "🐘 गणपति बाप्पा मोरया! आपको और आपके परिवार को गणेश चतुर्थी की ढेरों शुभकामनाएं। बाप्पा आपकी सारी परेशानियां दूर करें और घर में सुख, शांति और खुशियां लाएं। मोदक, भक्ति और आनंद के साथ त्योहार मनाएं। गणपति बाप्पा मोरया! 🙏",
      mr: "🐘 गणपती बाप्पा मोरया! तुम्हाला आणि तुमच्या कुटुंबाला गणेश चतुर्थीच्या खूप खूप शुभेच्छा. बाप्पा तुमच्या सगळ्या अडचणी दूर करो आणि घरात सुख, शांती आणि आनंद आणो. मोदक, भक्ती आणि आनंदाने सण साजरा करा. गणपती बाप्पा मोरया! 🙏"
    },
    includeOffer: true,
    includeSignature: true
  },

  /* -------- 2) SPECIAL DAY -------- */
  {
    id: "world_doctors_day",
    category: "special_day",
    date: "2026-07-01",
    title: {
      en: "World Doctors' Day",
      hi: "विश्व डॉक्टर दिवस",
      mr: "जागतिक डॉक्टर दिन"
    },
    message: {
      en: "🩺 Happy World Doctors' Day! Thank you to all the doctors who work day and night to keep us healthy. Your dedication, patience, and care save countless lives. We are grateful for your service. Please take care of yourself too! 💙",
      hi: "🩺 विश्व डॉक्टर दिवस की शुभकामनाएं! उन सभी डॉक्टरों को धन्यवाद जो दिन-रात हमारी सेहत के लिए काम करते हैं। आपकी मेहनत, धैर्य और देखभाल अनगिनत जिंदगियां बचाती है। हम आपकी सेवा के लिए आभारी हैं। अपना भी ख्याल रखें! 💙",
      mr: "🩺 जागतिक डॉक्टर दिनाच्या शुभेच्छा! जे दिवस-रात्र आपल्या आरोग्यासाठी काम करतात त्या सगळ्या डॉक्टरांचे मनःपूर्वक आभार. तुमची मेहनत, संयम आणि काळजी अनेक जीव वाचवते. तुमच्या सेवेबद्दल आम्ही कृतज्ञ आहोत. स्वतःचीही काळजी घ्या! 💙"
    },
    includeOffer: true,
    includeSignature: true
  },

  /* -------- 3) SAINT / GOD / KING -------- */
  {
    id: "shivaji_jayanti",
    category: "saint_god",
    date: "2026-02-19",
    title: {
      en: "Shivaji Maharaj Jayanti",
      hi: "शिवाजी महाराज जयंती",
      mr: "शिवाजी महाराज जयंती"
    },
    message: {
      en: "🚩 Jay Shivaji, Jay Bhavani! Remembering the great Chhatrapati Shivaji Maharaj on his birth anniversary. He taught us courage, justice, and love for our land. Let us follow his ideals and make our nation proud. Jai Bhavani, Jai Shivaji! 🚩",
      hi: "🚩 जय शिवाजी, जय भवानी! महान छत्रपति शिवाजी महाराज की जयंती पर उन्हें नमन। उन्होंने हमें साहस, न्याय और देश प्रेम सिखाया। आइए उनके आदर्शों पर चलें और देश का नाम रोशन करें। जय भवानी, जय शिवाजी! 🚩",
      mr: "🚩 जय शिवाजी, जय भवानी! महान छत्रपती शिवाजी महाराज यांच्या जयंतीनिमित्त त्यांना वंदन. त्यांनी आपल्याला शौर्य, न्याय आणि देशप्रेम शिकवले. चला, त्यांच्या आदर्शांवर चालूया आणि देशाचे नाव उज्ज्वल करूया. जय भवानी, जय शिवाजी! 🚩"
    },
    includeOffer: true,
    includeSignature: true
  },

  /* -------- 4) BUSINESS -------- */
  {
    id: "google_review_request",
    category: "business",
    date: "",
    title: {
      en: "Google Review Request",
      hi: "गूगल रिव्यू अनुरोध",
      mr: "गूगल रिव्ह्यू विनंती"
    },
    message: {
      en: "🙏 Thank you for choosing us! We hope you had a great experience with our service. Your feedback means a lot to us and helps us improve. Please take a moment to share your review on Google. It will really help our small business grow. Thank you so much! ⭐",
      hi: "🙏 हमें चुनने के लिए धन्यवाद! हमें उम्मीद है कि आपको हमारी सेवा अच्छी लगी। आपकी राय हमारे लिए बहुत मायने रखती है और हमें बेहतर बनने में मदद करती है। कृपया गूगल पर अपना रिव्यू जरूर दें। इससे हमारे छोटे व्यापार को बढ़ने में मदद मिलेगी। बहुत-बहुत धन्यवाद! ⭐",
      mr: "🙏 आम्हाला निवडल्याबद्दल धन्यवाद! आम्हाला आशा आहे की तुम्हाला आमची सेवा आवडली असेल. तुमचे मत आमच्यासाठी खूप महत्त्वाचे आहे आणि आम्हाला अधिक चांगले होण्यास मदत करते. कृपया गूगलवर तुमचा रिव्ह्यू नक्की द्या. यामुळे आमच्या छोट्या व्यवसायाला वाढ होईल. खूप खूप धन्यवाद! ⭐"
    },
    includeOffer: false,
    includeSignature: true
  }

];
