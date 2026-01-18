export interface TarotCard {
    id: number;
    name: string;
    nameVi: string;
    meanUp: string; // Vietnamese Meaning (Advice/Energy)
    meanUpEn: string; // English Meaning (Advice/Energy)
    image: string;
}

export const TAROT_DECK: TarotCard[] = [
    // MAJOR ARCANA
    {
        id: 0,
        name: "The Fool",
        nameVi: "Chàng Khờ",
        meanUp: "Năng lượng bên trong bạn đang khao khát một sự tự do tuyệt đối. Bạn đang đứng trước một trang vở trắng tinh của cuộc đời và trực giác mách bảo hãy cứ dấn thân dù chưa biết đích đến. Đừng để nỗi sợ hãi về những rủi ro kìm hãm đôi chân bạn; niềm tin ngây thơ và thuần khiết chính là sức mạnh lớn nhất lúc này. Vũ trụ đang mời gọi bạn thực hiện một cú nhảy của niềm tin.",
        meanUpEn: "Your inner energy is craving absolute freedom. You are standing before a blank page of life, and intuition tells you to leap even without knowing the destination. Do not let the fear of risks hold you back; your innocent and pure faith is your greatest strength right now. The universe is inviting you to take a leap of faith.",
        image: "/tarot-images/The fool.jpg"
    },
    {
        id: 1,
        name: "The Magician",
        nameVi: "Ảo Thuật Gia",
        meanUp: "Bạn đang sở hữu một nguồn lực nội tại mạnh mẽ hơn bạn nghĩ. Tất cả những công cụ, kỹ năng và nguồn cảm hứng cần thiết để hiện thực hóa ước mơ đều đã nằm trong tay bạn. Đây không phải lúc để chờ đợi phép màu từ bên ngoài, mà là lúc để bạn tự mình kiến tạo phép màu. Hãy tập trung ý chí, kết nối những mảnh ghép rời rạc và biến ý tưởng thành hiện thực.",
        meanUpEn: "You possess a stronger internal resource than you think. All the tools, skills, and inspiration needed to manifest your dreams are already in your hands. This is not the time to wait for external miracles, but to create them yourself. Focus your will, connect the scattered pieces, and turn your ideas into reality.",
        image: "/tarot-images/magician.jpg"
    },
    {
        id: 2,
        name: "The High Priestess",
        nameVi: "Nữ Tu Tối Cao",
        meanUp: "Có những câu trả lời đang lẩn khuất sâu trong tiềm thức mà lý trí không thể chạm tới. Bạn được thôi thúc hãy quay về bên trong, lắng nghe tiếng thì thầm của trực giác và những giấc mơ. Đừng vội vàng tìm kiếm lời giải thích từ thế giới bên ngoài. Sự tĩnh lặng lúc này là chìa khóa để bạn kết nối với sự thông thái bí ẩn đang ngủ quên trong chính mình.",
        meanUpEn: "Answers are hidden deep within your subconscious where logic cannot reach. You are urged to turn inward, listen to the whispers of intuition and dreams. Do not rush to find explanations from the outside world. Silence is now the key for you to connect with the mysterious wisdom sleeping within yourself.",
        image: "/tarot-images/high_priestess.jpg"
    },
    {
        id: 3,
        name: "The Empress",
        nameVi: "Nữ Hoàng",
        meanUp: "Một nguồn năng lượng của sự nuôi dưỡng và sinh sôi đang bao trùm lấy bạn. Bạn đang ở trong giai đoạn tuyệt vời để yêu thương bản thân và để sự sáng tạo đơm hoa kết trái. Hãy cho phép mình được mềm mại, được tận hưởng vẻ đẹp của cuộc sống và chăm sóc cho những gì bạn trân quý. Sự dịu dàng và trù phú từ tâm hồn bạn sẽ thu hút mọi điều tốt đẹp.",
        meanUpEn: "An energy of nurturing and fertility is surrounding you. You are in a wonderful phase to love yourself and let creativity blossom. Allow yourself to be soft, to enjoy the beauty of life, and to care for what you cherish. The tenderness and abundance from your soul will attract all good things.",
        image: "/tarot-images/empress.jpg"
    },
    {
        id: 4,
        name: "The Emperor",
        nameVi: "Hoàng Đế",
        meanUp: "Bạn đang cần tìm lại sự kiểm soát và thiết lập trật tự cho cuộc sống của mình. Năng lượng của sự ổn định và kỷ luật đang được yêu cầu. Đây là lúc để bạn đứng vững trên đôi chân mình, bảo vệ những gì bạn đã xây dựng bằng sự quyết đoán và lý trí. Hãy trở thành vị vua trong vương quốc của chính mình, dẫn dắt mọi thứ đi vào quỹ đạo.",
        meanUpEn: "You need to regain control and establish order in your life. The energy of stability and discipline is required. This is the time to stand firm on your own feet, protecting what you have built with decisiveness and reason. Be the emperor of your own kingdom and steer everything into orbit.",
        image: "/tarot-images/emperor.jpg"
    },
    {
        id: 5,
        name: "The Hierophant",
        nameVi: "Giáo Hoàng",
        meanUp: "Sâu thẳm trong bạn đang tìm kiếm một điểm tựa tinh thần hoặc một hệ thống giá trị vững chắc. Bạn có xu hướng quay về với những truyền thống, những bài học đạo đức đã được kiểm chứng để tìm sự an yên. Đôi khi, con đường an toàn và tuân thủ quy tắc lại mang đến cho bạn sự giải thoát khỏi những hoang mang hiện tại. Hãy lắng nghe lời khuyên từ những người đi trước.",
        meanUpEn: "Deep down, you are seeking a spiritual anchor or a solid value system. You tend to return to traditions and proven moral lessons to find peace. Sometimes, the safe path and adherence to rules bring you relief from current confusion. Listen to the advice of those who came before.",
        image: "/tarot-images/hierophant.jpg"
    },
    {
        id: 6,
        name: "The Lovers",
        nameVi: "Tình Nhân",
        meanUp: "Bạn đang đứng trước những lựa chọn quan trọng liên quan đến giá trị cốt lõi của bản thân. Năng lượng của sự hòa hợp và kết nối đang thôi thúc bạn tìm kiếm sự đồng điệu, không chỉ trong tình yêu mà còn giữa lý trí và cảm xúc. Hãy chọn điều khiến trái tim bạn rung động thực sự, điều phản ánh đúng con người chân thật nhất của bạn.",
        meanUpEn: "You are facing important choices related to your core values. The energy of harmony and connection urges you to find alignment, not just in love but between reason and emotion. Choose what truly makes your heart vibrate, what reflects your most authentic self.",
        image: "/tarot-images/lovers.jpg"
    },
    {
        id: 7,
        name: "The Chariot",
        nameVi: "Cỗ Xe",
        meanUp: "Một ý chí sắt đá và khao khát chiến thắng đang bùng cháy trong bạn. Bạn muốn tiến lên phía trước bất chấp mọi trở ngại. Năng lượng này đòi hỏi bạn phải nắm chắc dây cương, kiểm soát những cảm xúc trái chiều để tập trung cao độ vào đích đến. Đừng để sự xao nhãng làm chệch hướng; sự kiên định của bạn sẽ phá vỡ mọi rào cản.",
        meanUpEn: "An iron will and a desire for victory are burning within you. You want to move forward regardless of obstacles. This energy requires you to hold the reins tight, controlling conflicting emotions to focus intensely on the destination. Do not let distractions derail you; your determination will break through all barriers.",
        image: "/tarot-images/chariot.jpg"
    },
    {
        id: 8,
        name: "Strength",
        nameVi: "Sức Mạnh",
        meanUp: "Sức mạnh thực sự của bạn lúc này không nằm ở cơ bắp hay sự áp đặt, mà ở lòng trắc ẩn và sự kiên nhẫn. Bạn đang học cách chế ngự những nỗi sợ hãi và phần 'con' bên trong mình bằng sự dịu dàng. Hãy tin vào nội lực thầm lặng của mình; sự mềm mỏng và bao dung chính là vũ khí mạnh mẽ nhất giúp bạn vượt qua thử thách này.",
        meanUpEn: "Your true strength right now lies not in muscle or force, but in compassion and patience. You are learning to tame your fears and inner instincts with gentleness. Trust your quiet inner power; softness and tolerance are the strongest weapons to help you overcome this challenge.",
        image: "/tarot-images/strength.jpg"
    },
    {
        id: 9,
        name: "The Hermit",
        nameVi: "Ẩn Sĩ",
        meanUp: "Tâm hồn bạn đang khao khát một khoảng lặng để rút lui khỏi thế giới ồn ào. Đây là lúc để bạn tự soi rọi lại chính mình, tìm kiếm ánh sáng trí tuệ từ bên trong. Sự cô độc lúc này không đáng sợ, mà là cần thiết để bạn tìm ra câu trả lời cho những băn khoăn lớn lao. Hãy trân trọng hành trình đi vào nội tâm này.",
        meanUpEn: "Your soul creates a moment of silence to retreat from the noisy world. This is the time to reflect on yourself, seeking wisdom from within. Solitude right now is not frightening but necessary for you to find answers to great questions. Cherish this journey into your inner self.",
        image: "/tarot-images/hermit.jpg"
    },
    {
        id: 10,
        name: "Wheel of Fortune",
        nameVi: "Bánh Xe Số Phận",
        meanUp: "Bạn đang nhận ra rằng cuộc sống là một chuỗi những thay đổi không ngừng và có những điều nằm ngoài tầm kiểm soát. Năng lượng của định mệnh đang xoay chuyển. Thay vì lo âu, hãy học cách chấp nhận và nương theo dòng chảy. Một cơ hội bất ngờ hoặc một bước ngoặt đang đến, hãy mở lòng đón nhận nó với tâm thế linh hoạt nhất.",
        meanUpEn: "You are realizing that life is a series of constant changes, and some things are beyond control. The energy of destiny is turning. Instead of worrying, learn to accept and flow with the current. An unexpected opportunity or turning point is coming; open your heart to receive it with flexibility.",
        image: "/tarot-images/wheel_of_fortune.jpg"
    },
    {
        id: 11,
        name: "Justice",
        nameVi: "Công Lý",
        meanUp: "Nhu cầu về sự thật và công bằng đang trỗi dậy mạnh mẽ trong bạn. Bạn muốn mọi thứ phải rõ ràng, minh bạch và sòng phẳng. Đây là lúc để bạn nhìn nhận lại các quyết định của mình dưới góc độ của luật nhân quả. Hãy chịu trách nhiệm cho hành động của mình và tin rằng cán cân công lý sẽ sớm được thiết lập lại đúng vị trí.",
        meanUpEn: "The need for truth and fairness is rising strongly within you. You want everything to be clear, transparent, and fair. This is the time to review your decisions from the perspective of cause and effect. Take responsibility for your actions and trust that the scales of justice will soon be balanced.",
        image: "/tarot-images/justice.jpg"
    },
    {
        id: 12,
        name: "The Hanged Man",
        nameVi: "Người Treo Ngược",
        meanUp: "Bạn đang cảm thấy bị mắc kẹt hoặc trì trệ, nhưng thực ra đây là một khoảng dừng quý giá. Nội tâm bạn đang cần một góc nhìn mới, một sự đảo ngược trong tư duy. Hãy thử buông bỏ nhu cầu kiểm soát, chấp nhận 'treo ngược' mình để nhìn thế giới khác đi. Đôi khi, sự hy sinh cái tôi hoặc lợi ích ngắn hạn sẽ mang lại sự giác ngộ lớn lao.",
        meanUpEn: "You feel stuck or stagnant, but this is actually a precious pause. Your inner self needs a new perspective, a reversal in thinking. Try letting go of the need for control, accept 'hanging' yourself to see the world differently. Sometimes, sacrificing the ego or short-term benefits leads to great enlightenment.",
        image: "/tarot-images/hanged_man.jpg"
    },
    {
        id: 13,
        name: "Death",
        nameVi: "Cái Chết",
        meanUp: "Đừng sợ hãi, bởi bạn đang đứng trước ngưỡng cửa của sự chuyển hóa sâu sắc. Một phần con người cũ, một thói quen hay một mối quan hệ không còn phù hợp cần phải ra đi để nhường chỗ cho cái mới. Năng lượng của sự tái sinh đang chảy trong bạn. Hãy dũng cảm buông tay và đón nhận sự kết thúc này như một sự giải thoát cần thiết.",
        meanUpEn: "Do not be afraid, for you stand at the threshold of profound transformation. An old part of you, a habit, or a relationship that no longer fits needs to go to make way for the new. The energy of rebirth is flowing through you. Courageously let go and embrace this ending as a necessary liberation.",
        image: "/tarot-images/death.jpg"
    },
    {
        id: 14,
        name: "Temperance",
        nameVi: "Sự Cân Bằng",
        meanUp: "Tâm hồn bạn đang tìm kiếm sự cân bằng và chữa lành. Bạn được khuyên hãy học cách hòa hợp những mặt đối lập trong cuộc sống, tránh xa những cực đoan. Sự kiên nhẫn và điều độ là chìa khóa lúc này. Hãy bình tĩnh pha trộn các yếu tố khác biệt để tạo ra một dung môi hài hòa cho cuộc sống của bạn.",
        meanUpEn: "Your soul is seeking balance and healing. You are advised to learn to harmonize opposing aspects of life, avoiding extremes. Patience and moderation are key right now. Calmly blend different elements to create a harmonious medium for your life.",
        image: "/tarot-images/temperance.jpg"
    },
    {
        id: 15,
        name: "The Devil",
        nameVi: "Ác Quỷ",
        meanUp: "Hãy trung thực nhìn nhận những xiềng xích đang trói buộc bạn. Có phải bạn đang để nỗi sợ hãi, dục vọng hay vật chất chi phối sự tự do của mình? Năng lượng này cảnh báo về sự phụ thuộc không lành mạnh. Nhưng hãy nhớ, sợi xích đó lỏng hơn bạn nghĩ. Quyền lực để giải thoát nằm ngay trong tay bạn, chỉ cần bạn dám đối diện với bóng tối của chính mình.",
        meanUpEn: "Honestly acknowledge the chains binding you. Are you letting fear, desire, or materialism dominate your freedom? This energy warns of unhealthy dependency. But remember, the chain is looser than you think. The power to liberate yourself is in your hands, if only you dare to face your own shadow.",
        image: "/tarot-images/devil.jpg"
    },
    {
        id: 16,
        name: "The Tower",
        nameVi: "Tòa Tháp",
        meanUp: "Một sự sụp đổ đột ngột có thể khiến bạn hoang mang, nhưng đó là sự phá vỡ cần thiết cho những nền tảng giả tạo. Sự thật đang được phơi bày trần trụi. Đừng cố bám víu vào những viên gạch vỡ vụn. Hãy để mọi thứ sụp đổ để bạn có thể xây dựng lại cuộc đời mình trên một nền tảng chân thật và vững chắc hơn.",
        meanUpEn: "A sudden collapse may confuse you, but it is a necessary break for false foundations. The truth is being laid bare. Do not cling to the crumbling bricks. Let everything fall so you can rebuild your life on a truer and more solid foundation.",
        image: "/tarot-images/tower.jpg"
    },
    {
        id: 17,
        name: "The Star",
        nameVi: "Ngôi Sao",
        meanUp: "Sau cơn bão, một nguồn năng lượng chữa lành và hy vọng đang len lỏi vào tâm hồn bạn. Bạn đang tìm lại được niềm tin vào vũ trụ và vào chính mình. Hãy cứ ước mơ và tỏa sáng, bởi bạn đang được dẫn lối. Sự bình yên và cảm hứng đang quay trở lại, giúp bạn gột rửa những vết thương lòng.",
        meanUpEn: "After the storm, an energy of healing and hope is seeping into your soul. You are rediscovering faith in the universe and yourself. Keep dreaming and shining, for you are being guided. Peace and inspiration are returning, helping you cleanse your emotional wounds.",
        image: "/tarot-images/star.jpg"
    },
    {
        id: 18,
        name: "The Moon",
        nameVi: "Mặt Trăng",
        meanUp: "Bạn đang lạc vào thế giới của tiềm thức, nơi những nỗi sợ mơ hồ và ảo ảnh ngự trị. Trực giác của bạn đang rất mạnh nhưng cũng dễ bị đánh lừa bởi những lo âu vô hình. Đừng vội tin vào những gì mắt thấy lúc này. Hãy thả lỏng, đối diện với những góc khuất trong tâm hồn và chờ đợi ánh sáng của sự thật dần hiện rõ.",
        meanUpEn: "You are wandering into the world of the subconscious, where vague fears and illusions reign. Your intuition is strong but easily deceived by invisible anxieties. Do not rush to believe what you see right now. Relax, face the hidden corners of your soul, and wait for the light of truth to emerge.",
        image: "/tarot-images/moon.jpg"
    },
    {
        id: 19,
        name: "The Sun",
        nameVi: "Mặt Trời",
        meanUp: "Một niềm vui thuần khiết và sự rõ ràng đang bừng sáng trong bạn. Cái tôi và sự tự tin của bạn đang ở mức cao nhất. Đây là lúc để bạn tỏa sáng, tận hưởng thành công và lan tỏa năng lượng tích cực. Mọi bóng tối đã bị xua tan, chỉ còn lại sự rạng rỡ và hạnh phúc viên mãn. Hãy cứ hồn nhiên đón nhận món quà này.",
        meanUpEn: "Pure joy and clarity are shining within you. Your ego and confidence are at their peak. This is your time to shine, enjoy success, and spread positive energy. All darkness has been dispelled, leaving only radiance and fulfillment. Innocently embrace this gift.",
        image: "/tarot-images/sun.jpg"
    },
    {
        id: 20,
        name: "Judgement",
        nameVi: "Phán Xét",
        meanUp: "Tiếng gọi của sự thức tỉnh đang vang lên mạnh mẽ. Bạn đang được kêu gọi để rũ bỏ con người cũ và tái sinh thành một phiên bản tốt đẹp hơn. Hãy nhìn lại quá khứ với sự bao dung, rút ra bài học và dũng cảm bước sang một chương mới. Đừng phán xét bản thân quá khắt khe, hãy tha thứ để được giải phóng.",
        meanUpEn: "The call to awakening is ringing loud. You are being called to shed your old self and be reborn as a better version. Look back at the past with compassion, learn the lessons, and courageously step into a new chapter. Do not judge yourself too harshly; forgive to be liberated.",
        image: "/tarot-images/judgement.jpg"
    },
    {
        id: 21,
        name: "The World",
        nameVi: "Thế Giới",
        meanUp: "Cảm giác trọn vẹn và hoàn thành đang lấp đầy bạn. Bạn đã đi hết một hành trình dài và đạt được những thành tựu xứng đáng. Thế giới đang mở rộng trước mắt bạn với vô vàn cơ hội mới. Hãy tận hưởng khoảnh khắc viên mãn này, nhưng cũng đừng quên rằng mỗi kết thúc lại là khởi đầu cho một hành trình mới.",
        meanUpEn: "A sense of wholeness and completion fills you. You have traveled a long journey and achieved worthy accomplishments. The world is opening up before you with countless new opportunities. Enjoy this moment of fulfillment, but remember that every ending is the start of a new journey.",
        image: "/tarot-images/world.jpg"
    },

    // WANDS (Gậy - Hành động - Lửa)
    {
        id: 22,
        name: "Ace of Wands",
        nameVi: "1 Gậy",
        meanUp: "Một ngọn lửa cảm hứng đang bùng lên trong bạn. Bạn khao khát được bắt đầu một điều gì đó mới mẻ. Hãy nắm bắt lấy cơ hội này để hành động ngay. Đam mê là nhiên liệu tốt nhất của bạn lúc này.",
        meanUpEn: "A fire of inspiration is igniting within you. You yearn to start something new. Seize this opportunity to act now. Passion is your best fuel at this moment.",
        image: "/tarot-images/ace_wands.jpg"
    },
    {
        id: 23,
        name: "Two of Wands",
        nameVi: "2 Gậy",
        meanUp: "Bạn đang đứng trước ngã ba đường với tầm nhìn rộng mở. Bạn đã có kế hoạch, giờ là lúc quyết định có nên bước ra khỏi vùng an toàn để chinh phục thế giới hay không. Hãy dũng cảm lựa chọn.",
        meanUpEn: "You stand at a crossroads with a wide vision. You have the plan; now is the time to decide whether to step out of your comfort zone to conquer the world. Choose courageously.",
        image: "/tarot-images/two_wands.jpg"
    },
    {
        id: 24,
        name: "Three of Wands",
        nameVi: "3 Gậy",
        meanUp: "Tầm nhìn của bạn đang vươn xa hơn bao giờ hết. Bạn đang chờ đợi kết quả từ những nỗ lực đã qua và sẵn sàng cho sự mở rộng. Hãy kiên nhẫn, những con tàu chở thành công đang quay về bến.",
        meanUpEn: "Your vision is reaching further than ever. You are waiting for the results of past efforts and are ready for expansion. Be patient; the ships of success are returning to the harbor.",
        image: "/tarot-images/three_wands.jpg"
    },
    {
        id: 25,
        name: "Four of Wands",
        nameVi: "4 Gậy",
        meanUp: "Năng lượng của sự ổn định và niềm vui sum họp đang hiện hữu. Bạn xứng đáng có một khoảng nghỉ ngơi để ăn mừng những thành quả bước đầu. Hãy tìm về nơi cho bạn cảm giác bình yên như 'nhà'.",
        meanUpEn: "The energy of stability and joyful reunion is present. You deserve a break to celebrate your initial achievements. Find the place that gives you the peace of 'home'.",
        image: "/tarot-images/four_wands.jpg"
    },
    {
        id: 26,
        name: "Five of Wands",
        nameVi: "5 Gậy",
        meanUp: "Xung đột và cạnh tranh đang khiến bạn rối trí. Nhưng đừng lo, đây chỉ là những cọ xát cần thiết để bạn khẳng định bản lĩnh. Hãy coi đó là cơ hội để rèn giũa kỹ năng của mình.",
        meanUpEn: "Conflict and competition are confusing you. But don't worry, this is just the friction needed to prove your mettle. See it as an opportunity to hone your skills.",
        image: "/tarot-images/five_wands.jpg"
    },
    {
        id: 27,
        name: "Six of Wands",
        nameVi: "6 Gậy",
        meanUp: "Bạn đang tỏa sáng với năng lượng của người chiến thắng. Sự công nhận từ mọi người là xứng đáng. Hãy tự hào về bản thân nhưng đừng để cái tôi lấn át sự khiêm tốn.",
        meanUpEn: "You are shining with the energy of a winner. Recognition from others is well-deserved. Be proud of yourself, but don't let your ego overshadow humility.",
        image: "/tarot-images/six_wands.jpg"
    },
    {
        id: 28,
        name: "Seven of Wands",
        nameVi: "7 Gậy",
        meanUp: "Bạn đang ở vị thế cao nhưng lại phải đối mặt với nhiều áp lực. Hãy kiên cường bảo vệ lập trường của mình. Đừng lùi bước, sự quyết tâm của bạn sẽ đẩy lùi mọi thử thách.",
        meanUpEn: "You are in a high position but face many pressures. Stand firm in defending your stance. Do not back down; your determination will repel all challenges.",
        image: "/tarot-images/seven_wands.jpg"
    },
    {
        id: 29,
        name: "Eight of Wands",
        nameVi: "8 Gậy",
        meanUp: "Mọi thứ đang diễn ra với tốc độ chóng mặt. Tin tức và cơ hội đang lao tới bạn. Đừng chần chừ, hãy hành động nhanh nhạy để bắt kịp dòng chảy năng lượng này.",
        meanUpEn: "Everything is happening at lightning speed. News and opportunities are rushing towards you. Do not hesitate; act quickly to catch this flow of energy.",
        image: "/tarot-images/eight_wands.jpg"
    },
    {
        id: 30,
        name: "Nine of Wands",
        nameVi: "9 Gậy",
        meanUp: "Bạn đã mệt mỏi nhưng đừng bỏ cuộc. Sự kiên trì là bài kiểm tra cuối cùng. Hãy đứng vững, dù chỉ còn một chút sức lực, vì vạch đích đã ở ngay trước mắt.",
        meanUpEn: "You are tired, but don't give up. Perseverance is the final test. Stand firm, even with your last bit of strength, for the finish line is right in front of you.",
        image: "/tarot-images/nine_wands.jpg"
    },
    {
        id: 31,
        name: "Ten of Wands",
        nameVi: "10 Gậy",
        meanUp: "Gánh nặng trách nhiệm đang đè nặng lên vai bạn. Bạn đã ôm đồm quá nhiều. Hãy học cách buông bỏ bớt hoặc chia sẻ gánh nặng trước khi bạn kiệt sức hoàn toàn.",
        meanUpEn: "The burden of responsibility weighs heavily on your shoulders. You have taken on too much. Learn to let go or share the load before you are completely exhausted.",
        image: "/tarot-images/ten_wands.jpg"
    },
    {
        id: 32,
        name: "Page of Wands",
        nameVi: "Tiểu Đồng Gậy",
        meanUp: "Một ý tưởng mới mẻ đầy táo bạo đang nhen nhóm. Bạn tò mò và muốn khám phá. Hãy cứ thử nghiệm với tinh thần vô tư, đừng sợ sai lầm lúc này.",
        meanUpEn: "A bold new idea is sparking. You are curious and want to explore. Experiment with a carefree spirit; don't be afraid of making mistakes right now.",
        image: "/tarot-images/page_wands.jpg"
    },
    {
        id: 33,
        name: "Knight of Wands",
        nameVi: "Hiệp Sĩ Gậy",
        meanUp: "Nhiệt huyết đang sục sôi trong máu bạn. Bạn muốn hành động ngay lập tức. Hãy tận dụng nguồn năng lượng này nhưng nhớ giữ cái đầu lạnh để không bốc đồng.",
        meanUpEn: "Enthusiasm is boiling in your blood. You want to act immediately. Use this energy, but keep a cool head to avoid being impulsive.",
        image: "/tarot-images/knight_wands.jpg"
    },
    {
        id: 34,
        name: "Queen of Wands",
        nameVi: "Nữ Hoàng Gậy",
        meanUp: "Sự tự tin và quyến rũ là vũ khí của bạn. Bạn biết mình muốn gì và dám theo đuổi nó. Hãy lan tỏa sự ấm áp và đam mê của bạn để truyền cảm hứng cho người khác.",
        meanUpEn: "Confidence and charm are your weapons. You know what you want and dare to pursue it. Spread your warmth and passion to inspire others.",
        image: "/tarot-images/queen_wands.jpg"
    },
    {
        id: 35,
        name: "King of Wands",
        nameVi: "Vua Gậy",
        meanUp: "Bạn có tầm nhìn của một nhà lãnh đạo thực thụ. Hãy sử dụng sức mạnh ý chí để kiến tạo nên những điều lớn lao. Hãy tin vào bản lĩnh dẫn dắt của mình.",
        meanUpEn: "You have the vision of a true leader. Use your willpower to create great things. Trust in your ability to lead.",
        image: "/tarot-images/king_wands.jpg"
    },

    // CUPS (Cốc - Cảm xúc - Nước)
    {
        id: 36,
        name: "Ace of Cups",
        nameVi: "1 Cốc",
        meanUp: "Trái tim bạn đang mở cửa để đón nhận một tình yêu mới hoặc một cảm xúc dạt dào. Hãy để dòng chảy yêu thương chữa lành và lấp đầy tâm hồn bạn.",
        meanUpEn: "Your heart is opening to welcome new love or overflowing emotion. Let the flow of love heal and fill your soul.",
        image: "/tarot-images/ace_cups.jpg"
    },
    {
        id: 37,
        name: "Two of Cups",
        nameVi: "2 Cốc",
        meanUp: "Một sự kết nối tâm hồn sâu sắc đang hiện hữu. Bạn tìm thấy sự đồng điệu tuyệt vời với ai đó. Hãy trân trọng mối duyên này, nó sẽ mang lại sự cân bằng cảm xúc.",
        meanUpEn: "A deep soul connection is present. You find wonderful alignment with someone. Cherish this bond; it will bring emotional balance.",
        image: "/tarot-images/two_cups.jpg"
    },
    {
        id: 38,
        name: "Three of Cups",
        nameVi: "3 Cốc",
        meanUp: "Niềm vui đến từ sự sẻ chia và tình bạn. Hãy gạt bỏ lo âu để tận hưởng những giây phút vui vẻ bên những người thân yêu. Kết nối cộng đồng là liều thuốc cho bạn.",
        meanUpEn: "Joy comes from sharing and friendship. Put aside worries to enjoy happy moments with loved ones. Community connection is your medicine.",
        image: "/tarot-images/three_cups.jpg"
    },
    {
        id: 39,
        name: "Four of Cups",
        nameVi: "4 Cốc",
        meanUp: "Bạn đang cảm thấy chán nản và thờ ơ với mọi thứ. Có vẻ bạn đang bỏ lỡ những cơ hội ngay trước mắt vì mải nhìn vào những điều không như ý. Hãy mở lòng ra.",
        meanUpEn: "You feel bored and indifferent to everything. It seems you are missing opportunities right in front of you because you focus on what's lacking. Open your heart.",
        image: "/tarot-images/four_cups.jpg"
    },
    {
        id: 40,
        name: "Five of Cups",
        nameVi: "5 Cốc",
        meanUp: "Nỗi đau mất mát đang bao trùm lấy bạn. Bạn hối tiếc về quá khứ. Nhưng hãy nhìn xem, vẫn còn những chiếc cốc chưa đổ. Đừng để nỗi buồn che lấp hy vọng còn lại.",
        meanUpEn: "The pain of loss surrounds you. You regret the past. But look, there are still cups standing. Do not let sorrow obscure the remaining hope.",
        image: "/tarot-images/five_cups.jpg"
    },
    {
        id: 41,
        name: "Six of Cups",
        nameVi: "6 Cốc",
        meanUp: "Những ký ức ngọt ngào từ quá khứ đang ùa về. Sự hoài niệm mang lại cho bạn cảm giác an toàn. Hãy tìm lại niềm vui trong trẻo và hồn nhiên của đứa trẻ bên trong bạn.",
        meanUpEn: "Sweet memories from the past are flooding back. Nostalgia brings you a sense of safety. Rediscover the pure and innocent joy of your inner child.",
        image: "/tarot-images/six_cups.jpg"
    },
    {
        id: 42,
        name: "Seven of Cups",
        nameVi: "7 Cốc",
        meanUp: "Bạn đang lạc lối giữa quá nhiều lựa chọn và ảo vọng. Hãy cẩn thận, không phải cái gì lấp lánh cũng là vàng. Hãy tỉnh táo để phân biệt đâu là thực tế, đâu là mơ mộng.",
        meanUpEn: "You are lost among too many choices and illusions. Be careful, not everything that glitters is gold. Be alert to distinguish reality from dreams.",
        image: "/tarot-images/seven_cups.jpg"
    },
    {
        id: 43,
        name: "Eight of Cups",
        nameVi: "8 Cốc",
        meanUp: "Bạn cảm thấy cần phải rời bỏ một điều gì đó đã không còn mang lại ý nghĩa, dù rất đau lòng. Sự buông bỏ này là cần thiết để bạn đi tìm hạnh phúc đích thực.",
        meanUpEn: "You feel the need to walk away from something that no longer brings meaning, even if it hurts. This letting go is necessary for you to find true happiness.",
        image: "/tarot-images/eight_cups.jpg"
    },
    {
        id: 44,
        name: "Nine of Cups",
        nameVi: "9 Cốc",
        meanUp: "Một cảm giác thỏa mãn và hạnh phúc đang tràn ngập. Ước nguyện của bạn có thể thành hiện thực. Hãy tận hưởng thành quả ngọt ngào này và yêu thương bản thân.",
        meanUpEn: "A sense of satisfaction and happiness is overflowing. Your wish may come true. Enjoy this sweet fruit and love yourself.",
        image: "/tarot-images/nine_cups.jpg"
    },
    {
        id: 45,
        name: "Ten of Cups",
        nameVi: "10 Cốc",
        meanUp: "Hạnh phúc viên mãn và sự hòa hợp tuyệt đối. Bạn đang được bao bọc bởi tình yêu thương của gia đình và người thân. Đây là đích đến bình yên của tâm hồn.",
        meanUpEn: "Complete happiness and absolute harmony. You are surrounded by the love of family and loved ones. This is the peaceful destination of the soul.",
        image: "/tarot-images/ten_cups.jpg"
    },
    {
        id: 46,
        name: "Page of Cups",
        nameVi: "Tiểu Đồng Cốc",
        meanUp: "Cảm xúc của bạn đang mới mẻ và non nớt như một chồi non. Hãy đón nhận những rung động bất ngờ hoặc những tin nhắn tình cảm với sự tò mò và cởi mở.",
        meanUpEn: "Your emotions are fresh and tender like a sprout. Welcome unexpected vibrations or sentimental messages with curiosity and openness.",
        image: "/tarot-images/page_cups.jpg"
    },
    {
        id: 47,
        name: "Knight of Cups",
        nameVi: "Hiệp Sĩ Cốc",
        meanUp: "Bạn đang theo đuổi lý tưởng lãng mạn của mình. Hãy cứ mơ mộng và lắng nghe trái tim, nhưng đừng quên giữ đôi chân chạm đất để không bị cuốn trôi quá xa.",
        meanUpEn: "You are pursuing your romantic ideal. Keep dreaming and listening to your heart, but don't forget to keep your feet on the ground to avoid being swept too far away.",
        image: "/tarot-images/knight_cups.jpg"
    },
    {
        id: 48,
        name: "Queen of Cups",
        nameVi: "Nữ Hoàng Cốc",
        meanUp: "Sự thấu cảm và trực giác là sức mạnh của bạn. Bạn hiểu sâu sắc cảm xúc của người khác. Hãy dùng lòng trắc ẩn để chữa lành, nhưng nhớ bảo vệ cảm xúc của chính mình.",
        meanUpEn: "Empathy and intuition are your strengths. You deeply understand others' emotions. Use compassion to heal, but remember to protect your own feelings.",
        image: "/tarot-images/queen_cups.jpg"
    },
    {
        id: 49,
        name: "King of Cups",
        nameVi: "Vua Cốc",
        meanUp: "Bạn đã làm chủ được cảm xúc của mình. Sự điềm tĩnh và bao dung giúp bạn đối mặt với mọi sóng gió. Hãy là chỗ dựa vững chắc cho những người xung quanh.",
        meanUpEn: "You have mastered your emotions. Calmness and tolerance help you face all storms. Be a solid support for those around you.",
        image: "/tarot-images/king_cups.jpg"
    },

    // SWORDS (Kiếm - Tư duy - Khí)
    {
        id: 50,
        name: "Ace of Swords",
        nameVi: "1 Kiếm",
        meanUp: "Sự thật là điều bạn khao khát nhất lúc này. Một ý tưởng sắc bén sẽ giúp bạn cắt đứt mọi sự mập mờ. Hãy dùng trí tuệ để đưa ra quyết định dứt khoát.",
        meanUpEn: "Truth is what you crave most right now. A sharp idea will help you cut through all ambiguity. Use your intellect to make a decisive choice.",
        image: "/tarot-images/ace_swords.jpg"
    },
    {
        id: 51,
        name: "Two of Swords",
        nameVi: "2 Kiếm",
        meanUp: "Bạn đang lưỡng lự và từ chối đối diện với sự thật. Việc nhắm mắt làm ngơ không giải quyết được vấn đề. Hãy gỡ bỏ băng bịt mắt và dũng cảm lựa chọn.",
        meanUpEn: "You are hesitant and refusing to face the truth. Turning a blind eye solves nothing. Remove the blindfold and choose courageously.",
        image: "/tarot-images/two_swords.jpg"
    },
    {
        id: 52,
        name: "Three of Swords",
        nameVi: "3 Kiếm",
        meanUp: "Nỗi đau và sự tổn thương lòng là không thể tránh khỏi. Hãy cho phép mình được đau để chữa lành. Đừng kìm nén, nước mắt sẽ giúp rửa trôi những vết thương.",
        meanUpEn: "Pain and heartbreak are inevitable. Allow yourself to hurt to heal. Do not suppress it; tears will help wash away the wounds.",
        image: "/tarot-images/three_swords.jpg"
    },
    {
        id: 53,
        name: "Four of Swords",
        nameVi: "4 Kiếm",
        meanUp: "Tâm trí bạn cần được nghỉ ngơi. Hãy rút lui khỏi những ồn ào để hồi phục năng lượng. Sự tĩnh lặng lúc này là liều thuốc tốt nhất cho tinh thần của bạn.",
        meanUpEn: "Your mind needs rest. Retreat from the noise to recover energy. Silence right now is the best medicine for your spirit.",
        image: "/tarot-images/four_swords.jpg"
    },
    {
        id: 54,
        name: "Five of Swords",
        nameVi: "5 Kiếm",
        meanUp: "Bạn có thể thắng trong cuộc tranh luận, nhưng cái giá phải trả là sự mất mát tình cảm. Hãy cân nhắc xem chiến thắng cái tôi có quan trọng hơn mối quan hệ không.",
        meanUpEn: "You might win the argument, but the cost is emotional loss. Consider if winning for the ego is more important than the relationship.",
        image: "/tarot-images/five_swords.jpg"
    },
    {
        id: 55,
        name: "Six of Swords",
        nameVi: "6 Kiếm",
        meanUp: "Bạn đang lặng lẽ rời bỏ vùng nước động để tìm bình yên. Dù mang theo nỗi buồn, nhưng đây là sự chuyển dịch cần thiết. Hãy tin rằng phía trước là vùng nước êm ả hơn.",
        meanUpEn: "You are quietly leaving rough waters to find peace. Though carrying sadness, this is a necessary transition. Trust that calmer waters lie ahead.",
        image: "/tarot-images/six_swords.jpg"
    },
    {
        id: 56,
        name: "Seven of Swords",
        nameVi: "7 Kiếm",
        meanUp: "Có sự thiếu trung thực hoặc toan tính ở đây. Bạn đang cố giấu giếm điều gì hoặc ai đó đang lừa dối bạn? Hãy cẩn thận và dùng trí thông minh để bảo vệ mình.",
        meanUpEn: "There is dishonesty or calculation here. Are you hiding something, or is someone deceiving you? Be cautious and use your intelligence to protect yourself.",
        image: "/tarot-images/seven_swords.jpg"
    },
    {
        id: 57,
        name: "Eight of Swords",
        nameVi: "8 Kiếm",
        meanUp: "Bạn cảm thấy bế tắc, nhưng thực ra chính suy nghĩ của bạn đang giam cầm bạn. Hãy thay đổi góc nhìn, bạn sẽ thấy dây trói rất lỏng và lối thoát ngay trước mắt.",
        meanUpEn: "You feel stuck, but actually, your own thoughts are imprisoning you. Change your perspective, and you will see the ropes are loose and the exit is right there.",
        image: "/tarot-images/eight_swords.jpg"
    },
    {
        id: 58,
        name: "Nine of Swords",
        nameVi: "9 Kiếm",
        meanUp: "Những lo âu đang ám ảnh giấc ngủ của bạn. Bạn đang trầm trọng hóa vấn đề. Hãy nhớ rằng phần lớn nỗi sợ chỉ nằm trong tưởng tượng. Hãy chia sẻ để nhẹ lòng hơn.",
        meanUpEn: "Anxieties are haunting your sleep. You are overthinking the problem. Remember that most fears exist only in imagination. Share to lighten your heart.",
        image: "/tarot-images/nine_swords.jpg"
    },
    {
        id: 59,
        name: "Ten of Swords",
        nameVi: "10 Kiếm",
        meanUp: "Mọi thứ dường như sụp đổ và bạn cảm thấy bị phản bội. Nhưng hãy nhớ, đây là đáy của nỗi đau. Từ giờ, mọi thứ chỉ có thể đi lên. Hãy chấp nhận kết thúc để bắt đầu lại.",
        meanUpEn: "Everything seems to crumble, and you feel betrayed. But remember, this is the bottom of pain. From now on, things can only go up. Accept the end to start anew.",
        image: "/tarot-images/ten_swords.jpg"
    },
    {
        id: 60,
        name: "Page of Swords",
        nameVi: "Tiểu Đồng Kiếm",
        meanUp: "Trí tò mò của bạn đang trỗi dậy. Bạn muốn tìm hiểu sự thật và học hỏi. Hãy giữ cái đầu lạnh và tư duy sắc bén, nhưng đừng quá đa nghi với mọi thứ.",
        meanUpEn: "Your curiosity is rising. You want to find the truth and learn. Keep a cool head and sharp thinking, but don't be too suspicious of everything.",
        image: "/tarot-images/page_swords.jpg"
    },
    {
        id: 61,
        name: "Knight of Swords",
        nameVi: "Hiệp Sĩ Kiếm",
        meanUp: "Bạn đang lao về phía trước với sự thẳng thắn và quyết liệt. Tư duy logic là điểm mạnh, nhưng hãy cẩn thận đừng để lời nói sắc bén làm tổn thương người khác.",
        meanUpEn: "You are rushing forward with frankness and determination. Logical thinking is your strength, but be careful not to let sharp words hurt others.",
        image: "/tarot-images/knight_swords.jpg"
    },
    {
        id: 62,
        name: "Queen of Swords",
        nameVi: "Nữ Hoàng Kiếm",
        meanUp: "Sự sắc sảo và độc lập làm nên khí chất của bạn. Bạn nhìn thấu sự thật và không để cảm xúc chi phối. Hãy dùng trí tuệ của mình để cắt đứt những rắc rối.",
        meanUpEn: "Sharpness and independence define your aura. You see through the truth and don't let emotions rule. Use your wisdom to cut through troubles.",
        image: "/tarot-images/queen_swords.jpg"
    },
    {
        id: 63,
        name: "King of Swords",
        nameVi: "Vua Kiếm",
        meanUp: "Lý trí và sự công bằng là kim chỉ nam của bạn. Bạn có khả năng lãnh đạo bằng trí tuệ. Hãy giữ cái đầu lạnh và trái tim công minh để giải quyết mọi việc.",
        meanUpEn: "Reason and fairness are your compass. You have the ability to lead with intellect. Keep a cool head and a fair heart to resolve everything.",
        image: "/tarot-images/king_swords.jpg"
    },

    // PENTACLES (Tiền - Vật chất - Đất)
    {
        id: 64,
        name: "Ace of Pentacles",
        nameVi: "1 Tiền",
        meanUp: "Một cơ hội tài chính hoặc khởi đầu vững chắc đang đến. Đây là món quà thực tế từ vũ trụ. Hãy đón nhận và gieo trồng nó, sự thịnh vượng đang chờ bạn.",
        meanUpEn: "A financial opportunity or a solid beginning is coming. This is a practical gift from the universe. Receive and plant it; prosperity awaits you.",
        image: "/tarot-images/ace_pentacles.jpg"
    },
    {
        id: 65,
        name: "Two of Pentacles",
        nameVi: "2 Tiền",
        meanUp: "Bạn đang cố gắng cân bằng giữa nhiều trách nhiệm. Cuộc sống đòi hỏi sự linh hoạt. Hãy uyển chuyển như dòng nước, đừng quá cứng nhắc bạn sẽ xoay sở được thôi.",
        meanUpEn: "You are trying to balance multiple responsibilities. Life demands flexibility. Be fluid like water; don't be too rigid, and you will manage.",
        image: "/tarot-images/two_pentacles.jpg"
    },
    {
        id: 66,
        name: "Three of Pentacles",
        nameVi: "3 Tiền",
        meanUp: "Sự hợp tác và làm việc nhóm sẽ mang lại kết quả tốt. Tài năng của bạn được công nhận. Hãy học hỏi và cùng nhau xây dựng nền móng vững chắc.",
        meanUpEn: "Collaboration and teamwork will yield good results. Your talent is recognized. Learn and build a solid foundation together.",
        image: "/tarot-images/three_pentacles.jpg"
    },
    {
        id: 67,
        name: "Four of Pentacles",
        nameVi: "4 Tiền",
        meanUp: "Bạn đang giữ chặt tài sản hay cảm xúc vì sợ mất mát. Sự kiểm soát quá mức sẽ ngăn cản dòng chảy thịnh vượng. Hãy học cách tin tưởng và buông lỏng tay ra một chút.",
        meanUpEn: "You are holding tight to assets or feelings out of fear of loss. Excessive control blocks the flow of prosperity. Learn to trust and loosen your grip a little.",
        image: "/tarot-images/four_pentacles.jpg"
    },
    {
        id: 68,
        name: "Five of Pentacles",
        nameVi: "5 Tiền",
        meanUp: "Bạn cảm thấy thiếu thốn và cô đơn. Nhưng đừng chỉ nhìn xuống đất, ánh sáng của sự giúp đỡ vẫn luôn ở gần. Hãy mở lời, bạn không hề đơn độc trong khó khăn này.",
        meanUpEn: "You feel lacking and lonely. But don't just look down; the light of help is always near. Speak up; you are not alone in this difficulty.",
        image: "/tarot-images/five_pentacles.jpg"
    },
    {
        id: 69,
        name: "Six of Pentacles",
        nameVi: "6 Tiền",
        meanUp: "Cuộc sống là sự cân bằng giữa cho và nhận. Hãy hào phóng chia sẻ nếu bạn có thể, và vui vẻ đón nhận nếu bạn cần. Dòng chảy tiền bạc cần sự luân chuyển.",
        meanUpEn: "Life is a balance of giving and receiving. Be generous in sharing if you can, and happily receive if you need. The flow of money requires circulation.",
        image: "/tarot-images/six_pentacles.jpg"
    },
    {
        id: 70,
        name: "Seven of Pentacles",
        nameVi: "7 Tiền",
        meanUp: "Bạn đã làm việc chăm chỉ, giờ là lúc kiên nhẫn chờ đợi thu hoạch. Hãy đánh giá lại xem hướng đi này có đúng không. Đừng nóng vội, trái ngọt cần thời gian.",
        meanUpEn: "You have worked hard; now is the time to patiently wait for the harvest. Re-evaluate if this direction is right. Do not rush; sweet fruit takes time.",
        image: "/tarot-images/seven_pentacles.jpg"
    },
    {
        id: 71,
        name: "Eight of Pentacles",
        nameVi: "8 Tiền",
        meanUp: "Sự chăm chỉ và tỉ mỉ là chìa khóa thành công của bạn. Hãy tập trung rèn luyện kỹ năng. Những nỗ lực âm thầm hôm nay sẽ tạo nên thành tựu vững chắc ngày mai.",
        meanUpEn: "Diligence and meticulousness are your keys to success. Focus on honing your skills. Silent efforts today will build solid achievements tomorrow.",
        image: "/tarot-images/eight_pentacles.jpg"
    },
    {
        id: 72,
        name: "Nine of Pentacles",
        nameVi: "9 Tiền",
        meanUp: "Sự độc lập và tự chủ mang lại cho bạn khí chất sang trọng. Hãy tận hưởng thành quả lao động của mình. Bạn xứng đáng với cuộc sống sung túc và thoải mái này.",
        meanUpEn: "Independence and self-mastery give you a luxurious aura. Enjoy the fruits of your labor. You deserve this prosperous and comfortable life.",
        image: "/tarot-images/nine_pentacles.jpg"
    },
    {
        id: 73,
        name: "Ten of Pentacles",
        nameVi: "10 Tiền",
        meanUp: "Sự thịnh vượng bền vững và hạnh phúc gia đình đang ở bên bạn. Bạn đã xây dựng được một di sản vững chắc. Hãy trân trọng những giá trị truyền thống và người thân.",
        meanUpEn: "Lasting prosperity and family happiness are with you. You have built a solid legacy. Cherish traditional values and loved ones.",
        image: "/tarot-images/ten_pentacles.jpg"
    },
    {
        id: 74,
        name: "Page of Pentacles",
        nameVi: "Tiểu Đồng Tiền",
        meanUp: "Một cơ hội học hỏi thực tế đang đến. Hãy tiếp cận nó với tinh thần ham học và chăm chỉ. Đây là viên gạch đầu tiên cho sự nghiệp vững chắc sau này.",
        meanUpEn: "A practical learning opportunity is coming. Approach it with a spirit of eagerness and hard work. This is the first brick for a solid career later.",
        image: "/tarot-images/page_pentacles.jpg"
    },
    {
        id: 75,
        name: "Knight of Pentacles",
        nameVi: "Hiệp Sĩ Tiền",
        meanUp: "Sự bền bỉ và đáng tin cậy là phẩm chất của bạn. Bạn không vội vã mà tiến bước chậm nhưng chắc. Hãy kiên định với mục tiêu, thành công sẽ đến với người không bỏ cuộc.",
        meanUpEn: "Persistence and reliability are your qualities. You do not rush but move slowly and surely. Be steadfast with your goal; success comes to those who do not give up.",
        image: "/tarot-images/knight_pentacles.jpg"
    },
    {
        id: 76,
        name: "Queen of Pentacles",
        nameVi: "Nữ Hoàng Tiền",
        meanUp: "Bạn biết cách chăm sóc và nuôi dưỡng sự thịnh vượng. Hãy tạo ra sự an toàn và ấm áp cho bản thân và gia đình. Sự chu đáo thực tế là sức mạnh của bạn.",
        meanUpEn: "You know how to care for and nurture prosperity. Create safety and warmth for yourself and your family. Practical thoughtfulness is your strength.",
        image: "/tarot-images/queen_pentacles.jpg"
    },
    {
        id: 77,
        name: "King of Pentacles",
        nameVi: "Vua Tiền",
        meanUp: "Bạn đã đạt đến đỉnh cao của sự ổn định và giàu có. Hãy dùng bản lĩnh của mình để bảo vệ và phát triển những gì đang có. Bạn là chỗ dựa vững chắc cho mọi người.",
        meanUpEn: "You have reached the peak of stability and wealth. Use your mettle to protect and develop what you have. You are a solid rock for everyone.",
        image: "/tarot-images/king_pentacles.jpg"
    }
];
