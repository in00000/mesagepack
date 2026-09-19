/* ============================================================
   ALL MESSAGES — Single File
   Categories: business | maharashtra | festival | saint | maharaj | world
   Languages: en | hi | mr
   Placeholders: {TODAY_DATE} {BUSINESS_NAME} {BUSINESS_PHONE}
                 {BUSINESS_WEBSITE} {BUSINESS_ADDRESS} {MAP_LINK}
   ============================================================ */
const ALL_MESSAGES = [

/* ══════════════════════════════════════════════════════════
   1. BUSINESS MESSAGES (18)
   ══════════════════════════════════════════════════════════ */

{ id:"biz_review_1", category:"business", date:"",
  title:{en:"Google Review Request",hi:"गूगल रिव्यू अनुरोध",mr:"गूगल रिव्ह्यू विनंती"},
  message:{
    en:"🙏 Namaste!\n\nThank you for choosing us. Your experience means a lot to us.\n\nPlease take a moment to share your review on Google — it will help our small business grow.\n\n👉 {MAP_LINK}\n\nYour one review makes our day! ⭐ Visit again.",
    hi:"🙏 नमस्कार!\n\nहमें चुनने के लिए बहुत-बहुत धन्यवाद। आपका अनुभव हमारे लिए बहुत मायने रखता है।\n\nकृपया Google पर अपना रिव्यू शेयर करें — इससे हमारे छोटे व्यवसाय को मदद मिलेगी।\n\n👉 {MAP_LINK}\n\nआपके एक रिव्यू से हमारा दिन बन जाता है! ⭐ फिर आइए।",
    mr:"🙏 नमस्कार!\n\nआम्हाला निवडल्याबद्दल मनःपूर्वक धन्यवाद! तुमचा अनुभव आमच्यासाठी खूप मौल्यवान आहे.\n\nकृपया Google वर तुमचा अनुभव शेअर करा — यामुळे आमच्या छोट्या व्यवसायाला मदत होईल.\n\n👉 {MAP_LINK}\n\nतुमच्या एका रिव्ह्यूने आमचा दिवस बनतो! ⭐ पुन्हा भेट द्या."
  }, includeOffer:false, includeSignature:true },

{ id:"biz_review_2", category:"business", date:"",
  title:{en:"Review After Purchase",hi:"खरेदी के बाद रिव्यू",mr:"खरेदीनंतर रिव्ह्यू"},
  message:{
    en:"🙏 Namaste!\n\nThank you for your purchase today! We are glad you trusted us.\n\nYour honest experience will help other customers decide better. Please leave a quick Google review — just 1 minute.\n\n👉 {MAP_LINK}\n\nYour opinion is our top priority. ⭐ See you again!",
    hi:"🙏 नमस्कार!\n\nआज की खरीदारी के लिए धन्यवाद! हमें खुशी है कि आपने हम पर भरोसा किया।\n\nआपका ईमानदार अनुभव दूसरे ग्राहकों की मदद करेगा। कृपया Google पर रिव्यू दें — बस 1 मिनट।\n\n👉 {MAP_LINK}\n\nआपकी राय हमारे लिए सबसे ज़रूरी है। ⭐ फिर मिलेंगे!",
    mr:"🙏 नमस्कार!\n\nआजच्या खरेदीसाठी खूप धन्यवाद! तुम्ही आमच्यावर विश्वास ठेवला याचा आनंद आहे.\n\nतुमचा अनुभव इतर ग्राहकांना मदत करेल. कृपया Google वर छोटा रिव्ह्यू द्या — फक्त 1 मिनिट.\n\n👉 {MAP_LINK}\n\nतुमचे मत सर्वोच्च प्राधान्य आहे. ⭐ पुन्हा भेट द्या!"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_review_3", category:"business", date:"",
  title:{en:"Review After Service",hi:"सेवा के बाद रिव्यू",mr:"सेवेनंतर रिव्ह्यू"},
  message:{
    en:"🙏 Namaste!\n\nThank you for using our service today! We hope you were happy with it.\n\nSharing your experience will help us serve better. Please leave your review on Google.\n\n👉 {MAP_LINK}\n\nYour support means everything. ⭐ Hope to see you soon!",
    hi:"🙏 नमस्कार!\n\nआज हमारी सेवा लेने के लिए धन्यवाद! हमें उम्मीद है कि आप संतुष्ट हुए।\n\nअनुभव साझा करने से हमें बेहतर सेवा देने में मदद मिलेगी। कृपया Google पर रिव्यू दें।\n\n👉 {MAP_LINK}\n\nआपका सहयोग सब कुछ है। ⭐ फिर मिलेंगे!",
    mr:"🙏 नमस्कार!\n\nआज आमच्या सेवेचा लाभ घेतल्याबद्दल धन्यवाद! तुम्हाला सेवा आवडली असेल अशी आशा करतो.\n\nतुमचा अनुभव शेअर केल्यास आम्हाला अधिक चांगली सेवा देण्यास मदत होईल. कृपया Google वर रिव्ह्यू द्या.\n\n👉 {MAP_LINK}\n\nतुमच्या सहकार्याबद्दल आभार! ⭐ पुन्हा भेट द्या."
  }, includeOffer:false, includeSignature:true },

{ id:"biz_review_photo", category:"business", date:"",
  title:{en:"Review + Photo Request",hi:"रिव्यू + फोटो",mr:"रिव्ह्यू + फोटो विनंती"},
  message:{
    en:"🙏 Namaste!\n\nThank you for visiting! We need your help to reach more people.\n\nPlease review us on Google and if possible add a photo of your visit. This helps new customers trust us.\n\n👉 {MAP_LINK}\n\nThank you for your small help! ⭐ Always welcome.",
    hi:"🙏 नमस्कार!\n\nयहाँ आने के लिए धन्यवाद! हमें और लोगों तक पहुँचने में मदद चाहिए।\n\nकृपया Google पर रिव्यू दें और हो सके तो फोटो जोड़ें। इससे नए ग्राहकों को भरोसा बढ़ेगा।\n\n👉 {MAP_LINK}\n\nआपकी छोटी मदद के लिए धन्यवाद! ⭐ स्वागत है।",
    mr:"🙏 नमस्कार!\n\nभेट दिल्याबद्दल धन्यवाद! तुमचा अनुभव इतरांपर्यंत पोहोचवण्यासाठी मदत हवी आहे.\n\nकृपया Google वर रिव्ह्यू द्या आणि शक्य असल्यास फोटो जोडा. नवीन ग्राहकांना विश्वास बसेल.\n\n👉 {MAP_LINK}\n\nछोट्या मदतीबद्दल धन्यवाद! ⭐ स्वागत आहे."
  }, includeOffer:false, includeSignature:true },

{ id:"biz_appt_confirm", category:"business", date:"",
  title:{en:"Appointment Confirmation",hi:"अपॉइंटमेंट पुष्टि",mr:"अपॉइंटमेंट निश्चिती"},
  message:{
    en:"🙏 Namaste!\n\nYour appointment has been confirmed successfully.\n\n📅 Date: {TODAY_DATE}\n📍 Address: {BUSINESS_ADDRESS}\n\nPlease arrive on time. For any changes, inform us in advance. Looking forward to seeing you!",
    hi:"🙏 नमस्कार!\n\nआपका अपॉइंटमेंट सफलतापूर्वक तय हो गया।\n\n📅 तारीख: {TODAY_DATE}\n📍 पता: {BUSINESS_ADDRESS}\n\nकृपया समय पर पहुँचें। बदलाव हो तो पहले बताएं। आपका इंतज़ार है!",
    mr:"🙏 नमस्कार!\n\nतुमची अपॉइंटमेंट यशस्वीरीत्या निश्चित झाली आहे.\n\n📅 तारीख: {TODAY_DATE}\n📍 पत्ता: {BUSINESS_ADDRESS}\n\nवेळेवर या. बदल असल्यास आधी कळवा. तुमची वाट पाहत आहोत!"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_appt_remind_1d", category:"business", date:"",
  title:{en:"Appointment Reminder",hi:"अपॉइंटमेंट रिमाइंडर",mr:"अपॉइंटमेंट स्मरण"},
  message:{
    en:"🙏 Namaste!\n\nGentle reminder — you have an appointment with us tomorrow.\n\n📅 Date: {TODAY_DATE}\n📍 Location: {BUSINESS_ADDRESS}\n\nPlease arrive on time. Any problem, let us know today. See you! 😊",
    hi:"🙏 नमस्कार!\n\nयाद दिलाना — कल आपका अपॉइंटमेंट है।\n\n📅 तारीख: {TODAY_DATE}\n📍 स्थान: {BUSINESS_ADDRESS}\n\nसमय पर आएं। दिक्कत हो तो आज बताएं। मिलते हैं! 😊",
    mr:"🙏 नमस्कार!\n\nउद्या तुमची अपॉइंटमेंट आहे — छोटीशी आठवण.\n\n📅 तारीख: {TODAY_DATE}\n📍 ठिकाण: {BUSINESS_ADDRESS}\n\nवेळेवर या. अडचण असल्यास आजच कळवा. भेटूया! 😊"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_appt_remind_sd", category:"business", date:"",
  title:{en:"Same Day Reminder",hi:"आज का रिमाइंडर",mr:"आजचे स्मरण"},
  message:{
    en:"🙏 Namaste!\n\nToday you have an appointment with us.\n\n📅 Date: {TODAY_DATE}\n📍 Location: {BUSINESS_ADDRESS}\n\nPlease arrive on time. If delayed, please inform us. See you! 😊",
    hi:"🙏 नमस्कार!\n\nआज आपका अपॉइंटमेंट है।\n\n📅 तारीख: {TODAY_DATE}\n📍 स्थान: {BUSINESS_ADDRESS}\n\nसमय पर आएं। देर हो तो बताएं। मिलते हैं! 😊",
    mr:"🙏 नमस्कार!\n\nआज तुमची अपॉइंटमेंट आहे.\n\n📅 तारीख: {TODAY_DATE}\n📍 ठिकाण: {BUSINESS_ADDRESS}\n\nवेळेवर या. उशीर होणार असल्यास कळवा. भेटूया! 😊"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_appt_resched", category:"business", date:"",
  title:{en:"Appointment Reschedule",hi:"अपॉइंटमेंट स्थगित",mr:"अपॉइंटमेंट पुनर्नियोजन"},
  message:{
    en:"🙏 Namaste!\n\nWe are sorry — your confirmed appointment needs to be postponed due to unavoidable reasons.\n\nPlease share your convenient new date. We will reschedule as per your comfort.\n\nThank you for understanding! 🙏",
    hi:"🙏 नमस्कार!\n\nक्षमा करें — कुछ ज़रूरी कारणों से आपका अपॉइंटमेंट आगे बढ़ाना पड़ रहा है।\n\nकृपया अपनी सुविधा की नई तारीख बताएं। हम आपकी सुविधा अनुसार तय करेंगे।\n\nसमझने के लिए धन्यवाद! 🙏",
    mr:"🙏 नमस्कार!\n\nदिलगीर आहोत — काही अनिवार्य कारणांमुळे अपॉइंटमेंट पुढे ढकलावी लागत आहे.\n\nकृपया सोयीची नवीन तारीख कळवा. तुमच्या सोयीनुसार निश्चित करू.\n\nसमजून घेतल्याबद्दल धन्यवाद! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_thank_visit", category:"business", date:"",
  title:{en:"Thank You for Visiting",hi:"आने के लिए धन्यवाद",mr:"भेट दिल्याबद्दल धन्यवाद"},
  message:{
    en:"🙏 Namaste!\n\nThank you for visiting us today! We hope you enjoyed your time.\n\nYour visit made our day special. Please come again. Any suggestions or complaints — do tell us.\n\nVisit again! 😊",
    hi:"🙏 नमस्कार!\n\nआज आने के लिए धन्यवाद! हमें उम्मीद है कि आपको अच्छा लगा।\n\nआपकी विज़िट से दिन खास बना। फिर आइए। सुझाव या शिकायत हो तो ज़रूर बताएं।\n\nफिर आइए! 😊",
    mr:"🙏 नमस्कार!\n\nआज भेट दिल्याबद्दल मनःपूर्वक धन्यवाद! आनंद झाला असेल अशी आशा.\n\nतुमच्या भेटीने दिवस खास बनला. पुन्हा या. सूचना असल्यास नक्की कळवा.\n\nपुन्हा भेट द्या! 😊"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_thank_purchase", category:"business", date:"",
  title:{en:"Thank You for Purchase",hi:"खरीद के लिए धन्यवाद",mr:"खरेदीबद्दल धन्यवाद"},
  message:{
    en:"🙏 Namaste!\n\nThank you for your purchase today! We are proud you trusted us.\n\nWe always try to give quality products and best service. Hope you are happy with your purchase.\n\nAny problem — please contact us. Visit again! 😊",
    hi:"🙏 नमस्कार!\n\nआज की खरीदारी के लिए धन्यवाद! हमें गर्व है कि आपने भरोसा किया।\n\nहम हमेशा गुणवत्ता और बेहतरीन सेवा देने की कोशिश करते हैं। उम्मीद है आप खुश हैं।\n\nकोई समस्या हो तो संपर्क करें। फिर आइए! 😊",
    mr:"🙏 नमस्कार!\n\nआजच्या खरेदीबद्दल खूप धन्यवाद! तुम्ही विश्वास ठेवला याचा अभिमान.\n\nआम्ही नेहमी दर्जेदार उत्पादने आणि उत्तम सेवा देतो. आनंद झाला असेल अशी आशा.\n\nअडचण असल्यास संपर्क करा. पुन्हा या! 😊"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_welcome", category:"business", date:"",
  title:{en:"Welcome New Customer",hi:"नए ग्राहक का स्वागत",mr:"नवीन ग्राहकाचे स्वागत"},
  message:{
    en:"🙏 Welcome!\n\nA warm welcome to our business! We are delighted to have you as our new customer.\n\nWe promise you the best service and quality. Your satisfaction is our top priority.\n\nSpecial discount on your first purchase! 🎁 Thank you!",
    hi:"🙏 स्वागत है!\n\nहमारे व्यवसाय में हार्दिक स्वागत! खुशी है कि आप हमारे नए ग्राहक बने।\n\nहम बेहतरीन सेवा और गुणवत्ता का वादा करते हैं। संतुष्टि सर्वोच्च प्राथमिकता है।\n\nपहली खरीद पर खास छूट! 🎁 धन्यवाद!",
    mr:"🙏 स्वागत!\n\nआमच्या व्यवसायात तुमचे मनःपूर्वक स्वागत! तुम्ही नवीन ग्राहक झालात याचा आनंद.\n\nआम्ही उत्तम सेवा आणि दर्जेदार उत्पादने देण्याचे वचन देतो. समाधान सर्वोच्च प्राधान्य.\n\nपहिल्या खरेदीवर खास सवलत! 🎁 धन्यवाद!"
  }, includeOffer:true, includeSignature:true },

{ id:"biz_referral", category:"business", date:"",
  title:{en:"Referral Request",hi:"रेफरल अनुरोध",mr:"रेफरल विनंती"},
  message:{
    en:"🙏 Namaste!\n\nWe are happy that you enjoyed our service!\n\nIf you have friends, family or colleagues who would like our service, please tell them about us.\n\nSpecial discount for every successful referral! 🎁 Thank you for your support.",
    hi:"🙏 नमस्कार!\n\nखुशी है कि आपको हमारी सेवा पसंद आई!\n\nअगर आपके मित्र, परिवार या साथी को हमारी सेवा पसंद आए, तो उन्हें हमारे बारे में बताएं।\n\nहर सफल रेफरल पर खास छूट! 🎁 सहयोग के लिए धन्यवाद।",
    mr:"🙏 नमस्कार!\n\nतुम्हाला आमची सेवा आवडली याचा आनंद!\n\nतुमचे मित्र, नातेवाईक किंवा सहकारी यांना आवडेल असे वाटत असेल तर त्यांना सांगा.\n\nप्रत्येक यशस्वी रेफरलवर खास सवलत! 🎁 सहकार्याबद्दल धन्यवाद."
  }, includeOffer:true, includeSignature:true },

{ id:"biz_order_ready", category:"business", date:"",
  title:{en:"Order Ready for Pickup",hi:"ऑर्डर तैयार",mr:"ऑर्डर तयार"},
  message:{
    en:"🙏 Namaste!\n\nYour order is ready and kept for pickup! 🎉\n\n📦 Order: {TODAY_DATE}\n📍 Pickup at: {BUSINESS_ADDRESS}\n\nPlease show this message at pickup. Any questions? Contact us.\n\nThank you for your order! 😊",
    hi:"🙏 नमस्कार!\n\nआपकी ऑर्डर तैयार है और पिकअप के लिए रखी है! 🎉\n\n📦 ऑर्डर: {TODAY_DATE}\n📍 पिकअप: {BUSINESS_ADDRESS}\n\nपिकअप पर यह मेसेज दिखाएं। सवाल हों तो संपर्क करें।\n\nऑर्डर के लिए धन्यवाद! 😊",
    mr:"🙏 नमस्कार!\n\nतुमची ऑर्डर तयार आहे आणि पिकअपसाठी ठेवली आहे! 🎉\n\n📦 ऑर्डर: {TODAY_DATE}\n📍 पिकअप: {BUSINESS_ADDRESS}\n\nपिकअपला हा मेसेज दाखवा. प्रश्न असल्यास संपर्क करा.\n\nऑर्डरसाठी धन्यवाद! 😊"
  }, includeOffer:true, includeSignature:true },

{ id:"biz_payment_remind", category:"business", date:"",
  title:{en:"Payment Reminder",hi:"भुगतान अनुस्मारक",mr:"पेमेंट स्मरण"},
  message:{
    en:"🙏 Namaste!\n\nA gentle reminder — your bill is still pending.\n\n💰 Amount: ₹___\n📅 Bill Date: {TODAY_DATE}\n\nPlease make the payment at your earliest. If already paid, ignore this message.\n\nThank you for your cooperation! 🙏",
    hi:"🙏 नमस्कार!\n\nएक छोटी याद — आपका बिल अभी बाकी है।\n\n💰 राशि: ₹___\n📅 बिल तारीख: {TODAY_DATE}\n\nकृपया जल्द भुगतान करें। भुगतान हो चुका हो तो नज़रअंदाज़ करें।\n\nसहयोग के लिए धन्यवाद! 🙏",
    mr:"🙏 नमस्कार!\n\nछोटीशी आठवण — तुमचे बिल अजून प्रलंबित आहे.\n\n💰 रक्कम: ₹___\n📅 बिल तारीख: {TODAY_DATE}\n\nकृपया लवकर पेमेंट करा. झाले असेल तर दुर्लक्ष करा.\n\nसहकार्याबद्दल धन्यवाद! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_feedback", category:"business", date:"",
  title:{en:"Feedback Request",hi:"फीडबैक अनुरोध",mr:"अभिप्राय विनंती"},
  message:{
    en:"🙏 Namaste!\n\nA small request — how was your experience with us?\n\nYour feedback is very valuable. Please share via WhatsApp or call:\n\n📞 {BUSINESS_PHONE}\n\nEager to hear from you. Thank you! 😊",
    hi:"🙏 नमस्कार!\n\nएक छोटी विनंती — हमारे साथ अनुभव कैसा रहा?\n\nआपकी राय बहुत कीमती है। WhatsApp या कॉल से बताएं:\n\n📞 {BUSINESS_PHONE}\n\nसुनने के लिए उत्सुक। धन्यवाद! 😊",
    mr:"🙏 नमस्कार!\n\nछोटीशी विनंती — अनुभव कसा होता?\n\nतुमचे मत मौल्यवान आहे. WhatsApp किंवा कॉलद्वारे सांगा:\n\n📞 {BUSINESS_PHONE}\n\nऐकण्यास उत्सुक. धन्यवाद! 😊"
  }, includeOffer:false, includeSignature:true },

{ id:"biz_miss_you", category:"business", date:"",
  title:{en:"We Miss You",hi:"हमें आपकी याद आई",mr:"तुमची आठवण येते"},
  message:{
    en:"🙏 Namaste!\n\nIt has been a while since your last visit — we miss you! 😊\n\nWe have kept a special discount ready for you. Please visit once and check our new services.\n\nSpecial offer waiting for you! 🎁 Visit again!",
    hi:"🙏 नमस्कार!\n\nबहुत दिनों से आप आए नहीं — याद आ रही है! 😊\n\nआपके लिए खास छूट तैयार है। एक बार आइए और नई सेवाएं देखें।\n\nखास ऑफर तैयार! 🎁 फिर आइए!",
    mr:"🙏 नमस्कार!\n\nखूप दिवसांपासून आला नाही — आठवण येते! 😊\n\nतुमच्यासाठी खास सवलत तयार आहे. एकदा या आणि नवीन सेवा पहा.\n\nखास ऑफर तयार! 🎁 पुन्हा या!"
  }, includeOffer:true, includeSignature:true },

{ id:"biz_birthday", category:"business", date:"",
  title:{en:"Happy Birthday",hi:"जन्मदिन मुबारक",mr:"वाढदिवसाच्या शुभेच्छा"},
  message:{
    en:"🎂🎉 Happy Birthday!\n\nWishing you and your family a very happy birthday! May this day be one of the happiest in your life.\n\nMay you have success, health and prosperity.\n\nSpecial discount from us on your birthday — please visit once! 🎁\n\nHappy Birthday again! 🎈",
    hi:"🎂🎉 जन्मदिन मुबारक!\n\nआपको और आपके परिवार को जन्मदिन की ढेरों शुभकामनाएं! यह दिन ज़िंदगी का सबसे खुशनुमा दिन हो।\n\nसफलता, स्वास्थ्य और समृद्धि मिले।\n\nजन्मदिन पर हमारी खास छूट — एक बार आइए! 🎁\n\nफिर से जन्मदिन मुबारक! 🎈",
    mr:"🎂🎉 वाढदिवसाच्या हार्दिक शुभेच्छा!\n\nतुम्हाला आणि कुटुंबाला खूप खूप शुभेच्छा! हा दिवस आयुष्यातील सर्वात आनंदी दिवस असो.\n\nयश, आरोग्य आणि समृद्धी लाभो.\n\nवाढदिवसानिमित्त खास सवलत — एकदा या! 🎁\n\nपुन्हा वाढदिवसाच्या शुभेच्छा! 🎈"
  }, includeOffer:true, includeSignature:true },

{ id:"biz_anniversary", category:"business", date:"",
  title:{en:"Anniversary Wish",hi:"वर्धापन दिन",mr:"वर्धापन दिन"},
  message:{
    en:"💐🎉 Happy Anniversary!\n\nWarm wishes on your wedding anniversary! May your married life always be happy, prosperous and loving.\n\nTo make this special day more special, we have kept a special offer for you.\n\nPlease visit once and celebrate with us! 🎁\n\nHappy Anniversary again! 💐",
    hi:"💐🎉 वर्धापन दिन की शुभकामनाएं!\n\nआपके विवाह वर्धापन दिन पर ढेरों शुभकामनाएं! दांपत्य जीवन खुशहाल, समृद्ध और प्रेमपूर्ण रहे।\n\nयह दिन और खास बनाने के लिए हमने खास ऑफर रखा है।\n\nएक बार आइए और साथ मनाएं! 🎁\n\nफिर से वर्धापन दिन की शुभकामनाएं! 💐",
    mr:"💐🎉 वर्धापन दिनाच्या हार्दिक शुभेच्छा!\n\nलग्नाच्या वर्धापन दिनानिमित्त खूप शुभेच्छा! दांपत्य आयुष्य आनंदी, समृद्ध आणि प्रेमळ राहो.\n\nहा दिवस खास बनवण्यासाठी खास ऑफर ठेवली आहे.\n\nएकदा या आणि साजरा करा! 🎁\n\nपुन्हा वर्धापन दिनाच्या शुभेच्छा! 💐"
  }, includeOffer:true, includeSignature:true },

/* ══════════════════════════════════════════════════════════
   2. MAHARASHTRA SPECIAL DAYS (10)
   ══════════════════════════════════════════════════════════ */

{ id:"mh_maharashtra_day", category:"maharashtra", date:"2026-05-01",
  title:{en:"Maharashtra Day",hi:"महाराष्ट्र दिवस",mr:"महाराष्ट्र दिन"},
  message:{
    en:"🚩 Happy Maharashtra Day!\n\nToday is the foundation day of our beloved Maharashtra — a day of pride for every Marathi person.\n\nMay our state keep growing in prosperity, unity and progress. Let us always carry the pride of being Marathi.\n\nJai Maharashtra! 🚩 Jai Hind! 🇮🇳",
    hi:"🚩 महाराष्ट्र दिवस की हार्दिक शुभकामनाएं!\n\nआज हमारे प्यारे महाराष्ट्र का स्थापना दिवस है — हर मराठी के लिए गर्व का दिन।\n\nहमारा राज्य प्रगति, समृद्धि और एकता में आगे बढ़ता रहे। मराठी होने का गर्व हमेशा रहे।\n\nजय महाराष्ट्र! 🚩 जय हिंद! 🇮🇳",
    mr:"🚩 महाराष्ट्र दिनाच्या हार्दिक शुभेच्छा!\n\nआज आपल्या प्रिय महाराष्ट्राचा स्थापना दिवस — मराठी माणसासाठी अभिमानाचा दिवस.\n\nराज्याची प्रगती, समृद्धी आणि एकता वाढत राहो. मराठी असल्याचा अभिमान ठेवूया.\n\nजय महाराष्ट्र! 🚩 जय हिंद! 🇮🇳"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_bhasha_din", category:"maharashtra", date:"2026-02-27",
  title:{en:"Marathi Bhasha Din",hi:"मराठी भाषा दिवस",mr:"मराठी भाषा गौरव दिन"},
  message:{
    en:"📚 Happy Marathi Bhasha Din!\n\nToday is the birth anniversary of the great poet Kusumagraj. A day to celebrate the glory of Marathi.\n\nOur mother tongue Marathi is one of the sweetest languages. Let us all speak, read and promote Marathi.\n\nMay Marathi live forever! 📚",
    hi:"📚 मराठी भाषा दिवस की शुभकामनाएं!\n\nआज महान साहित्यकार कुसुमाग्रज की जयंती है। मराठी के गौरव का दिन।\n\nहमारी मातृभाषा मराठी सबसे मीठी भाषाओं में से है। मराठी बोलें, पढ़ें और बढ़ाएं।\n\nमराठी भाषा अमर रहे! 📚",
    mr:"📚 मराठी भाषा गौरव दिनाच्या शुभेच्छा!\n\nआज महान साहित्यिक कुसुमाग्रज यांची जयंती. मराठी भाषेचा गौरव साजरा करण्याचा दिवस.\n\nआपली मायमराठी जगात सर्वात गोड आहे. मराठी बोलूया, वाचूया आणि प्रचार करूया.\n\nमराठी भाषा अमर राहो! 📚"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_marathwada_mukti", category:"maharashtra", date:"2026-09-17",
  title:{en:"Marathwada Mukti Sangram Din",hi:"मराठवाड़ा मुक्ति दिवस",mr:"मराठवाडा मुक्ती संग्राम दिन"},
  message:{
    en:"🕊️ Marathwada Mukti Sangram Din.\n\nToday we remember the brave warriors who fought for the liberation of Marathwada.\n\nTheir sacrifice gave us freedom and unity. We salute all those heroes.\n\nJai Marathwada! Jai Maharashtra! 🕊️",
    hi:"🕊️ मराठवाड़ा मुक्ति संग्राम दिवस।\n\nआज हम मराठवाड़ा की मुक्ति के लिए लड़े वीरों को याद करते हैं।\n\nउनके त्याग ने हमें स्वतंत्रता और एकता दी। सभी वीरों को सलाम।\n\nजय मराठवाड़ा! जय महाराष्ट्र! 🕊️",
    mr:"🕊️ मराठवाडा मुक्ती संग्राम दिन.\n\nआज मराठवाड्याच्या मुक्तीसाठी लढलेल्या वीरांचे स्मरण करतो.\n\nत्यांच्या त्यागाने स्वातंत्र्य आणि एकता मिळाली. सर्व वीरांना वंदन.\n\nजय मराठवाडा! जय महाराष्ट्र! 🕊️"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_police_day", category:"maharashtra", date:"2026-04-02",
  title:{en:"Maharashtra Police Day",hi:"महाराष्ट्र पुलिस दिवस",mr:"महाराष्ट्र पोलीस दिन"},
  message:{
    en:"👮 Happy Maharashtra Police Day!\n\nHeartfelt thanks to all police officers who work day and night for our safety.\n\nTheir courage, dedication and sacrifice keep us safe. We are grateful for their service.\n\nJai Maharashtra Police! 👮",
    hi:"👮 महाराष्ट्र पुलिस दिवस की शुभकामनाएं!\n\nउन सभी पुलिसकर्मियों को धन्यवाद जो दिन-रात हमारी सुरक्षा के लिए काम करते हैं।\n\nउनका साहस, निष्ठा और त्याग हमें सुरक्षित रखता है। हम आभारी हैं।\n\nजय महाराष्ट्र पुलिस! 👮",
    mr:"👮 महाराष्ट्र पोलीस दिनाच्या शुभेच्छा!\n\nआपल्या सुरक्षेसाठी दिवस-रात्र झटणाऱ्या सर्व पोलिसांना मनःपूर्वक आभार.\n\nत्यांचे धैर्य, निष्ठा आणि त्याग आपल्याला सुरक्षित ठेवतो. आम्ही कृतज्ञ आहोत.\n\nजय महाराष्ट्र पोलीस! 👮"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_krushi_din", category:"maharashtra", date:"2026-12-23",
  title:{en:"Krushi Din",hi:"कृषि दिवस",mr:"कृषी दिन"},
  message:{
    en:"🌾 Happy Krushi Din!\n\nHeartfelt thanks and wishes to all our annadata — the farmers.\n\nThe food on our plate comes from their hard work. Farmers are the backbone of our nation.\n\nLet us respect them and always support them. Jai Jawan, Jai Kisan! 🌾",
    hi:"🌾 कृषि दिवस की शुभकामनाएं!\n\nहमारे अन्नदाता किसानों को धन्यवाद और शुभकामनाएं।\n\nहमारी थाली का अन्न उनकी मेहनत से आता है। किसान देश की रीढ़ हैं।\n\nउनका सम्मान करें और मदद करें। जय जवान, जय किसान! 🌾",
    mr:"🌾 कृषी दिनाच्या हार्दिक शुभेच्छा!\n\nआपल्या अन्नदात्या शेतकऱ्यांना मनःपूर्वक आभार आणि शुभेच्छा.\n\nताटातील अन्न त्यांच्या कष्टाने येते. शेतकरी देशाचा कणा आहे.\n\nआदर करूया आणि मदत करूया. जय जवान, जय किसान! 🌾"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_shahu_jayanti", category:"maharashtra", date:"2026-06-26",
  title:{en:"Chhatrapati Shahu Maharaj Jayanti",hi:"छत्रपति शाहू महाराज जयंती",mr:"छत्रपती शाहू महाराज जयंती"},
  message:{
    en:"👑 Chhatrapati Shahu Maharaj Jayanti!\n\nToday we remember the great social reformer and education lover Chhatrapati Shahu Maharaj.\n\nHe dedicated his life to give education and justice to all. Let us follow his ideals.\n\nJai Shahu Maharaj! 👑",
    hi:"👑 छत्रपति शाहू महाराज जयंती!\n\nआज समाजसुधारक और शिक्षा प्रेमी छत्रपति शाहू महाराज को याद करते हैं।\n\nउन्होंने सबको शिक्षा और न्याय देने के लिए जीवन समर्पित किया। आदर्शों पर चलें।\n\nजय शाहू महाराज! 👑",
    mr:"👑 छत्रपती शाहू महाराज जयंती!\n\nआज समाजसुधारक आणि शिक्षणप्रेमी छत्रपती शाहू महाराज यांचे स्मरण करतो.\n\nत्यांनी सर्वांना शिक्षण आणि न्याय देण्यासाठी आयुष्य वाहिले. आदर्शांवर चालूया.\n\nजय शाहू महाराज! 👑"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_parishram_din", category:"maharashtra", date:"2026-06-05",
  title:{en:"Maharashtra Environment Day",hi:"महाराष्ट्र पर्यावरण दिवस",mr:"महाराष्ट्र पर्यावरण दिन"},
  message:{
    en:"🌳 Happy Maharashtra Environment Day!\n\nIt is our responsibility to protect the beautiful Sahyadri, rivers and forests of Maharashtra.\n\nLet us plant a tree, save water and reduce plastic. Keep a green Maharashtra for the next generation.\n\nSave Nature! Save Maharashtra! 🌳",
    hi:"🌳 महाराष्ट्र पर्यावरण दिवस की शुभकामनाएं!\n\nमहाराष्ट्र के सुंदर सह्याद्री, नदियों और जंगलों की रक्षा हमारी जिम्मेदारी है।\n\nपेड़ लगाएं, पानी बचाएं और प्लास्टिक कम करें। अगली पीढ़ी के लिए हरा महाराष्ट्र रखें।\n\nप्रकृति बचाओ! महाराष्ट्र बचाओ! 🌳",
    mr:"🌳 महाराष्ट्र पर्यावरण दिनाच्या शुभेच्छा!\n\nआपल्या सुंदर सह्याद्री, नद्या आणि जंगलांचे संरक्षण करणे ही जबाबदारी आहे.\n\nएक झाड लावूया, पाणी वाचवूया, प्लास्टिक कमी करूया. पुढच्या पिढीसाठी हिरवा महाराष्ट्र ठेवूया.\n\nनिसर्ग वाचवा! महाराष्ट्र वाचवा! 🌳"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_rajbhasha_din", category:"maharashtra", date:"2026-09-14",
  title:{en:"Marathi Rajbhasha Din",hi:"मराठी राजभाषा दिवस",mr:"मराठी राजभाषा दिन"},
  message:{
    en:"🗣️ Happy Marathi Rajbhasha Din!\n\nToday is the day Marathi got the status of official language in Maharashtra. A proud moment for all Marathi people.\n\nOur mother tongue Marathi is our identity. Let us speak Marathi at home, shop and office.\n\nMay Marathi live forever! 🗣️",
    hi:"🗣️ मराठी राजभाषा दिवस की शुभकामनाएं!\n\nआज महाराष्ट्र में मराठी को राजभाषा का दर्जा मिला। सभी मराठी लोगों के लिए गर्व का क्षण।\n\nमराठी हमारी पहचान है। घर, दुकान और दफ्तर में मराठी बोलें।\n\nमराठी भाषा अमर रहे! 🗣️",
    mr:"🗣️ मराठी राजभाषा दिनाच्या शुभेच्छा!\n\nआज महाराष्ट्रात मराठीला राजभाषेचा दर्जा मिळाला. सर्व मराठी माणसांसाठी अभिमानाचा क्षण.\n\nमायमराठी आपली ओळख आहे. घरी, दुकानात, कार्यालयात मराठी बोलूया.\n\nमराठी भाषा अमर राहो! 🗣️"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_hutatma_din", category:"maharashtra", date:"2026-05-01",
  title:{en:"Hutatma Din",hi:"हुतात्मा दिवस",mr:"हुतात्मा दिन"},
  message:{
    en:"🇮🇳 Hutatma Din.\n\nOur humble tribute to the brave martyrs who gave their lives for a united Maharashtra.\n\nBecause of their sacrifice, we have Maharashtra today. We can never forget their sacrifice.\n\nSalute to the martyrs! 🇮🇳",
    hi:"🇮🇳 हुतात्मा दिवस।\n\nसंयुक्त महाराष्ट्र के लिए प्राण देने वाले वीर हुतात्माओं को वंदन।\n\nउनके बलिदान से हमें महाराष्ट्र मिला। उनका बलिदान कभी नहीं भूल सकते।\n\nहुतात्माओं को सलाम! 🇮🇳",
    mr:"🇮🇳 हुतात्मा दिन.\n\nसंयुक्त महाराष्ट्रासाठी प्राणांची आहुती देणाऱ्या वीरांना वंदन.\n\nत्यांच्या बलिदानाने महाराष्ट्र मिळाला. बलिदान कधीच विसरू शकत नाही.\n\nहुतात्म्यांना सलाम! 🇮🇳"
  }, includeOffer:true, includeSignature:true },

{ id:"mh_udyog_din", category:"maharashtra", date:"",
  title:{en:"Maharashtra Industry Day",hi:"महाराष्ट्र उद्योग दिवस",mr:"महाराष्ट्र उद्योग दिन"},
  message:{
    en:"🏭 Happy Maharashtra Industry Day!\n\nWarm wishes to all entrepreneurs, traders and workers of Maharashtra.\n\nYour hard work is making Maharashtra the most developed state in India. Let us build a stronger Maharashtra together.\n\nJai Maharashtra Industry! 🏭",
    hi:"🏭 महाराष्ट्र उद्योग दिवस की शुभकामनाएं!\n\nमहाराष्ट्र के सभी उद्यमियों, व्यापारियों और श्रमिकों को शुभकामनाएं।\n\nआपकी मेहनत से महाराष्ट्र भारत का सबसे विकसित राज्य बन रहा है। साथ मिलकर आगे बढ़ें।\n\nजय महाराष्ट्र उद्योग! 🏭",
    mr:"🏭 महाराष्ट्र उद्योग दिनाच्या शुभेच्छा!\n\nमहाराष्ट्रातील सर्व उद्योजक, व्यापारी आणि कामगारांना शुभेच्छा.\n\nतुमच्या कष्टाने महाराष्ट्र भारतातील सर्वात विकसित राज्य बनत आहे. एकत्र पुढे जाऊया.\n\nजय महाराष्ट्र उद्योग! 🏭"
  }, includeOffer:true, includeSignature:true },

/* ══════════════════════════════════════════════════════════
   3. FESTIVALS (35)
   ══════════════════════════════════════════════════════════ */

{ id:"fest_gudi_padwa", category:"festival", date:"2026-03-19",
  title:{en:"Gudi Padwa",hi:"गुड़ी पड़वा",mr:"गुढी पाडवा"},
  message:{
    en:"🌾 Happy Gudi Padwa!\n\nToday begins the Marathi New Year! We welcome the new year by hoisting the Gudi.\n\nMay the new year bring health, success and joy to your family. May the Gudi bring peace and happiness home.\n\nHappy New Year! 🌾",
    hi:"🌾 गुड़ी पड़वा की शुभकामनाएं!\n\nआज मराठी नववर्ष की शुरुआत है! गुड़ी उठाकर नए साल का स्वागत करते हैं।\n\nनया साल आपके परिवार को स्वास्थ्य, सफलता और खुशियां दे। गुड़ी घर में सुख-शांति लाए।\n\nनया साल मंगलमय हो! 🌾",
    mr:"🌾 गुढी पाडव्याच्या हार्दिक शुभेच्छा!\n\nआज मराठी नववर्षाची सुरुवात! गुढी उभारून नवीन वर्षाचे स्वागत करतो.\n\nनवीन वर्षात आरोग्य, यश आणि आनंद लाभो. गुढी घरी सुख-शांती आणो.\n\nनवीन वर्ष मंगलमय होवो! 🌾"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_akshaya", category:"festival", date:"2026-04-20",
  title:{en:"Akshaya Tritiya",hi:"अक्षय तृतीया",mr:"अक्षय्य तृतीया"},
  message:{
    en:"✨ Happy Akshaya Tritiya!\n\nThis day is considered eternal (akshaya) — a day of auspicious beginnings.\n\nBuying gold and starting new ventures on this day is very auspicious. May your happiness and prosperity never diminish.\n\nShubh Akshaya Tritiya! ✨",
    hi:"✨ अक्षय तृतीया की शुभकामनाएं!\n\nयह दिन अक्षय माना जाता है — शुभ शुरुआत का दिन।\n\nसोना खरीदना और नई शुरुआत इस दिन शुभ है। आपकी खुशी और समृद्धि कभी कम न हो।\n\nशुभ अक्षय तृतीया! ✨",
    mr:"✨ अक्षय्य तृतीयेच्या हार्दिक शुभेच्छा!\n\nआजचा दिवस अक्षय मानला जातो — शुभ सुरुवातीचा दिवस.\n\nसोने खरेदी आणि नवीन सुरुवातीसाठी शुभ. आनंद आणि समृद्धी कधीच कमी होऊ नये.\n\nशुभ अक्षय्य तृतीया! ✨"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_guru_purnima", category:"festival", date:"2026-07-29",
  title:{en:"Guru Purnima",hi:"गुरु पूर्णिमा",mr:"गुरु पौर्णिमा"},
  message:{
    en:"🙏 Happy Guru Purnima!\n\nToday is the sacred day to remember our gurus — those who showed us the path.\n\nA guru's place is greater than God. Let us seek their blessings and always honour them.\n\nSalutations at the guru's feet! 🙏",
    hi:"🙏 गुरु पूर्णिमा की शुभकामनाएं!\n\nआज गुरुओं को याद करने का पवित्र दिन — जिन्होंने रास्ता दिखाया।\n\nगुरु का स्थान ईश्वर से भी ऊंचा है। आशीर्वाद लें और सम्मान करें।\n\nगुरुचरणों में वंदन! 🙏",
    mr:"🙏 गुरु पौर्णिमेच्या हार्दिक शुभेच्छा!\n\nआज गुरूंचे स्मरण करण्याचा पवित्र दिवस — ज्यांनी मार्ग दाखवला.\n\nगुरूचे स्थान ईश्वरापेक्षा मोठे. आशीर्वाद घ्या आणि आदर ठेवा.\n\nगुरुचरणी वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_ashadhi", category:"festival", date:"2026-07-25",
  title:{en:"Ashadhi Ekadashi",hi:"आषाढ़ी एकादशी",mr:"आषाढी एकादशी"},
  message:{
    en:"🚩 Happy Ashadhi Ekadashi!\n\nToday is the sacred day of Vitthal darshan at Pandharpur — the biggest festival of Warkari tradition.\n\nChant Vitthal's name and seek his blessings. May Pandurang fulfill all your wishes.\n\nVitthal Vitthal! Jai Hari Vitthal! 🚩",
    hi:"🚩 आषाढ़ी एकादशी की शुभकामनाएं!\n\nआज पंढरपुर में विठ्ठल दर्शन का पवित्र दिन — वारकरी परंपरा का सबसे बड़ा सण।\n\nविठ्ठल नाम जपें और आशीर्वाद लें। पांडुरंग सभी मनोकामनाएं पूर्ण करें।\n\nविठ्ठल विठ्ठल! जय हरी विठ्ठल! 🚩",
    mr:"🚩 आषाढी एकादशीच्या हार्दिक शुभेच्छा!\n\nआज पंढरपूरच्या विठ्ठल दर्शनाचा पवित्र दिवस — वारकरी संप्रदायाचा सर्वात मोठा सण.\n\nविठ्ठल नामस्मरण करा. पुंडलिक वरदा हरी विठ्ठल सर्व मनोकामना पूर्ण करो.\n\nविठ्ठल विठ्ठल! जय हरी विठ्ठल! 🚩"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_nag_panchami", category:"festival", date:"2026-08-17",
  title:{en:"Nag Panchami",hi:"नाग पंचमी",mr:"नागपंचमी"},
  message:{
    en:"🐍 Happy Nag Panchami!\n\nToday is the sacred day to worship the serpent god. The nag is a symbol of wealth, protection and health.\n\nMay the serpent god bring happiness, peace and health to your home. May your family be protected from all troubles.\n\nHappy Nag Panchami! 🐍",
    hi:"🐍 नाग पंचमी की शुभकामनाएं!\n\nआज नागदेवता की पूजा का पवित्र दिन। नाग संपत्ति, सुरक्षा और स्वास्थ्य का प्रतीक है।\n\nनागदेवता आपके घर में सुख, शांति और स्वास्थ्य लाएं। परिवार की रक्षा हो।\n\nशुभ नाग पंचमी! 🐍",
    mr:"🐍 नागपंचमीच्या हार्दिक शुभेच्छा!\n\nआज नागदेवतेची पूजा करण्याचा पवित्र दिवस. नाग संपत्ती, संरक्षण आणि आरोग्याचे प्रतीक.\n\nनागदेवता घरी सुख, शांती आणि आरोग्य आणो. कुटुंबाचे संरक्षण होवो.\n\nशुभ नागपंचमी! 🐍"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_narali", category:"festival", date:"2026-08-28",
  title:{en:"Narali Purnima",hi:"नारळी पूर्णिमा",mr:"नारळी पौर्णिमा"},
  message:{
    en:"🌊 Happy Narali Purnima!\n\nToday is the day to worship the sea god. Fishermen offer coconuts to the sea and seek blessings.\n\nMay Narali Purnima bring prosperity and happiness to your life. May this Raksha Bandhan festival be auspicious for you.\n\nHappy Narali Purnima! 🌊",
    hi:"🌊 नारळी पूर्णिमा की शुभकामनाएं!\n\nआज समुद्रदेव की पूजा का दिन। मछुआरे समुद्र को नारियल अर्पित करते हैं।\n\nनारळी पूर्णिमा जीवन में समृद्धि लाए। रक्षाबंधन का यह सण मंगलमय हो।\n\nशुभ नारळी पूर्णिमा! 🌊",
    mr:"🌊 नारळी पौर्णिमेच्या हार्दिक शुभेच्छा!\n\nआज समुद्रदेवाची पूजा करण्याचा दिवस. मच्छीमार समुद्राला नारळ अर्पण करतात.\n\nनारळी पौर्णिमा समृद्धी आणि सुख आणो. रक्षाबंधनाचा सण मंगलमय होवो.\n\nशुभ नारळी पौर्णिमा! 🌊"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_pola", category:"festival", date:"2026-09-08",
  title:{en:"Pola",hi:"पोला",mr:"पोळा"},
  message:{
    en:"🐂 Happy Pola!\n\nToday is the biggest festival of farmers! A day to decorate and worship the bulls.\n\nFarmers and bulls are the pillars of our life. Because of their hard work, we get food.\n\nSalutations to the bulls! Best wishes to farmers! Happy Pola! 🐂",
    hi:"🐂 पोला की शुभकामनाएं!\n\nआज किसानों का सबसे बड़ा सण! बैलों को सजाकर पूजा का दिन।\n\nकिसान और बैल जीवन के आधार हैं। उनकी मेहनत से अन्न मिलता है।\n\nबैलों को वंदन! किसानों को शुभकामनाएं! शुभ पोला! 🐂",
    mr:"🐂 पोळ्याच्या हार्दिक शुभेच्छा!\n\nआज शेतकऱ्यांचा सर्वात मोठा सण! बैलांना सजवून पूजा करण्याचा दिवस.\n\nशेतकरी आणि बैल जीवनाचे आधार. त्यांच्या कष्टाने अन्न मिळते.\n\nबैलांना वंदन! शेतकऱ्यांना शुभेच्छा! शुभ पोळा! 🐂"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_hartalika", category:"festival", date:"2026-09-09",
  title:{en:"Hartalika",hi:"हरतालिका",mr:"हरतालिका"},
  message:{
    en:"🌺 Happy Hartalika!\n\nToday is the sacred day to worship Gauri and Shankar. Married women fast and pray for their husband's long life.\n\nMay Mother Gauri bring happiness, peace and prosperity to your home. May her blessings always be with your family.\n\nJai Gauri Mata! 🌺",
    hi:"🌺 हरतालिका की शुभकामनाएं!\n\nआज गौरी और शंकर की पूजा का पवित्र दिन। सुहागिनें व्रत रखकर पति की लंबी उम्र की प्रार्थना करती हैं।\n\nमाता गौरी घर में सुख, शांति और समृद्धि लाएं। आशीर्वाद सदा बना रहे।\n\nजय गौरी माता! 🌺",
    mr:"🌺 हरतालिकेच्या हार्दिक शुभेच्छा!\n\nआज गौरी आणि शंकराची पूजा करण्याचा पवित्र दिवस. विवाहित स्त्रिया उपवास करतात.\n\nमाता गौरी संसारात सुख, शांती आणि समृद्धी आणो. आशीर्वाद नेहमी राहो.\n\nजय गौरी माता! 🌺"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_ganesh", category:"festival", date:"2026-09-14",
  title:{en:"Ganesh Chaturthi",hi:"गणेश चतुर्थी",mr:"गणेश चतुर्थी"},
  message:{
    en:"🐘 Ganpati Bappa Morya!\n\nWishing you and your family a very happy Ganesh Chaturthi! May Bappa remove all troubles and bring success, peace and happiness home.\n\nCelebrate with modak, devotion and joy. May Bappa's blessings always stay with you.\n\nGanpati Bappa Morya! Mangalmurti Morya! 🐘",
    hi:"🐘 गणपति बाप्पा मोरया!\n\nआपको और परिवार को गणेश चतुर्थी की ढेरों शुभकामनाएं! बाप्पा सारी परेशानियां दूर करें और घर में सुख, शांति लाएं।\n\nमोदक, भक्ति और आनंद से सण मनाएं. बाप्पा का आशीर्वाद सदा रहे.\n\nगणपति बाप्पा मोरया! मंगलमूर्ती मोरया! 🐘",
    mr:"🐘 गणपती बाप्पा मोरया!\n\nतुम्हाला आणि कुटुंबाला गणेश चतुर्थीच्या खूप खूप शुभेच्छा! बाप्पा अडचणी दूर करो आणि सुख, शांती आणो.\n\nमोदक, भक्ती आणि आनंदाने सण साजरा करा. बाप्पांचा आशीर्वाद राहो.\n\nगणपती बाप्पा मोरया! मंगलमूर्ती मोरया! 🐘"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_anant", category:"festival", date:"2026-09-24",
  title:{en:"Anant Chaturdashi",hi:"अनंत चतुर्दशी",mr:"अनंत चतुर्दशी"},
  message:{
    en:"🙏 Happy Anant Chaturdashi!\n\nToday is the day of Ganpati Visarjan. We bid a loving farewell to Bappa and request him to come back soon next year.\n\nMay Bappa come back soon and bring happiness again.\n\nGanpati Bappa Morya! Come back soon! 🙏",
    hi:"🙏 अनंत चतुर्दशी की शुभकामनाएं!\n\nआज गणपति विसर्जन का दिन। बाप्पा को भावपूर्ण विदाई और अगले साल जल्दी आने की विनती।\n\nबाप्पा जल्दी लौटें और फिर खुशियां लाएं।\n\nगणपति बाप्पा मोरया! अगले साल जल्दी आना! 🙏",
    mr:"🙏 अनंत चतुर्दशीच्या हार्दिक शुभेच्छा!\n\nआज गणपती विसर्जनाचा दिवस. बाप्पांना निरोप आणि पुढच्या वर्षी लवकर येण्याची विनंती.\n\nबाप्पा लवकर येवोत आणि आनंद घेऊन येवोत.\n\nगणपती बाप्पा मोरया! पुढच्या वर्षी लवकर या! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_sarvapitri", category:"festival", date:"2026-10-10",
  title:{en:"Sarvapitri Amavasya",hi:"सर्वपित्री अमावस्या",mr:"सर्वपित्री अमावस्या"},
  message:{
    en:"🙏 Sarvapitri Amavasya.\n\nToday we remember our ancestors and offer them our respects. This is the last Amavasya of Pitru Paksha.\n\nMay our ancestors' blessings always be with us. Respectful salutations to them.\n\nSalutations to ancestors! 🙏",
    hi:"🙏 सर्वपित्री अमावस्या।\n\nआज हम अपने पूर्वजों को याद करते हैं और श्रद्धांजलि देते हैं। यह पितृ पक्ष की अंतिम अमावस्या है।\n\nपूर्वजों का आशीर्वाद सदा बना रहे। उन्हें विनम्र वंदन।\n\nपूर्वजों को वंदन! 🙏",
    mr:"🙏 सर्वपित्री अमावस्या.\n\nआज पूर्वजांचे स्मरण आणि श्रद्धांजली. पितृ पक्षाची ही अंतिम अमावस्या.\n\nपूर्वजांचे आशीर्वाद सदैव राहो. त्यांना वंदन.\n\nपूर्वजांना वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_navratri", category:"festival", date:"2026-10-11",
  title:{en:"Navratri",hi:"नवरात्रि",mr:"नवरात्री"},
  message:{
    en:"🌺 Happy Navratri!\n\nFrom Ghatasthapana today, the nine sacred nights begin. Let us worship the nine forms of Mother Durga.\n\nMay Mother Durga remove all troubles from your life and give happiness, peace and strength.\n\nJai Mata Di! 🌺",
    hi:"🌺 नवरात्रि की शुभकामनाएं!\n\nआज घटस्थापना से नौ पवित्र रात्रियां शुरू हो रही हैं। मां दुर्गा के नौ रूपों की आराधना करें।\n\nमां दुर्गा जीवन से सारी परेशानियां दूर करें और सुख, शांति और शक्ति दें।\n\nजय माता दी! 🌺",
    mr:"🌺 नवरात्रीच्या हार्दिक शुभेच्छा!\n\nआज घटस्थापनेपासून नऊ दिवसांची पवित्र नवरात्री सुरू. माता दुर्गेच्या नऊ रूपांची आराधना करूया.\n\nमाता दुर्गा अडचणी दूर करो आणि सुख, शांती, शक्ती देवो.\n\nजय माता दी! 🌺"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_dasara", category:"festival", date:"2026-10-20",
  title:{en:"Vijayadashami",hi:"विजयादशमी",mr:"विजयादशमी"},
  message:{
    en:"🌼 Happy Vijayadashami!\n\nToday we celebrate the victory of good over evil. By exchanging golden apta leaves, we wish each other well.\n\nTruth, justice and dharma always win. May you overcome all your problems.\n\nHappy Vijayadashami! 🌼",
    hi:"🌼 विजयादशमी की शुभकामनाएं!\n\nआज बुराई पर अच्छाई की जीत का उत्सव। सोनेरी आपटे की पत्तियां बांटकर शुभकामनाएं देते हैं।\n\nसत्य, न्याय और धर्म की जीत हमेशा होती है। सारी परेशानियों पर विजय मिले।\n\nशुभ विजयादशमी! 🌼",
    mr:"🌼 विजयादशमीच्या हार्दिक शुभेच्छा!\n\nआज वाईटावर चांगल्याचा विजय साजरा करतो. सोनेरी आपट्याची पाने वाटून शुभेच्छा देतो.\n\nसत्य, न्याय आणि धर्माचा विजय होतो. सर्व अडचणींवर विजय मिळो.\n\nशुभ विजयादशमी! 🌼"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_kojagiri", category:"festival", date:"2026-10-25",
  title:{en:"Kojagiri Purnima",hi:"कोजागिरी पूर्णिमा",mr:"कोजागिरी पौर्णिमा"},
  message:{
    en:"🌕 Happy Kojagiri Purnima!\n\nToday is the sacred day to worship the moon. On this night, drinking milk in moonlight is a tradition.\n\nMay Mother Lakshmi bring happiness, prosperity and health to your home. May the moon's grace always be on your family.\n\nHappy Kojagiri! 🌕",
    hi:"🌕 कोजागिरी पूर्णिमा की शुभकामनाएं!\n\nआज चंद्र पूजा का पवित्र दिन। इस रात चांदनी में दूध पीने की परंपरा है।\n\nमाता लक्ष्मी घर में सुख, समृद्धि और स्वास्थ्य लाएं। चंद्र की कृपा बनी रहे।\n\nशुभ कोजागिरी! 🌕",
    mr:"🌕 कोजागिरी पौर्णिमेच्या हार्दिक शुभेच्छा!\n\nआज चंद्राची पूजा करण्याचा पवित्र दिवस. या रात्री चंद्रप्रकाशात दूध पिण्याची परंपरा.\n\nमाता लक्ष्मी घरी सुख, समृद्धी आणि आरोग्य आणो. चंद्राची कृपा राहो.\n\nशुभ कोजागिरी! 🌕"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_vasu_baras", category:"festival", date:"2026-11-05",
  title:{en:"Vasu Baras",hi:"वसुबारस",mr:"वसुबारस"},
  message:{
    en:"🐄 Happy Vasu Baras!\n\nToday is the day to worship cows and calves. It is the first day of Diwali.\n\nCows are symbols of prosperity, purity and motherhood. Worshipping them brings happiness and wealth home.\n\nHappy Vasu Baras! 🐄",
    hi:"🐄 वसुबारस की शुभकामनाएं!\n\nआज गाय और बछड़ों की पूजा का दिन। दिवाली का पहला दिन है।\n\nगाय समृद्धि, पवित्रता और मातृत्व की प्रतीक हैं। पूजा से सुख-समृद्धि आती है।\n\nशुभ वसुबारस! 🐄",
    mr:"🐄 वसुबारसच्या हार्दिक शुभेच्छा!\n\nआज गायी आणि वासरांची पूजा करण्याचा दिवस. दिवाळीचा पहिला दिवस.\n\nगायी समृद्धी, पवित्रता आणि मातृत्वाची प्रतीक. पूजेने सुख-समृद्धी येते.\n\nशुभ वसुबारस! 🐄"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_dhanteras", category:"festival", date:"2026-11-06",
  title:{en:"Dhanteras",hi:"धनतेरस",mr:"धनत्रयोदशी"},
  message:{
    en:"🪙 Happy Dhanteras!\n\nToday is the day to worship Dhanvantari and Kuber. Buying gold or new items on Dhanteras is considered auspicious.\n\nMay Dhanvantari give you health and Kuber bring prosperity home.\n\nHappy Dhanteras! 🪙",
    hi:"🪙 धनतेरस की शुभकामनाएं!\n\nआज धन्वंतरि और कुबेर की पूजा का दिन। धनतेरस पर सोना या नई चीज़ें खरीदना शुभ है।\n\nधन्वंतरि स्वास्थ्य दें और कुबेर समृद्धि लाएं।\n\nशुभ धनतेरस! 🪙",
    mr:"🪙 धनत्रयोदशीच्या हार्दिक शुभेच्छा!\n\nआज धन्वंतरी आणि कुबेराची पूजा करण्याचा दिवस. धनतेरसला सोने किंवा नवीन वस्तू खरेदी शुभ.\n\nधन्वंतरी आरोग्य देवोत आणि कुबेर समृद्धी आणो.\n\nशुभ धनत्रयोदशी! 🪙"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_narak", category:"festival", date:"2026-11-07",
  title:{en:"Narak Chaturdashi",hi:"नरक चतुर्दशी",mr:"नरक चतुर्दशी"},
  message:{
    en:"🪔 Happy Narak Chaturdashi!\n\nToday is the second day of Diwali. Abhyang snan (oil bath) and wearing new clothes is a tradition.\n\nThis day marks the victory of good over evil. May all evil forces in your life be destroyed.\n\nHappy Narak Chaturdashi! 🪔",
    hi:"🪔 नरक चतुर्दशी की शुभकामनाएं!\n\nआज दिवाली का दूसरा दिन। अभ्यंग स्नान और नए कपड़े पहनने की परंपरा।\n\nयह बुराई पर अच्छाई की जीत का दिन है। जीवन की सारी बुरी शक्तियां नष्ट हों।\n\nशुभ नरक चतुर्दशी! 🪔",
    mr:"🪔 नरक चतुर्दशीच्या हार्दिक शुभेच्छा!\n\nआज दिवाळीचा दुसरा दिवस. अभ्यंगस्नान आणि नवीन कपडे परिधान करण्याची परंपरा.\n\nवाईटावर चांगल्याच्या विजयाचे प्रतीक. सर्व वाईट शक्ती नष्ट होवोत.\n\nशुभ नरक चतुर्दशी! 🪔"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_lakshmi", category:"festival", date:"2026-11-08",
  title:{en:"Lakshmi Pujan",hi:"लक्ष्मी पूजन",mr:"लक्ष्मी पूजन"},
  message:{
    en:"✨ Happy Diwali!\n\nToday is the biggest day of Diwali — Lakshmi Pujan. We worship Goddess Lakshmi and pray for prosperity.\n\nMay Goddess Lakshmi bless your home and business with happiness, wealth and success. Light diyas and celebrate with joy.\n\nShubh Deepavali! ✨🪔",
    hi:"✨ दिवाली की शुभकामनाएं!\n\nआज दिवाली का सबसे बड़ा दिन — लक्ष्मी पूजन। मां लक्ष्मी की पूजा करके समृद्धि की प्रार्थना।\n\nमां लक्ष्मी घर और व्यवसाय में सुख, समृद्धि और सफलता लाएं। दीये जलाएं, खुशी से मनाएं।\n\nशुभ दीपावली! ✨🪔",
    mr:"✨ दिवाळीच्या हार्दिक शुभेच्छा!\n\nआज दिवाळीचा सर्वात मोठा दिवस — लक्ष्मी पूजन. माता लक्ष्मीची पूजा करून समृद्धीची प्रार्थना.\n\nमाता लक्ष्मी घरी आणि व्यवसायात सुख, समृद्धी आणि यश आणो. दिवे लावा, आनंद साजरा करा.\n\nशुभ दिवाळी! ✨🪔"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_padwa", category:"festival", date:"2026-11-09",
  title:{en:"Diwali Padwa",hi:"दिवाली पड़वा",mr:"दिवाळी पाडवा"},
  message:{
    en:"🎉 Happy Diwali Padwa!\n\nToday is the fourth day of Diwali. A day to remember King Bali and start the new year.\n\nOn Padwa, wife applies oil on husband's forehead and gives blessings of long life.\n\nMay happiness, prosperity and love always stay in your home! Happy Padwa! 🎉",
    hi:"🎉 दिवाली पड़वा की शुभकामनाएं!\n\nआज दिवाली का चौथा दिन। राजा बलि को याद करने और नए साल की शुरुआत का दिन।\n\nपड़वा पर पत्नी पति के माथे पर तेल लगाती है और लंबी उम्र की प्रार्थना करती है।\n\nसुख, समृद्धि और प्रेम सदा घर में रहे! शुभ पड़वा! 🎉",
    mr:"🎉 दिवाळी पाडव्याच्या हार्दिक शुभेच्छा!\n\nआज दिवाळीचा चौथा दिवस. राजा बळीचे स्मरण आणि नवीन वर्षाची सुरुवात.\n\nपाडव्याला पत्नी पतीच्या कपाळावर तेल लावते आणि दीर्घायुष्याचे आशीर्वाद देते.\n\nसुख, समृद्धी आणि प्रेम नेहमी नांदो! शुभ पाडवा! 🎉"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_bhaubeej", category:"festival", date:"2026-11-10",
  title:{en:"Bhai Dooj",hi:"भाई दूज",mr:"भाऊबीज"},
  message:{
    en:"💐 Happy Bhai Dooj!\n\nToday, sister applies tilak to brother and prays for his long life. A sacred festival of brother-sister love.\n\nMay the bond between brother and sister always be strong and loving.\n\nHappy Bhai Dooj! 💐",
    hi:"💐 भाई दूज की शुभकामनाएं!\n\nआज बहन भाई को टीका लगाकर उसकी लंबी उम्र की प्रार्थना करती है। भाई-बहन के प्रेम का पवित्र सण।\n\nभाई-बहन का रिश्ता सदा मजबूत और प्रेमपूर्ण रहे।\n\nशुभ भाई दूज! 💐",
    mr:"💐 भाऊबीजेच्या हार्दिक शुभेच्छा!\n\nआज बहीण भावाला टिळा लावून दीर्घायुष्याची प्रार्थना करते. भावा-बहिणीच्या प्रेमाचा पवित्र सण.\n\nनाते नेहमी प्रेमळ आणि मजबूत राहो.\n\nशुभ भाऊबीज! 💐"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_tulsi_vivah", category:"festival", date:"2026-11-20",
  title:{en:"Tulsi Vivah",hi:"तुलसी विवाह",mr:"तुळशी विवाह"},
  message:{
      en:"🌿 Happy Tulsi Vivah!\n\nThe sacred wedding of Tulsi Mata with Lord Krishna is celebrated today. Tulsi is a symbol of purity and devotion.\n\nMay Tulsi Mata bring happiness, peace and health to your home. May her blessings always be with your family.\n\nHappy Tulsi Vivah! 🌿",
    hi:"🌿 तुलसी विवाह की शुभकामनाएं!\n\nआज तुलसी माता का भगवान श्रीकृष्ण से विवाह का पवित्र दिन है। तुलसी पवित्रता और भक्ति की प्रतीक हैं।\n\nतुलसी माता घर में सुख, शांति और स्वास्थ्य लाएं। आशीर्वाद सदा बना रहे।\n\nशुभ तुलसी विवाह! 🌿",
    mr:"🌿 तुळशी विवाहाच्या हार्दिक शुभेच्छा!\n\nआज तुळशी मातेचा श्रीकृष्णाशी विवाह लावण्याचा पवित्र दिवस. तुळशी पवित्रता आणि भक्तीची प्रतीक.\n\nतुळशी माता घरी सुख, शांती आणि आरोग्य आणो. आशीर्वाद राहो.\n\nशुभ तुळशी विवाह! 🌿"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_dev_diwali", category:"festival", date:"2026-11-24",
  title:{en:"Dev Diwali",hi:"देव दिवाली",mr:"देव दिवाळी"},
  message:{
    en:"🪔 Happy Dev Diwali!\n\nToday we celebrate Dev Diwali. It is believed that on Kartik Purnima, the gods destroyed Tripurasura.\n\nMay the gods bring happiness, prosperity and health to your home. May all your wishes come true.\n\nHappy Dev Diwali! 🪔",
    hi:"🪔 देव दिवाली की शुभकामनाएं!\n\nआज देवों की दिवाली है। मान्यता है कि कार्तिक पूर्णिमा को देवताओं ने त्रिपुरासुर का वध किया।\n\nदेवता घर में सुख, समृद्धि और स्वास्थ्य लाएं। सभी मनोकामनाएं पूर्ण हों।\n\nशुभ देव दिवाली! 🪔",
    mr:"🪔 देव दिवाळीच्या हार्दिक शुभेच्छा!\n\nआज देवांची दिवाळी साजरी करतो. कार्तिक पौर्णिमेला देवांनी त्रिपुरासुराचा वध केला.\n\nदेव घरी सुख, समृद्धी आणि आरोग्य आणोत. मनोकामना पूर्ण होवोत.\n\nशुभ देव दिवाळी! 🪔"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_makar", category:"festival", date:"2026-01-14",
  title:{en:"Makar Sankranti",hi:"मकर संक्रांति",mr:"मकर संक्रांत"},
  message:{
    en:"🪁 Happy Makar Sankranti!\n\nToday the sun enters Capricorn. 'Til-gul ghya, god god bola' (eat sesame-jaggery, speak sweetly) is our tradition.\n\nMay Makar Sankranti bring new energy, enthusiasm and joy. May all your wishes come true.\n\nTil-gul ghya, god god bola! 🪁",
    hi:"🪁 मकर संक्रांति की शुभकामनाएं!\n\nआज सूर्य मकर राशि में प्रवेश करते हैं। तिल-गुड़ घ्या, गोड गोड बोला हमारी परंपरा है।\n\nमकर संक्रांति नई ऊर्जा, उत्साह और खुशी लाए। सभी मनोकामनाएं पूर्ण हों।\n\nतिल-गुड़ घ्या, गोड गोड बोला! 🪁",
    mr:"🪁 मकर संक्रांतीच्या हार्दिक शुभेच्छा!\n\nआज सूर्य मकर राशीत प्रवेश करतो. तीळगूळ घ्या, गोड गोड बोला ही परंपरा.\n\nमकर संक्रांत नवीन उर्जा, उत्साह आणि आनंद आणो. सर्व इच्छा पूर्ण होवोत.\n\nतीळगूळ घ्या, गोड गोड बोला! 🪁"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_mahashivratri", category:"festival", date:"2026-02-15",
  title:{en:"Mahashivratri",hi:"महाशिवरात्रि",mr:"महाशिवरात्र"},
  message:{
    en:"🔱 Happy Mahashivratri!\n\nToday is the sacred day to worship Lord Shiva and fast. This day is very auspicious for seeking Mahadev's blessings.\n\nMay Bholenath remove all troubles from your life and give happiness, peace and health.\n\nHar Har Mahadev! 🔱",
    hi:"🔱 महाशिवरात्रि की शुभकामनाएं!\n\nआज भगवान शिव की पूजा और उपवास का पवित्र दिन। महादेव की कृपा पाने का शुभ दिन।\n\nभोलेनाथ जीवन की सारी परेशानियां दूर करें और सुख, शांति और स्वास्थ्य दें।\n\nहर हर महादेव! 🔱",
    mr:"🔱 महाशिवरात्रीच्या हार्दिक शुभेच्छा!\n\nआज भगवान शंकराची पूजा आणि उपवास करण्याचा पवित्र दिवस. महादेवाची कृपा मिळवण्यासाठी शुभ.\n\nभोलेनाथ अडचणी दूर करोत आणि सुख, शांती, आरोग्य देवोत.\n\nहर हर महादेव! 🔱"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_holi", category:"festival", date:"2026-03-03",
  title:{en:"Holi",hi:"होली",mr:"होळी"},
  message:{
    en:"🎨 Happy Holi!\n\nToday we celebrate the festival of colours. Holi is a symbol of joy, love and unity.\n\nMay your life always be filled with colours, joy and enthusiasm. Let all bad feelings wash away with the colours.\n\nHappy Holi! 🎨🌈",
    hi:"🎨 होली की शुभकामनाएं!\n\nआज रंगों का सण मनाते हैं। होली खुशी, प्रेम और एकता की प्रतीक है।\n\nजीवन में रंग, आनंद और उत्साह भरा रहे। सारी बुरी भावनाएं रंगों के साथ बह जाएं।\n\nशुभ होली! 🎨🌈",
    mr:"🎨 होळीच्या हार्दिक शुभेच्छा!\n\nआज रंगांचा सण साजरा करतो. होळी आनंद, प्रेम आणि एकतेची प्रतीक.\n\nआयुष्यात रंग, आनंद आणि उत्साह भरलेला राहो. वाईट भावना वाहून जावोत.\n\nशुभ होळी! 🎨🌈"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_rangpanchami", category:"festival", date:"2026-03-07",
  title:{en:"Rangpanchami",hi:"रंगपंचमी",mr:"रंगपंचमी"},
  message:{
    en:"🌈 Happy Rangpanchami!\n\nRangpanchami is the fifth day after Holi — also a festival of colours and joy.\n\nMay your life always be colourful and joyful. May all sadness and stress go away with the colours.\n\nHappy Rangpanchami! 🌈",
    hi:"🌈 रंगपंचमी की शुभकामनाएं!\n\nहोली के बाद पांचवां दिन रंगपंचमी है — रंगों और खुशी का सण।\n\nजीवन सदा रंगीन और आनंदी रहे। सारी उदासी और तनाव रंगों के साथ दूर हों।\n\nशुभ रंगपंचमी! 🌈",
    mr:"🌈 रंगपंचमीच्या हार्दिक शुभेच्छा!\n\nहोळीनंतरचा पाचवा दिवस म्हणजे रंगपंचमी — रंगांचा आणि आनंदाचा सण.\n\nआयुष्य रंगीत आणि आनंदी राहो. दुःख आणि तणाव दूर जावोत.\n\nशुभ रंगपंचमी! 🌈"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_vat_purnima", category:"festival", date:"2026-06-01",
  title:{en:"Vat Purnima",hi:"वट पूर्णिमा",mr:"वट पौर्णिमा"},
  message:{
    en:"🌳 Happy Vat Purnima!\n\nToday married women worship the banyan tree and pray for their husband's long life.\n\nIt is a symbol of Savitri's devotion. May happiness, prosperity and love always stay in your home.\n\nHappy Vat Purnima! 🌳",
    hi:"🌳 वट पूर्णिमा की शुभकामनाएं!\n\nआज सुहागिनें वट वृक्ष की पूजा करती हैं और पति की लंबी उम्र की प्रार्थना करती हैं।\n\nयह सावित्री के पतिव्रत्य का प्रतीक है। घर में सुख, समृद्धि और प्रेम सदा रहे।\n\nशुभ वट पूर्णिमा! 🌳",
    mr:"🌳 वट पौर्णिमेच्या हार्दिक शुभेच्छा!\n\nआज विवाहित स्त्रिया वडाच्या झाडाची पूजा करतात आणि पतीच्या दीर्घायुष्याची प्रार्थना.\n\nसावित्रीच्या पतिव्रत्याचे प्रतीक. संसारात सुख, समृद्धी आणि प्रेम राहो.\n\nशुभ वट पौर्णिमा! 🌳"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_rishi_panchami", category:"festival", date:"2026-09-19",
  title:{en:"Rishi Panchami",hi:"ऋषि पंचमी",mr:"ऋषी पंचमी"},
  message:{
    en:"🙏 Happy Rishi Panchami!\n\nToday is the sacred day to worship the Saptarishis. The rishis gave us knowledge and culture.\n\nHeartfelt salutations to all those sages. May their blessings always be on you.\n\nHappy Rishi Panchami! 🙏",
    hi:"🙏 ऋषि पंचमी की शुभकामनाएं!\n\nआज सप्तर्षियों की पूजा का पवित्र दिन। ऋषियों ने हमें ज्ञान और संस्कृति दी।\n\nउन सभी ऋषियों को वंदन। उनका आशीर्वाद सदा बना रहे।\n\nशुभ ऋषि पंचमी! 🙏",
    mr:"🙏 ऋषी पंचमीच्या हार्दिक शुभेच्छा!\n\nआज सप्तर्षींची पूजा करण्याचा पवित्र दिवस. ऋषींनी ज्ञान आणि संस्कृती दिली.\n\nसर्व ऋषींना वंदन. आशीर्वाद नेहमी राहो.\n\nशुभ ऋषी पंचमी! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_rath_saptami", category:"festival", date:"2026-02-19",
  title:{en:"Rath Saptami",hi:"रथ सप्तमी",mr:"रथ सप्तमी"},
  message:{
    en:"🌞 Happy Rath Saptami!\n\nToday is the day to worship the Sun god. The Sun god travels on a chariot with seven horses.\n\nMay the Sun god bring health, energy and success to your life. May all your wishes come true.\n\nJai Suryadev! 🌞",
    hi:"🌞 रथ सप्तमी की शुभकामनाएं!\n\nआज सूर्यदेव की पूजा का दिन। सूर्यदेव सात घोड़ों के रथ पर आते हैं।\n\nसूर्यदेव जीवन में स्वास्थ्य, ऊर्जा और सफलता लाएं। सभी इच्छाएं पूर्ण हों।\n\nजय सूर्यदेव! 🌞",
    mr:"🌞 रथ सप्तमीच्या हार्दिक शुभेच्छा!\n\nआज सूर्यदेवाची पूजा करण्याचा दिवस. सूर्यदेव सात घोड्यांच्या रथावर येतात.\n\nसूर्यदेव आरोग्य, उर्जा आणि यश आणोत. सर्व इच्छा पूर्ण होवोत.\n\nजय सूर्यदेव! 🌞"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_vasant", category:"festival", date:"2026-02-23",
  title:{en:"Vasant Panchami",hi:"वसंत पंचमी",mr:"वसंत पंचमी"},
  message:{
    en:"📖 Happy Vasant Panchami!\n\nToday is the day to worship Goddess Saraswati, the goddess of knowledge. It is the beginning of spring season.\n\nMay Mother Saraswati give you knowledge, wisdom and success. May students succeed in their studies.\n\nJai Mata Saraswati! 📖",
    hi:"📖 वसंत पंचमी की शुभकामनाएं!\n\nआज विद्या की देवी सरस्वती की पूजा का दिन। वसंत ऋतु की शुरुआत है।\n\nमाता सरस्वती ज्ञान, बुद्धि और सफलता दें। विद्यार्थियों को पढ़ाई में सफलता मिले।\n\nजय माता सरस्वती! 📖",
    mr:"📖 वसंत पंचमीच्या हार्दिक शुभेच्छा!\n\nआज विद्येची देवी सरस्वतीची पूजा करण्याचा दिवस. वसंत ऋतूची सुरुवात.\n\nमाता सरस्वती ज्ञान, बुद्धी आणि यश देवो. विद्यार्थ्यांना यश मिळो.\n\nजय माता सरस्वती! 📖"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_raksha", category:"festival", date:"2026-08-28",
  title:{en:"Raksha Bandhan",hi:"रक्षाबंधन",mr:"रक्षाबंधन"},
  message:{
    en:"🪢 Happy Raksha Bandhan!\n\nToday sister ties rakhi on brother's hand and prays for his long life. A sacred festival of brother-sister love.\n\nMay the bond between brother and sister always be loving and strong. May brother get all happiness and sister always be loved.\n\nHappy Raksha Bandhan! 🪢",
    hi:"🪢 रक्षाबंधन की शुभकामनाएं!\n\nआज बहन भाई की कलाई पर राखी बांधती है और लंबी उम्र की प्रार्थना करती है।\n\nभाई-बहन का रिश्ता सदा प्रेमपूर्ण और मजबूत रहे। भाई को सुख मिले और बहन पर प्रेम बना रहे।\n\nशुभ रक्षाबंधन! 🪢",
    mr:"🪢 रक्षाबंधनाच्या हार्दिक शुभेच्छा!\n\nआज बहीण भावाच्या हातात राखी बांधून दीर्घायुष्याची प्रार्थना करते.\n\nनाते नेहमी प्रेमळ आणि मजबूत राहो. भावाला सुख मिळो आणि बहिणीवर प्रेम राहो.\n\nशुभ रक्षाबंधन! 🪢"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_janmashtami", category:"festival", date:"2026-09-04",
  title:{en:"Krishna Janmashtami",hi:"कृष्ण जन्माष्टमी",mr:"कृष्ण जन्माष्टमी"},
  message:{
    en:"🎶 Happy Krishna Janmashtami!\n\nToday is the birthday of Lord Shri Krishna. Celebrate this sacred festival with devotion.\n\nMay Shri Krishna bring joy, love and success to your life. May his grace always be on you.\n\nHare Krishna! Jai Shri Krishna! 🎶",
    hi:"🎶 कृष्ण जन्माष्टमी की शुभकामनाएं!\n\nआज भगवान श्रीकृष्ण का जन्मदिन है। भक्तिभाव से यह पवित्र सण मनाएं।\n\nश्रीकृष्ण जीवन में आनंद, प्रेम और सफलता लाएं। कृपा सदा बनी रहे।\n\nहरे कृष्ण! जय श्रीकृष्ण! 🎶",
    mr:"🎶 कृष्ण जन्माष्टमीच्या हार्दिक शुभेच्छा!\n\nआज भगवान श्रीकृष्णाचा जन्मदिवस. भक्तीभावाने सण साजरा करा.\n\nश्रीकृष्ण आनंद, प्रेम आणि यश आणोत. कृपा नेहमी राहो.\n\nहरे कृष्ण! जय श्रीकृष्ण! 🎶"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_ram_navami", category:"festival", date:"2026-03-27",
  title:{en:"Ram Navami",hi:"राम नवमी",mr:"राम नवमी"},
  message:{
    en:"🏹 Happy Ram Navami!\n\nToday is the birthday of Lord Shri Ram. Celebrate this sacred festival with joy.\n\nMay Lord Shri Ram show you the path of truth, justice and dharma. May you win over all troubles.\n\nJai Shri Ram! 🏹",
    hi:"🏹 राम नवमी की शुभकामनाएं!\n\nआज भगवान श्रीराम का जन्मदिन है। इस पवित्र सण को खुशी से मनाएं।\n\nप्रभु श्रीराम सत्य, न्याय और धर्म का मार्ग दिखाएं। सारी परेशानियों पर विजय मिले।\n\nजय श्रीराम! 🏹",
    mr:"🏹 राम नवमीच्या हार्दिक शुभेच्छा!\n\nआज भगवान श्रीरामाचा जन्मदिवस. आनंदाने सण साजरा करा.\n\nश्रीराम सत्य, न्याय आणि धर्माचा मार्ग दाखवोत. संकटांवर विजय मिळो.\n\nजय श्रीराम! 🏹"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_eid", category:"festival", date:"2026-03-20",
  title:{en:"Eid Mubarak",hi:"ईद मुबारक",mr:"ईद मुबारक"},
  message:{
    en:"🌙 Eid Mubarak!\n\nEid is a festival of joy, love and brotherhood. On this sacred day, let us all come together and wish each other.\n\nMay Allah accept all your prayers and bless your family.\n\nEid Mubarak! 🌙",
    hi:"🌙 ईद मुबारक!\n\nईद खुशी, प्रेम और भाईचारे का सण है। इस पवित्र दिन सब एक साथ आएं और शुभकामनाएं दें।\n\nअल्लाह आपकी सारी प्रार्थनाएं स्वीकार करें और परिवार पर आशीर्वाद रहे।\n\nईद मुबारक! 🌙",
    mr:"🌙 ईद मुबारक!\n\nईद आनंद, प्रेम आणि भाईचार्याचा सण. या पवित्र दिवशी सर्व एकत्र येऊया.\n\nअल्लाह सर्व प्रार्थना स्वीकार करो आणि कुटुंबावर आशीर्वाद राहो.\n\nईद मुबारक! 🌙"
  }, includeOffer:true, includeSignature:true },

{ id:"fest_christmas", category:"festival", date:"2026-12-25",
  title:{en:"Merry Christmas",hi:"क्रिसमस मुबारक",mr:"मेरी ख्रिसमस"},
  message:{
    en:"🎄 Merry Christmas!\n\nToday is the birthday of Lord Jesus Christ. A festival of joy, love and peace.\n\nMay Lord Jesus bring peace, love and joy to your life. May his blessings always be on your family.\n\nMerry Christmas! 🎄🎅",
    hi:"🎄 क्रिसमस मुबारक!\n\nआज प्रभु यीशु मसीह का जन्मदिन है। आनंद, प्रेम और शांति का सण।\n\nप्रभु यीशु जीवन में शांति, प्रेम और आनंद लाएं। आशीर्वाद परिवार पर रहे।\n\nमेरी क्रिसमस! 🎄🎅",
    mr:"🎄 मेरी ख्रिसमस!\n\nआज प्रभू येशू ख्रिस्तांचा जन्मदिवस. आनंद, प्रेम आणि शांतीचा सण.\n\nप्रभू येशू जीवनात शांती, प्रेम आणि आनंद आणोत. आशीर्वाद राहो.\n\nमेरी ख्रिसमस! 🎄🎅"
  }, includeOffer:true, includeSignature:true },

/* ══════════════════════════════════════════════════════════
   4. SAINTS & SPIRITUAL (34)
   ══════════════════════════════════════════════════════════ */

{ id:"saint_dnyaneshwar_j", category:"saint", date:"2026-08-15",
  title:{en:"Sant Dnyaneshwar Jayanti",hi:"संत ज्ञानेश्वर जयंती",mr:"संत ज्ञानेश्वर महाराज जयंती"},
  message:{
    en:"🙏 Sant Dnyaneshwar Maharaj Jayanti!\n\nToday is the birth anniversary of the great saint Dnyaneshwar Maharaj — the first poet of Marathi and author of Dnyaneshwari.\n\nAt just 21, he gave the treasure of knowledge to Marathi. His thoughts still guide us.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत ज्ञानेश्वर महाराज जयंती!\n\nआज मराठी के आद्य कवि और ज्ञानेश्वरी के रचनाकार महान संत ज्ञानेश्वर महाराज की जयंती है।\n\nमात्र 21 वर्ष की आयु में उन्होंने मराठी में ज्ञान का सागर उघाड़ दिया। उनके विचार आज भी मार्ग दिखाते हैं।\n\nकोटि-कोटि नमन! 🙏",
    mr:"🙏 संत ज्ञानेश्वर महाराज जयंती!\n\nआज मराठी भाषेचे आद्य कवी आणि ज्ञानेश्वरी लिहिणारे महान संत ज्ञानेश्वर महाराज यांची जयंती.\n\nवयाच्या अवघ्या २१ व्या वर्षी मराठीत ज्ञानाचा सागर उलगडला. विचार आजही मार्ग दाखवतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_dnyaneshwar_p", category:"saint", date:"2026-07-24",
  title:{en:"Sant Dnyaneshwar Punyatithi",hi:"संत ज्ञानेश्वर पुण्यतिथि",mr:"संत ज्ञानेश्वर महाराज पुण्यतिथी"},
  message:{
    en:"🙏 Sant Dnyaneshwar Maharaj Punyatithi.\n\nToday is the sacred day when Dnyaneshwar Maharaj took Sanjeevan Samadhi at Alandi.\n\nHe showed us the path of devotion, knowledge and surrender. His thoughts still live in our hearts.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत ज्ञानेश्वर महाराज पुण्यतिथि।\n\nआज आळंदी में ज्ञानेश्वर महाराज के संजीवन समाधि लेने का पवित्र दिन है।\n\nउन्होंने भक्ति, ज्ञान और समर्पण का मार्ग दिखाया। विचार आज भी जीवित हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत ज्ञानेश्वर महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज आळंदी येथे ज्ञानेश्वर महाराज संजीवन समाधी घेतल्याचा पवित्र दिवस.\n\nभक्ती, ज्ञान आणि समर्पणाचा मार्ग दाखवला. विचार जिवंत आहेत.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_tukaram_j", category:"saint", date:"2026-02-25",
  title:{en:"Sant Tukaram Jayanti",hi:"संत तुकाराम जयंती",mr:"संत तुकाराम महाराज जयंती"},
  message:{
    en:"🙏 Sant Tukaram Maharaj Jayanti!\n\nToday is the birth anniversary of Jagadguru Sant Tukaram Maharaj — the peak of Vitthal devotion.\n\nHe revealed the ocean of devotion and knowledge through abhangs. His devotion to Vitthal still inspires us.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत तुकाराम महाराज जयंती!\n\nआज विठ्ठल भक्ति के शिखर जगद्गुरु संत तुकाराम महाराज की जयंती है।\n\nअभंगों में भक्ति और ज्ञान का सागर उघाड़ा। विठ्ठल भक्ति आज भी प्रेरणा देती है।\n\nवंदन! 🙏",
    mr:"🙏 संत तुकाराम महाराज जयंती!\n\nआज विठ्ठल भक्तीचे शिखर जगद्गुरु संत तुकाराम महाराज यांची जयंती.\n\nअभंगांतून भक्ती आणि ज्ञानाचा सागर उलगडला. विठ्ठल भक्ती प्रेरणा देते.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_tukaram_p", category:"saint", date:"2026-03-09",
  title:{en:"Sant Tukaram Punyatithi",hi:"संत तुकाराम पुण्यतिथि",mr:"संत तुकाराम महाराज पुण्यतिथी"},
  message:{
    en:"🙏 Sant Tukaram Maharaj Punyatithi.\n\nToday is the sacred day of remembrance of Jagadguru Tukaram Maharaj.\n\nHe taught us devotion and humility. Vitthal naamsmaran was his very breath.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत तुकाराम महाराज पुण्यतिथि।\n\nआज जगद्गुरु तुकाराम महाराज की स्मृति का पवित्र दिन है।\n\nउन्होंने भक्ति और विनम्रता सिखाई। विठ्ठल नामस्मरण उनका श्वास था।\n\nवंदन! 🙏",
    mr:"🙏 संत तुकाराम महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज जगद्गुरु तुकाराम महाराजांच्या स्मृतीचा पवित्र दिवस.\n\nभक्ती आणि विनम्रता शिकवली. विठ्ठल नामस्मरण श्वास होता.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_namdev_j", category:"saint", date:"2026-10-23",
  title:{en:"Sant Namdev Jayanti",hi:"संत नामदेव जयंती",mr:"संत नामदेव महाराज जयंती"},
  message:{
    en:"🙏 Sant Namdev Maharaj Jayanti!\n\nToday is the birth anniversary of the great saint Namdev Maharaj of the Warkari tradition.\n\nHe spread devotion to Lord Vitthal and knowledge. His abhangs still give an experience of devotion.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत नामदेव महाराज जयंती!\n\nआज वारकरी परंपरा के महान संत नामदेव महाराज की जयंती है।\n\nभगवान विठ्ठल की भक्ति और ज्ञान का प्रसार किया। अभंग आज भी भक्ति का अनुभव देते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत नामदेव महाराज जयंती!\n\nआज वारकरी संप्रदायाचे महान संत नामदेव महाराज यांची जयंती.\n\nविठ्ठल भक्ती आणि ज्ञानाचा प्रसार केला. अभंग भक्तीचा अनुभव देतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_namdev_p", category:"saint", date:"2026-06-29",
  title:{en:"Sant Namdev Punyatithi",hi:"संत नामदेव पुण्यतिथि",mr:"संत नामदेव महाराज पुण्यतिथी"},
  message:{
    en:"🙏 Sant Namdev Maharaj Punyatithi.\n\nToday is the day of remembrance of the great saint Namdev Maharaj.\n\nHe showed us pure devotion and the path of naam-smaran. His thoughts still inspire devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत नामदेव महाराज पुण्यतिथि।\n\nआज महान संत नामदेव महाराज की स्मृति का दिन है।\n\nशुद्ध भक्ति और नामस्मरण का मार्ग दिखाया। विचार भक्तों को प्रेरणा देते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत नामदेव महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज महान संत नामदेव महाराजांच्या स्मृतीचा दिवस.\n\nशुद्ध भक्ती आणि नामस्मरणाचा मार्ग दाखवला. विचार प्रेरणा देतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_eknath_j", category:"saint", date:"2026-08-27",
  title:{en:"Sant Eknath Jayanti",hi:"संत एकनाथ जयंती",mr:"संत एकनाथ महाराज जयंती"},
  message:{
    en:"🙏 Sant Eknath Maharaj Jayanti!\n\nToday is the birth anniversary of the great saint Eknath Maharaj who translated Bhagavat into Marathi.\n\nHe spread devotion and knowledge through Marathi. His thoughts still guide us.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत एकनाथ महाराज जयंती!\n\nआज भागवत का मराठी अनुवाद करने वाले महान संत एकनाथ महाराज की जयंती है।\n\nमराठी में भक्ति और ज्ञान का प्रसार किया। विचार मार्ग दिखाते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत एकनाथ महाराज जयंती!\n\nआज भागवताचे मराठी भाषांतर करणारे महान संत एकनाथ महाराज यांची जयंती.\n\nमराठीतून भक्ती आणि ज्ञानाचा प्रसार केला. विचार मार्ग दाखवतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_eknath_p", category:"saint", date:"2026-03-08",
  title:{en:"Sant Eknath Punyatithi",hi:"संत एकनाथ पुण्यतिथि",mr:"संत एकनाथ महाराज पुण्यतिथी"},
  message:{
    en:"🙏 Sant Eknath Maharaj Punyatithi.\n\nToday is the sacred day of remembrance of the great saint Eknath Maharaj.\n\nHe showed us the path of devotion, knowledge and service. His abhangs still inspire devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत एकनाथ महाराज पुण्यतिथि।\n\nआज महान संत एकनाथ महाराज की स्मृति का पवित्र दिन है।\n\nभक्ति, ज्ञान और सेवा का मार्ग दिखाया। अभंग भक्तों को प्रेरणा देते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत एकनाथ महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज महान संत एकनाथ महाराजांच्या स्मृतीचा पवित्र दिवस.\n\nभक्ती, ज्ञान आणि सेवेचा मार्ग दाखवला. अभंग प्रेरणा देतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_mukta", category:"saint", date:"2026-09-11",
  title:{en:"Sant Muktabai Jayanti",hi:"संत मुक्ताबाई जयंती",mr:"संत मुक्ताबाई जयंती"},
  message:{
    en:"🙏 Sant Muktabai Jayanti!\n\nToday is the birth anniversary of Sant Muktabai — sister of Dnyaneshwar Maharaj.\n\nAt a very young age, she embraced the path of devotion and knowledge. Her abhang compositions still inspire devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत मुक्ताबाई जयंती!\n\nआज ज्ञानेश्वर महाराज की बहन और महान संत मुक्ताबाई की जयंती है।\n\nबहुत कम उम्र में भक्ति और ज्ञान का मार्ग अपनाया। उनकी अभंग रचनाएं भक्तों को प्रेरणा देती हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत मुक्ताबाई जयंती!\n\nआज ज्ञानेश्वर महाराजांच्या बहिणी संत मुक्ताबाई यांची जयंती.\n\nअत्यंत लहान वयात भक्ती आणि ज्ञानाचा मार्ग आत्मसात केला. अभंग प्रेरणा देतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_sopan", category:"saint", date:"2026-02-24",
  title:{en:"Sant Sopandev Jayanti",hi:"संत सोपानदेव जयंती",mr:"संत सोपानदेव जयंती"},
  message:{
    en:"🙏 Sant Sopandev Jayanti!\n\nToday is the birth anniversary of Sant Sopandev — brother of Dnyaneshwar Maharaj.\n\nHe followed the path of devotion and knowledge and composed many abhangs.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत सोपानदेव जयंती!\n\nआज ज्ञानेश्वर महाराज के भाई संत सोपानदेव की जयंती है।\n\nभक्ति और ज्ञान का मार्ग अपनाया और अनेक अभंग रचनाएं कीं।\n\nवंदन! 🙏",
    mr:"🙏 संत सोपानदेव जयंती!\n\nआज ज्ञानेश्वर महाराजांचे बंधू संत सोपानदेव यांची जयंती.\n\nभक्ती आणि ज्ञानाचा मार्ग अनुसरला आणि अनेक अभंग रचना केल्या.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_nivrutti", category:"saint", date:"2026-02-24",
  title:{en:"Sant Nivruttinath Jayanti",hi:"संत निवृत्तीनाथ जयंती",mr:"संत निवृत्तीनाथ जयंती"},
  message:{
    en:"🙏 Sant Nivruttinath Jayanti!\n\nToday is the birth anniversary of Sant Nivruttinath — guru and brother of Dnyaneshwar Maharaj.\n\nHe gave diksha of knowledge to Dnyaneshwar Maharaj. His thoughts still guide us.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत निवृत्तीनाथ जयंती!\n\nआज ज्ञानेश्वर महाराज के गुरु और भाई संत निवृत्तीनाथ की जयंती है।\n\nउन्होंने ज्ञानेश्वर महाराज को ज्ञान की दीक्षा दी। विचार मार्ग दिखाते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत निवृत्तीनाथ जयंती!\n\nआज ज्ञानेश्वर महाराजांचे गुरु आणि बंधू संत निवृत्तीनाथ यांची जयंती.\n\nज्ञानेश्वर महाराजांना ज्ञानाची दीक्षा दिली. विचार मार्ग दाखवतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_janabai", category:"saint", date:"2026-12-19",
  title:{en:"Sant Janabai Jayanti",hi:"संत जनाबाई जयंती",mr:"संत जनाबाई जयंती"},
  message:{
    en:"🙏 Sant Janabai Jayanti!\n\nToday is the birth anniversary of the great saint Janabai who was immersed in Vitthal devotion.\n\nShe expressed her devotion to Vitthal through her abhangs. Her devotion still inspires devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत जनाबाई जयंती!\n\nआज विठ्ठल भक्ति में रंगी महान संत जनाबाई की जयंती है।\n\nअपने अभंगों में विठ्ठल भक्ति व्यक्त की। भक्ति भक्तों को प्रेरणा देती है।\n\nवंदन! 🙏",
    mr:"🙏 संत जनाबाई जयंती!\n\nआज विठ्ठल भक्तीत रंगलेल्या महान संत जनाबाईंची जयंती.\n\nअभंगांतून विठ्ठल भक्ती व्यक्त केली. भक्ती प्रेरणा देते.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_chokha", category:"saint", date:"2026-03-27",
  title:{en:"Sant Chokhamela Jayanti",hi:"संत चोखामेळा जयंती",mr:"संत चोखामेळा जयंती"},
  message:{
    en:"🙏 Sant Chokhamela Jayanti!\n\nToday is the birth anniversary of the great saint Chokhamela.\n\nHe raised his voice against social discrimination and dedicated himself to Vitthal devotion. His thoughts show the path of equality and devotion.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत चोखामेळा जयंती!\n\nआज महान संत चोखामेळा की जयंती है।\n\nसामाजिक भेदभाव के खिलाफ आवाज उठाया और विठ्ठल भक्ति में स्वयं को अर्पित किया।\n\nवंदन! 🙏",
    mr:"🙏 संत चोखामेळा जयंती!\n\nआज महान संत चोखामेळा यांची जयंती.\n\nसामाजिक भेदभावाविरुद्ध आवाज उठवला आणि विठ्ठल भक्तीत स्वतःला झोकून दिले.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_soyarabai", category:"saint", date:"2026-03-27",
  title:{en:"Sant Soyarabai Jayanti",hi:"संत सोयराबाई जयंती",mr:"संत सोयराबाई जयंती"},
  message:{
    en:"🙏 Sant Soyarabai Jayanti!\n\nToday is the birth anniversary of Sant Soyarabai — wife of Sant Chokhamela.\n\nShe dedicated her entire life to Vitthal devotion. Her devotion and patience are still inspiring.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत सोयराबाई जयंती!\n\nआज संत चोखामेळा की पत्नी संत सोयराबाई की जयंती है।\n\nविठ्ठल भक्ति में पूरा जीवन समर्पित किया। भक्ति और सहनशीलता प्रेरणादायी है।\n\nवंदन! 🙏",
    mr:"🙏 संत सोयराबाई जयंती!\n\nआज संत चोखामेळा यांच्या पत्नी संत सोयराबाईंची जयंती.\n\nविठ्ठल भक्तीत संपूर्ण आयुष्य वाहिले. भक्ती आणि सहनशीलता प्रेरणादायी.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_kanhopatra", category:"saint", date:"2026-03-27",
  title:{en:"Sant Kanhopatra Jayanti",hi:"संत कान्होपात्रा जयंती",mr:"संत कान्होपात्रा जयंती"},
  message:{
    en:"🙏 Sant Kanhopatra Jayanti!\n\nToday is the birth anniversary of Sant Kanhopatra who dedicated herself to Vitthal devotion.\n\nShe pleased Vitthal with her devotion. Her devotion still inspires devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत कान्होपात्रा जयंती!\n\nआज विठ्ठल भक्ति में तन-मन अर्पण करने वाली महान संत कान्होपात्रा की जयंती है।\n\nभक्ति से विठ्ठल को प्रसन्न किया। भक्ति भक्तों को प्रेरणा देती है।\n\nवंदन! 🙏",
    mr:"🙏 संत कान्होपात्रा जयंती!\n\nआज विठ्ठल भक्तीत तन-मन अर्पण करणाऱ्या महान संत कान्होपात्रा यांची जयंती.\n\nभक्तीने विठ्ठलाला प्रसन्न केले. भक्ती प्रेरणा देते.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_savata", category:"saint", date:"2026-02-28",
  title:{en:"Sant Savata Mali Jayanti",hi:"संत सावता माळी जयंती",mr:"संत सावता माळी जयंती"},
  message:{
    en:"🙏 Sant Savata Mali Jayanti!\n\nToday is the birth anniversary of the great saint Savata Mali who did devotion while selling vegetables.\n\nHe showed that family life and devotion can be balanced. His thoughts still inspire us.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत सावता माळी जयंती!\n\nआज सब्जी बेचकर भक्ति करने वाले महान संत सावता माळी की जयंती है।\n\nसंसार और भक्ति एक साथ साधी। विचार प्रेरणा देते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत सावता माळी जयंती!\n\nआज भाजी विकून भक्ती करणारे महान संत सावता माळी यांची जयंती.\n\nसंसार आणि भक्ती एकत्र सांभाळली. विचार प्रेरणा देतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_goroba", category:"saint", date:"2026-03-27",
  title:{en:"Sant Goroba Kumbhar Jayanti",hi:"संत गोरोबा कुंभार जयंती",mr:"संत गोरोबा कुंभार जयंती"},
  message:{
    en:"🙏 Sant Goroba Kumbhar Jayanti!\n\nToday is the birth anniversary of the great saint Goroba who did devotion while working as a potter.\n\nHe showed the value of hard work combined with devotion. His thoughts still tell us the importance of labour.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत गोरोबा कुंभार जयंती!\n\nआज कुंभारकाम करते हुए भक्ति करने वाले महान संत गोरोबा की जयंती है।\n\nश्रम और भक्ति को साथ किया। विचार श्रम का महत्व बताते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत गोरोबा कुंभार जयंती!\n\nआज कुंभारकाम करून भक्ती करणारे महान संत गोरोबा यांची जयंती.\n\nश्रम आणि भक्ती एकत्र केली. विचार श्रमाचे महत्त्व सांगतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_gadge_j", category:"saint", date:"2026-02-23",
  title:{en:"Sant Gadge Baba Jayanti",hi:"संत गाडगेबाबा जयंती",mr:"संत गाडगेबाबा जयंती"},
  message:{
    en:"🙏 Sant Gadge Baba Jayanti!\n\nToday is the birth anniversary of Sant Gadge Baba — the symbol of social service and cleanliness.\n\nHe dedicated his entire life to social service. He spread cleanliness and education from village to village.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत गाडगेबाबा जयंती!\n\nआज समाजसेवा और स्वच्छता के प्रतीक संत गाडगेबाबा की जयंती है।\n\nपूरा जीवन समाजसेवा को समर्पित किया। गांव-गांव स्वच्छता और शिक्षा का प्रसार किया।\n\nवंदन! 🙏",
    mr:"🙏 संत गाडगेबाबा जयंती!\n\nआज समाजसेवा आणि स्वच्छतेचे प्रतीक संत गाडगेबाबा यांची जयंती.\n\nसंपूर्ण आयुष्य समाजसेवेसाठी वाहिले. गावोगावी स्वच्छता आणि शिक्षणाचा प्रसार केला.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_gadge_p", category:"saint", date:"2026-12-20",
  title:{en:"Sant Gadge Baba Punyatithi",hi:"संत गाडगेबाबा पुण्यतिथि",mr:"संत गाडगेबाबा पुण्यतिथी"},
  message:{
    en:"🙏 Sant Gadge Baba Punyatithi.\n\nToday is the day of remembrance of the great social worker Sant Gadge Baba.\n\nHe took a vow of cleanliness, education and social service. His thoughts still inspire us.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत गाडगेबाबा पुण्यतिथि।\n\nआज महान समाजसेवक संत गाडगेबाबा की स्मृति का दिन है।\n\nस्वच्छता, शिक्षा और समाजसेवा का व्रत लिया। विचार प्रेरणा देते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत गाडगेबाबा पुण्यतिथीनिमित्त वंदन.\n\nआज महान समाजसेवक संत गाडगेबाबा यांच्या स्मृतीचा दिवस.\n\nस्वच्छता, शिक्षण आणि समाजसेवेचा वसा घेतला. विचार प्रेरणा देतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_tukdoji_j", category:"saint", date:"2026-04-30",
  title:{en:"Rashtrasant Tukdoji Jayanti",hi:"राष्ट्रसंत तुकडोजी जयंती",mr:"राष्ट्रसंत तुकडोजी महाराज जयंती"},
  message:{
    en:"🙏 Rashtrasant Tukdoji Maharaj Jayanti!\n\nToday is the birth anniversary of Rashtrasant Tukdoji Maharaj.\n\nHe spread village cleanliness, village industry and village culture. His thoughts still inspire village development.\n\nMy humble salutations! 🙏",
    hi:"🙏 राष्ट्रसंत तुकडोजी महाराज जयंती!\n\nआज राष्ट्रसंत तुकडोजी महाराज की जयंती है।\n\nग्राम स्वच्छता, ग्राम उद्योग और ग्राम संस्कृति का प्रसार किया। विचार प्रेरणादायी हैं।\n\nवंदन! 🙏",
    mr:"🙏 राष्ट्रसंत तुकडोजी महाराज जयंती!\n\nआज राष्ट्रसंत तुकडोजी महाराज यांची जयंती.\n\nग्रामस्वच्छता, ग्रामोद्योग आणि ग्रामसंस्कृतीचा प्रसार केला. विचार प्रेरणादायी.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_tukdoji_p", category:"saint", date:"2026-09-09",
  title:{en:"Rashtrasant Tukdoji Punyatithi",hi:"राष्ट्रसंत तुकडोजी पुण्यतिथि",mr:"राष्ट्रसंत तुकडोजी महाराज पुण्यतिथी"},
  message:{
    en:"🙏 Rashtrasant Tukdoji Maharaj Punyatithi.\n\nToday is the sacred day of remembrance of Rashtrasant Tukdoji Maharaj.\n\nHe dedicated his life to village development. His thoughts still guide society.\n\nMy humble salutations! 🙏",
    hi:"🙏 राष्ट्रसंत तुकडोजी महाराज पुण्यतिथि।\n\nआज राष्ट्रसंत तुकडोजी महाराज की स्मृति का पवित्र दिन है।\n\nजीवन ग्राम विकास को समर्पित किया। विचार समाज का मार्गदर्शन करते हैं।\n\nवंदन! 🙏",
    mr:"🙏 राष्ट्रसंत तुकडोजी महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज राष्ट्रसंत तुकडोजी महाराज यांच्या स्मृतीचा पवित्र दिवस.\n\nआयुष्य ग्रामविकासासाठी वाहिले. विचार समाजासाठी मार्गदर्शक.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_swami_j", category:"saint", date:"2026-04-03",
  title:{en:"Swami Samarth Jayanti",hi:"स्वामी समर्थ जयंती",mr:"स्वामी समर्थ जयंती"},
  message:{
    en:"🙏 Swami Samarth Jayanti!\n\nToday is the birth anniversary of the great saint Swami Samarth of Akkalkot.\n\nHe removed the sorrows of devotees by showing many miracles. Even today, he is worshipped with great devotion at Akkalkot.\n\nMy humble salutations! 🙏",
    hi:"🙏 स्वामी समर्थ जयंती!\n\nआज अक्कलकोट के महान संत स्वामी समर्थ की जयंती है।\n\nभक्तों के दुःख दूर किए और अनेक चमत्कार दिखाए। आज भी अक्कलकोट में भक्ति से पूजा होती है।\n\nवंदन! 🙏",
    mr:"🙏 स्वामी समर्थ जयंती!\n\nआज अक्कलकोटचे महान संत स्वामी समर्थ यांची जयंती.\n\nभक्तांचे दुःख दूर केले आणि अनेक चमत्कार दाखवले. आजही अक्कलकोटमध्ये पूजा होते.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_swami_p", category:"saint", date:"2026-04-15",
  title:{en:"Swami Samarth Punyatithi",hi:"स्वामी समर्थ पुण्यतिथि",mr:"स्वामी समर्थ पुण्यतिथी"},
  message:{
    en:"🙏 Swami Samarth Punyatithi.\n\nToday is the day of remembrance of the great saint Swami Samarth of Akkalkot.\n\nHe gave fearlessness to his devotees and removed their sorrows. Even today lakhs of devotees have faith in him.\n\nMy humble salutations! 🙏",
    hi:"🙏 स्वामी समर्थ पुण्यतिथि।\n\nआज अक्कलकोट के महान संत स्वामी समर्थ की स्मृति का दिन है।\n\nभक्तों को अभय दिया और दुःख दूर किए। आज भी लाखों भक्त श्रद्धा रखते हैं।\n\nवंदन! 🙏",
    mr:"🙏 स्वामी समर्थ पुण्यतिथीनिमित्त वंदन.\n\nआज अक्कलकोटचे महान संत स्वामी समर्थ यांच्या स्मृतीचा दिवस.\n\nभक्तांना अभय दिले आणि दुःख दूर केले. आजही लाखो भक्त श्रद्धा ठेवतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_sai", category:"saint", date:"2026-10-15",
  title:{en:"Sai Baba Punyatithi",hi:"साईं बाबा पुण्यतिथि",mr:"साईबाबा पुण्यतिथी"},
  message:{
    en:"🙏 Sai Baba Punyatithi.\n\nToday is the sacred day of remembrance of Shirdi Sai Baba.\n\nHis message 'Sabka Malik Ek' (one God for all) is spread across the world. He respected all religions.\n\nMy humble salutations to Shri Sai Nath! 🙏",
    hi:"🙏 साईं बाबा पुण्यतिथि।\n\nआज शिर्डी के संत साईं बाबा की स्मृति का पवित्र दिन है।\n\n'सबका मालिक एक' उनका संदेश दुनिया भर में फैला है। सभी धर्मों का सम्मान किया।\n\nश्री साईनाथ को वंदन! 🙏",
    mr:"🙏 साईबाबा पुण्यतिथीनिमित्त वंदन.\n\nआज शिर्डीचे संत साईबाबा यांच्या स्मृतीचा पवित्र दिवस.\n\n'सबका मालिक एक' हा संदेश जगभर पसरला. सर्व धर्मांचा सन्मान केला.\n\nश्री साईनाथांना मनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_gajanan_j", category:"saint", date:"2026-02-23",
  title:{en:"Sant Gajanan Jayanti",hi:"संत गजानन जयंती",mr:"संत गजानन महाराज जयंती"},
  message:{
    en:"🙏 Sant Gajanan Maharaj Jayanti!\n\nToday is the birth anniversary of Sant Gajanan Maharaj of Shegaon.\n\nHe showed devotees the path of devotion and service. Even today lakhs of devotees come to Shegaon for his darshan.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत गजानन महाराज जयंती!\n\nआज शेगांव के संत गजानन महाराज की जयंती है।\n\nभक्तों को भक्ति और सेवा का मार्ग दिखाया। आज भी लाखों भक्त दर्शन के लिए आते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत गजानन महाराज जयंती!\n\nआज शेगावचे संत गजानन महाराज यांची जयंती.\n\nभक्तांना भक्ती आणि सेवेचा मार्ग दाखवला. आजही लाखो भक्त दर्शनासाठी येतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_gajanan_p", category:"saint", date:"2026-09-09",
  title:{en:"Sant Gajanan Punyatithi",hi:"संत गजानन पुण्यतिथि",mr:"संत गजानन महाराज पुण्यतिथी"},
  message:{
    en:"🙏 Sant Gajanan Maharaj Punyatithi.\n\nToday is the day of remembrance of Sant Gajanan Maharaj of Shegaon.\n\nHe always blessed his devotees and removed their sorrows. His thoughts still inspire devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत गजानन महाराज पुण्यतिथि।\n\nआज शेगांव के संत गजानन महाराज की स्मृति का दिन है।\n\nभक्तों पर सदा कृपा की और दुःख दूर किए। विचार प्रेरणा देते हैं।\n\nवंदन! 🙏",
    mr:"🙏 संत गजानन महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज शेगावचे संत गजानन महाराज यांच्या स्मृतीचा दिवस.\n\nभक्तांवर कृपा केली आणि दुःख दूर केले. विचार प्रेरणा देतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"saint_buddha", category:"saint", date:"2026-05-01",
  title:{en:"Buddha Purnima",hi:"बुद्ध पूर्णिमा",mr:"बुद्ध पौर्णिमा"},
  message:{
    en:"🙏 Happy Buddha Purnima!\n\nToday is the sacred day of birth, enlightenment and mahaparinirvana of Lord Gautam Buddha.\n\nHe taught us non-violence, compassion and the middle path. His thoughts still show the world the path of peace.\n\nBuddham Sharanam Gachhami! 🙏",
    hi:"🙏 बुद्ध पूर्णिमा की शुभकामनाएं!\n\nआज भगवान गौतम बुद्ध की जयंती, ज्ञान प्राप्ति और महापरिनिर्वाण का पवित्र दिन है।\n\nअहिंसा, करुणा और मध्यम मार्ग सिखाया। विचार दुनिया को शांति का मार्ग दिखाते हैं।\n\nबुद्धं शरणं गच्छामि! 🙏",
    mr:"🙏 बुद्ध पौर्णिमेच्या हार्दिक शुभेच्छा!\n\nआज भगवान गौतम बुद्ध यांची जयंती, ज्ञानप्राप्ती आणि महापरिनिर्वाण यांचा पवित्र दिवस.\n\nअहिंसा, करुणा आणि मध्यम मार्ग शिकवला. विचार जगाला शांतीचा मार्ग दाखवतात.\n\nबुद्धं शरणं गच्छामि! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_mahavir", category:"saint", date:"2026-03-31",
  title:{en:"Mahavir Jayanti",hi:"महावीर जयंती",mr:"महावीर जयंती"},
  message:{
    en:"🙏 Happy Mahavir Jayanti!\n\nToday is the birth anniversary of Bhagwan Mahavir Swami — the 24th Tirthankara of Jainism.\n\nHe taught non-violence, truth and aparigraha (non-possession). His thoughts still show the world the path of peace.\n\nMy humble salutations! 🙏",
    hi:"🙏 महावीर जयंती की शुभकामनाएं!\n\nआज जैन धर्म के 24वें तीर्थंकर भगवान महावीर स्वामी की जयंती है।\n\nअहिंसा, सत्य और अपरिग्रह सिखाया। विचार दुनिया को शांति का मार्ग दिखाते हैं।\n\nवंदन! 🙏",
    mr:"🙏 महावीर जयंतीच्या हार्दिक शुभेच्छा!\n\nआज जैन धर्माचे २४ वे तीर्थंकर भगवान महावीर स्वामी यांची जयंती.\n\nअहिंसा, सत्य आणि अपरिग्रह शिकवले. विचार शांतीचा मार्ग दाखवतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_nanak", category:"saint", date:"2026-11-24",
  title:{en:"Guru Nanak Jayanti",hi:"गुरु नानक जयंती",mr:"गुरु नानक जयंती"},
  message:{
    en:"🙏 Happy Guru Nanak Jayanti!\n\nToday is the birth anniversary of Guru Nanak Dev Ji — founder of Sikhism.\n\nHe gave the message of one God, unity and service. His thoughts still inspire millions across the world.\n\nWaheguru Ji Ka Khalsa! 🙏",
    hi:"🙏 गुरु नानक जयंती की शुभकामनाएं!\n\nआज सिख धर्म के संस्थापक गुरु नानक देव जी की जयंती है।\n\nएक ईश्वर, एकता और सेवा का संदेश दिया। विचार लाखों को प्रेरणा देते हैं।\n\nवाहेगुरु जी का खालसा! 🙏",
    mr:"🙏 गुरु नानक जयंतीच्या हार्दिक शुभेच्छा!\n\nआज शीख धर्माचे संस्थापक गुरु नानक देव जी यांची जयंती.\n\nएक ईश्वर, एकता आणि सेवेचा संदेश दिला. विचार लाखांना प्रेरणा देतात.\n\nवाहेगुरु जी का खालसा! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_shankaracharya", category:"saint", date:"2026-05-02",
  title:{en:"Adi Shankaracharya Jayanti",hi:"आदि शंकराचार्य जयंती",mr:"आद्य शंकराचार्य जयंती"},
  message:{
    en:"🙏 Adi Shankaracharya Jayanti!\n\nToday is the birth anniversary of Adi Shankaracharya — founder of Advaita Vedanta.\n\nHe spread spirituality and Vedanta across India. His thoughts still guide us.\n\nMy humble salutations! 🙏",
    hi:"🙏 आदि शंकराचार्य जयंती!\n\nआज अद्वैत वेदांत के प्रवर्तक आदि शंकराचार्य की जयंती है।\n\nपूरे भारत में अध्यात्म और वेदांत का प्रसार किया। विचार मार्ग दिखाते हैं।\n\nवंदन! 🙏",
    mr:"🙏 आद्य शंकराचार्य जयंती!\n\nआज अद्वैत वेदांताचे प्रवर्तक आद्य शंकराचार्य यांची जयंती.\n\nसंपूर्ण भारतात अध्यात्म आणि वेदांताचा प्रसार केला. विचार मार्ग दाखवतात.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_kabir", category:"saint", date:"2026-06-22",
  title:{en:"Sant Kabir Jayanti",hi:"संत कबीर जयंती",mr:"संत कबीर जयंती"},
  message:{
    en:"🙏 Sant Kabir Jayanti!\n\nToday is the birth anniversary of the great saint Kabir Das.\n\nThrough his dohas he gave the message of truth, love and unity. He respected all religions.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत कबीर जयंती!\n\nआज महान संत कबीर दास की जयंती है।\n\nअपने दोहों से सत्य, प्रेम और एकता का संदेश दिया। सभी धर्मों का सम्मान किया।\n\nवंदन! 🙏",
    mr:"🙏 संत कबीर जयंती!\n\nआज महान संत कबीर दास यांची जयंती.\n\nदोह्यांतून सत्य, प्रेम आणि एकतेचा संदेश दिला. सर्व धर्मांचा सन्मान केला.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_meerabai", category:"saint", date:"2026-10-02",
  title:{en:"Sant Meerabai Jayanti",hi:"संत मीराबाई जयंती",mr:"संत मीराबाई जयंती"},
  message:{
    en:"🙏 Sant Meerabai Jayanti!\n\nToday is the birth anniversary of Sant Meerabai — the great devotee of Lord Krishna.\n\nShe dedicated her entire life to Krishna devotion. Her devotion still inspires devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत मीराबाई जयंती!\n\nआज भगवान श्रीकृष्ण की परम भक्त संत मीराबाई की जयंती है।\n\nपूरा जीवन कृष्ण भक्ति में वाहित किया। भक्ति भक्तों को प्रेरणा देती है।\n\nवंदन! 🙏",
    mr:"🙏 संत मीराबाई जयंती!\n\nआज भगवान श्रीकृष्णाच्या परम भक्त संत मीराबाईंची जयंती.\n\nसंपूर्ण आयुष्य कृष्ण भक्तीत वाहिले. भक्ती प्रेरणा देते.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_tulsidas", category:"saint", date:"2026-08-06",
  title:{en:"Sant Tulsidas Jayanti",hi:"संत तुलसीदास जयंती",mr:"संत तुलसीदास जयंती"},
  message:{
    en:"🙏 Sant Tulsidas Jayanti!\n\nToday is the birth anniversary of the great saint Tulsidas who composed Ramcharitmanas.\n\nHe wrote the story of Shri Ram in Awadhi and spread Ram devotion among people.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत तुलसीदास जयंती!\n\nआज रामचरितमानस के रचनाकार महान संत तुलसीदास की जयंती है।\n\nअवधी भाषा में श्रीराम की कथा लिखी और राम भक्ति फैलाई।\n\nवंदन! 🙏",
    mr:"🙏 संत तुलसीदास जयंती!\n\nआज रामचरितमानसाचे रचनाकार महान संत तुलसीदास यांची जयंती.\n\nअवधी भाषेत श्रीरामाची कथा लिहिली आणि रामभक्तीचा प्रसार केला.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"saint_surdas", category:"saint", date:"2026-05-08",
  title:{en:"Sant Surdas Jayanti",hi:"संत सूरदास जयंती",mr:"संत सूरदास जयंती"},
  message:{
    en:"🙏 Sant Surdas Jayanti!\n\nToday is the birth anniversary of the great poet of Krishna devotion — Sant Surdas.\n\nHe described Krishna's leelas beautifully in his padas. His devotion still inspires devotees.\n\nMy humble salutations! 🙏",
    hi:"🙏 संत सूरदास जयंती!\n\nआज कृष्ण भक्ति के महान कवि संत सूरदास की जयंती है।\n\nपदों में कृष्ण लीलाओं का सुंदर वर्णन किया। भक्ति भक्तों को प्रेरणा देती है।\n\nवंदन! 🙏",
    mr:"🙏 संत सूरदास जयंती!\n\nआज कृष्ण भक्तीचे महान कवी संत सूरदास यांची जयंती.\n\nपदांतून कृष्ण लीळांचे सुंदर वर्णन केले. भक्ती प्रेरणा देते.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

/* ══════════════════════════════════════════════════════════
   5. MAHARAJ & LEADERS (27)
   ══════════════════════════════════════════════════════════ */

{ id:"mhj_shivaji_j", category:"maharaj", date:"2026-02-19",
  title:{en:"Shivaji Maharaj Jayanti",hi:"शिवाजी महाराज जयंती",mr:"छत्रपती शिवाजी महाराज जयंती"},
  message:{
    en:"🚩 Chhatrapati Shivaji Maharaj Jayanti!\n\nToday is the birth anniversary of the founder of Hindavi Swarajya — the great Chhatrapati Shivaji Maharaj.\n\nHe dreamt of a free kingdom, challenged the Mughal empire, and gave pride to every Marathi person.\n\nJai Bhavani, Jai Shivaji! 🚩",
    hi:"🚩 छत्रपति शिवाजी महाराज जयंती!\n\nआज हिंदवी स्वराज्य के संस्थापक महान छत्रपति शिवाजी महाराज की जयंती है।\n\nस्वराज्य का सपना देखा, मुगल साम्राज्य को चुनौती दी और हर मराठी को गर्व दिया।\n\nजय भवानी, जय शिवाजी! 🚩",
    mr:"🚩 छत्रपती शिवाजी महाराज जयंती!\n\nआज हिंदवी स्वराज्याचे संस्थापक महान छत्रपती शिवाजी महाराज यांची जयंती.\n\nस्वराज्याचे स्वप्न पाहिले, मोगल साम्राज्याला आव्हान दिले आणि मराठी माणसाला अभिमान दिला.\n\nजय भवानी, जय शिवाजी! 🚩"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_shivaji_p", category:"maharaj", date:"2026-04-03",
  title:{en:"Shivaji Maharaj Punyatithi",hi:"शिवाजी महाराज पुण्यतिथि",mr:"छत्रपती शिवाजी महाराज पुण्यतिथी"},
  message:{
    en:"🚩 Chhatrapati Shivaji Maharaj Punyatithi.\n\nToday is the sacred day when the great Chhatrapati Shivaji Maharaj left us at Raigad.\n\nHe dedicated his entire life to Swarajya and gave self-respect to every Marathi person. His legacy lives forever.\n\nJai Bhavani, Jai Shivaji! Humble salutations! 🚩",
    hi:"🚩 छत्रपति शिवाजी महाराज पुण्यतिथि।\n\nआज रायगड पर महान छत्रपति शिवाजी महाराज के हमें छोड़कर जाने का पवित्र दिन है।\n\nपूरा जीवन स्वराज्य को समर्पित किया और स्वाभिमान दिया। विरासत सदा जीवित रहेगी।\n\nजय भवानी, जय शिवाजी! वंदन! 🚩",
    mr:"🚩 छत्रपती शिवाजी महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज रायगडावर महान छत्रपती शिवाजी महाराज यांची पुण्यतिथी.\n\nसंपूर्ण आयुष्य स्वराज्यासाठी वाहिले आणि स्वाभिमान दिला. वारसा जिवंत राहील.\n\nजय भवानी, जय शिवाजी! वंदन! 🚩"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_shivrajyabhishek", category:"maharaj", date:"2026-06-06",
  title:{en:"Shivrajyabhishek Din",hi:"शिवराज्याभिषेक दिन",mr:"शिवराज्याभिषेक दिन"},
  message:{
    en:"👑 Shivrajyabhishek Din!\n\nToday marks the coronation of Chhatrapati Shivaji Maharaj at Raigad.\n\nHindavi Swarajya was established and Marathi people got their own kingdom.\n\nJai Bhavani, Jai Shivaji! 🚩👑",
    hi:"👑 शिवराज्याभिषेक दिन!\n\nआज रायगड पर छत्रपति शिवाजी महाराज का राज्याभिषेक हुआ था।\n\nहिंदवी स्वराज्य की स्थापना हुई और मराठी लोगों को अपना राज्य मिला।\n\nजय भवानी, जय शिवाजी! 🚩👑",
    mr:"👑 शिवराज्याभिषेक दिन!\n\nआज रायगडावर छत्रपती शिवाजी महाराजांचा शिवराज्याभिषेक झाला.\n\nहिंदवी स्वराज्याची स्थापना झाली आणि मराठी माणसाला स्वतःचे राज्य मिळाले.\n\nजय भवानी, जय शिवाजी! 🚩👑"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_jijabai_j", category:"maharaj", date:"2026-01-12",
  title:{en:"Rajmata Jijabai Jayanti",hi:"राजमाता जीजाबाई जयंती",mr:"राजमाता जिजाबाई जयंती"},
  message:{
    en:"🙏 Rajmata Jijabai Jayanti!\n\nToday is the birth anniversary of Rajmata Jijabai — mother of Chhatrapati Shivaji Maharaj.\n\nShe inspired Shivba to dream of Swarajya and gave him values. She set an ideal for Marathi mothers.\n\nMy humble salutations! 🙏",
    hi:"🙏 राजमाता जीजाबाई जयंती!\n\nआज महान छत्रपति शिवाजी महाराज की मातोश्री राजमाता जीजाबाई की जयंती है।\n\nशिवबा को स्वराज्य की प्रेरणा दी और संस्कार दिए। मराठी माताओं का आदर्श स्थापित किया।\n\nवंदन! 🙏",
    mr:"🙏 राजमाता जिजाबाई जयंती!\n\nआज छत्रपती शिवाजी महाराज यांच्या मातोश्री राजमाता जिजाबाईंची जयंती.\n\nशिवबांना स्वराज्याची प्रेरणा दिली आणि संस्कार दिले. मराठी मातांचे आदर्श उभे केले.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_jijabai_p", category:"maharaj", date:"2026-06-17",
  title:{en:"Rajmata Jijabai Punyatithi",hi:"राजमाता जीजाबाई पुण्यतिथि",mr:"राजमाता जिजाबाई पुण्यतिथी"},
  message:{
    en:"🙏 Rajmata Jijabai Punyatithi.\n\nToday is the day of remembrance of Rajmata Jijabai — mother of Chhatrapati Shivaji Maharaj.\n\nShe showed her son the dream of Swarajya and made it real. We remember her always.\n\nMy humble salutations! 🙏",
    hi:"🙏 राजमाता जीजाबाई पुण्यतिथि।\n\nआज महान छत्रपति शिवाजी महाराज की मातोश्री राजमाता जीजाबाई की स्मृति का दिन है।\n\nअपने पुत्र को स्वराज्य का सपना दिखाया और साकार किया। हम उन्हें सदा याद करते हैं।\n\nवंदन! 🙏",
    mr:"🙏 राजमाता जिजाबाई पुण्यतिथीनिमित्त वंदन.\n\nआज छत्रपती शिवाजी महाराज यांच्या मातोश्री राजमाता जिजाबाईंच्या स्मृतीचा दिवस.\n\nपुत्राला स्वराज्याचे स्वप्न दाखवले आणि साकार केले. नेहमी स्मरतो.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_sambhaji_j", category:"maharaj", date:"2026-05-14",
  title:{en:"Sambhaji Maharaj Jayanti",hi:"संभाजी महाराज जयंती",mr:"छत्रपती संभाजी महाराज जयंती"},
  message:{
    en:"🚩 Chhatrapati Sambhaji Maharaj Jayanti!\n\nToday is the birth anniversary of Chhatrapati Sambhaji Maharaj — son of Chhatrapati Shivaji Maharaj.\n\nHe protected his father's Swarajya and sacrificed his life for dharma.\n\nMy humble salutations! 🚩",
    hi:"🚩 छत्रपति संभाजी महाराज जयंती!\n\nआज छत्रपति शिवाजी महाराज के सुपुत्र छत्रपति संभाजी महाराज की जयंती है।\n\nपिता के स्वराज्य की रक्षा की और धर्म के लिए बलिदान दिया।\n\nवंदन! 🚩",
    mr:"🚩 छत्रपती संभाजी महाराज जयंती!\n\nआज छत्रपती शिवाजी महाराजांचे सुपुत्र छत्रपती संभाजी महाराज यांची जयंती.\n\nपित्याचे स्वराज्य सांभाळले आणि धर्मासाठी बलिदान दिले.\n\nमनःपूर्वक वंदन! 🚩"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_sambhaji_p", category:"maharaj", date:"2026-03-11",
  title:{en:"Sambhaji Maharaj Balidan Din",hi:"संभाजी महाराज बलिदान दिवस",mr:"छत्रपती संभाजी महाराज बलिदान दिन"},
  message:{
    en:"🚩 Chhatrapati Sambhaji Maharaj Balidan Din.\n\nToday is the sacred day of the sacrifice of the great Dharmaveer Chhatrapati Sambhaji Maharaj.\n\nHe challenged tyranny for his dharma and Swarajya and gave his life with a smile. We can never forget his sacrifice.\n\nHeartfelt tribute! 🚩",
    hi:"🚩 छत्रपति संभाजी महाराज बलिदान दिवस।\n\nआज महान धर्मवीर छत्रपति संभाजी महाराज के बलिदान का पवित्र दिन है।\n\nधर्म और स्वराज्य के लिए अत्याचार को चुनौती दी और हंसते-हंसते बलिदान दिया।\n\nश्रद्धांजलि! 🚩",
    mr:"🚩 छत्रपती संभाजी महाराज बलिदान दिनानिमित्त श्रद्धांजली.\n\nआज महान धर्मवीर छत्रपती संभाजी महाराज यांच्या बलिदानाचा पवित्र दिवस.\n\nधर्मासाठी आणि स्वराज्यासाठी अत्याचाराला आव्हान दिले आणि बलिदान दिले.\n\nमनःपूर्वक श्रद्धांजली! 🚩"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_rajram_j", category:"maharaj", date:"2026-02-24",
  title:{en:"Rajaram Maharaj Jayanti",hi:"राजाराम महाराज जयंती",mr:"छत्रपती राजाराम महाराज जयंती"},
  message:{
    en:"👑 Chhatrapati Rajaram Maharaj Jayanti!\n\nToday is the birth anniversary of Chhatrapati Rajaram Maharaj — son of Chhatrapati Shivaji Maharaj.\n\nHe took the reins of Swarajya after Sambhaji Maharaj and challenged the Mughals.\n\nMy humble salutations! 👑",
    hi:"👑 छत्रपति राजाराम महाराज जयंती!\n\nआज छत्रपति शिवाजी महाराज के सुपुत्र छत्रपति राजाराम महाराज की जयंती है।\n\nसंभाजी महाराज के बाद स्वराज्य की धुरा संभाली और मुगलों को चुनौती दी।\n\nवंदन! 👑",
    mr:"👑 छत्रपती राजाराम महाराज जयंती!\n\nआज छत्रपती शिवाजी महाराजांचे सुपुत्र छत्रपती राजाराम महाराज यांची जयंती.\n\nसंभाजी महाराजांनंतर स्वराज्याची धुरा सांभाळली आणि मोगलांना आव्हान दिले.\n\nमनःपूर्वक वंदन! 👑"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_rajram_p", category:"maharaj", date:"2026-03-03",
  title:{en:"Rajaram Maharaj Punyatithi",hi:"राजाराम महाराज पुण्यतिथि",mr:"छत्रपती राजाराम महाराज पुण्यतिथी"},
  message:{
    en:"👑 Chhatrapati Rajaram Maharaj Punyatithi.\n\nToday is the day of remembrance of Chhatrapati Rajaram Maharaj.\n\nHe took the reins of Swarajya even in difficult times and kept Maratha rule alive.\n\nMy humble salutations! 👑",
    hi:"👑 छत्रपति राजाराम महाराज पुण्यतिथि।\n\nआज छत्रपति राजाराम महाराज की स्मृति का दिन है।\n\nकठिन समय में भी स्वराज्य की सूत्र संभाली और मराठा सत्ता बनाए रखी।\n\nवंदन! 👑",
    mr:"👑 छत्रपती राजाराम महाराज पुण्यतिथीनिमित्त वंदन.\n\nआज छत्रपती राजाराम महाराज यांच्या स्मृतीचा दिवस.\n\nकठीण काळातही स्वराज्याची सूत्रे हाती घेतली आणि मराठी सत्ता टिकवली.\n\nमनःपूर्वक वंदन! 👑"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_shahu_kolhapur", category:"maharaj", date:"2026-06-26",
  title:{en:"Shahu Maharaj Kolhapur Jayanti",hi:"शाहू महाराज कोल्हापुर जयंती",mr:"छत्रपती शाहू महाराज जयंती"},
  message:{
    en:"👑 Chhatrapati Shahu Maharaj Jayanti!\n\nToday is the birth anniversary of Chhatrapati Shahu Maharaj of Kolhapur.\n\nHe gave education and justice to all sections of society. He is called the 'Reformer King'.\n\nMy humble salutations! 👑",
    hi:"👑 छत्रपति शाहू महाराज जयंती!\n\nआज कोल्हापुर के छत्रपति शाहू महाराज की जयंती है।\n\nसमाज के सभी वर्गों को शिक्षा और न्याय दिलाया। उन्हें 'समाजसुधारक राजा' कहा जाता है।\n\nवंदन! 👑",
    mr:"👑 छत्रपती शाहू महाराज जयंती!\n\nआज कोल्हापूरचे छत्रपती शाहू महाराज यांची जयंती.\n\nसमाजातील सर्वांना शिक्षण आणि न्याय मिळवून दिला. 'समाजसुधारक राजे' म्हणतात.\n\nमनःपूर्वक वंदन! 👑"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_tarabai_j", category:"maharaj", date:"2026-04-14",
  title:{en:"Rani Tarabai Jayanti",hi:"रानी ताराबाई जयंती",mr:"राणी ताराबाई जयंती"},
  message:{
    en:"👸 Rani Tarabai Jayanti!\n\nToday is the birth anniversary of the brave Rani Tarabai who fought for Swarajya.\n\nShe took the reins of Swarajya after her husband and defeated the Mughals many times.\n\nMy humble salutations! 👸",
    hi:"👸 रानी ताराबाई जयंती!\n\nआज स्वराज्य के लिए लड़ने वाली वीर रानी ताराबाई की जयंती है।\n\nपति के बाद स्वराज्य की धुरा संभाली और मुगलों को कई बार हराया।\n\nवंदन! 👸",
    mr:"👸 राणी ताराबाई जयंती!\n\nआज स्वराज्यासाठी लढणाऱ्या वीर राणी ताराबाईंची जयंती.\n\nपतीनंतर स्वराज्याची धुरा सांभाळली आणि मोगलांना अनेक वेळा हरवले.\n\nमनःपूर्वक वंदन! 👸"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_tarabai_p", category:"maharaj", date:"2026-12-09",
  title:{en:"Rani Tarabai Punyatithi",hi:"रानी ताराबाई पुण्यतिथि",mr:"राणी ताराबाई पुण्यतिथी"},
  message:{
    en:"👸 Rani Tarabai Punyatithi.\n\nToday is the day of remembrance of the brave Rani Tarabai.\n\nShe kept Maratha rule alive with her courage and protected Swarajya.\n\nMy humble salutations! 👸",
    hi:"👸 रानी ताराबाई पुण्यतिथि।\n\nआज वीर रानी ताराबाई की स्मृति का पवित्र दिन है।\n\nअपने साहस से मराठा सत्ता बनाए रखी और स्वराज्य की रक्षा की।\n\nवंदन! 👸",
    mr:"👸 राणी ताराबाई पुण्यतिथीनिमित्त वंदन.\n\nआज वीर राणी ताराबाईंच्या स्मृतीचा पवित्र दिवस.\n\nशौर्याने मराठी सत्ता टिकवली आणि स्वराज्याचे रक्षण केले.\n\nमनःपूर्वक वंदन! 👸"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_bajirao_j", category:"maharaj", date:"2026-08-18",
  title:{en:"Bajirao Peshwa Jayanti",hi:"बाजीराव पेशवे जयंती",mr:"बाजीराव पेशवे जयंती"},
  message:{
    en:"⚔️ Bajirao Peshwa Jayanti!\n\nToday is the birth anniversary of the great warrior Peshwa Bajirao.\n\nHe fought 41 battles and lost none. He expanded the Maratha empire across India.\n\nMy humble salutations! ⚔️",
    hi:"⚔️ बाजीराव पेशवे जयंती!\n\nआज महान योद्धा पेशवा बाजीराव की जयंती है।\n\n41 युद्ध लड़े और एक भी नहीं हारे। मराठा साम्राज्य का पूरे भारत में विस्तार किया।\n\nवंदन! ⚔️",
    mr:"⚔️ बाजीराव पेशवे जयंती!\n\nआज महान योद्धा पेशवा बाजीराव यांची जयंती.\n\n४१ युद्धांमध्ये एकही हरले नाही. मराठा साम्राज्याचा संपूर्ण भारतात विस्तार केला.\n\nमनःपूर्वक वंदन! ⚔️"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_bajirao_p", category:"maharaj", date:"2026-04-28",
  title:{en:"Bajirao Peshwa Punyatithi",hi:"बाजीराव पेशवे पुण्यतिथि",mr:"बाजीराव पेशवे पुण्यतिथी"},
  message:{
    en:"⚔️ Bajirao Peshwa Punyatithi.\n\nToday is the day of remembrance of the great warrior Peshwa Bajirao.\n\nHis valour raised the Maratha empire to new heights. His story of bravery still inspires youth.\n\nMy humble salutations! ⚔️",
    hi:"⚔️ बाजीराव पेशवे पुण्यतिथि।\n\nआज महान योद्धा पेशवा बाजीराव की स्मृति का पवित्र दिन है।\n\nउनकी वीरता ने मराठा साम्राज्य को नई ऊंचाई दी। पराक्रम की कहानी युवाओं को प्रेरणा देती है।\n\nवंदन! ⚔️",
    mr:"⚔️ बाजीराव पेशवे पुण्यतिथीनिमित्त वंदन.\n\nआज महान योद्धा पेशवा बाजीराव यांच्या स्मृतीचा पवित्र दिवस.\n\nशौर्याने मराठा साम्राज्याला नवी उंची दिली. पराक्रमाची कहाणी प्रेरणा देते.\n\nमनःपूर्वक वंदन! ⚔️"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_nanasaheb", category:"maharaj", date:"2026-01-10",
  title:{en:"Nanasaheb Peshwa Jayanti",hi:"नानासाहेब पेशवे जयंती",mr:"नानासाहेब पेशवे जयंती"},
  message:{
    en:"🙏 Nanasaheb Peshwa Jayanti!\n\nToday is the birth anniversary of Peshwa Balaji Vishwanath — Nanasaheb Peshwa.\n\nHe laid the foundation for the expansion of the Maratha empire and started the Peshwa rule.\n\nMy humble salutations! 🙏",
    hi:"🙏 नानासाहेब पेशवे जयंती!\n\nआज पेशवा बालाजी विश्वनाथ — नानासाहेब पेशवे की जयंती है।\n\nमराठा साम्राज्य के विस्तार की नींव रखी और पेशवाई की शुरुआत की।\n\nवंदन! 🙏",
    mr:"🙏 नानासाहेब पेशवे जयंती!\n\nआज पेशवा बाळाजी विश्वनाथ — नानासाहेब पेशवे यांची जयंती.\n\nमराठा साम्राज्याच्या विस्तारासाठी पाया रचला आणि पेशवाई सुरू केली.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_madhavrao", category:"maharaj", date:"2026-02-16",
  title:{en:"Madhavrao Peshwa Jayanti",hi:"माधवराव पेशवे जयंती",mr:"माधवराव पेशवे जयंती"},
  message:{
    en:"🙏 Madhavrao Peshwa Jayanti!\n\nToday is the birth anniversary of Thorale Madhavrao Peshwa.\n\nHe rebuilt the Maratha empire in a short time and improved administration.\n\nMy humble salutations! 🙏",
    hi:"🙏 माधवराव पेशवे जयंती!\n\nआज थोरले माधवराव पेशवे की जयंती है।\n\nथोड़े समय में मराठा साम्राज्य को फिर खड़ा किया और प्रशासन सुधारा।\n\nवंदन! 🙏",
    mr:"🙏 माधवराव पेशवे जयंती!\n\nआज थोरले माधवराव पेशवे यांची जयंती.\n\nअल्पावधीत मराठा साम्राज्य पुन्हा उभे केले आणि प्रशासन सुधारले.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_tanaji_p", category:"maharaj", date:"2026-02-04",
  title:{en:"Tanaji Malusare Punyatithi",hi:"तानाजी मालुसरे पुण्यतिथि",mr:"तानाजी मालुसरे पुण्यतिथी"},
  message:{
    en:"🚩 Tanaji Malusare Punyatithi.\n\nToday is the sacred day of sacrifice of the brave Tanaji Malusare at Sinhagad.\n\nHe wrote the immortal story 'the fort was won but the lion was lost'. We can never forget his sacrifice.\n\nMy humble salutations! 🚩",
    hi:"🚩 तानाजी मालुसरे पुण्यतिथि।\n\nआज सिंहगड पर बलिदान देने वाले वीर तानाजी मालुसरे की स्मृति का पवित्र दिन है।\n\n'गढ़ आया पर सिंह गया' अमर कहानी लिखी। बलिदान कभी नहीं भूल सकते।\n\nवंदन! 🚩",
    mr:"🚩 तानाजी मालुसरे पुण्यतिथीनिमित्त वंदन.\n\nआज सिंहगडावर बलिदान देणाऱ्या वीर तानाजी मालुसरे यांच्या स्मृतीचा पवित्र दिवस.\n\n'गड आला पण सिंह गेला' अमर कहाणी लिहिली. बलिदान विसरू शकत नाही.\n\nमनःपूर्वक वंदन! 🚩"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_kanhoji", category:"maharaj", date:"2026-08-01",
  title:{en:"Kanhoji Angre Jayanti",hi:"कान्होजी आंग्रे जयंती",mr:"कान्होजी आंग्रे जयंती"},
  message:{
    en:"⚓ Kanhoji Angre Jayanti!\n\nToday is the birth anniversary of the father of the Maratha Navy — Kanhoji Angre.\n\nHe built the navy of the Maratha empire and dominated the seas.\n\nMy humble salutations! ⚓",
    hi:"⚓ कान्होजी आंग्रे जयंती!\n\nआज मराठा नौसेना के जनक कान्होजी आंग्रे की जयंती है।\n\nमराठा साम्राज्य की नौसेना खड़ी की और समुद्र पर वर्चस्व कायम किया।\n\nवंदन! ⚓",
    mr:"⚓ कान्होजी आंग्रे जयंती!\n\nआज मराठा आरमाराचे जनक कान्होजी आंग्रे यांची जयंती.\n\nमराठा साम्राज्याचे आरमार उभे केले आणि समुद्रावर वर्चस्व मिळवले.\n\nमनःपूर्वक वंदन! ⚓"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_mahadji", category:"maharaj", date:"2026-04-15",
  title:{en:"Mahadji Shinde Jayanti",hi:"महादजी शिंदे जयंती",mr:"महादजी शिंदे जयंती"},
  message:{
    en:"🙏 Mahadji Shinde Jayanti!\n\nToday is the birth anniversary of the Maratha Sardar Mahadji Shinde.\n\nHe established Maratha rule in North India and won many battles.\n\nMy humble salutations! 🙏",
    hi:"🙏 महादजी शिंदे जयंती!\n\nआज मराठा सरदार महादजी शिंदे की जयंती है।\n\nउत्तर भारत में मराठा सत्ता स्थापित की और कई युद्ध जीते।\n\nवंदन! 🙏",
    mr:"🙏 महादजी शिंदे जयंती!\n\nआज मराठा सरदार महादजी शिंदे यांची जयंती.\n\nउत्तर भारतात मराठा सत्ता प्रस्थापित केली आणि अनेक युद्धे जिंकली.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_ahilyabai_j", category:"maharaj", date:"2026-05-31",
  title:{en:"Ahilyabai Holkar Jayanti",hi:"अहिल्याबाई होळकर जयंती",mr:"अहिल्याबाई होळकर जयंती"},
  message:{
    en:"👸 Ahilyabai Holkar Jayanti!\n\nToday is the birth anniversary of the great administrator and devoted queen Ahilyabai Holkar.\n\nShe efficiently managed the Indore state and built many temples.\n\nMy humble salutations! 👸",
    hi:"👸 अहिल्याबाई होळकर जयंती!\n\nआज महान प्रशासक और धर्मपरायण रानी अहिल्याबाई होळकर की जयंती है।\n\nइंदौर संस्थान का कुशल कारभार किया और अनेक मंदिर बनवाए।\n\nवंदन! 👸",
    mr:"👸 अहिल्याबाई होळकर जयंती!\n\nआज महान प्रशासक आणि धर्मपरायण राणी अहिल्याबाई होळकर यांची जयंती.\n\nइंदूर संस्थानाचा कारभार केला आणि अनेक मंदिरे बांधली.\n\nमनःपूर्वक वंदन! 👸"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_ahilyabai_p", category:"maharaj", date:"2026-08-13",
  title:{en:"Ahilyabai Holkar Punyatithi",hi:"अहिल्याबाई होळकर पुण्यतिथि",mr:"अहिल्याबाई होळकर पुण्यतिथी"},
  message:{
    en:"👸 Ahilyabai Holkar Punyatithi.\n\nToday is the day of remembrance of the great administrator Ahilyabai Holkar.\n\nShe wrote her name in history with her deeds. Her administration is still considered ideal.\n\nMy humble salutations! 👸",
    hi:"👸 अहिल्याबाई होळकर पुण्यतिथि।\n\nआज महान प्रशासक अहिल्याबाई होळकर की स्मृति का दिन है।\n\nअपने कर्तृत्व से इतिहास में नाम लिखा। प्रशासन आज भी आदर्श माना जाता है।\n\nवंदन! 👸",
    mr:"👸 अहिल्याबाई होळकर पुण्यतिथीनिमित्त वंदन.\n\nआज महान प्रशासक अहिल्याबाई होळकर यांच्या स्मृतीचा दिवस.\n\nकर्तृत्वाने इतिहासात नाव कोरले. प्रशासन आजही आदर्श.\n\nमनःपूर्वक वंदन! 👸"
  }, includeOffer:false, includeSignature:true },

{ id:"mhj_phule_j", category:"maharaj", date:"2026-04-11",
  title:{en:"Mahatma Phule Jayanti",hi:"महात्मा फुले जयंती",mr:"महात्मा ज्योतिराव फुले जयंती"},
  message:{
    en:"🙏 Mahatma Jyotirao Phule Jayanti!\n\nToday is the birth anniversary of the great social reformer Mahatma Jyotirao Phule.\n\nHe dedicated his life to education, women's freedom and social reform.\n\nMy humble salutations! 🙏",
    hi:"🙏 महात्मा ज्योतिराव फुले जयंती!\n\nआज महान समाजसुधारक महात्मा ज्योतिराव फुले की जयंती है।\n\nशिक्षा, स्त्री-स्वतंत्रता और समाज सुधार के लिए जीवन समर्पित किया।\n\nवंदन! 🙏",
    mr:"🙏 महात्मा ज्योतिराव फुले जयंती!\n\nआज महान समाजसुधारक महात्मा ज्योतिराव फुले यांची जयंती.\n\nशिक्षण, स्त्री-स्वातंत्र्य आणि समाजसुधारणेसाठी आयुष्य वाहिले.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_savitribai_j", category:"maharaj", date:"2026-01-03",
  title:{en:"Savitribai Phule Jayanti",hi:"सावित्रीबाई फुले जयंती",mr:"सावित्रीबाई फुले जयंती"},
  message:{
    en:"🙏 Savitribai Phule Jayanti!\n\nToday is the birth anniversary of India's first woman teacher Savitribai Phule.\n\nShe dedicated her life to women's education and overcame many obstacles.\n\nMy humble salutations! 🙏",
    hi:"🙏 सावित्रीबाई फुले जयंती!\n\nआज भारत की पहली महिला शिक्षिका सावित्रीबाई फुले की जयंती है।\n\nस्त्रियों की शिक्षा के लिए जीवन समर्पित किया और अनेक बाधाएं पार कीं।\n\nवंदन! 🙏",
    mr:"🙏 सावित्रीबाई फुले जयंती!\n\nआज भारतातील पहिल्या महिला शिक्षिका सावित्रीबाई फुले यांची जयंती.\n\nस्त्रियांच्या शिक्षणासाठी आयुष्य वाहिले आणि अनेक अडचणींवर मात केली.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_ambedkar_j", category:"maharaj", date:"2026-04-14",
  title:{en:"Dr. Babasaheb Ambedkar Jayanti",hi:"डॉ. बाबासाहेब आंबेडकर जयंती",mr:"डॉ. बाबासाहेब आंबेडकर जयंती"},
  message:{
    en:"🙏 Dr. Babasaheb Ambedkar Jayanti!\n\nToday is the birth anniversary of the architect of the Indian Constitution — Dr. Babasaheb Ambedkar.\n\nHe dedicated his entire life to the upliftment of the last person in society.\n\nJai Bhim! My humble salutations! 🙏",
    hi:"🙏 डॉ. बाबासाहेब आंबेडकर जयंती!\n\nआज भारतीय संविधान के शिल्पकार डॉ. बाबासाहेब आंबेडकर की जयंती है।\n\nसमाज के अंतिम व्यक्ति के उत्थान के लिए पूरा जीवन समर्पित किया।\n\nजय भीम! वंदन! 🙏",
    mr:"🙏 डॉ. बाबासाहेब आंबेडकर जयंती!\n\nआज भारतीय संविधानाचे शिल्पकार डॉ. बाबासाहेब आंबेडकर यांची जयंती.\n\nसमाजातील शेवटच्या माणसाच्या उत्थानासाठी संपूर्ण आयुष्य वाहिले.\n\nजय भीम! मनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_tilak_j", category:"maharaj", date:"2026-07-23",
  title:{en:"Lokmanya Tilak Jayanti",hi:"लोकमान्य तिलक जयंती",mr:"लोकमान्य टिळक जयंती"},
  message:{
    en:"🙏 Lokmanya Tilak Jayanti!\n\nToday is the birth anniversary of the great freedom fighter Lokmanya Bal Gangadhar Tilak.\n\nHe declared 'Swaraj is my birthright' and popularised Ganeshotsav and Shiv Jayanti among the people.\n\nMy humble salutations! 🙏",
    hi:"🙏 लोकमान्य तिलक जयंती!\n\nआज स्वतंत्रता संग्राम के महान सेनानी लोकमान्य बाल गंगाधर तिलक की जयंती है।\n\n'स्वराज्य मेरा जन्मसिद्ध अधिकार है' कहा और गणेशोत्सव, शिवजयंती को जनता में रुजवाया।\n\nवंदन! 🙏",
    mr:"🙏 लोकमान्य टिळक जयंती!\n\nआज स्वातंत्र्यसंग्रामाचे महान सेनानी लोकमान्य बाळ गंगाधर टिळक यांची जयंती.\n\n'स्वराज्य हा माझा जन्मसिद्ध हक्क आहे' घोषणा दिली. उत्सव जनतेत रुजवले.\n\nमनःपूर्वक वंदन! 🙏"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_lakshmibai_j", category:"maharaj", date:"2026-11-19",
  title:{en:"Rani Lakshmibai Jayanti",hi:"रानी लक्ष्मीबाई जयंती",mr:"राणी लक्ष्मीबाई जयंती"},
  message:{
    en:"👸 Rani Lakshmibai Jayanti!\n\nToday is the birth anniversary of Rani Lakshmibai of Jhansi.\n\nDuring the 1857 freedom war, she tied a baby to her chest and fought the British.\n\nMy humble salutations! 👸",
    hi:"👸 रानी लक्ष्मीबाई जयंती!\n\nआज झांसी की रानी लक्ष्मीबाई की जयंती है।\n\n1857 के स्वतंत्रता संग्राम में बच्चे को छाती से बांधकर अंग्रेजों से लड़ीं।\n\nवंदन! 👸",
    mr:"👸 राणी लक्ष्मीबाई जयंती!\n\nआज झाशीची राणी लक्ष्मीबाई यांची जयंती.\n\n१८५७ च्या स्वातंत्र्ययुद्धात अंगावर बाळ बांधून अंग्रेजांशी लढल्या.\n\nमनःपूर्वक वंदन! 👸"
  }, includeOffer:true, includeSignature:true },

{ id:"mhj_shahu_reformer", category:"maharaj", date:"2026-06-26",
  title:{en:"Chhatrapati Shahu Maharaj (Reformer)",hi:"छत्रपति शाहू महाराज (सुधारक)",mr:"छत्रपती शाहू महाराज (समाजसुधारक)"},
  message:{
    en:"👑 Chhatrapati Shahu Maharaj Jayanti!\n\nToday is the birth anniversary of the social reformer Chhatrapati Shahu Maharaj.\n\nHe worked for the upliftment of farmers and the downtrodden. 'Bahujan Hitay, Bahujan Sukhay' was his motto.\n\nMy humble salutations! 👑",
    hi:"👑 छत्रपति शाहू महाराज जयंती!\n\nआज समाजसुधारक छत्रपति शाहू महाराज की जयंती है।\n\nकिसानों और वंचितों की उन्नति के लिए कार्य किया। 'बहुजन हिताय, बहुजन सुखाय' उनका ध्येय था।\n\nवंदन! 👑",
    mr:"👑 छत्रपती शाहू महाराज जयंती!\n\nआज समाजसुधारक छत्रपती शाहू महाराज यांची जयंती.\n\nशेतकरी आणि वंचितांच्या उन्नतीसाठी कार्य केले. 'बहुजन हिताय, बहुजन सुखाय' ध्येय होते.\n\nमनःपूर्वक वंदन! 👑"
  }, includeOffer:true, includeSignature:true },

/* ══════════════════════════════════════════════════════════
   6. NATIONAL + WORLD DAYS (57)
   ══════════════════════════════════════════════════════════ */

{ id:"nat_youth_day", category:"world", date:"2026-01-12",
  title:{en:"National Youth Day",hi:"राष्ट्रीय युवा दिवस",mr:"राष्ट्रीय युवा दिन"},
  message:{
    en:"🇮🇳 Happy National Youth Day!\n\nToday is the birth anniversary of Swami Vivekananda. A day to celebrate the power of youth.\n\n'Utho, Jago, aur Tab Tak Jago Jab Tak Lakshya Prapt Na Ho' — his message still inspires youth.\n\nJai Hind! 🇮🇳",
    hi:"🇮🇳 राष्ट्रीय युवा दिवस की शुभकामनाएं!\n\nआज स्वामी विवेकानंद की जयंती है। युवाओं की शक्ति का उत्सव।\n\n'उठो, जागो और तब तक जागो जब तक लक्ष्य प्राप्त न हो' — संदेश प्रेरणा देता है।\n\nजय हिंद! 🇮🇳",
    mr:"🇮🇳 राष्ट्रीय युवा दिनाच्या हार्दिक शुभेच्छा!\n\nआज स्वामी विवेकानंद यांची जयंती. युवांच्या शक्तीचा उत्सव.\n\n'उठा, जागे व्हा आणि ध्येय साधेपर्यंत जागे राहा' — संदेश प्रेरणा देतो.\n\nजय हिंद! 🇮🇳"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_republic", category:"world", date:"2026-01-26",
  title:{en:"Republic Day",hi:"गणतंत्र दिवस",mr:"प्रजासत्ताक दिन"},
  message:{
    en:"🇮🇳 Happy Republic Day!\n\nToday we celebrate the Constitution of India and the spirit of unity in diversity.\n\nLet us honour the sacrifices of our freedom fighters and work for a better nation. May our tricolour always fly high.\n\nJai Hind! 🇮🇳",
    hi:"🇮🇳 गणतंत्र दिवस की हार्दिक शुभकामनाएं!\n\nआज भारत के संविधान और अनेकता में एकता की भावना का उत्सव मनाते हैं।\n\nस्वतंत्रता सेनानियों के बलिदान का सम्मान करें और बेहतर राष्ट्र के लिए काम करें।\n\nजय हिंद! 🇮🇳",
    mr:"🇮🇳 प्रजासत्ताक दिनाच्या हार्दिक शुभेच्छा!\n\nआज भारताच्या संविधानाचा आणि विविधतेत एकतेचा उत्सव साजरा करतो.\n\nस्वातंत्र्यसैनिकांच्या बलिदानाचा आदर करूया आणि उत्तम राष्ट्रासाठी काम करूया.\n\nजय हिंद! 🇮🇳"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_girl_child", category:"world", date:"2026-01-24",
  title:{en:"National Girl Child Day",hi:"राष्ट्रीय बालिका दिवस",mr:"राष्ट्रीय बालिका दिन"},
  message:{
    en:"👧 National Girl Child Day!\n\nToday we celebrate the girl child — the future of our nation.\n\nEducate her, protect her, empower her. A daughter is not a burden, she is a blessing.\n\nBeti Bachao, Beti Padhao! 👧",
    hi:"👧 राष्ट्रीय बालिका दिवस!\n\nआज हम बालिकाओं का उत्सव मनाते हैं — राष्ट्र का भविष्य।\n\nउसे शिक्षित करें, सुरक्षित रखें, सशक्त बनाएं। बेटी बोझ नहीं, वरदान है।\n\nबेटी बचाओ, बेटी पढ़ाओ! 👧",
    mr:"👧 राष्ट्रीय बालिका दिन!\n\nआज बालिकांचा उत्सव साजरा करतो — राष्ट्राचे भविष्य.\n\nतिला शिक्षित करा, सुरक्षित ठेवा, सशक्त करा. मुलगी ओझे नाही, वरदान आहे.\n\nबेटी बचाओ, बेटी पढाओ! 👧"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_science", category:"world", date:"2026-02-28",
  title:{en:"National Science Day",hi:"राष्ट्रीय विज्ञान दिवस",mr:"राष्ट्रीय विज्ञान दिन"},
  message:{
    en:"🔬 National Science Day!\n\nToday we celebrate science and its contribution to India's progress.\n\nLet us encourage curiosity, innovation and research. Science is the future of our nation.\n\nJai Vigyan! 🔬",
    hi:"🔬 राष्ट्रीय विज्ञान दिवस!\n\nआज विज्ञान और भारत की प्रगति में इसके योगदान का उत्सव मनाते हैं।\n\nजिज्ञासा, नवाचार और शोध को बढ़ावा दें। विज्ञान ही राष्ट्र का भविष्य है।\n\nजय विज्ञान! 🔬",
    mr:"🔬 राष्ट्रीय विज्ञान दिन!\n\nआज विज्ञान आणि भारताच्या प्रगतीतील योगदानाचा उत्सव साजरा करतो.\n\nजिज्ञासा, नवसंशोधन आणि संशोधनाला प्रोत्साहन द्या. विज्ञान हेच राष्ट्राचे भविष्य.\n\nजय विज्ञान! 🔬"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_safety", category:"world", date:"2026-03-04",
  title:{en:"National Safety Day",hi:"राष्ट्रीय सुरक्षा दिवस",mr:"राष्ट्रीय सुरक्षा दिन"},
  message:{
    en:"🦺 National Safety Day!\n\nToday we pledge to follow safety rules and spread awareness about safety.\n\nSafety first — at home, at work and on the road. Let us protect ourselves and our loved ones.\n\nSafety First! 🦺",
    hi:"🦺 राष्ट्रीय सुरक्षा दिवस!\n\nआज हम सुरक्षा नियमों का पालन करने और जागरूकता फैलाने का संकल्प लेते हैं।\n\nघर, काम और सड़क पर सुरक्षा पहले। अपनी और अपनों की रक्षा करें।\n\nसुरक्षा सर्वप्रथम! 🦺",
    mr:"🦺 राष्ट्रीय सुरक्षा दिन!\n\nआज सुरक्षा नियमांचे पालन आणि जागरूकता पसरवण्याचा संकल्प घेतो.\n\nघरी, कामावर आणि रस्त्यावर सुरक्षा प्रथम. स्वतःचे आणि आपल्यांचे रक्षण करा.\n\nसुरक्षा प्रथम! 🦺"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_vaccination", category:"world", date:"2026-03-16",
  title:{en:"National Vaccination Day",hi:"राष्ट्रीय टीकाकरण दिवस",mr:"राष्ट्रीय लसीकरण दिन"},
  message:{
    en:"💉 National Vaccination Day!\n\nToday we spread awareness about the importance of vaccination.\n\nVaccines save lives. Get your children vaccinated and protect them from diseases.\n\nStay safe, stay vaccinated! 💉",
    hi:"💉 राष्ट्रीय टीकाकरण दिवस!\n\nआज हम टीकाकरण के महत्व के बारे में जागरूकता फैलाते हैं।\n\nटीके जीवन बचाते हैं। अपने बच्चों को टीका लगवाएं और बीमारियों से बचाएं।\n\nसुरक्षित रहें, टीका लगवाएं! 💉",
    mr:"💉 राष्ट्रीय लसीकरण दिन!\n\nआज लसीकरणाच्या महत्त्वाबद्दल जागरूकता पसरवतो.\n\nलसी जीव वाचवतात. मुलांना लस द्या आणि आजारांपासून वाचवा.\n\nसुरक्षित राहा, लस घ्या! 💉"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_maritime", category:"world", date:"2026-04-05",
  title:{en:"National Maritime Day",hi:"राष्ट्रीय समुद्री दिवस",mr:"राष्ट्रीय सागरी दिन"},
  message:{
    en:"⚓ National Maritime Day!\n\nToday we salute the Indian maritime industry and the seafarers who keep world trade running.\n\nIndia's maritime history is rich and proud. Let us respect our seafarers.\n\nJai Bharat! ⚓",
    hi:"⚓ राष्ट्रीय समुद्री दिवस!\n\nआज हम भारतीय समुद्री उद्योग और समुद्री यात्रियों को सलाम करते हैं।\n\nभारत का समुद्री इतिहास समृद्ध और गौरवशाली है। समुद्री यात्रियों का सम्मान करें।\n\nजय भारत! ⚓",
    mr:"⚓ राष्ट्रीय सागरी दिन!\n\nआज भारतीय सागरी उद्योग आणि सागरी कामगारांना सलाम करतो.\n\nभारताचा सागरी इतिहास समृद्ध आहे. सागरी कामगारांचा आदर करा.\n\nजय भारत! ⚓"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_panchayat", category:"world", date:"2026-04-24",
  title:{en:"National Panchayati Raj Day",hi:"राष्ट्रीय पंचायती राज दिवस",mr:"राष्ट्रीय पंचायत राज दिन"},
  message:{
    en:"🏛️ National Panchayati Raj Day!\n\nToday we celebrate the power of grassroots democracy — the Panchayati Raj system.\n\nStrong villages make a strong nation. Let us strengthen our local governance.\n\nJai Bharat! 🏛️",
    hi:"🏛️ राष्ट्रीय पंचायती राज दिवस!\n\nआज हम जमीनी लोकतंत्र की ताकत — पंचायती राज व्यवस्था का उत्सव मनाते हैं।\n\nमजबूत गांव मजबूत राष्ट्र बनाते हैं। स्थानीय शासन को मजबूत करें।\n\nजय भारत! 🏛️",
    mr:"🏛️ राष्ट्रीय पंचायत राज दिन!\n\nआज तळागाळातील लोकशाहीची शक्ती — पंचायत राज व्यवस्था साजरी करतो.\n\nमजबूत गावे मजबूत राष्ट्र घडवतात. स्थानिक कारभार मजबूत करा.\n\nजय भारत! 🏛️"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_technology", category:"world", date:"2026-05-11",
  title:{en:"National Technology Day",hi:"राष्ट्रीय प्रौद्योगिकी दिवस",mr:"राष्ट्रीय तंत्रज्ञान दिन"},
  message:{
    en:"💻 National Technology Day!\n\nToday we celebrate India's achievements in science and technology.\n\nTechnology is the future. Let us encourage innovation and digital progress for a better India.\n\nJai Bharat! 💻",
    hi:"💻 राष्ट्रीय प्रौद्योगिकी दिवस!\n\nआज हम विज्ञान और तकनीक में भारत की उपलब्धियों का उत्सव मनाते हैं।\n\nतकनीक भविष्य है। नवाचार और डिजिटल प्रगति को बढ़ावा दें।\n\nजय भारत! 💻",
    mr:"💻 राष्ट्रीय तंत्रज्ञान दिन!\n\nआज विज्ञान आणि तंत्रज्ञानातील भारताच्या यशाचा उत्सव साजरा करतो.\n\nतंत्रज्ञान हे भविष्य. नवसंशोधन आणि डिजिटल प्रगतीला प्रोत्साहन द्या.\n\nजय भारत! 💻"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_anti_terrorism", category:"world", date:"2026-05-21",
  title:{en:"National Anti-Terrorism Day",hi:"राष्ट्रीय आतंकवाद विरोधी दिवस",mr:"राष्ट्रीय दहशतवाद विरोधी दिन"},
  message:{
    en:"🕊️ National Anti-Terrorism Day!\n\nToday we pledge to stand against terrorism and violence.\n\nLet us promote peace, unity and brotherhood. Together we can build a terror-free India.\n\nPeace and Harmony! 🕊️",
    hi:"🕊️ राष्ट्रीय आतंकवाद विरोधी दिवस!\n\nआज हम आतंकवाद और हिंसा के खिलाफ खड़े होने का संकल्प लेते हैं।\n\nशांति, एकता और भाईचारा बढ़ाएं। मिलकर आतंक-मुक्त भारत बनाएं।\n\nशांति और सद्भाव! 🕊️",
    mr:"🕊️ राष्ट्रीय दहशतवाद विरोधी दिन!\n\nआज दहशतवाद आणि हिंसेविरुद्ध उभे राहण्याचा संकल्प घेतो.\n\nशांती, एकता आणि बंधुभाव वाढवा. मिळून दहशतवादमुक्त भारत घडवूया.\n\nशांती आणि सुसंवाद! 🕊️"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_doctors", category:"world", date:"2026-07-01",
  title:{en:"National Doctors' Day",hi:"राष्ट्रीय डॉक्टर दिवस",mr:"राष्ट्रीय डॉक्टर दिन"},
  message:{
    en:"🩺 Happy National Doctors' Day!\n\nThank you to all the doctors who work day and night to keep us healthy.\n\nYour dedication, patience and care save countless lives. We are grateful for your service. Please take care of yourself too!\n\nSalute to doctors! 🩺",
    hi:"🩺 राष्ट्रीय डॉक्टर दिवस की शुभकामनाएं!\n\nउन सभी डॉक्टरों को धन्यवाद जो दिन-रात हमारी सेहत के लिए काम करते हैं।\n\nआपकी मेहनत, धैर्य और देखभाल अनगिनत जिंदगियां बचाती है। अपना भी ख्याल रखें!\n\nडॉक्टरों को सलाम! 🩺",
    mr:"🩺 राष्ट्रीय डॉक्टर दिनाच्या शुभेच्छा!\n\nजे दिवस-रात्र आपल्या आरोग्यासाठी काम करतात त्या सगळ्या डॉक्टरांचे आभार.\n\nतुमची मेहनत, संयम आणि काळजी अनेक जीव वाचवते. स्वतःचीही काळजी घ्या!\n\nडॉक्टरांना सलाम! 🩺"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_independence", category:"world", date:"2026-08-15",
  title:{en:"Independence Day",hi:"स्वतंत्रता दिवस",mr:"स्वातंत्र्य दिन"},
  message:{
    en:"🇮🇳 Happy Independence Day!\n\nToday we remember the freedom fighters who gave us this beautiful nation with their sacrifices.\n\nLet us salute their courage and keep the spirit of freedom alive. May our tricolour always fly high.\n\nJai Hind! 🇮🇳",
    hi:"🇮🇳 स्वतंत्रता दिवस की हार्दिक शुभकामनाएं!\n\nआज उन स्वतंत्रता सेनानियों को याद करते हैं जिन्होंने बलिदान से यह सुंदर राष्ट्र दिया।\n\nउनके साहस को सलाम करें और आज़ादी की भावना जीवित रखें।\n\nजय हिंद! 🇮🇳",
    mr:"🇮🇳 स्वातंत्र्य दिनाच्या हार्दिक शुभेच्छा!\n\nआज ज्यांनी हे सुंदर राष्ट्र दिले त्या स्वातंत्र्यसैनिकांचे स्मरण करूया.\n\nत्यांच्या शौर्याला सलाम करूया आणि स्वातंत्र्याची भावना जिवंत ठेवूया.\n\nजय हिंद! 🇮🇳"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_sports", category:"world", date:"2026-08-29",
  title:{en:"National Sports Day",hi:"राष्ट्रीय खेल दिवस",mr:"राष्ट्रीय क्रीडा दिन"},
  message:{
    en:"🏅 National Sports Day!\n\nToday is the birth anniversary of hockey wizard Major Dhyan Chand.\n\nLet us celebrate the power of sports. Play, stay fit and make India proud!\n\nJai Bharat! 🏅",
    hi:"🏅 राष्ट्रीय खेल दिवस!\n\nआज हॉकी के जादूगर मेजर ध्यानचंद की जयंती है।\n\nखेल की शक्ति का उत्सव मनाएं। खेलें, फिट रहें और भारत का नाम रोशन करें!\n\nजय भारत! 🏅",
    mr:"🏅 राष्ट्रीय क्रीडा दिन!\n\nआज हॉकीचे जादूगार मेजर ध्यानचंद यांची जयंती.\n\nखेळाच्या शक्तीचा उत्सव साजरा करा. खेळा, फिट राहा आणि भारताचे नाव उज्ज्वल करा!\n\nजय भारत! 🏅"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_teachers", category:"world", date:"2026-09-05",
  title:{en:"Teachers' Day",hi:"शिक्षक दिवस",mr:"शिक्षक दिन"},
  message:{
    en:"📚 Happy Teachers' Day!\n\nToday is the birth anniversary of Dr. Sarvepalli Radhakrishnan.\n\nHeartfelt thanks to all teachers who shape our future. Your guidance lights our path.\n\nSalute to teachers! 📚",
    hi:"📚 शिक्षक दिवस की शुभकामनाएं!\n\nआज डॉ. सर्वपल्ली राधाकृष्णन की जयंती है।\n\nउन सभी शिक्षकों को धन्यवाद जो हमारा भविष्य बनाते हैं। आपका मार्गदर्शन रास्ता दिखाता है।\n\nशिक्षकों को नमन! 📚",
    mr:"📚 शिक्षक दिनाच्या शुभेच्छा!\n\nआज डॉ. सर्वपल्ली राधाकृष्णन यांची जयंती.\n\nआपले भविष्य घडवणाऱ्या सर्व शिक्षकांना आभार. मार्गदर्शन मार्ग दाखवते.\n\nशिक्षकांना वंदन! 📚"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_hindi", category:"world", date:"2026-09-14",
  title:{en:"National Hindi Day",hi:"राष्ट्रीय हिंदी दिवस",mr:"राष्ट्रीय हिंदी दिन"},
  message:{
    en:"🗣️ Happy National Hindi Day!\n\nToday we celebrate the glory of Hindi — our national language.\n\nLet us speak Hindi with pride and promote it everywhere. Hindi connects India.\n\nJai Hindi! 🗣️",
    hi:"🗣️ राष्ट्रीय हिंदी दिवस की शुभकामनाएं!\n\nआज हम हिंदी भाषा के गौरव का उत्सव मनाते हैं — हमारी राष्ट्रभाषा।\n\nगर्व से हिंदी बोलें और हर जगह बढ़ाएं। हिंदी भारत को जोड़ती है।\n\nजय हिंदी! 🗣️",
    mr:"🗣️ राष्ट्रीय हिंदी दिनाच्या शुभेच्छा!\n\nआज हिंदी भाषेचा गौरव साजरा करतो — आपली राष्ट्रभाषा.\n\nअभिमानाने हिंदी बोला आणि सर्वत्र वाढवा. हिंदी भारताला जोडते.\n\nजय हिंदी! 🗣️"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_engineers", category:"world", date:"2026-09-15",
  title:{en:"Engineers' Day",hi:"इंजीनियर्स दिवस",mr:"अभियंता दिन"},
  message:{
    en:"⚙️ Happy Engineers' Day!\n\nToday is the birth anniversary of Bharat Ratna Sir M. Visvesvaraya.\n\nSalute to all engineers who build our nation. Your innovation and dedication are unmatched.\n\nJai Bharat! ⚙️",
    hi:"⚙️ इंजीनियर्स दिवस की शुभकामनाएं!\n\nआज भारत रत्न सर एम. विश्वेश्वरैया की जयंती है।\n\nउन सभी इंजीनियरों को सलाम जो राष्ट्र बनाते हैं। आपका नवाचार बेजोड़ है।\n\nजय भारत! ⚙️",
    mr:"⚙️ अभियंता दिनाच्या शुभेच्छा!\n\nआज भारतरत्न सर एम. विश्वेश्वरैया यांची जयंती.\n\nराष्ट्र घडवणाऱ्या सर्व अभियंत्यांना सलाम. तुमचे नवसंशोधन बेजोड.\n\nजय भारत! ⚙️"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_gandhi", category:"world", date:"2026-10-02",
  title:{en:"Gandhi Jayanti",hi:"गांधी जयंती",mr:"गांधी जयंती"},
  message:{
    en:"🕊️ Happy Gandhi Jayanti!\n\nToday is the birth anniversary of Mahatma Gandhi — the Father of the Nation.\n\nHe taught us non-violence and truth. Let us follow his path of peace and simplicity.\n\nJai Hind! 🕊️",
    hi:"🕊️ गांधी जयंती की शुभकामनाएं!\n\nआज राष्ट्रपिता महात्मा गांधी की जयंती है।\n\nउन्होंने अहिंसा और सत्य सिखाया। उनके शांति और सादगी के मार्ग पर चलें।\n\nजय हिंद! 🕊️",
    mr:"🕊️ गांधी जयंतीच्या शुभेच्छा!\n\nआज राष्ट्रपिता महात्मा गांधी यांची जयंती.\n\nअहिंसा आणि सत्य शिकवले. शांती आणि साधेपणाच्या मार्गावर चालूया.\n\nजय हिंद! 🕊️"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_police_memorial", category:"world", date:"2026-10-21",
  title:{en:"Police Commemoration Day",hi:"पुलिस स्मृति दिवस",mr:"पोलीस स्मृती दिन"},
  message:{
    en:"👮 Police Commemoration Day.\n\nToday we pay tribute to police personnel who sacrificed their lives while protecting us.\n\nTheir courage and sacrifice will always be remembered. Salute to our fallen heroes.\n\nJai Hind! 👮",
    hi:"👮 पुलिस स्मृति दिवस।\n\nआज हम उन पुलिसकर्मियों को श्रद्धांजलि देते हैं जिन्होंने हमारी रक्षा करते हुए जीवन दिया।\n\nउनका साहस और बलिदान सदा याद रहेगा। शहीदों को सलाम।\n\nजय हिंद! 👮",
    mr:"👮 पोलीस स्मृती दिन.\n\nआज ज्यांनी आपल्याचे रक्षण करताना प्राण दिले त्या पोलिसांना श्रद्धांजली.\n\nत्यांचे शौर्य आणि बलिदान सदैव स्मरले जाईल. शहीदांना सलाम.\n\nजय हिंद! 👮"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_unity", category:"world", date:"2026-10-31",
  title:{en:"National Unity Day",hi:"राष्ट्रीय एकता दिवस",mr:"राष्ट्रीय एकता दिन"},
  message:{
    en:"🇮🇳 National Unity Day!\n\nToday is the birth anniversary of Sardar Vallabhbhai Patel — the Iron Man of India.\n\nHe united India. Let us stay united and strong. Unity is our strength.\n\nJai Bharat! 🇮🇳",
    hi:"🇮🇳 राष्ट्रीय एकता दिवस!\n\nआज सरदार वल्लभभाई पटेल — लौह पुरुष की जयंती है।\n\nउन्होंने भारत को एकजुट किया। एकजुट और मजबूत रहें। एकता में शक्ति है।\n\nजय भारत! 🇮🇳",
    mr:"🇮🇳 राष्ट्रीय एकता दिन!\n\nआज सरदार वल्लभभाई पटेल — लोहपुरुष यांची जयंती.\n\nत्यांनी भारत एकत्र केला. एकजूट आणि मजबूत राहा. एकात शक्ती आहे.\n\nजय भारत! 🇮🇳"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_education", category:"world", date:"2026-11-11",
  title:{en:"National Education Day",hi:"राष्ट्रीय शिक्षा दिवस",mr:"राष्ट्रीय शिक्षण दिन"},
  message:{
    en:"📖 National Education Day!\n\nToday is the birth anniversary of Maulana Abul Kalam Azad.\n\nEducation is the foundation of a strong nation. Let us spread education to every corner.\n\nJai Bharat! 📖",
    hi:"📖 राष्ट्रीय शिक्षा दिवस!\n\nआज मौलाना अबुल कलाम आज़ाद की जयंती है।\n\nशिक्षा मजबूत राष्ट्र की नींव है। हर कोने तक शिक्षा पहुँचाएं।\n\nजय भारत! 📖",
    mr:"📖 राष्ट्रीय शिक्षण दिन!\n\nआज मौलाना अबुल कलाम आझाद यांची जयंती.\n\nशिक्षण मजबूत राष्ट्राचा पाया. प्रत्येक कोपऱ्यात शिक्षण पोहोचवा.\n\nजय भारत! 📖"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_constitution", category:"world", date:"2026-11-26",
  title:{en:"Constitution Day",hi:"संविधान दिवस",mr:"संविधान दिन"},
  message:{
    en:"📜 Constitution Day!\n\nToday we celebrate our Constitution — the foundation of our democracy.\n\nOur Constitution gives us rights and duties. Respect it, protect it.\n\nJai Bharat! 📜",
    hi:"📜 संविधान दिवस!\n\nआज हम अपने संविधान का उत्सव मनाते हैं — लोकतंत्र की नींव।\n\nसंविधान हमें अधिकार और कर्तव्य देता है। इसका सम्मान करें, रक्षा करें।\n\nजय भारत! 📜",
    mr:"📜 संविधान दिन!\n\nआज संविधानाचा उत्सव साजरा करतो — लोकशाहीचा पाया.\n\nसंविधान अधिकार आणि कर्तव्ये देते. आदर करा, रक्षण करा.\n\nजय भारत! 📜"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_navy", category:"world", date:"2026-12-04",
  title:{en:"Navy Day",hi:"नौसेना दिवस",mr:"नौदल दिन"},
  message:{
    en:"⚓ Happy Navy Day!\n\nToday we salute the Indian Navy — our guardians at sea.\n\nTheir courage and dedication protect our coasts and waters. We are proud of them.\n\nJai Bharat! ⚓",
    hi:"⚓ नौसेना दिवस की शुभकामनाएं!\n\nआज हम भारतीय नौसेना को सलाम करते हैं — समुद्र के रक्षक।\n\nउनका साहस और निष्ठा हमारे तटों की रक्षा करती है। हमें गर्व है।\n\nजय भारत! ⚓",
    mr:"⚓ नौदल दिनाच्या शुभेच्छा!\n\nआज भारतीय नौदलाला सलाम करतो — समुद्राचे रक्षक.\n\nत्यांचे शौर्य आणि निष्ठा आपल्या किनाऱ्यांचे रक्षण करते. अभिमान वाटतो.\n\nजय भारत! ⚓"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_energy", category:"world", date:"2026-12-14",
  title:{en:"Energy Conservation Day",hi:"ऊर्जा संरक्षण दिवस",mr:"ऊर्जा संवर्धन दिन"},
  message:{
    en:"⚡ National Energy Conservation Day!\n\nToday we pledge to save energy and use it wisely.\n\nSave electricity, save water, save fuel. Small changes create big impact.\n\nSave Energy, Save Future! ⚡",
    hi:"⚡ राष्ट्रीय ऊर्जा संरक्षण दिवस!\n\nआज हम ऊर्जा बचाने और समझदारी से उपयोग करने का संकल्प लेते हैं।\n\nबिजली बचाएं, पानी बचाएं, ईंधन बचाएं। छोटे बदलाव बड़ा असर करते हैं।\n\nऊर्जा बचाओ, भविष्य बचाओ! ⚡",
    mr:"⚡ राष्ट्रीय ऊर्जा संवर्धन दिन!\n\nआज ऊर्जा वाचवण्याचा आणि शहाणपणाने वापरण्याचा संकल्प घेतो.\n\nवीज वाचवा, पाणी वाचवा, इंधन वाचवा. छोटे बदल मोठा परिणाम करतात.\n\nऊर्जा वाचवा, भविष्य वाचवा! ⚡"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_kisan", category:"world", date:"2026-12-23",
  title:{en:"Kisan Diwas",hi:"किसान दिवस",mr:"किसान दिन"},
  message:{
    en:"🌾 Happy Kisan Diwas!\n\nToday is the birth anniversary of former PM Chaudhary Charan Singh.\n\nHeartfelt thanks to all our annadata — the farmers. You are the backbone of our nation.\n\nJai Jawan, Jai Kisan! 🌾",
    hi:"🌾 किसान दिवस की शुभकामनाएं!\n\nआज पूर्व प्रधानमंत्री चौधरी चरण सिंह की जयंती है।\n\nसभी अन्नदाता किसानों को धन्यवाद। आप देश की रीढ़ हैं।\n\nजय जवान, जय किसान! 🌾",
    mr:"🌾 किसान दिनाच्या शुभेच्छा!\n\nआज माजी पंतप्रधान चौधरी चरण सिंह यांची जयंती.\n\nसर्व अन्नदात्या शेतकऱ्यांना आभार. तुम्ही देशाचा कणा आहात.\n\nजय जवान, जय किसान! 🌾"
  }, includeOffer:true, includeSignature:true },

{ id:"nat_voters", category:"world", date:"2026-01-25",
  title:{en:"National Voters' Day",hi:"राष्ट्रीय मतदाता दिवस",mr:"राष्ट्रीय मतदार दिन"},
  message:{
    en:"🗳️ National Voters' Day!\n\nToday we celebrate the power of every voter — the strength of democracy.\n\nYour vote is your voice. Vote wisely and be a responsible citizen.\n\nJai Bharat! 🗳️",
    hi:"🗳️ राष्ट्रीय मतदाता दिवस!\n\nआज हम हर मतदाता की शक्ति का उत्सव मनाते हैं — लोकतंत्र की ताकत।\n\nआपका वोट आपकी आवाज़ है। समझदारी से वोट करें और जिम्मेदार नागरिक बनें।\n\nजय भारत! 🗳️",
    mr:"🗳️ राष्ट्रीय मतदार दिन!\n\nआज प्रत्येक मतदाराच्या शक्तीचा उत्सव साजरा करतो — लोकशाहीची ताकद.\n\nतुमचे मत तुमचा आवाज आहे. शहाणपणाने मत द्या आणि जबाबदार नागरिक व्हा.\n\nजय भारत! 🗳️"
  }, includeOffer:true, includeSignature:true },

{ id:"int_cancer", category:"world", date:"2026-02-04",
  title:{en:"World Cancer Day",hi:"विश्व कैंसर दिवस",mr:"जागतिक कर्करोग दिन"},
  message:{
    en:"🎗️ World Cancer Day!\n\nToday we raise awareness about cancer and support those fighting it.\n\nEarly detection saves lives. Get regular checkups and support the fighters.\n\nWe stand with fighters! 🎗️",
    hi:"🎗️ विश्व कैंसर दिवस!\n\nआज कैंसर के प्रति जागरूकता बढ़ाते हैं और लड़ने वालों का साथ देते हैं।\n\nजल्दी पहचान जीवन बचाती है। नियमित जांच कराएं और लड़ने वालों का साथ दें।\n\nलड़ने वालों के साथ हैं! 🎗️",
    mr:"🎗️ जागतिक कर्करोग दिन!\n\nआज कर्करोगाबद्दल जागरूकता वाढवतो आणि लढणाऱ्यांना आधार देतो.\n\nलवकर ओळख जीव वाचवते. नियमित तपासणी करा आणि साथ द्या.\n\nलढणाऱ्यांसोबत आहोत! 🎗️"
  }, includeOffer:true, includeSignature:true },

{ id:"int_radio", category:"world", date:"2026-02-13",
  title:{en:"World Radio Day",hi:"विश्व रेडियो दिवस",mr:"जागतिक रेडिओ दिन"},
  message:{
    en:"📻 World Radio Day!\n\nToday we celebrate the power of radio — a medium that connects millions.\n\nRadio informs, educates and entertains. Salute to all radio professionals!\n\nHappy World Radio Day! 📻",
    hi:"📻 विश्व रेडियो दिवस!\n\nआज रेडियो की शक्ति का उत्सव मनाते हैं — करोड़ों को जोड़ने वाला माध्यम।\n\nरेडियो सूचित, शिक्षित और मनोरंजन करता है। सभी रेडियो पेशेवरों को सलाम!\n\nविश्व रेडियो दिवस मुबारक! 📻",
    mr:"📻 जागतिक रेडिओ दिन!\n\nआज रेडिओच्या शक्तीचा उत्सव साजरा करतो — कोट्यवधींना जोडणारे माध्यम.\n\nरेडिओ माहिती, शिक्षण आणि मनोरंजन देतो. सर्व रेडिओ व्यावसायिकांना सलाम!\n\nजागतिक रेडिओ दिनाच्या शुभेच्छा! 📻"
  }, includeOffer:true, includeSignature:true },

{ id:"int_women", category:"world", date:"2026-03-08",
  title:{en:"International Women's Day",hi:"अंतर्राष्ट्रीय महिला दिवस",mr:"जागतिक महिला दिन"},
  message:{
    en:"💐 Happy Women's Day!\n\nToday we celebrate the strength, courage and achievements of women everywhere.\n\nThank you for making our world better. You are strong, powerful and unstoppable.\n\nRespect and salute to all women! 💐",
    hi:"💐 महिला दिवस की हार्दिक शुभकामनाएं!\n\nआज दुनिया भर की महिलाओं की ताकत, साहस और उपलब्धियों का जश्न मनाते हैं।\n\nहमारी दुनिया बेहतर बनाने के लिए धन्यवाद। आप मजबूत, शक्तिशाली और अजेय हैं।\n\nसभी महिलाओं को नमन! 💐",
    mr:"💐 जागतिक महिला दिनाच्या हार्दिक शुभेच्छा!\n\nआज जगभरातील महिलांची शक्ती, धैर्य आणि यशाचा उत्सव साजरा करतो.\n\nजग अधिक चांगले बनवल्याबद्दल धन्यवाद. तुम्ही मजबूत, शक्तिशाली आणि अजेय आहात.\n\nसर्व महिलांना नमन! 💐"
  }, includeOffer:true, includeSignature:true },

{ id:"int_consumer", category:"world", date:"2026-03-15",
  title:{en:"World Consumer Rights Day",hi:"विश्व उपभोक्ता अधिकार दिवस",mr:"जागतिक ग्राहक हक्क दिन"},
  message:{
    en:"🛡️ World Consumer Rights Day!\n\nToday we raise awareness about consumer rights.\n\nKnow your rights, raise your voice against unfair practices. Every consumer deserves justice.\n\nBe an aware consumer! 🛡️",
    hi:"🛡️ विश्व उपभोक्ता अधिकार दिवस!\n\nआज उपभोक्ता अधिकारों के प्रति जागरूकता बढ़ाते हैं।\n\nअपने अधिकार जानें, अन्याय के खिलाफ आवाज उठाएं। हर उपभोक्ता को न्याय मिले।\n\nजागरूक उपभोक्ता बनें! 🛡️",
    mr:"🛡️ जागतिक ग्राहक हक्क दिन!\n\nआज ग्राहक हक्कांबद्दल जागरूकता वाढवतो.\n\nतुमचे हक्क जाणून घ्या, अन्यायाविरुद्ध आवाज उठवा. प्रत्येक ग्राहकाला न्याय मिळो.\n\nजागरूक ग्राहक व्हा! 🛡️"
  }, includeOffer:true, includeSignature:true },

{ id:"int_water", category:"world", date:"2026-03-22",
  title:{en:"World Water Day",hi:"विश्व जल दिवस",mr:"जागतिक जल दिन"},
  message:{
    en:"💧 World Water Day!\n\nToday we pledge to save water and use it wisely.\n\nWater is life. Every drop counts. Save water for the future generation.\n\nSave Water, Save Life! 💧",
    hi:"💧 विश्व जल दिवस!\n\nआज हम पानी बचाने और समझदारी से उपयोग करने का संकल्प लेते हैं।\n\nपानी जीवन है। हर बूंद कीमती है। भविष्य के लिए पानी बचाएं।\n\nपानी बचाओ, जीवन बचाओ! 💧",
    mr:"💧 जागतिक जल दिन!\n\nआज पाणी वाचवण्याचा आणि शहाणपणाने वापरण्याचा संकल्प घेतो.\n\nपाणी म्हणजे जीवन. प्रत्येक थेंब मौल्यवान. पुढच्या पिढीसाठी पाणी वाचवा.\n\nपाणी वाचवा, जीवन वाचवा! 💧"
  }, includeOffer:true, includeSignature:true },

{ id:"int_health", category:"world", date:"2026-04-07",
  title:{en:"World Health Day",hi:"विश्व स्वास्थ्य दिवस",mr:"जागतिक आरोग्य दिन"},
  message:{
    en:"💚 World Health Day!\n\nToday we celebrate the importance of health and well-being.\n\nHealth is wealth. Eat well, exercise regularly and take care of yourself.\n\nStay Healthy, Stay Happy! 💚",
    hi:"💚 विश्व स्वास्थ्य दिवस!\n\nआज हम स्वास्थ्य और कल्याण के महत्व का उत्सव मनाते हैं।\n\nस्वास्थ्य ही संपत्ति है। अच्छा खाएं, व्यायाम करें और अपना ख्याल रखें।\n\nस्वस्थ रहें, खुश रहें! 💚",
    mr:"💚 जागतिक आरोग्य दिन!\n\nआज आरोग्य आणि निरोगीपणाच्या महत्त्वाचा उत्सव साजरा करतो.\n\nआरोग्य हीच संपत्ती. चांगले खा, व्यायाम करा आणि काळजी घ्या.\n\nनिरोगी राहा, आनंदी राहा! 💚"
  }, includeOffer:true, includeSignature:true },

{ id:"int_earth", category:"world", date:"2026-04-22",
  title:{en:"World Earth Day",hi:"विश्व पृथ्वी दिवस",mr:"जागतिक पृथ्वी दिन"},
  message:{
    en:"🌍 World Earth Day!\n\nToday we pledge to protect our Mother Earth.\n\nPlant trees, save water, reduce pollution. Earth is our only home — protect it.\n\nSave Earth, Save Life! 🌍",
    hi:"🌍 विश्व पृथ्वी दिवस!\n\nआज हम माता पृथ्वी की रक्षा करने का संकल्प लेते हैं।\n\nपेड़ लगाएं, पानी बचाएं, प्रदूषण कम करें। पृथ्वी ही हमारा घर है — बचाएं।\n\nपृथ्वी बचाओ, जीवन बचाओ! 🌍",
    mr:"🌍 जागतिक पृथ्वी दिन!\n\nआज माता पृथ्वीचे रक्षण करण्याचा संकल्प घेतो.\n\nझाडे लावा, पाणी वाचवा, प्रदूषण कमी करा. पृथ्वी हेच घर — वाचवा.\n\nपृथ्वी वाचवा, जीवन वाचवा! 🌍"
  }, includeOffer:true, includeSignature:true },

{ id:"int_book", category:"world", date:"2026-04-23",
  title:{en:"World Book Day",hi:"विश्व पुस्तक दिवस",mr:"जागतिक पुस्तक दिन"},
  message:{
    en:"📖 World Book Day!\n\nToday we celebrate the joy of reading and the power of books.\n\nBooks are our best friends. Read daily, learn always. A reader is a leader.\n\nHappy Reading! 📖",
    hi:"📖 विश्व पुस्तक दिवस!\n\nआज हम पढ़ने के आनंद और पुस्तकों की शक्ति का उत्सव मनाते हैं।\n\nकिताबें सबसे अच्छी मित्र हैं। रोज़ पढ़ें, हमेशा सीखें। पाठक ही नेता बनता है।\n\nशुभ पठन! 📖",
    mr:"📖 जागतिक पुस्तक दिन!\n\nआज वाचनाचा आनंद आणि पुस्तकांची शक्ती साजरी करतो.\n\nपुस्तके सर्वोत्तम मित्र. दररोज वाचा, नेहमी शिका. वाचकच नेता बनतो.\n\nशुभ वाचन! 📖"
  }, includeOffer:true, includeSignature:true },

{ id:"int_labour", category:"world", date:"2026-05-01",
  title:{en:"World Labour Day",hi:"विश्व मजदूर दिवस",mr:"जागतिक कामगार दिन"},
  message:{
    en:"🛠️ Happy Labour Day!\n\nToday we salute all workers who build our nation with their hard work.\n\nYour dedication and labour are the backbone of our progress. Respect every worker.\n\nSalute to workers! 🛠️",
    hi:"🛠️ मजदूर दिवस की शुभकामनाएं!\n\nआज उन सभी श्रमिकों को सलाम करते हैं जो अपनी मेहनत से राष्ट्र बनाते हैं।\n\nआपकी निष्ठा और श्रम प्रगति का आधार है। हर श्रमिक का सम्मान करें।\n\nश्रमिकों को सलाम! 🛠️",
    mr:"🛠️ कामगार दिनाच्या शुभेच्छा!\n\nआज जे कष्टाने राष्ट्र घडवतात त्या सर्व कामगारांना सलाम करतो.\n\nतुमची निष्ठा आणि श्रम प्रगतीचा आधार. प्रत्येक कामगाराचा आदर करा.\n\nकामगारांना सलाम! 🛠️"
  }, includeOffer:true, includeSignature:true },

{ id:"int_redcross", category:"world", date:"2026-05-08",
  title:{en:"World Red Cross Day",hi:"विश्व रेड क्रॉस दिवस",mr:"जागतिक रेड क्रॉस दिन"},
  message:{
    en:"🩸 World Red Cross Day!\n\nToday we honour the Red Cross and its humanitarian work worldwide.\n\nTheir service saves lives. Let us support humanitarian causes and help those in need.\n\nSalute to Red Cross! 🩸",
    hi:"🩸 विश्व रेड क्रॉस दिवस!\n\nआज रेड क्रॉस और दुनिया भर में मानवीय कार्य का सम्मान करते हैं।\n\nउनकी सेवा जीवन बचाती है। मानवीय कार्यों का साथ दें और जरूरतमंदों की मदद करें।\n\nरेड क्रॉस को सलाम! 🩸",
    mr:"🩸 जागतिक रेड क्रॉस दिन!\n\nआज रेड क्रॉस आणि जगभरातील मानवतावादी कार्याचा सन्मान करतो.\n\nत्यांची सेवा जीव वाचवते. मानवतावादी कार्यांना आधार द्या आणि गरजूंना मदत करा.\n\nरेड क्रॉसला सलाम! 🩸"
  }, includeOffer:true, includeSignature:true },

{ id:"int_mothers", category:"world", date:"2026-05-10",
  title:{en:"Mother's Day",hi:"मातृ दिवस",mr:"मातृ दिन"},
  message:{
    en:"💐 Happy Mother's Day!\n\nToday we celebrate the most special person in our lives — our mother.\n\nThank you Maa for everything. Your love, care and sacrifice are unmatched. You are our world.\n\nWe love you, Maa! 💐",
    hi:"💐 मातृ दिवस की शुभकामनाएं!\n\nआज हम अपने जीवन की सबसे खास व्यक्ति — मां का उत्सव मनाते हैं।\n\nमां, सब कुछ के लिए धन्यवाद। आपका प्यार, देखभाल और त्याग बेजोड़ है। आप हमारी दुनिया हैं।\n\nहम आपसे प्यार करते हैं, मां! 💐",
    mr:"💐 मातृ दिनाच्या हार्दिक शुभेच्छा!\n\nआज आयुष्यातील सर्वात खास व्यक्ती — आईचा उत्सव साजरा करतो.\n\nआई, सर्वासाठी धन्यवाद. तुझे प्रेम, काळजी आणि त्याग बेजोड. तू आमचे जग आहेस.\n\nआम्ही तुझ्यावर प्रेम करतो, आई! 💐"
  }, includeOffer:true, includeSignature:true },

{ id:"int_tobacco", category:"world", date:"2026-05-31",
  title:{en:"World No Tobacco Day",hi:"विश्व तंबाकू निषेध दिवस",mr:"जागतिक तंबाखू निषेध दिन"},
  message:{
    en:"🚭 World No Tobacco Day!\n\nToday we spread awareness against tobacco use.\n\nTobacco kills. Say no to tobacco and yes to life. Protect yourself and your family.\n\nSay No to Tobacco! 🚭",
    hi:"🚭 विश्व तंबाकू निषेध दिवस!\n\nआज तंबाकू के खिलाफ जागरूकता फैलाते हैं।\n\nतंबाकू जान लेता है। तंबाकू को ना कहें, जीवन को हां कहें। अपनी और परिवार की रक्षा करें।\n\nतंबाकू को ना कहें! 🚭",
    mr:"🚭 जागतिक तंबाखू निषेध दिन!\n\nआज तंबाखूविरुद्ध जागरूकता पसरवतो.\n\nतंबाखू जीव घेते. तंबाखूला ना म्हणा, जीवनाला हो म्हणा. स्वतःचे आणि कुटुंबाचे रक्षण करा.\n\nतंबाखूला ना म्हणा! 🚭"
  }, includeOffer:true, includeSignature:true },

{ id:"int_environment", category:"world", date:"2026-06-05",
  title:{en:"World Environment Day",hi:"विश्व पर्यावरण दिवस",mr:"जागतिक पर्यावरण दिन"},
  message:{
    en:"🌳 World Environment Day!\n\nToday we pledge to protect our environment.\n\nPlant trees, save water, reduce pollution. A green environment is our future.\n\nSave Environment, Save Life! 🌳",
    hi:"🌳 विश्व पर्यावरण दिवस!\n\nआज हम पर्यावरण की रक्षा का संकल्प लेते हैं।\n\nपेड़ लगाएं, पानी बचाएं, प्रदूषण कम करें। हरा पर्यावरण हमारा भविष्य है।\n\nपर्यावरण बचाओ, जीवन बचाओ! 🌳",
    mr:"🌳 जागतिक पर्यावरण दिन!\n\nआज पर्यावरणाचे रक्षण करण्याचा संकल्प घेतो.\n\nझाडे लावा, पाणी वाचवा, प्रदूषण कमी करा. हिरवे पर्यावरण हेच भविष्य.\n\nपर्यावरण वाचवा, जीवन वाचवा! 🌳"
  }, includeOffer:true, includeSignature:true },

{ id:"int_blood", category:"world", date:"2026-06-14",
  title:{en:"World Blood Donor Day",hi:"विश्व रक्तदाता दिवस",mr:"जागतिक रक्तदाता दिन"},
  message:{
    en:"🩸 World Blood Donor Day!\n\nToday we thank all blood donors who save lives with their donation.\n\nDonate blood, save lives. One donation can save up to three lives.\n\nBe a hero, donate blood! 🩸",
    hi:"🩸 विश्व रक्तदाता दिवस!\n\nआज उन सभी रक्तदाताओं को धन्यवाद जो अपने दान से जीवन बचाते हैं।\n\nरक्त दान करें, जीवन बचाएं। एक दान तीन जीवन बचा सकता है।\n\nहीरो बनें, रक्तदान करें! 🩸",
    mr:"🩸 जागतिक रक्तदाता दिन!\n\nआज जे रक्तदानाने जीव वाचवतात त्या सर्व रक्तदात्यांना धन्यवाद.\n\nरक्तदान करा, जीव वाचवा. एक दान तीन जीव वाचवू शकते.\n\nहिरो व्हा, रक्तदान करा! 🩸"
  }, includeOffer:true, includeSignature:true },

{ id:"int_fathers", category:"world", date:"2026-06-21",
  title:{en:"Father's Day",hi:"पितृ दिवस",mr:"पितृ दिन"},
  message:{
    en:"👨 Happy Father's Day!\n\nToday we celebrate our father — our first hero and guide.\n\nThank you Papa for your love, guidance and support. You are our strength and inspiration.\n\nWe love you, Papa! 👨",
    hi:"👨 पितृ दिवस की शुभकामनाएं!\n\nआज हम अपने पिता का उत्सव मनाते हैं — हमारे पहले हीरो और मार्गदर्शक।\n\nपापा, आपके प्यार, मार्गदर्शन और सहयोग के लिए धन्यवाद। आप हमारी ताकत हैं।\n\nहम आपसे प्यार करते हैं, पापा! 👨",
    mr:"👨 पितृ दिनाच्या हार्दिक शुभेच्छा!\n\nआज वडिलांचा उत्सव साजरा करतो — पहिला हिरो आणि मार्गदर्शक.\n\nबाबा, तुमच्या प्रेम, मार्गदर्शन आणि आधाराबद्दल धन्यवाद. तुम्ही आमची ताकद आहात.\n\nआम्ही तुमच्यावर प्रेम करतो, बाबा! 👨"
  }, includeOffer:true, includeSignature:true },

{ id:"int_yoga", category:"world", date:"2026-06-21",
  title:{en:"International Yoga Day",hi:"अंतर्राष्ट्रीय योग दिवस",mr:"जागतिक योग दिन"},
  message:{
    en:"🧘 Happy International Yoga Day!\n\nYoga brings peace, health and harmony to body and mind.\n\nEmbrace this ancient Indian practice for a better life. A few minutes of yoga daily can change your life.\n\nHealthy body, peaceful mind! 🧘",
    hi:"🧘 अंतर्राष्ट्रीय योग दिवस की शुभकामनाएं!\n\nयोग शरीर और मन को शांति, स्वास्थ्य और सामंजस्य देता है।\n\nबेहतर जीवन के लिए इस प्राचीन भारतीय अभ्यास को अपनाएं। रोज़ कुछ मिनट का योग जीवन बदल सकता है।\n\nस्वस्थ शरीर, शांत मन! 🧘",
    mr:"🧘 जागतिक योग दिनाच्या शुभेच्छा!\n\nयोग शरीर आणि मनाला शांती, आरोग्य आणि सुसंवाद देतो.\n\nचांगल्या जीवनासाठी या प्राचीन भारतीय पद्धतीचा अवलंब करा. काही मिनिटांचा योग जीवन बदलू शकतो.\n\nनिरोगी शरीर, शांत मन! 🧘"
  }, includeOffer:true, includeSignature:true },

{ id:"int_population", category:"world", date:"2026-07-11",
  title:{en:"World Population Day",hi:"विश्व जनसंख्या दिवस",mr:"जागतिक लोकसंख्या दिन"},
  message:{
    en:"👥 World Population Day!\n\nToday we raise awareness about population issues and family planning.\n\nSmall family, happy family. Let us work towards sustainable development.\n\nBalanced population, better future! 👥",
    hi:"👥 विश्व जनसंख्या दिवस!\n\nआज जनसंख्या के मुद्दों और परिवार नियोजन पर जागरूकता बढ़ाते हैं।\n\nछोटा परिवार, सुखी परिवार। सतत विकास की दिशा में काम करें।\n\nसंतुलित जनसंख्या, बेहतर भविष्य! 👥",
    mr:"👥 जागतिक लोकसंख्या दिन!\n\nआज लोकसंख्या आणि कुटुंब नियोजनाबद्दल जागरूकता वाढवतो.\n\nछोटे कुटुंब, आनंदी कुटुंब. शाश्वत विकासासाठी काम करा.\n\nसंतुलित लोकसंख्या, चांगले भविष्य! 👥"
  }, includeOffer:true, includeSignature:true },

{ id:"int_tiger", category:"world", date:"2026-07-29",
  title:{en:"World Tiger Day",hi:"विश्व बाघ दिवस",mr:"जागतिक वाघ दिन"},
  message:{
    en:"🐯 World Tiger Day!\n\nToday we pledge to protect our tigers — the pride of India.\n\nSave tigers, save forests. Tigers are an important part of our ecosystem.\n\nSave Tigers, Save Nature! 🐯",
    hi:"🐯 विश्व बाघ दिवस!\n\nआज हम बाघों की रक्षा का संकल्प लेते हैं — भारत का गौरव।\n\nबाघ बचाओ, जंगल बचाओ। बाघ पारिस्थितिकी तंत्र का अहम हिस्सा हैं।\n\nबाघ बचाओ, प्रकृति बचाओ! 🐯",
    mr:"🐯 जागतिक वाघ दिन!\n\nआज वाघांचे रक्षण करण्याचा संकल्प घेतो — भारताचा अभिमान.\n\nवाघ वाचवा, जंगल वाचवा. वाघ पर्यावरणाचा महत्त्वाचा भाग.\n\nवाघ वाचवा, निसर्ग वाचवा! 🐯"
  }, includeOffer:true, includeSignature:true },

{ id:"int_friendship", category:"world", date:"2026-07-30",
  title:{en:"Friendship Day",hi:"मित्रता दिवस",mr:"मैत्री दिन"},
  message:{
    en:"🤝 Happy Friendship Day!\n\nToday we celebrate the gift of friendship.\n\nThank you for being a wonderful friend. Your support and love mean the world to me.\n\nHappy Friendship Day! 🤝",
    hi:"🤝 मित्रता दिवस की शुभकामनाएं!\n\nआज हम दोस्ती के तोहफे का उत्सव मनाते हैं।\n\nशानदार दोस्त होने के लिए धन्यवाद। आपका सहयोग और प्यार मेरे लिए सब कुछ है।\n\nमित्रता दिवस मुबारक! 🤝",
    mr:"🤝 मैत्री दिनाच्या हार्दिक शुभेच्छा!\n\nआज मैत्रीच्या देणगीचा उत्सव साजरा करतो.\n\nअप्रतिम मित्र असल्याबद्दल धन्यवाद. तुमचा आधार आणि प्रेम सर्वस्व आहे.\n\nमैत्री दिनाच्या शुभेच्छा! 🤝"
  }, includeOffer:true, includeSignature:true },

{ id:"int_photography", category:"world", date:"2026-08-19",
  title:{en:"World Photography Day",hi:"विश्व फोटोग्राफी दिवस",mr:"जागतिक छायाचित्रण दिन"},
  message:{
    en:"📸 World Photography Day!\n\nToday we celebrate the art of photography and its magic.\n\nPhotographs capture memories forever. Salute to all photographers!\n\nHappy World Photography Day! 📸",
    hi:"📸 विश्व फोटोग्राफी दिवस!\n\nआज हम फोटोग्राफी की कला और उसके जादू का उत्सव मनाते हैं।\n\nतस्वीरें यादें हमेशा कैद करती हैं। सभी फोटोग्राफरों को सलाम!\n\nविश्व फोटोग्राफी दिवस मुबारक! 📸",
    mr:"📸 जागतिक छायाचित्रण दिन!\n\nआज छायाचित्रणाची कला आणि जादू साजरी करतो.\n\nफोटो आठवणी कायम टिकवतात. सर्व छायाचित्रकारांना सलाम!\n\nजागतिक छायाचित्रण दिनाच्या शुभेच्छा! 📸"
  }, includeOffer:true, includeSignature:true },

{ id:"int_senior", category:"world", date:"2026-08-21",
  title:{en:"World Senior Citizen Day",hi:"विश्व वरिष्ठ नागरिक दिवस",mr:"जागतिक ज्येष्ठ नागरिक दिन"},
  message:{
    en:"👴 World Senior Citizen Day!\n\nToday we honour our elders — the pillars of our family and society.\n\nRespect them, care for them, learn from them. Their experience is priceless.\n\nRespect elders! 👴",
    hi:"👴 विश्व वरिष्ठ नागरिक दिवस!\n\nआज हम अपने बड़ों का सम्मान करते हैं — परिवार और समाज के स्तंभ।\n\nउनका सम्मान करें, देखभाल करें, उनसे सीखें। उनका अनुभव अनमोल है।\n\nबड़ों का सम्मान करें! 👴",
    mr:"👴 जागतिक ज्येष्ठ नागरिक दिन!\n\nआज आपल्या ज्येष्ठांचा सन्मान करतो — कुटुंब आणि समाजाचे स्तंभ.\n\nत्यांचा आदर करा, काळजी घ्या, त्यांच्याकडून शिका. अनुभव अनमोल.\n\nज्येष्ठांचा सन्मान करा! 👴"
  }, includeOffer:true, includeSignature:true },

{ id:"int_literacy", category:"world", date:"2026-09-08",
  title:{en:"World Literacy Day",hi:"विश्व साक्षरता दिवस",mr:"जागतिक साक्षरता दिन"},
  message:{
    en:"📖 World Literacy Day!\n\nToday we pledge to spread literacy and education.\n\nLiteracy is a fundamental right. Let us ensure every person can read and write.\n\nEducate, Empower! 📖",
    hi:"📖 विश्व साक्षरता दिवस!\n\nआज हम साक्षरता और शिक्षा फैलाने का संकल्प लेते हैं।\n\nसाक्षरता मूलभूत अधिकार है। हर व्यक्ति पढ़-लिख सके, यह सुनिश्चित करें।\n\nशिक्षित करें, सशक्त करें! 📖",
    mr:"📖 जागतिक साक्षरता दिन!\n\nआज साक्षरता आणि शिक्षण पसरवण्याचा संकल्प घेतो.\n\nसाक्षरता हा मूलभूत हक्क. प्रत्येकजण वाचू-लिहू शकेल याची खात्री करा.\n\nशिक्षित करा, सशक्त करा! 📖"
  }, includeOffer:true, includeSignature:true },

{ id:"int_tourism", category:"world", date:"2026-09-27",
  title:{en:"World Tourism Day",hi:"विश्व पर्यटन दिवस",mr:"जागतिक पर्यटन दिन"},
  message:{
    en:"✈️ World Tourism Day!\n\nToday we celebrate the joy of travel and tourism.\n\nTravel opens minds, creates memories. Explore India, explore the world.\n\nTravel more, live more! ✈️",
    hi:"✈️ विश्व पर्यटन दिवस!\n\nआज हम यात्रा और पर्यटन के आनंद का उत्सव मनाते हैं।\n\nयात्रा मन खोलती है, यादें बनाती है। भारत घूमें, दुनिया घूमें।\n\nघूमें ज़्यादा, जिएं ज़्यादा! ✈️",
    mr:"✈️ जागतिक पर्यटन दिन!\n\nआज प्रवास आणि पर्यटनाचा आनंद साजरा करतो.\n\nप्रवास मन उघडतो, आठवणी घडवतो. भारत फिरा, जग फिरा.\n\nजास्त फिरा, जास्त जगा! ✈️"
  }, includeOffer:true, includeSignature:true },

{ id:"int_heart", category:"world", date:"2026-09-29",
  title:{en:"World Heart Day",hi:"विश्व हृदय दिवस",mr:"जागतिक हृदय दिन"},
  message:{
    en:"❤️ World Heart Day!\n\nToday we raise awareness about heart health.\n\nEat healthy, exercise daily, avoid stress. A healthy heart means a healthy life.\n\nTake care of your heart! ❤️",
    hi:"❤️ विश्व हृदय दिवस!\n\nआज हृदय स्वास्थ्य पर जागरूकता बढ़ाते हैं।\n\nस्वस्थ खाएं, रोज व्यायाम करें, तनाव से बचें। स्वस्थ हृदय, स्वस्थ जीवन।\n\nअपने हृदय का ख्याल रखें! ❤️",
    mr:"❤️ जागतिक हृदय दिन!\n\nआज हृदय आरोग्याबद्दल जागरूकता वाढवतो.\n\nनिरोगी खा, दररोज व्यायाम करा, तणाव टाळा. निरोगी हृदय, निरोगी जीवन.\n\nहृदयाची काळजी घ्या! ❤️"
  }, includeOffer:true, includeSignature:true },

{ id:"int_animal", category:"world", date:"2026-10-04",
  title:{en:"World Animal Day",hi:"विश्व पशु दिवस",mr:"जागतिक प्राणी दिन"},
  message:{
    en:"🐾 World Animal Day!\n\nToday we pledge to protect and care for all animals.\n\nAnimals deserve love, respect and care. Be kind to every creature.\n\nBe Kind to Animals! 🐾",
    hi:"🐾 विश्व पशु दिवस!\n\nआज हम सभी जानवरों की रक्षा और देखभाल का संकल्प लेते हैं।\n\nजानवर प्यार, सम्मान और देखभाल के हकदार हैं। हर जीव के प्रति दयालु बनें।\n\nजानवरों के प्रति दयालु बनें! 🐾",
    mr:"🐾 जागतिक प्राणी दिन!\n\nआज सर्व प्राण्यांचे रक्षण आणि काळजी घेण्याचा संकल्प घेतो.\n\nप्राणी प्रेम, आदर आणि काळजीचे हक्कदार. प्रत्येक जीवाशी दयाळू व्हा.\n\nप्राण्यांशी दयाळू व्हा! 🐾"
  }, includeOffer:true, includeSignature:true },

{ id:"int_mental_health", category:"world", date:"2026-10-10",
  title:{en:"World Mental Health Day",hi:"विश्व मानसिक स्वास्थ्य दिवस",mr:"जागतिक मानसिक आरोग्य दिन"},
  message:{
    en:"🧠 World Mental Health Day!\n\nToday we raise awareness about mental health.\n\nMental health matters. Talk about it, seek help if needed. You are not alone.\n\nTake care of your mind! 🧠",
    hi:"🧠 विश्व मानसिक स्वास्थ्य दिवस!\n\nआज मानसिक स्वास्थ्य पर जागरूकता बढ़ाते हैं।\n\nमानसिक स्वास्थ्य महत्वपूर्ण है। इस पर बात करें, ज़रूरत हो तो मदद लें। आप अकेले नहीं हैं।\n\nअपने मन का ख्याल रखें! 🧠",
    mr:"🧠 जागतिक मानसिक आरोग्य दिन!\n\nआज मानसिक आरोग्याबद्दल जागरूकता वाढवतो.\n\nमानसिक आरोग्य महत्त्वाचे. याबद्दल बोला, गरज असल्यास मदत घ्या. तुम्ही एकटे नाही.\n\nमनाची काळजी घ्या! 🧠"
  }, includeOffer:true, includeSignature:true },

{ id:"int_food", category:"world", date:"2026-10-16",
  title:{en:"World Food Day",hi:"विश्व खाद्य दिवस",mr:"जागतिक अन्न दिन"},
  message:{
    en:"🍛 World Food Day!\n\nToday we raise awareness about hunger and food security.\n\nFood is a basic right. Don't waste food. Help those in need.\n\nZero Hunger, Better World! 🍛",
    hi:"🍛 विश्व खाद्य दिवस!\n\nआज भूख और खाद्य सुरक्षा पर जागरूकता बढ़ाते हैं।\n\nभोजन मूलभूत अधिकार है। खाना बर्बाद न करें। जरूरतमंदों की मदद करें।\n\nशून्य भूख, बेहतर दुनिया! 🍛",
    mr:"🍛 जागतिक अन्न दिन!\n\nआज भुके आणि अन्न सुरक्षेबद्दल जागरूकता वाढवतो.\n\nअन्न हा मूलभूत हक्क. अन्न वाया घालवू नका. गरजूंना मदत करा.\n\nशून्य भुके, चांगले जग! 🍛"
  }, includeOffer:true, includeSignature:true },

{ id:"int_diabetes", category:"world", date:"2026-11-14",
  title:{en:"World Diabetes Day",hi:"विश्व मधुमेह दिवस",mr:"जागतिक मधुमेह दिन"},
  message:{
    en:"💙 World Diabetes Day!\n\nToday we raise awareness about diabetes prevention and care.\n\nEat healthy, exercise daily, get regular checkups. Prevention is better than cure.\n\nStay Healthy! 💙",
    hi:"💙 विश्व मधुमेह दिवस!\n\nआज मधुमेह की रोकथाम और देखभाल पर जागरूकता बढ़ाते हैं।\n\nस्वस्थ खाएं, रोज व्यायाम करें, नियमित जांच कराएं। बचाव इलाज से बेहतर है।\n\nस्वस्थ रहें! 💙",
    mr:"💙 जागतिक मधुमेह दिन!\n\nआज मधुमेह प्रतिबंध आणि काळजीबद्दल जागरूकता वाढवतो.\n\nनिरोगी खा, दररोज व्यायाम करा, नियमित तपासणी करा. प्रतिबंध उपचारापेक्षा चांगला.\n\nनिरोगी राहा! 💙"
  }, includeOffer:true, includeSignature:true },

{ id:"int_children", category:"world", date:"2026-11-20",
  title:{en:"World Children's Day",hi:"विश्व बाल दिवस",mr:"जागतिक बाल दिन"},
  message:{
    en:"👶 World Children's Day!\n\nToday we celebrate children — the future of our world.\n\nProtect them, educate them, love them. Every child deserves a happy childhood.\n\nChildren are our future! 👶",
    hi:"👶 विश्व बाल दिवस!\n\nआज हम बच्चों का उत्सव मनाते हैं — दुनिया का भविष्य।\n\nउनकी रक्षा करें, शिक्षित करें, प्यार करें। हर बच्चा खुशहाल बचपन का हकदार है।\n\nबच्चे हमारा भविष्य हैं! 👶",
    mr:"👶 जागतिक बाल दिन!\n\nआज मुलांचा उत्सव साजरा करतो — जगाचे भविष्य.\n\nत्यांचे रक्षण करा, शिक्षित करा, प्रेम करा. प्रत्येक मुलगा आनंदी बालपणाचा हक्कदार.\n\nमुले आपले भविष्य! 👶"
  }, includeOffer:true, includeSignature:true },

{ id:"int_aids", category:"world", date:"2026-12-01",
  title:{en:"World AIDS Day",hi:"विश्व एड्स दिवस",mr:"जागतिक एड्स दिन"},
  message:{
    en:"🎗️ World AIDS Day!\n\nToday we raise awareness about HIV/AIDS and support those affected.\n\nSpread awareness, not stigma. Support the fighters, not discrimination.\n\nWe stand with fighters! 🎗️",
    hi:"🎗️ विश्व एड्स दिवस!\n\nआज HIV/AIDS पर जागरूकता बढ़ाते हैं और प्रभावित लोगों का साथ देते हैं।\n\nजागरूकता बढ़ाएं, भेदभाव नहीं। लड़ने वालों का साथ दें, भेदभाव नहीं।\n\nलड़ने वालों के साथ हैं! 🎗️",
    mr:"🎗️ जागतिक एड्स दिन!\n\nआज HIV/AIDS बद्दल जागरूकता वाढवतो आणि प्रभावितांना आधार देतो.\n\nजागरूकता वाढवा, भेदभाव नको. लढणाऱ्यांना साथ द्या.\n\nलढणाऱ्यांसोबत आहोत! 🎗️"
  }, includeOffer:true, includeSignature:true },

{ id:"int_computer", category:"world", date:"2026-12-02",
  title:{en:"World Computer Literacy Day",hi:"विश्व कंप्यूटर साक्षरता दिवस",mr:"जागतिक संगणक साक्षरता दिन"},
  message:{
    en:"💻 World Computer Literacy Day!\n\nToday we pledge to spread computer literacy.\n\nDigital skills are essential today. Let us make everyone computer literate.\n\nDigital India, Educated India! 💻",
    hi:"💻 विश्व कंप्यूटर साक्षरता दिवस!\n\nआज हम कंप्यूटर साक्षरता फैलाने का संकल्प लेते हैं।\n\nडिजिटल कौशल आज जरूरी है। सबको कंप्यूटर साक्षर बनाएं।\n\nडिजिटल इंडिया, शिक्षित भारत! 💻",
    mr:"💻 जागतिक संगणक साक्षरता दिन!\n\nआज संगणक साक्षरता पसरवण्याचा संकल्प घेतो.\n\nडिजिटल कौशल्य आज आवश्यक. सर्वांना संगणक साक्षर करा.\n\nडिजिटल इंडिया, शिक्षित भारत! 💻"
  }, includeOffer:true, includeSignature:true },

{ id:"int_human_rights", category:"world", date:"2026-12-10",
  title:{en:"Human Rights Day",hi:"मानवाधिकार दिवस",mr:"मानवाधिकार दिन"},
  message:{
    en:"🕊️ Human Rights Day!\n\nToday we pledge to respect and protect human rights.\n\nEvery human deserves dignity, equality and freedom. Stand for human rights.\n\nHuman Rights for All! 🕊️",
    hi:"🕊️ मानवाधिकार दिवस!\n\nआज हम मानवाधिकारों का सम्मान और रक्षा करने का संकल्प लेते हैं।\n\nहर इंसान गरिमा, समानता और स्वतंत्रता का हकदार है। मानवाधिकारों के लिए खड़े हों।\n\nसबके लिए मानवाधिकार! 🕊️",
    mr:"🕊️ मानवाधिकार दिन!\n\nआज मानवाधिकारांचा आदर आणि रक्षण करण्याचा संकल्प घेतो.\n\nप्रत्येक माणूस प्रतिष्ठा, समानता आणि स्वातंत्र्याचा हक्कदार. मानवाधिकारांसाठी उभे राहा.\n\nसर्वांसाठी मानवाधिकार! 🕊️"
  }, includeOffer:true, includeSignature:true }

];
