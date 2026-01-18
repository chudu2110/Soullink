import { Question } from './types';

export const COLORS = {
  primary: '#f9d2d2', // Pastel Red
  secondary: '#d2f9e4', // Pastel Green
  tertiary: '#d2e4f9', // Pastel Blue
  accent: '#f9f5d2', // Pastel Yellow
  dark: '#2d3436'
};

export const QUESTIONS: Question[] = [
  // --- PART A - PROFILE SETUP ---
  {
    id: 1,
    section: "A1. Basic Info",
    type: "text",
    text: { en: "How should we call you?", vi: "Tên bạn muốn được gọi là" },
    placeholder: { en: "Your name...", vi: "Tên của bạn..." },
    required: true
  },
  {
    id: 2,
    section: "A1. Basic Info",
    type: "number",
    text: { en: "Age", vi: "Tuổi" },
    placeholder: { en: "e.g. 25", vi: "VD: 25" },
    required: true
  },
  {
    id: 3,
    section: "A1. Basic Info",
    type: "number",
    text: { en: "Height (cm)", vi: "Chiều cao (cm)" },
    placeholder: { en: "e.g. 170", vi: "VD: 170" },
    required: true
  },
  {
    id: 4,
    section: "A1. Basic Info",
    type: "number",
    text: { en: "Weight (kg) - Optional", vi: "Cân nặng (tuỳ chọn)" },
    placeholder: { en: "Skip if you prefer", vi: "Bỏ qua nếu muốn" },
    required: false
  },
  {
    id: 5,
    section: "A2. Gender & Orientation",
    type: "single",
    text: { en: "What is your gender?", vi: "Giới tính của bạn là gì?" },
    options: [
      { value: "male", label: { en: "Male", vi: "Nam" } },
      { value: "female", label: { en: "Female", vi: "Nữ" } },
      { value: "non_binary", label: { en: "Non-binary", vi: "Phi nhị nguyên" } },
      { value: "trans_male", label: { en: "Trans Male", vi: "Trans nam" } },
      { value: "trans_female", label: { en: "Trans Female", vi: "Trans nữ" } },
      { value: "other", label: { en: "Other", vi: "Giới tính khác" } },
      { value: "pnts", label: { en: "Prefer not to say", vi: "Không muốn tiết lộ" } }
    ],
    required: true
  },
  {
    id: 6,
    section: "A2. Gender & Orientation",
    type: "multiple",
    text: { en: "Who are you interested in?", vi: "Bạn đang quan tâm / hẹn hò với giới tính nào?" },
    options: [
      { value: "male", label: { en: "Male", vi: "Nam" } },
      { value: "female", label: { en: "Female", vi: "Nữ" } },
      { value: "non_binary", label: { en: "Non-binary", vi: "Phi nhị nguyên" } },
      { value: "trans", label: { en: "Trans", vi: "Trans" } },
      { value: "all", label: { en: "Any / All", vi: "Không phân biệt giới tính" } }
    ],
    required: true
  },
  {
    id: 7,
    section: "A3. Hobbies & Traits",
    type: "multiple",
    text: { en: "Main interests", vi: "Sở thích chính của bạn" },
    options: [
      { value: "music", label: { en: "Music", vi: "Âm nhạc" } },
      { value: "movies", label: { en: "Movies", vi: "Phim ảnh" } },
      { value: "travel", label: { en: "Travel", vi: "Du lịch" } },
      { value: "reading", label: { en: "Reading", vi: "Đọc sách" } },
      { value: "sports", label: { en: "Sports", vi: "Thể thao" } },
      { value: "gaming", label: { en: "Gaming", vi: "Game" } },
      { value: "art", label: { en: "Art", vi: "Nghệ thuật" } },
      { value: "other", label: { en: "Other", vi: "Khác" } }
    ],
    required: true
  },
  {
    id: 8,
    section: "A3. Hobbies & Traits",
    type: "text",
    text: { en: "A hidden talent or special trait", vi: "Một “tài lẻ” hoặc điểm đặc biệt của bạn" },
    required: true
  },
  {
    id: 9,
    section: "A3. Hobbies & Traits",
    type: "text",
    text: { en: "One thing you are proud of", vi: "Một điều khiến bạn tự hào về bản thân" },
    required: true
  },

  // --- PART B - DATE TO MARRY (36 QUESTIONS) ---
  // ROUND 1: INNER SELF
  {
    id: 10,
    section: "Round 1: Inner Self",
    type: "text",
    text: { en: "When someone truly understands you, what do you want them to know most?", vi: "Khi có người hiểu mình thật sự, điều gì bạn muốn họ hiểu nhất về bạn?" },
    required: true
  },
  {
    id: 11,
    section: "Round 1: Inner Self",
    type: "multiple",
    maxOptions: 2,
    text: { en: "Friends usually see you as:", vi: "Bạn thường được bạn bè xem là người:" },
    options: [
      { value: "calm", label: { en: "Calm", vi: "Điềm tĩnh" } },
      { value: "warm", label: { en: "Warm", vi: "Ấm áp" } },
      { value: "rational", label: { en: "Rational", vi: "Lý trí" } },
      { value: "emotional", label: { en: "Emotional", vi: "Cảm xúc" } },
      { value: "funny", label: { en: "Funny", vi: "Hài hước" } },
      { value: "reliable", label: { en: "Reliable", vi: "Đáng tin" } }
    ],
    required: true
  },
  {
    id: 12,
    section: "Round 1: Inner Self",
    type: "single",
    text: { en: "When tired, you usually:", vi: "Khi mệt mỏi, bạn thường:" },
    options: [
      { value: "A", label: { en: "Want to be alone", vi: "Muốn ở một mình" } },
      { value: "B", label: { en: "Want someone nearby", vi: "Muốn có người bên cạnh" } },
      { value: "C", label: { en: "Want to be listened to", vi: "Muốn được lắng nghe" } },
      { value: "D", label: { en: "Want distraction", vi: "Muốn làm việc khác để quên đi" } }
    ],
    required: true
  },
  {
    id: 13,
    section: "Round 1: Inner Self",
    type: "text",
    text: { en: "A secret fear in relationships?", vi: "Một nỗi sợ thầm kín của bạn trong các mối quan hệ?" },
    required: true
  },
  {
    id: 14,
    section: "Round 1: Inner Self",
    type: "text",
    text: { en: "What makes it hardest for you to open up?", vi: "Điều khiến bạn khó mở lòng với người khác nhất là gì?" },
    required: true
  },
  {
    id: 15,
    section: "Round 1: Inner Self",
    type: "single",
    text: { en: "How do you believe people change over time?", vi: "Bạn tin rằng con người sẽ thay đổi như thế nào theo thời gian?" },
    options: [
      { value: "A", label: { en: "Change a lot", vi: "Thay đổi rất nhiều" } },
      { value: "B", label: { en: "Change but core remains", vi: "Thay đổi nhưng cốt lõi giữ nguyên" } },
      { value: "C", label: { en: "Change very little", vi: "Thay đổi rất ít" } },
      { value: "D", label: { en: "Almost no change", vi: "Gần như không đổi" } }
    ],
    required: true
  },

  // ROUND 2: SOULMATE & EMOTIONAL CONNECTION
  {
    id: 16,
    section: "Round 2: Emotional Connection",
    type: "multiple",
    maxOptions: 3,
    text: { en: "What do you want to share most with a soulmate?", vi: "Khi có một người bạn tri kỉ, bạn thường muốn tâm sự với họ về điều gì nhất?" },
    options: [
      { value: "emotions", label: { en: "Personal emotions", vi: "Cảm xúc cá nhân" } },
      { value: "pressure", label: { en: "Life pressures", vi: "Áp lực cuộc sống" } },
      { value: "work", label: { en: "Work / Study", vi: "Công việc / học tập" } },
      { value: "family", label: { en: "Family", vi: "Gia đình" } },
      { value: "dreams", label: { en: "Dreams & Future", vi: "Ước mơ & tương lai" } },
      { value: "thoughts", label: { en: "Hard-to-say thoughts", vi: "Những suy nghĩ khó nói với người khác" } }
    ],
    required: true
  },
  {
    id: 17,
    section: "Round 2: Emotional Connection",
    type: "single",
    text: { en: "You feel most connected when:", vi: "Bạn cảm thấy được kết nối nhất khi:" },
    options: [
      { value: "A", label: { en: "Deep conversation", vi: "Nói chuyện sâu" } },
      { value: "B", label: { en: "Quiet company", vi: "Ở cạnh nhau yên lặng" } },
      { value: "C", label: { en: "Doing something together", vi: "Cùng làm việc gì đó" } },
      { value: "D", label: { en: "Overcoming hardship", vi: "Cùng vượt qua khó khăn" } }
    ],
    required: true
  },
  {
    id: 18,
    section: "Round 2: Emotional Connection",
    type: "single",
    text: { en: "Are you easy to share negative feelings?", vi: "Bạn có dễ chia sẻ cảm xúc tiêu cực không?" },
    options: [
      { value: "A", label: { en: "Very easy", vi: "Rất dễ" } },
      { value: "B", label: { en: "When trust is enough", vi: "Khi đủ tin tưởng" } },
      { value: "C", label: { en: "Quite hard", vi: "Khá khó" } },
      { value: "D", label: { en: "Almost never", vi: "Gần như không" } }
    ],
    required: true
  },
  {
    id: 19,
    section: "Round 2: Emotional Connection",
    type: "text",
    text: { en: "What makes you feel heard?", vi: "Điều gì khiến bạn cảm thấy được lắng nghe?" },
    required: true
  },
  {
    id: 20,
    section: "Round 2: Emotional Connection",
    type: "single",
    text: { en: "When your partner is sad, you usually:", vi: "Khi người bạn yêu buồn, bạn thường:" },
    options: [
      { value: "A", label: { en: "Listen", vi: "Lắng nghe" } },
      { value: "B", label: { en: "Give advice", vi: "Đưa lời khuyên" } },
      { value: "C", label: { en: "Be there for them", vi: "Ở bên họ" } },
      { value: "D", label: { en: "Give them space", vi: "Cho họ không gian" } }
    ],
    required: true
  },
  {
    id: 21,
    section: "Round 2: Emotional Connection",
    type: "text",
    text: { en: "Which aspect do you want your partner to understand most?", vi: "Bạn mong người bạn đời sẽ hiểu bạn ở khía cạnh nào nhất?" },
    required: true
  },

  // ROUND 3: LIFE VIEWS
  {
    id: 22,
    section: "Round 3: Life Views",
    type: "single",
    text: { en: "Most important thing in life right now:", vi: "Điều quan trọng nhất trong cuộc sống của bạn hiện tại là:" },
    options: [
      { value: "A", label: { en: "Family", vi: "Gia đình" } },
      { value: "B", label: { en: "Career", vi: "Sự nghiệp" } },
      { value: "C", label: { en: "Inner peace", vi: "Bình yên nội tâm" } },
      { value: "D", label: { en: "Personal freedom", vi: "Tự do cá nhân" } }
    ],
    required: true
  },
  {
    id: 23,
    section: "Round 3: Life Views",
    type: "single",
    text: { en: "When trading off, you prioritize:", vi: "Khi phải đánh đổi, bạn thường ưu tiên:" },
    options: [
      { value: "A", label: { en: "Stability", vi: "Ổn định" } },
      { value: "B", label: { en: "Growth", vi: "Phát triển" } },
      { value: "C", label: { en: "Emotion", vi: "Cảm xúc" } },
      { value: "D", label: { en: "Personal values", vi: "Giá trị cá nhân" } }
    ],
    required: true
  },
  {
    id: 24,
    section: "Round 3: Life Views",
    type: "text",
    text: { en: "A life principle you cannot compromise?", vi: "Một nguyên tắc sống bạn rất khó thoả hiệp?" },
    required: true
  },
  {
    id: 25,
    section: "Round 3: Life Views",
    type: "text",
    text: { en: "How do you define 'a good life'?", vi: "Bạn định nghĩa “một cuộc sống tốt” như thế nào?" },
    required: true
  },
  {
    id: 26,
    section: "Round 3: Life Views",
    type: "single",
    text: { en: "When views differ from partner, you:", vi: "Khi quan điểm sống khác người yêu, bạn thường:" },
    options: [
      { value: "A", label: { en: "Compromise", vi: "Thoả hiệp" } },
      { value: "B", label: { en: "Hold ground", vi: "Giữ quan điểm" } },
      { value: "C", label: { en: "Find common ground", vi: "Tìm điểm chung" } },
      { value: "D", label: { en: "Avoid argument", vi: "Tránh tranh cãi" } }
    ],
    required: true
  },
  {
    id: 27,
    section: "Round 3: Life Views",
    type: "text",
    text: { en: "Who do you want to become through this relationship?", vi: "Bạn mong mối quan hệ giúp bạn trở thành người như thế nào?" },
    required: true
  },

  // ROUND 4: FINANCE & REALITY
  {
    id: 28,
    section: "Round 4: Finance & Reality",
    type: "single",
    text: { en: "To you, money is:", vi: "Với bạn, tiền bạc là:" },
    options: [
      { value: "A", label: { en: "Safety foundation", vi: "Nền tảng an toàn" } },
      { value: "B", label: { en: "Growth tool", vi: "Công cụ phát triển" } },
      { value: "C", label: { en: "Means for enjoyment", vi: "Phương tiện tận hưởng" } },
      { value: "D", label: { en: "Not very important", vi: "Không quá quan trọng" } }
    ],
    required: true
  },
  {
    id: 29,
    section: "Round 4: Finance & Reality",
    type: "single",
    text: { en: "How do you manage personal finance?", vi: "Bạn quản lý tài chính cá nhân như thế nào?" },
    options: [
      { value: "A", label: { en: "Clear plan", vi: "Có kế hoạch rõ" } },
      { value: "B", label: { en: "Relative", vi: "Tương đối" } },
      { value: "C", label: { en: "Depending on month", vi: "Tuỳ tháng" } },
      { value: "D", label: { en: "Little concern", vi: "Ít quan tâm" } }
    ],
    required: true
  },
  {
    id: 30,
    section: "Round 4: Finance & Reality",
    type: "single",
    text: { en: "In marriage, finances should be:", vi: "Trong hôn nhân, tài chính nên:" },
    options: [
      { value: "A", label: { en: "Fully transparent", vi: "Minh bạch hoàn toàn" } },
      { value: "B", label: { en: "Clear joint/private", vi: "Chung – riêng rõ ràng" } },
      { value: "C", label: { en: "Independent", vi: "Độc lập" } },
      { value: "D", label: { en: "By agreement", vi: "Tuỳ thoả thuận" } }
    ],
    required: true
  },
  {
    id: 31,
    section: "Round 4: Finance & Reality",
    type: "text",
    text: { en: "A financial pressure you worry most about when marrying?", vi: "Một áp lực tài chính bạn lo lắng nhất khi kết hôn?" },
    required: true
  },
  {
    id: 32,
    section: "Round 4: Finance & Reality",
    type: "single",
    text: { en: "If income gap is large, you think:", vi: "Nếu thu nhập hai người chênh lệch, bạn nghĩ:" },
    options: [
      { value: "A", label: { en: "No problem", vi: "Không vấn đề" } },
      { value: "B", label: { en: "Need agreement", vi: "Cần thoả thuận" } },
      { value: "C", label: { en: "Potential conflict", vi: "Dễ mâu thuẫn" } },
      { value: "D", label: { en: "Hard to accept", vi: "Khó chấp nhận" } }
    ],
    required: true
  },
  {
    id: 33,
    section: "Round 4: Finance & Reality",
    type: "single",
    text: { en: "Ready to change lifestyle for family?", vi: "Bạn sẵn sàng thay đổi lối sống vì gia đình không?" },
    options: [
      { value: "A", label: { en: "Yes", vi: "Có" } },
      { value: "B", label: { en: "With conditions", vi: "Có điều kiện" } },
      { value: "C", label: { en: "Hard", vi: "Khó" } },
      { value: "D", label: { en: "No", vi: "Không" } }
    ],
    required: true
  },

  // ROUND 5: DATING & MARRIAGE
  {
    id: 34,
    section: "Round 5: Dating & Marriage",
    type: "single",
    text: { en: "What relationship are you looking for?", vi: "Bạn đang tìm kiếm mối quan hệ như thế nào?" },
    options: [
      { value: "A", label: { en: "Serious, Marriage", vi: "Nghiêm túc, cưới" } },
      { value: "B", label: { en: "Long term", vi: "Lâu dài" } },
      { value: "C", label: { en: "Date to see", vi: "Tìm hiểu" } },
      { value: "D", label: { en: "Not sure yet", vi: "Chưa rõ" } }
    ],
    required: true
  },
  {
    id: 35,
    section: "Round 5: Dating & Marriage",
    type: "multiple",
    maxOptions: 2,
    text: { en: "Most important in love?", vi: "Khi yêu, bạn coi trọng điều gì nhất?" },
    options: [
      { value: "safety", label: { en: "Emotional safety", vi: "An toàn cảm xúc" } },
      { value: "loyalty", label: { en: "Loyalty", vi: "Chung thuỷ" } },
      { value: "comm", label: { en: "Communication", vi: "Giao tiếp" } },
      { value: "company", label: { en: "Companionship", vi: "Đồng hành" } },
      { value: "respect", label: { en: "Respect", vi: "Tôn trọng" } }
    ],
    required: true
  },
  {
    id: 36,
    section: "Round 5: Dating & Marriage",
    type: "single",
    text: { en: "In relationship crisis, you usually:", vi: "Khi mối quan hệ gặp khủng hoảng, bạn thường:" },
    options: [
      { value: "A", label: { en: "Try to fix", vi: "Cố gắng sửa" } },
      { value: "B", label: { en: "Seek support", vi: "Tìm hỗ trợ" } },
      { value: "C", label: { en: "Give time", vi: "Cho thời gian" } },
      { value: "D", label: { en: "Let go", vi: "Buông tay" } }
    ],
    required: true
  },
  {
    id: 37,
    section: "Round 5: Dating & Marriage",
    type: "single",
    text: { en: "View on sacrifice in marriage?", vi: "Quan điểm của bạn về hy sinh trong hôn nhân?" },
    options: [
      { value: "A", label: { en: "Necessary", vi: "Cần thiết" } },
      { value: "B", label: { en: "Limited", vi: "Có giới hạn" } },
      { value: "C", label: { en: "Depending on case", vi: "Tuỳ hoàn cảnh" } },
      { value: "D", label: { en: "Should not", vi: "Không nên" } }
    ],
    required: true
  },
  {
    id: 38,
    section: "Round 5: Dating & Marriage",
    type: "single",
    text: { en: "Do you want children?", vi: "Bạn có mong muốn có con không?" },
    options: [
      { value: "A", label: { en: "Yes", vi: "Có" } },
      { value: "B", label: { en: "Yes but not rush", vi: "Có nhưng không gấp" } },
      { value: "C", label: { en: "Unsure", vi: "Chưa chắc" } },
      { value: "D", label: { en: "No", vi: "Không" } }
    ],
    required: true
  },
  {
    id: 39,
    section: "Round 5: Dating & Marriage",
    type: "single",
    text: { en: "Family roles should be:", vi: "Vai trò trong gia đình nên:" },
    options: [
      { value: "A", label: { en: "Traditional", vi: "Truyền thống" } },
      { value: "B", label: { en: "Equal", vi: "Bình đẳng" } },
      { value: "C", label: { en: "Flexible", vi: "Linh hoạt" } },
      { value: "D", label: { en: "Based on ability", vi: "Tuỳ khả năng" } }
    ],
    required: true
  },
  {
    id: 40,
    section: "Round 5: Dating & Marriage",
    type: "single",
    text: { en: "In-laws influence should be:", vi: "Gia đình hai bên nên ảnh hưởng đến hôn nhân ở mức:" },
    options: [
      { value: "A", label: { en: "High", vi: "Nhiều" } },
      { value: "B", label: { en: "Moderate", vi: "Vừa phải" } },
      { value: "C", label: { en: "Low", vi: "Ít" } },
      { value: "D", label: { en: "Clear boundaries", vi: "Ranh giới rõ" } }
    ],
    required: true
  },
  {
    id: 41,
    section: "Round 5: Dating & Marriage",
    type: "multiple",
    maxOptions: 2,
    text: { en: "What makes you feel most loved?", vi: "Điều khiến bạn cảm thấy được yêu thương nhất?" },
    options: [
      { value: "words", label: { en: "Words", vi: "Lời nói" } },
      { value: "acts", label: { en: "Actions", vi: "Hành động" } },
      { value: "time", label: { en: "Time", vi: "Thời gian" } },
      { value: "care", label: { en: "Care", vi: "Sự quan tâm" } },
      { value: "company", label: { en: "Companionship", vi: "Đồng hành" } }
    ],
    required: true
  },
  {
    id: 42,
    section: "Round 5: Dating & Marriage",
    type: "text",
    text: { en: "One biggest fear when marrying?", vi: "Một điều bạn sợ nhất khi kết hôn?" },
    required: true
  },
  {
    id: 43,
    section: "Round 5: Dating & Marriage",
    type: "text",
    text: { en: "What do you hope partner brings to your life?", vi: "Bạn mong người bạn đời sẽ mang lại điều gì cho cuộc sống của bạn?" },
    required: true
  },
  {
    id: 44,
    section: "Round 5: Dating & Marriage",
    type: "text",
    text: { en: "Describe ideal relationship in 1 sentence?", vi: "Nếu mô tả mối quan hệ lý tưởng trong 1 câu?" },
    required: true
  },

  // FINAL ROUND
  {
    id: 45,
    section: "Final Round",
    type: "text",
    text: { en: "Write a short letter to your future partner (Dear my future boy/girlfriend..)", vi: "Hãy viết một bức thư ngắn gửi tới người hẹn hò tương lai của bạn. (Dear my future boy/girlfriend..)" },
    required: true
  }
];
