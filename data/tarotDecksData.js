// File này chứa dữ liệu các bộ bài Tarot

const tarotDecks = {
  "classic": {
    "name": "Bộ bài truyền thống",
    "subtitle": "Bộ bài Tarot truyền thống với 78 lá bài chuẩn",
    "description": "Đây là bộ bài Tarot truyền thống bao gồm 78 lá bài chuẩn, bao gồm cả Major Arcana và Minor Arcana. Bộ bài này được thiết kế để cung cấp trải nghiệm đọc bài Tarot cổ điển, giúp người dùng khám phá các khía cạnh tâm linh, trực giác và sự hiểu biết sâu sắc về bản thân và thế giới xung quanh.",
    "cards": [
      {
        "id": 0,
        "name": "The Fool",
        "description": "Lá bài này cho thấy các khoản đầu tư của bạn có tiềm năng mang lại kết quả tích cực. The Fool tượng trưng cho sự khởi đầu mới, sự liều lĩnh tích cực và tinh thần khám phá. Nó khuyến khích bạn tin vào trực giác, mở lòng với những cơ hội mới nhưng vẫn cần tránh hành động bốc đồng.\n\nThe Fool cho thấy thành công có thể đến từ việc dám thử, trải nghiệm và học hỏi từ cả thành công lẫn thất bại. Kết quả cuối cùng phụ thuộc vào khả năng đón nhận hành trình và đưa ra quyết định thông minh của bạn.",
        "image": "/tarotdeck/thefool.jpeg"
      },
      {
        "id": 1,
        "name": "The Magician",
        "description": "The Magician cho thấy bạn có đầy đủ kỹ năng, nguồn lực và sự sáng tạo để khiến các khoản đầu tư hoặc dự định của mình trở nên thành công. Lá bài tượng trưng cho sự tập trung, tư duy chiến lược và khả năng biến ý tưởng thành hiện thực.\n\nNó khuyến khích bạn sử dụng kiến thức, sự linh hoạt và chủ động để tạo ra kết quả tích cực. Tuy nhiên, thành công vẫn phụ thuộc vào cách bạn áp dụng kỹ năng và phản ứng với thị trường.",
        "image": "/tarotdeck/themagician.jpeg"
      },
      {
        "id": 2,
        "name": "The High Priestess",
        "description": "The High Priestess cho thấy các quyết định hiện tại cần dựa vào trực giác, sự quan sát sâu sắc và việc lắng nghe những điều chưa được nói ra. Lá bài gợi ý rằng có những yếu tố ẩn mà bạn chưa nhìn thấy hết.\n\nNó khuyến khích bạn kiên nhẫn, lùi lại để nhìn rõ bản chất vấn đề và tin vào cảm nhận của chính mình.",
        "image": "/tarotdeck/thehighpriestess.jpeg"
      },
      {
        "id": 3,
        "name": "The Empress",
        "description": "The Empress tượng trưng cho sự phát triển, nuôi dưỡng và thịnh vượng. Lá bài báo hiệu rằng những nỗ lực của bạn có thể mang đến kết quả dồi dào và phong phú.\n\nNó khuyến khích bạn chăm chút, kiên nhẫn và tạo môi trường tốt để ý tưởng hoặc khoản đầu tư phát triển. Dù vậy, kết quả cuối cùng vẫn phụ thuộc vào hành động và chiến lược thực tế của bạn.",
        "image": "/tarotdeck/theempress.jpeg"
      },
      {
        "id": 4,
        "name": "The Emperor",
        "description": "The Emperor đại diện cho cấu trúc, kỷ luật và tư duy lãnh đạo. Lá bài cho thấy bạn cần cách tiếp cận có hệ thống, rõ ràng và kiên định.\n\nNó báo hiệu khả năng đạt kết quả tích cực nếu bạn kiểm soát tốt tình huống, lập kế hoạch chiến lược và ra quyết định dựa trên logic.",
        "image": "/tarotdeck/theemperor.jpeg"
      },
      {
        "id": 5,
        "name": "The Hierophant",
        "description": "The Hierophant liên quan đến sự truyền thống, ổn định và những nguyên tắc đã được chứng minh. Lá bài cho thấy bạn có thể đạt kết quả tốt nếu làm theo quy tắc, học hỏi từ người có kinh nghiệm và áp dụng những phương pháp đáng tin cậy.\n\nNó khuyên bạn giữ tư duy kỷ luật và không nên quá mạo hiểm vào lúc này.",
        "image": "/tarotdeck/thehierophant.jpeg"
      },
      {
        "id": 6,
        "name": "The Lovers",
        "description": "The Lovers tượng trưng cho sự hòa hợp và những lựa chọn dựa trên giá trị cá nhân. Lá bài cho thấy các quyết định của bạn nên dựa vào điều thật sự phù hợp với trái tim và niềm tin của mình.\n\nKhi tâm – trí – hành động đồng nhất, bạn sẽ đạt kết quả tốt hơn.",
        "image": "/tarotdeck/TheLovers.jpg"
      },
      {
        "id": 7,
        "name": "The Chariot",
        "description": "The Chariot đại diện cho ý chí mạnh mẽ, sự quyết tâm và khả năng vượt qua thử thách. Lá bài báo hiệu rằng bạn có thể đạt chiến thắng nếu giữ tập trung, kỷ luật và tiến lên với sự tự tin.\n\nNó nhấn mạnh rằng thành công đến từ việc kiểm soát cảm xúc và lái tình huống theo đúng hướng.",
        "image": "/tarotdeck/thechariot.jpeg"
      },
      {
        "id": 8,
        "name": "Strength",
        "description": "Strength tượng trưng cho lòng can đảm, sự kiên nhẫn và sức mạnh nội tại. Lá bài báo hiệu rằng bạn có thể vượt qua khó khăn bằng sự bình tĩnh và kiểm soát cảm xúc.\n\nNó khuyến khích bạn tin vào bản thân, kiên trì và tiếp tục tiến lên ngay cả khi mọi thứ trở nên khó khăn.",
        "image": "/tarotdeck/thestrength.jpeg"
      },
      {
        "id": 9,
        "name": "The Hermit",
        "description": "The Hermit cho thấy rằng bạn có thể làm điều gì đó để đạt được kết quả tốt nhất. Lá bài cho thấy rằng bạn có thể đạt được thành công bằng cách làm việc độc lập, không ảnh hưởng đến người khác.\n\nNó khuyến khích bạn làm việc độc lập và không ảnh hưởng đến người khác.",
        "image": "/tarotdeck/thehermit.jpeg"
      },
      {
        "id": 10,
        "name": "Wheel of Fortune",
        "description": "Wheel of Fortune tượng trưng cho sự thay đổi, chu kỳ và yếu tố may mắn. Lá bài cho thấy tình huống của bạn có thể biến chuyển bất ngờ — cả theo hướng tốt lẫn xấu.\n\nNó khuyến khích bạn linh hoạt, nắm bắt cơ hội và chấp nhận rằng không điều gì đứng yên mãi mãi. Tác động bên ngoài cũng đóng vai trò quan trọng trong kết quả.",
        "image": "/tarotdeck/wheeloffortune.jpeg"
      },
      {
        "id": 11,
        "name": "Justice",
        "description": "Justice tượng trưng cho sự công bằng, sự thật và luật nhân quả. Lá bài cho thấy kết quả của bạn sẽ phản ánh trực tiếp những gì bạn đã làm — đúng thì được thưởng, sai thì phải sửa.\n\nNó khuyên bạn đưa ra quyết định dựa trên lý trí, tính khách quan và đạo đức. Khi bạn hành động minh bạch và cẩn trọng, kết quả sẽ cân bằng và tích cực.",
        "image": "/tarotdeck/justice.jpeg"
      },
      {
        "id": 12,
        "name": "The Hanged Man",
        "description": "The Hanged Man báo hiệu một giai đoạn tạm dừng, thay đổi góc nhìn và buông bỏ. Lá bài khuyến khích bạn nhìn vấn đề theo một hướng khác để tìm ra giải pháp.\n\nNó cũng cho thấy đôi khi bạn cần chấp nhận hy sinh ngắn hạn để đạt được kết quả tốt hơn về lâu dài.",
        "image": "/tarotdeck/thehangedman.jpeg"
      },
      {
        "id": 13,
        "name": "Death",
        "description": "Death không phải là kết thúc tiêu cực mà là sự chuyển hóa. Lá bài tượng trưng cho việc kết thúc một chu kỳ cũ và mở ra cơ hội mới.\n\nNó khuyến khích bạn buông bỏ những thứ không còn phù hợp — thói quen, chiến lược hoặc cảm xúc cản trở bạn — để bắt đầu hành trình mới hiệu quả hơn.",
        "image": "/tarotdeck/death.jpeg"
      },
      {
        "id": 14,
        "name": "Temperance",
        "description": "Temperance đại diện cho sự cân bằng, hòa hợp và tiết chế. Lá bài cho thấy bạn sẽ có kết quả tốt nếu giữ sự bình tĩnh, kết hợp lý trí và trực giác, và không hành động quá đà.\n\nNó nhắc bạn rằng thành công đến từ sự điều độ, kiên nhẫn và phối hợp nhịp nhàng giữa các yếu tố.",
        "image": "/tarotdeck/temperance.jpeg"
      },
      {
        "id": 15,
        "name": "The Devil",
        "description": "The Devil cảnh báo về sự cám dỗ, ảo tưởng và những ràng buộc không lành mạnh. Lá bài cho thấy bạn có thể bị ảnh hưởng bởi lòng tham, sự phụ thuộc hoặc quyết định thiếu sáng suốt.\n\nNó khuyến khích bạn nhận ra điều gì đang trói buộc mình và dũng cảm thoát khỏi để tránh hậu quả tiêu cực.",
        "image": "/tarotdeck/thedevil.jpeg"
      },
      {
        "id": 16,
        "name": "The Tower",
        "description": "The Tower báo hiệu sự thay đổi đột ngột, sự sụp đổ những điều cũ để nhường chỗ cho cái mới. Dù mang tính sốc hoặc khó chịu, đây là sự thật cần được phơi bày.\n\nLá bài nhắc bạn phải sẵn sàng thích ứng, dọn dẹp lại nền tảng và xây dựng lại mạnh mẽ hơn sau biến cố.",
        "image": "/tarotdeck/thetower.jpeg"
      },
      {
        "id": 17,
        "name": "The Star",
        "description": "The Star tượng trưng cho hy vọng, sự chữa lành và cảm hứng. Lá bài cho thấy bạn đang đi đúng hướng và sẽ nhận được sự hỗ trợ tinh thần mạnh mẽ.\n\nNó khuyến khích bạn giữ niềm tin, mở lòng và tiếp tục bước đi với sự lạc quan. Những kết quả tích cực đang đến gần.",
        "image": "/tarotdeck/thestar.jpeg"
      },
      {
        "id": 18,
        "name": "The Moon",
        "description": "The Moon đại diện cho sự mơ hồ, cảm xúc và những điều ẩn giấu. Lá bài cho thấy bạn có thể bị ảnh hưởng bởi nỗi sợ, sự nghi ngờ hoặc thông tin không rõ ràng.\n\nNó nhắc bạn phải bình tĩnh, kiểm chứng thông tin và tin vào trực giác — nhưng đừng để cảm xúc che mờ lý trí.",
        "image": "/tarotdeck/themoon.jpeg"
      },
      {
        "id": 19,
        "name": "The Sun",
        "description": "The Sun là lá bài của sự thành công, niềm vui và kết quả tích cực. Nó cho thấy bạn đang bước vào giai đoạn thuận lợi, tràn đầy năng lượng và sự rõ ràng.\n\nNó khuyến khích bạn tự tin, tận dụng cơ hội và tin vào những điều tốt đẹp sẽ đến.",
        "image": "/tarotdeck/thesun.jpeg"
      },
      {
        "id": 20,
        "name": "Judgement",
        "description": "Judgement báo hiệu một giai đoạn thức tỉnh, đánh giá lại bản thân và thay đổi dựa trên bài học cũ. Bạn đang được kêu gọi đưa ra quyết định lớn dựa trên sự hiểu biết sâu sắc.\n\nNó cho thấy đây là thời điểm hoàn thiện, buông bỏ lỗi lầm cũ và bước sang giai đoạn trưởng thành hơn.",
        "image": "/tarotdeck/judgement.jpeg"
      },
      {
        "id": 21,
        "name": "The World",
        "description": "The World tượng trưng cho sự hoàn thành, trọn vẹn và đạt được mục tiêu. Lá bài báo hiệu bạn đang tiến tới một kết quả viên mãn, nơi mọi nỗ lực trước đây được đền đáp xứng đáng.\n\nNó khuyến khích bạn ăn mừng thành tựu, đồng thời chuẩn bị cho một chu kỳ mới với tâm thế trưởng thành và mạnh mẽ hơn.",
        "image": "/tarotdeck/theworld.jpeg"
      },
      {
        "id": 22,
        "name": "Ace of Cups",
        "description": "Ace of Cups đại diện cho sự khởi đầu mới đầy cảm xúc, cơ hội mới và nguồn năng lượng tích cực. Lá bài báo hiệu bạn sắp đón nhận niềm vui, sự chữa lành hoặc cơ hội mở lòng.\n\nNó khuyến khích bạn lắng nghe cảm xúc và tin vào sự kết nối chân thật để đạt được kết quả tốt đẹp.",
        "image": "/tarotdeck/aceofcups.jpeg"
      },
      {
        "id": 23,
        "name": "Two of Cups",
        "description": "Two of Cups tượng trưng cho sự hòa hợp, kết nối và mối quan hệ đôi bên cùng có lợi. Lá bài báo hiệu sự hợp tác hoặc kết nối cảm xúc mang lại kết quả tích cực.\n\nNó nhắc bạn trân trọng sự đồng hành và chọn những điều phù hợp với trái tim để đạt sự cân bằng.",
        "image": "/tarotdeck/twoofcups.jpeg"
      },
      {
        "id": 24,
        "name": "Three of Cups",
        "description": "Three of Cups biểu thị niềm vui, sự đoàn tụ và năng lượng tích cực từ cộng đồng. Lá bài báo hiệu thành công được chia sẻ, sự hỗ trợ và những khoảnh khắc đáng ăn mừng.\n\nNó nhắc bạn rằng làm việc cùng nhau sẽ mang lại kết quả tốt hơn.",
        "image": "/tarotdeck/threeofcups.jpeg"
      },
      {
        "id": 25,
        "name": "Four of Cups",
        "description": "Four of Cups nói về sự chán nản, thờ ơ hoặc không nhận ra cơ hội trước mắt. Lá bài khuyến khích bạn nhìn lại cảm xúc hiện tại và mở lòng để đón nhận điều mới.\n\nĐôi khi bạn quá tập trung vào nỗi thất vọng mà bỏ lỡ những lựa chọn tốt hơn.",
        "image": "/tarotdeck/fourofcups.jpeg"
      },
      {
        "id": 26,
        "name": "Five of Cups",
        "description": "Five of Cups tượng trưng cho mất mát, thất vọng hoặc tiếc nuối. Lá bài nhắc bạn rằng dù có điều không như ý, vẫn có cơ hội phía sau mà bạn chưa nhìn thấy.\n\nNó khuyến khích bạn học từ nỗi buồn, đứng dậy và hướng về những điều còn lại.",
        "image": "/tarotdeck/fiveofcups.jpeg"
      },
      {
        "id": 27,
        "name": "Six of Cups",
        "description": "Six of Cups biểu thị sự hoài niệm, ký ức cũ và ảnh hưởng từ quá khứ. Lá bài có thể cho thấy bạn đang được hỗ trợ bởi những mối quan hệ hoặc kinh nghiệm cũ.\n\nNó nhắc bạn trân trọng quá khứ nhưng không bị mắc kẹt trong đó.",
        "image": "/tarotdeck/sixofcups.jpeg"
      },
      {
        "id": 28,
        "name": "Seven of Cups",
        "description": "Seven of Cups nói về sự lựa chọn quá nhiều dẫn đến bối rối. Lá bài cảnh báo bạn tránh ảo tưởng hoặc kỳ vọng không thực tế.\n\nNó nhắc bạn cần tỉnh táo, dùng lý trí để chọn hướng phù hợp thay vì để cảm xúc dẫn dắt.",
        "image": "/tarotdeck/sevenofcups.jpeg"
      },
      {
        "id": 29,
        "name": "Eight of Cups",
        "description": "Eight of Cups biểu thị việc rời bỏ những điều không còn phù hợp để tìm kiếm mục tiêu mới có ý nghĩa hơn. Nó cho thấy bạn đang trong hành trình khám phá, buông bỏ và trưởng thành.\n\nLá bài khuyến khích bạn can đảm bước đi dù chưa chắc chắn phía trước.",
        "image": "/tarotdeck/eightofcups.jpeg"
      },
      {
        "id": 30,
        "name": "Nine of Cups",
        "description": "Nine of Cups là lá bài của sự thỏa mãn, ước mơ thành hiện thực và niềm vui cá nhân. Nó cho thấy mong muốn của bạn sắp đạt được hoặc đang trên đà thành công.\n\nNó khuyến khích bạn tin vào bản thân và tận hưởng thành quả.",
        "image": "/tarotdeck/nineofcups.jpeg"
      },
      {
        "id": 31,
        "name": "Ten of Cups",
        "description": "Ten of Cups đại diện cho hạnh phúc trọn vẹn, sự viên mãn trong cảm xúc và hòa hợp trong các mối quan hệ. Lá bài báo hiệu giai đoạn bình yên, vui vẻ và kết nối sâu sắc.\n\nNó nhắc bạn trân trọng những gì mình đang có và nuôi dưỡng sự hài lòng trong cuộc sống.",
        "image": "/tarotdeck/tenofcups.jpeg"
      },
      {
        "id": 32,
        "name": "Page of Cups",
        "description": "Page of Cups biểu thị sự nhạy cảm, trực giác mạnh và những thông điệp cảm xúc mới. Lá bài báo hiệu cơ hội mới liên quan đến cảm xúc hoặc sự sáng tạo.\n\nNó khuyến khích bạn mở lòng, đón nhận sự bất ngờ và tin vào trực giác.",
        "image": "/tarotdeck/pageofcups.jpeg"
      },
      {
        "id": 33,
        "name": "Knight of Cups",
        "description": "Knight of Cups tượng trưng cho sự lãng mạn, lý tưởng hóa và hành động theo cảm xúc. Lá bài báo hiệu ai đó hoặc chính bạn đang theo đuổi một mục tiêu mang tính cảm xúc mạnh mẽ.\n\nNó nhắc bạn cân bằng giữa cảm xúc và thực tế để đạt kết quả tốt.",
        "image": "/tarotdeck/knightofcups.jpeg"
      },
      {
        "id": 34,
        "name": "Queen of Cups",
        "description": "Queen of Cups biểu thị lòng trắc ẩn, sự sâu sắc trong cảm xúc và trực giác mạnh. Lá bài cho thấy bạn đang trong trạng thái nhạy bén, có khả năng hiểu rõ cảm xúc của mình và người khác.\n\nNó khuyến khích bạn chăm sóc bản thân và tin vào trí tuệ cảm xúc.",
        "image": "/tarotdeck/queenofcups.jpeg"
      },
      {
        "id": 35,
        "name": "King of Cups",
        "description": "King of Cups tượng trưng cho sự bình tĩnh, điềm đạm và trí tuệ cảm xúc. Lá bài báo hiệu khả năng kiểm soát cảm xúc tốt và đưa ra quyết định sáng suốt trong các tình huống nhạy cảm.\n\nNó nhắc bạn giữ cân bằng và nhìn nhận mọi thứ bằng sự bao dung.",
        "image": "/tarotdeck/kingofcups.jpeg"
      },
      {
        "id": 36,
        "name": "Ace of Pentacles",
        "description": "Ace of Pentacles đại diện cho cơ hội mới trong tài chính, công việc hoặc sự ổn định. Lá bài báo hiệu sự khởi đầu đầy triển vọng, mang tính thực tế và bền vững.\n\nNó khuyến khích bạn nắm bắt cơ hội và xây dựng nền tảng vững chắc.",
        "image": "/tarotdeck/aceofpentacles.jpeg"
      },
      {
        "id": 37,
        "name": "Two of Pentacles",
        "description": "Two of Pentacles nói về việc cân bằng nhiều trách nhiệm hoặc lựa chọn. Lá bài khuyến khích bạn sắp xếp thời gian, linh hoạt và ưu tiên rõ ràng.\n\nNếu giữ nhịp độ hợp lý, bạn sẽ duy trì được sự ổn định.",
        "image": "/tarotdeck/twoofpentacles.jpeg"
      },
      {
        "id": 38,
        "name": "Three of Pentacles",
        "description": "Three of Pentacles thể hiện sự hợp tác, làm việc nhóm và phát triển kỹ năng. Lá bài báo hiệu thành công sẽ đến khi bạn phối hợp cùng người khác và lắng nghe góp ý.\n\nNó nhắc bạn rằng teamwork mang lại kết quả cao hơn.",
        "image": "/tarotdeck/threeofpentacles.jpeg"
      },
      {
        "id": 39,
        "name": "Four of Pentacles",
        "description": "Four of Pentacles liên quan đến sự kiểm soát, tiết kiệm và nỗi sợ mất mát. Lá bài cho thấy bạn đang giữ quá chặt điều gì đó — tiền bạc, cảm xúc hoặc quan điểm.\n\nNó khuyến khích bạn mở lòng và tin rằng sự linh hoạt sẽ mang lại kết quả tốt hơn.",
        "image": "/tarotdeck/fourofpentacles.jpeg"
      },
      {
        "id": 40,
        "name": "Five of Pentacles",
        "description": "Five of Pentacles đại diện cho khó khăn tài chính, cảm giác bị bỏ rơi hoặc thiếu hỗ trợ. Lá bài cho thấy bạn đang trải qua giai đoạn thử thách.\n\nNó nhắc bạn rằng sự giúp đỡ luôn tồn tại — bạn chỉ cần chủ động tìm và tin rằng khổ nạn rồi sẽ qua.",
        "image": "/tarotdeck/fiveofpentacles.jpeg"
      },
      {
        "id": 41,
        "name": "Six of Pentacles",
        "description": "Six of Pentacles nói về sự cho đi, nhận lại và dòng chảy cân bằng của nguồn lực. Lá bài báo hiệu bạn có thể nhận được sự hỗ trợ hoặc đang ở vị trí giúp đỡ người khác.\n\nNó nhắc bạn giữ sự hào phóng nhưng cũng phải biết giới hạn để không mất cân bằng.",
        "image": "/tarotdeck/sixofpentacles.jpeg"
      },
      {
        "id": 42,
        "name": "Seven of Pentacles",
        "description": "Seven of Pentacles biểu thị sự kiên nhẫn, đánh giá tiến độ và đầu tư lâu dài. Lá bài cho thấy bạn đã nỗ lực nhiều và đang chờ kết quả.\n\nNó khuyến khích bạn tiếp tục kiên trì — thành quả sẽ đến, nhưng cần thời gian.",
        "image": "/tarotdeck/sevenofpentacles.jpeg"
      },
      {
        "id": 43,
        "name": "Eight of Pentacles",
        "description": "Eight of Pentacles đại diện cho sự tập trung, chăm chỉ và nâng cao kỹ năng. Lá bài báo hiệu bạn đang tiến bộ rõ rệt nhờ sự cố gắng và tinh thần chuyên nghiệp.\n\nNó khuyến khích bạn tiếp tục rèn luyện — bạn đang đi đúng hướng.",
        "image": "/tarotdeck/eightofpentacles.jpeg"
      },
      {
        "id": 44,
        "name": "Nine of Pentacles",
        "description": "Nine of Pentacles biểu thị sự độc lập, sang trọng và thành tựu cá nhân. Lá bài báo hiệu bạn sắp đạt được sự ổn định hoặc thành công mà bạn đã nỗ lực tạo dựng.\n\nNó nhắc bạn tận hưởng thành quả và tin vào giá trị bản thân.",
        "image": "/tarotdeck/nineofpentacles.jpeg"
      },
      {
        "id": 45,
        "name": "Ten of Pentacles",
        "description": "Ten of Pentacles tượng trưng cho sự viên mãn về vật chất, gia đình và nền tảng bền vững. Lá bài báo hiệu thành công dài hạn hoặc một cấu trúc ổn định đang được xây dựng.\n\nNó nhắc bạn đầu tư vào tương lai và những giá trị bền vững.",
        "image": "/tarotdeck/tenofpentacles.jpeg"
      },
      {
        "id": 46,
        "name": "Page of Pentacles",
        "description": "Page of Pentacles biểu thị sự ham học, cơ hội mới và những ý tưởng thực tế. Lá bài báo hiệu bạn đang ở giai đoạn bắt đầu một mục tiêu hoặc kiến thức mới.\n\nNó khuyến khích bạn kiên trì và thực tế — tiến bộ sẽ đến.",
        "image": "/tarotdeck/pageofpentacles.jpeg"
      },
      {
        "id": 47,
        "name": "Knight of Pentacles",
        "description": "Knight of Pentacles đại diện cho sự chăm chỉ, bền bỉ và đáng tin. Lá bài cho thấy bạn đang kiên định với con đường của mình và điều đó sẽ mang lại kết quả lâu dài.\n\nNó nhắc bạn đừng vội vàng — sự ổn định mới là chìa khóa.",
        "image": "/tarotdeck/knightofpentacles.jpeg"
      },
      {
        "id": 48,
        "name": "Queen of Pentacles",
        "description": "Queen of Pentacles biểu thị sự nuôi dưỡng, ổn định và khả năng quản lý tốt cuộc sống vật chất. Lá bài cho thấy bạn có thể tạo ra môi trường thịnh vượng cho bản thân và người khác.\n\nNó khuyến khích bạn cân bằng giữa sự chăm sóc và thực tế tài chính.",
        "image": "/tarotdeck/queenofpentacles.jpeg"
      },
      {
        "id": 49,
        "name": "King of Pentacles",
        "description": "King of Pentacles tượng trưng cho sự thành công, ổn định tài chính và tư duy lãnh đạo thực tế. Lá bài báo hiệu bạn đang hoặc sẽ đạt được sự vững vàng nhờ nỗ lực và chiến lược rõ ràng.\n\nNó nhắc bạn tiếp tục kiên định và dùng kinh nghiệm để ra quyết định.",
        "image": "/tarotdeck/kingofpentacles.jpeg"
      },
      {
        "id": 50,
        "name": "Ace of Swords",
        "description": "Ace of Swords đại diện cho sự rõ ràng, trí tuệ và một khởi đầu mới dựa trên sự thật. Lá bài báo hiệu bạn đang có bước đột phá về tư duy hoặc giải pháp.\n\nNó khuyến khích bạn cắt bỏ sự rối rắm và tập trung vào sự thật để đạt kết quả tốt.",
        "image": "/tarotdeck/aceofswords.jpeg"
      },
      {
        "id": 51,
        "name": "Two of Swords",
        "description": "Two of Swords nói về sự do dự, bối rối và việc né tránh đưa ra quyết định. Lá bài cho thấy bạn đang đứng giữa hai lựa chọn khó khăn và chưa muốn đối mặt.\n\nNó khuyến khích bạn mở lòng, tìm hiểu sự thật và giải quyết vấn đề thay vì trì hoãn.",
        "image": "/tarotdeck/twoofswords.jpeg"
      },
      {
        "id": 52,
        "name": "Three of Swords",
        "description": "Three of Swords tượng trưng cho nỗi đau, thất vọng hoặc sự tổn thương cảm xúc. Lá bài báo hiệu bạn đang trải qua sự chia cắt hoặc hiểu lầm.\n\nNó nhắc bạn chữa lành, chấp nhận sự thật và cho bản thân thời gian.",
        "image": "/tarotdeck/threeofswords.jpeg"
      },
      {
        "id": 53,
        "name": "Four of Swords",
        "description": "Four of Swords biểu thị sự nghỉ ngơi, hồi phục và tái tạo năng lượng. Lá bài cho thấy bạn cần rút lui tạm thời để suy nghĩ rõ ràng hơn.\n\nNó khuyến khích bạn giữ bình tĩnh và không hành động vội vàng.",
        "image": "/tarotdeck/fourofswords.jpeg"
      },
      {
        "id": 54,
        "name": "Five of Swords",
        "description": "Five of Swords nói về xung đột, tranh cãi hoặc chiến thắng mang tính tổn thất. Lá bài cho thấy dù bạn thắng, cảm xúc hoặc mối quan hệ có thể bị ảnh hưởng.\n\nNó nhắc bạn cân nhắc xem điều gì thực sự đáng để đấu tranh.",
        "image": "/tarotdeck/fiveofswords.jpeg"
      },
      {
        "id": 55,
        "name": "Six of Swords",
        "description": "Six of Swords đại diện cho hành trình chuyển tiếp, rời bỏ khó khăn và hướng đến nơi bình yên hơn. Dù chưa hoàn toàn thoải mái, bạn đang đi đúng hướng.\n\nNó khuyến khích bạn tiếp tục tiến lên và tin rằng điều tốt đẹp đang chờ phía trước.",
        "image": "/tarotdeck/sixofswords.jpeg"
      },
      {
        "id": 56,
        "name": "Seven of Swords",
        "description": "Seven of Swords nói về sự không trung thực, né tránh hoặc làm việc một mình. Lá bài cảnh báo có ai đó — hoặc chính bạn — đang giấu điều gì.\n\nNó khuyến khích bạn minh bạch hoặc thận trọng với những người xung quanh.",
        "image": "/tarotdeck/sevenofswords.jpeg"
      },
      {
        "id": 57,
        "name": "Eight of Swords",
        "description": "Eight of Swords biểu thị cảm giác bị mắc kẹt, tự giới hạn hoặc lo lắng. Lá bài cho thấy bạn đang bị tâm trí cản trở thay vì tình huống thực tế.\n\nNó nhắc bạn nhìn lại sự thật — giải pháp vẫn có, bạn chỉ cần dũng cảm bước ra khỏi nỗi sợ.",
        "image": "/tarotdeck/eightofswords.jpeg"
      },
      {
        "id": 58,
        "name": "Nine of Swords",
        "description": "Nine of Swords nói về lo âu, ám ảnh và suy nghĩ tiêu cực. Lá bài cho thấy bạn đang nghĩ nhiều quá mức, khiến bản thân kiệt sức.\n\nNó khuyến khích bạn đối mặt với nỗi sợ, tìm sự giúp đỡ và không tự trách mình.",
        "image": "/tarotdeck/nineofswords.jpeg"
      },
      {
        "id": 59,
        "name": "Ten of Swords",
        "description": "Ten of Swords báo hiệu kết thúc đau đớn hoặc một giai đoạn suy sụp. Dù khó chịu, đây là lúc để chấm dứt những điều không còn phục vụ bạn.\n\nNó nhắc bạn rằng sau sự kết thúc là sự tái sinh — bạn sẽ đứng dậy mạnh hơn.",
        "image": "/tarotdeck/tenofswords.jpeg"
      },
      {
        "id": 60,
        "name": "Page of Swords",
        "description": "Page of Swords biểu thị sự tò mò, trí tuệ và tinh thần ham học. Lá bài báo hiệu bạn đang có ý tưởng mới hoặc động lực khám phá.\n\nNó khuyến khích bạn mạnh dạn theo đuổi kiến thức nhưng tránh hành động bốc đồng.",
        "image": "/tarotdeck/pageofswords.jpeg"
      },
      {
        "id": 61,
        "name": "Knight of Swords",
        "description": "Knight of Swords tượng trưng cho tốc độ, sự quyết liệt và tư duy sắc bén. Lá bài cho thấy bạn đang hành động nhanh, quyết định mạnh và theo đuổi mục tiêu không do dự.\n\nTuy nhiên, nó cũng nhắc bạn cẩn thận — hành động quá vội vàng có thể gây sai sót hoặc xung đột.",
        "image": "/tarotdeck/knightofswords.jpeg"
      },
      {
        "id": 62,
        "name": "Queen of Swords",
        "description": "Queen of Swords thể hiện trí tuệ, sự tỉnh táo và khả năng nhìn thấu bản chất vấn đề. Lá bài cho thấy bạn đang (hoặc cần) suy nghĩ rõ ràng, sắc bén và không để cảm xúc chi phối.\n\nNó khuyến khích bạn trung thực, cứng rắn và đặt ra ranh giới lành mạnh.",
        "image": "/tarotdeck/queenofswords.jpeg"
      },
      {
        "id": 63,
        "name": "King of Swords",
        "description": "King of Swords đại diện cho lý trí mạnh mẽ, sự công bằng và tư duy chiến lược. Lá bài báo hiệu bạn có khả năng đưa ra quyết định khách quan và sáng suốt.\n\nNó nhắc bạn dùng trí tuệ và logic để giải quyết vấn đề, không để cảm xúc lấn át.",
        "image": "/tarotdeck/kingofswords.jpeg"
      },
      {
        "id": 64,
        "name": "Ace of Wands",
        "description": "Ace of Wands tượng trưng cho nguồn năng lượng mới, cảm hứng mạnh mẽ và động lực để bắt đầu một hành trình. Lá bài báo hiệu cơ hội tuyệt vời đang đến.\n\nNó khuyến khích bạn hành động táo bạo và theo đuổi niềm đam mê.",
        "image": "/tarotdeck/aceofwands.jpeg"
      },
      {
        "id": 65,
        "name": "Two of Wands",
        "description": "Two of Wands nói về kế hoạch, tầm nhìn và lựa chọn. Lá bài cho thấy bạn đã có định hướng và đang cân nhắc bước đi tiếp theo.\n\nNó khuyến khích bạn tự tin mở rộng, khám phá và không sợ bước ra khỏi vùng an toàn.",
        "image": "/tarotdeck/twoofwands.jpeg"
      },
      {
        "id": 66,
        "name": "Three of Wands",
        "description": "Three of Wands báo hiệu sự tiến triển, cơ hội mở rộng và kết quả từ nỗ lực trước đó. Lá bài cho thấy bạn đang đứng trước tầm nhìn mới hoặc thành công sắp đến.\n\nNó nhắc bạn kiên trì và sẵn sàng nắm bắt khi cơ hội xuất hiện.",
        "image": "/tarotdeck/threeofwands.jpeg"
      },
      {
        "id": 67, 
        "name": "Four of Wands",
        "description": "Four of Wands đại diện cho sự ăn mừng, ổn định và những cột mốc tích cực. Lá bài báo hiệu sự hòa hợp, tin vui hoặc thành tựu quan trọng.\n\nNó khuyến khích bạn tận hưởng khoảnh khắc và ghi nhận thành quả.",
        "image": "/tarotdeck/fourofwands.jpeg"
      },
      {
        "id": 68,
        "name": "Five of Wands",
        "description": "Five of Wands nói về cạnh tranh, xung đột hoặc sự va chạm quan điểm. Lá bài cho thấy bạn đang phải đối mặt với nhiều ý kiến khác nhau khiến tình hình trở nên hỗn loạn.\n\nNó nhắc bạn giữ bình tĩnh, tìm hướng giải quyết thay vì tranh cãi vô ích.",
        "image": "/tarotdeck/fiveofwands.jpeg"
      },
      {
        "id": 69,
        "name": "Six of Wands",
        "description": "Six of Wands là lá bài chiến thắng, công nhận và thành tựu. Nó báo hiệu bạn sắp được ghi nhận vì nỗ lực của mình.\n\nNó khuyến khích bạn tự tin bước tiếp — bạn đang đi đúng hướng.",
        "image": "/tarotdeck/sixofwands.jpeg"
      },
      {
        "id": 70,
        "name": "Seven of Wands",
        "description": "Seven of Wands đại diện cho thử thách, sự bảo vệ quan điểm và lòng kiên định. Lá bài cho thấy bạn cần đứng vững trước áp lực hoặc cạnh tranh.\n\nNó nhắc bạn giữ lập trường và kiên trì đến cùng.",
        "image": "/tarotdeck/sevenofwands.jpeg"
      },
      {
        "id": 71,
        "name": "Eight of Wands",
        "description": "Eight of Wands tượng trưng cho tốc độ, sự tiến triển nhanh và tin tức đến bất ngờ. Lá bài báo hiệu mọi thứ đang chuyển động nhanh hơn bạn nghĩ.\n\nNó khuyến khích bạn hành động kịp thời và nắm bắt cơ hội ngay khi nó xuất hiện.",
        "image": "/tarotdeck/eightofwands.jpeg"
      },
      {
        "id": 72,
        "name": "Nine of Wands",
        "description": "Nine of Wands nói về sự kiên cường, phòng thủ và không bỏ cuộc. Lá bài cho thấy bạn đã trải qua nhiều thử thách nhưng vẫn đứng vững.\n\nNó khuyến khích bạn cố thêm một chút — bạn gần đến đích rồi.",
        "image": "/tarotdeck/nineofwands.jpeg"
      },
      {
        "id": 73,
        "name": "Ten of Wands",
        "description": "Ten of Wands biểu thị áp lực, gánh nặng và làm việc quá sức. Lá bài cho thấy bạn đang ôm quá nhiều trách nhiệm khiến bản thân kiệt quệ.\n\nNó nhắc bạn buông bớt, san sẻ hoặc sắp xếp lại để tiến lên nhẹ nhàng hơn.",
        "image": "/tarotdeck/tenofwands.jpeg"
      },
      {
        "id": 74,
        "name": "Page of Wands",
        "description": "Page of Wands tượng trưng cho sự nhiệt huyết, khám phá và ý tưởng mới. Lá bài báo hiệu một cơ hội thú vị hoặc nguồn cảm hứng mạnh mẽ.\n\nNó khuyến khích bạn dám thử và đón nhận hành trình mới.",
        "image": "/tarotdeck/pageofwands.jpeg"
      },
      {
        "id": 75,
        "name": "Knight of Wands",
        "description": "Knight of Wands đại diện cho năng lượng mạnh mẽ, sự tự tin và hành động quyết đoán. Lá bài báo hiệu bạn đang cháy hết mình cho mục tiêu.\n\nTuy nhiên, nó nhắc bạn kiểm soát sự bốc đồng để tránh sai lầm.",
        "image": "/tarotdeck/knightofwands.jpeg"
      },
      {
        "id": 76,
        "name": "Queen of Wands",
        "description": "Queen of Wands biểu thị sự cuốn hút, tự tin và nguồn năng lượng sáng tạo mạnh mẽ. Lá bài cho thấy bạn đang trong thời điểm tỏa sáng và được nhiều người tin tưởng.\n\nNó khuyến khích bạn lan tỏa sự tích cực và giữ vững bản lĩnh.",
        "image": "/tarotdeck/queenofwands.jpeg"
      },
      {
        "id": 77,
        "name": "King of Wands",
        "description": "King of Wands tượng trưng cho tầm nhìn, sự lãnh đạo và khát vọng mạnh mẽ. Lá bài báo hiệu bạn có khả năng dẫn dắt và thực hiện hoài bão lớn.\n\nNó khuyến khích bạn hành động táo bạo nhưng có kế hoạch.",
        "image": "/tarotdeck/kingofwands.jpeg"
      }
    ]
  },
  "major_arcana": {
    "name": "Major Arcana",
    "subtitle": "The Fool's Journey",
    "description": "Major Arcana là tập hợp 22 lá bài chính trong bộ bài Tarot, đại diện cho những chủ đề lớn và các giai đoạn quan trọng trong cuộc sống. Chúng kể câu chuyện về hành trình của The Fool, biểu tượng cho sự phát triển cá nhân và tinh thần từ sự ngây thơ đến sự giác ngộ.\n\nMỗi lá bài trong Major Arcana mang ý nghĩa sâu sắc, phản ánh các khía cạnh khác nhau của trải nghiệm con người, từ những khởi đầu mới, thử thách, đến sự hoàn thành và trí tuệ cao hơn.",
    "cards": [
      {
        "id": 0,
        "name": "The Fool",
        "upright_keywords": ["khởi đầu", "tự do", "ngây thơ", "độc đáo", "phiêu lưu", "lý tưởng", "tự phát"],
        "reversed_keywords": ["liều lĩnh", "bất cẩn", "xao nhãng", "ngây ngô", "dại dột", "dễ bị lợi dụng", "trì trệ", "nhàm chán"],
        "description": "The Fool mô tả một chàng trai trẻ bước đi vui vẻ vào thế giới, bắt đầu hành trình đầu tiên của mình. Anh ta mang theo rất ít hành trang, tràn đầy niềm hân hoan và sự háo hức. Anh không để ý đến những nguy hiểm phía trước, có thể do ngây thơ hoặc chưa nhận thức được, trong khi một chú chó sủa như lời cảnh báo phía sau.",
        "meanings": {
          "upright": {
            "general": "The Fool mang số 0 – con số của tiềm năng vô hạn. Lá bài đại diện cho sự khởi đầu mới, tinh thần lạc quan và tự do khỏi những giới hạn quen thuộc.",
            "love": "Báo hiệu một hành trình mới, một mối quan hệ mới đầy cởi mở và không sợ tổn thương.",
            "career": "Cho thấy những khởi đầu mới như đổi việc, bắt đầu dự án mới hoặc thử nghiệm ý tưởng sáng tạo.",
            "finances": "Thể hiện sự chi tiêu mang tính tự phát hoặc đầu tư vào trải nghiệm, học hỏi.",
            "feelings": "Sự hào hứng, tò mò và mong muốn tự do trong cảm xúc.",
            "actions": "Dũng cảm bước ra khỏi vùng an toàn, tin tưởng vào bản thân và chấp nhận rủi ro."
          },
          "reversed": {
            "general": "Cảnh báo sự liều lĩnh, thiếu suy nghĩ hoặc không lường trước hậu quả của hành động.",
            "love": "Sự thiếu chín chắn, do dự hoặc nhìn mối quan hệ quá mơ mộng, thiếu thực tế.",
            "career": "Sự trì trệ, quyết định vội vàng hoặc không nhận thức được tác động của hành động cá nhân.",
            "finances": "Lời nhắc phải thận trọng, tránh chi tiêu bốc đồng và nên tìm hiểu kỹ trước khi đầu tư.",
            "feelings": "Sự do dự, bất an hoặc sợ hãi khi phải bước vào điều mới.",
            "actions": "Không nên vội vàng; cần suy nghĩ thấu đáo và lập kế hoạch chắc chắn."
          }
        },
        "image": "/tarotdeck/majorarcana/the-fool-meaning.png"
      },
      {
        "id": 1,
        "name": "The Magician",
        "upright_keywords": ["ý chí", "khát vọng", "sáng tạo", "hiện thực hóa", "kỹ năng", "tự tin"],
        "reversed_keywords": ["thao túng", "ảo tưởng", "thiếu định hướng", "lãng phí tài năng", "trục lợi"],
        "description": "The Magician đứng trước bàn thờ với bốn biểu tượng của các bộ ẩn phụ. Một tay hướng lên trời, một tay chỉ xuống đất, tượng trưng cho khả năng kết nối tâm linh và vật chất để tạo ra thực tại.",
        "meanings": {
          "upright": {
            "general": "Đại diện cho sức mạnh ý chí và khả năng biến ý tưởng thành hành động thực tế. Bạn có đủ công cụ để thành công.",
            "love": "Sự chủ động và quyến rũ. Bạn có khả năng tạo ra một mối quan hệ ý nghĩa thông qua sự tự tin.",
            "career": "Thời điểm tốt để bắt đầu dự án. Bạn có kỹ năng và sự tập trung cần thiết để đạt được mục tiêu.",
            "finances": "Tiềm năng tạo ra thu nhập từ tài năng cá nhân. Hãy hành động để hiện thực hóa các cơ hội tài chính.",
            "feelings": "Cảm thấy mạnh mẽ, được truyền cảm hứng và có sức hút lớn đối với người khác.",
            "actions": "Hãy bắt tay vào làm ngay. Sử dụng mọi nguồn lực bạn có để đạt được mục đích."
          },
          "reversed": {
            "general": "Cảnh báo về sự thiếu tập trung hoặc sử dụng kỹ năng vào mục đích không tốt. Sự ảo tưởng về năng lực.",
            "love": "Có thể có sự thao túng hoặc thiếu chân thành trong mối quan hệ. Cần nhìn nhận rõ ý đồ của đối phương.",
            "career": "Lãng phí tài năng hoặc cảm thấy bế tắc do thiếu kế hoạch rõ ràng.",
            "finances": "Cẩn thận với những lời hứa hẹn tài chính quá hão huyền hoặc các vụ lừa đảo.",
            "feelings": "Sự tự ti, cảm giác không đủ khả năng hoặc bối rối về mong muốn của bản thân.",
            "actions": "Cần xem xét lại mục tiêu; tránh các hành động mang tính lừa dối hoặc thiếu minh bạch."
          }
        },
        "image": "/tarotdeck/majorarcana/the-magician-meaning.png"
      },
      {
        "id": 2,
        "name": "The High Priestess",
        "upright_keywords": ["trực giác", "bí mật", "tiềm thức", "nội tâm", "sự huyền bí", "kiến thức"],
        "reversed_keywords": ["thiếu trực giác", "tin đồn", "bí mật bị lộ", "sống ảo", "mất kết nối nội tâm"],
        "description": "Bà ngồi giữa hai cột đen và trắng, tượng trưng cho sự cân bằng giữa các thái cực. Cuốn sách Tora trên tay đại diện cho luật pháp và tri thức ẩn giấu.",
        "meanings": {
          "upright": {
            "general": "Kêu gọi bạn lắng nghe tiếng nói nội tâm và tin tưởng vào bản năng thay vì chỉ dựa vào logic.",
            "love": "Sự kết nối tinh thần sâu sắc. Đôi khi chỉ sự im lặng và thấu hiểu cũng đủ để gắn kết.",
            "career": "Nên giữ kín các kế hoạch. Sử dụng trực giác để nhận biết các cơ hội tiềm ẩn trong công việc.",
            "finances": "Cần cẩn trọng và giữ thông tin tài chính riêng tư. Hãy tin vào cảm giác của mình khi đầu tư.",
            "feelings": "Sự thấu cảm sâu sắc nhưng có phần kín đáo; cảm nhận nhiều hơn là nói ra.",
            "actions": "Hãy dừng lại và quan sát. Đây không phải lúc để hành động ồn ào mà là để suy ngẫm."
          },
          "reversed": {
            "general": "Sự mất kết nối với bản thân. Bạn có thể đang lờ đi những lời cảnh báo từ trực giác.",
            "love": "Sự che giấu thông tin hoặc hiểu lầm do thiếu giao tiếp chân thành.",
            "career": "Cẩn thận với những tin đồn tại nơi làm việc hoặc thông tin bị sai lệch.",
            "finances": "Đưa ra quyết định dựa trên thông tin chưa đầy đủ hoặc mù quáng tin theo cảm xúc nhất thời.",
            "feelings": "Cảm thấy bối rối, bất an và không thể hiểu nổi cảm xúc của chính mình.",
            "actions": "Cần tìm lại sự tĩnh lặng để hiểu rõ vấn đề trước khi bước tiếp."
          }
        },
        "image": "/tarotdeck/majorarcana/the-high-priestess-meaning.png"
      },
      {
        "id": 3,
        "name": "The Empress",
        "upright_keywords": ["nuôi dưỡng", "phong phú", "sinh sôi", "vẻ đẹp", "thiên nhiên", "mẫu tính"],
        "reversed_keywords": ["thiếu sáng tạo", "phụ thuộc", "áp đặt", "bỏ bê bản thân", "sự khan hiếm"],
        "description": "Người phụ nữ quyền quý ngồi trên ngai vàng giữa cánh đồng lúa chín, biểu tượng của sự sung túc và tình yêu thương vô bờ bến.",
        "meanings": {
          "upright": {
            "general": "Đại diện cho sự sáng tạo và nuôi dưỡng. Đây là thời điểm của sự thịnh vượng và phát triển.",
            "love": "Một mối quan hệ nồng ấm, tràn đầy tình yêu và sự quan tâm. Có thể báo hiệu về sự gia tăng thành viên gia đình.",
            "career": "Dự án của bạn đang ở giai đoạn phát triển tốt đẹp. Sự sáng tạo sẽ mang lại kết quả lớn.",
            "finances": "Tình hình tài chính dồi dào, thu được lợi nhuận từ những nỗ lực bền bỉ.",
            "feelings": "Cảm giác được yêu thương, che chở và hài lòng với cuộc sống.",
            "actions": "Hãy chăm sóc, nuôi dưỡng mục tiêu của mình bằng sự kiên nhẫn và tình yêu."
          },
          "reversed": {
            "general": "Cảm giác bị tắc nghẽn sáng tạo hoặc quá bao bọc khiến đối phương ngạt thở.",
            "love": "Sự kiểm soát quá mức hoặc cảm thấy không được đánh giá cao trong mối quan hệ.",
            "career": "Công việc gặp khó khăn do thiếu cảm hứng hoặc môi trường làm việc quá áp lực.",
            "finances": "Cần quản lý chi tiêu tốt hơn; tránh cảm giác bất an dẫn đến việc tiêu xài hoang phí.",
            "feelings": "Cảm thấy trống rỗng, thiếu thốn tình cảm hoặc bất mãn với bản thân.",
            "actions": "Hãy học cách yêu thương bản thân trước khi lo lắng cho người khác."
          }
        },
        "image": "/tarotdeck/majorarcana/the-empress-meaning.png"
      },
      {
        "id": 4,
        "name": "The Emperor",
        "upright_keywords": ["uy quyền", "cấu trúc", "kiểm soát", "bảo trợ", "kỷ luật", "logic"],
        "reversed_keywords": ["độc đoán", "cứng nhắc", "lạm quyền", "thiếu kỷ luật", "hỗn loạn"],
        "description": "Nhà vua ngồi trên ngai vàng với các đầu cừu, biểu tượng cho sao Bạch Dương. Ông đại diện cho trật tự và sức mạnh lý trí.",
        "meanings": {
          "upright": {
            "general": "Sự thiết lập trật tự và quy tắc. Bạn cần sự kỷ luật và tầm nhìn chiến lược để dẫn đầu.",
            "love": "Một mối quan hệ ổn định, thực tế và có sự cam kết cao. Tuy nhiên có thể thiếu đi sự lãng mạn.",
            "career": "Vị trí lãnh đạo, thăng tiến nhờ sự tổ chức tốt và kinh nghiệm dày dặn.",
            "finances": "Kiểm soát tốt ngân sách, đầu tư có kế hoạch và tính toán kỹ lưỡng.",
            "feelings": "Sự bảo bọc, trách nhiệm và mong muốn thiết lập nền tảng vững chắc.",
            "actions": "Hãy hành động một cách có hệ thống và quyết đoán."
          },
          "reversed": {
            "general": "Sự thiếu linh hoạt hoặc kiểm soát quá mức dẫn đến phản tác dụng.",
            "love": "Sự áp đặt, tính chiếm hữu cao gây mệt mỏi cho người kia.",
            "career": "Môi trường làm việc gò bó hoặc gặp phải cấp trên khó tính, độc đoán.",
            "finances": "Thiếu kỷ luật trong chi tiêu hoặc mất kiểm soát đối với các kế hoạch tài chính.",
            "feelings": "Cảm thấy bất lực, thiếu tự tin hoặc bị đè nén bởi những quy tắc cứng nhắc.",
            "actions": "Cần nới lỏng sự kiểm soát và lắng nghe ý kiến của người khác."
          }
        },
        "image": "/tarotdeck/majorarcana/the-emperor-meaning.png"
      },
      {
        "id": 5,
        "name": "The Hierophant",
        "upright_keywords": ["truyền thống", "giáo dục", "đạo đức", "tâm linh", "hệ thống", "tuân thủ"],
        "reversed_keywords": ["nổi loạn", "phá cách", "giáo điều", "tự do", "thay đổi phương thức"],
        "description": "Ông ngồi giữa hai cột giáo đường, truyền dạy cho những người đi theo. Lá bài đại diện cho những giá trị truyền thống và tổ chức xã hội.",
        "meanings": {
          "upright": {
            "general": "Khuyên bạn nên đi theo những con đường đã được thiết lập hoặc tìm kiếm sự dẫn dắt từ người có kinh nghiệm.",
            "love": "Mối quan hệ hướng tới hôn nhân hoặc tuân theo các giá trị truyền thống gia đình.",
            "career": "Làm việc trong một tổ chức lớn hoặc học hỏi từ một người thầy có uy tín.",
            "finances": "Đầu tư vào những nguồn an toàn, truyền thống; tránh những rủi ro mới lạ.",
            "feelings": "Sự tôn trọng, mong muốn có một cam kết rõ ràng và ổn định.",
            "actions": "Tuân thủ quy trình hiện có và tìm kiếm lời khuyên từ những chuyên gia."
          },
          "reversed": {
            "general": "Sự thách thức các quy chuẩn cũ. Bạn muốn tạo ra con đường riêng cho mình.",
            "love": "Sự bất đồng về quan điểm sống hoặc mong muốn phá bỏ những ràng buộc truyền thống.",
            "career": "Sáng tạo phương pháp mới, rời bỏ môi trường cũ gò bó để tự do phát triển.",
            "finances": "Thử nghiệm các cách kiếm tiền mới nhưng cần đề phòng sự thiếu kinh nghiệm.",
            "feelings": "Cảm thấy bị gò bó bởi mong đợi của xã hội hoặc gia đình.",
            "actions": "Hãy dũng cảm thay đổi nếu những giá trị cũ không còn phù hợp."
          }
        },
        "image": "/tarotdeck/majorarcana/the-hierophant-meaning.png"
      },
      {
        "id": 6,
        "name": "The Lovers",
        "upright_keywords": ["tình yêu", "hài hòa", "quan hệ", "lựa chọn", "giá trị", "gắn kết"],
        "reversed_keywords": ["mất cân bằng", "xung đột", "thiếu nhất quán", "lựa chọn sai", "xa cách"],
        "description": "Hình ảnh Adam và Eva dưới sự ban phước của thiên thần, tượng trưng cho sự lựa chọn của con tim và sự hòa hợp giữa nam và nữ.",
        "meanings": {
          "upright": {
            "general": "Đại diện cho những quyết định quan trọng dựa trên giá trị cá nhân và sự kết nối sâu sắc.",
            "love": "Sự hòa hợp tuyệt vời, sự lựa chọn người đồng hành đúng đắn và tình yêu chân thành.",
            "career": "Sự hợp tác ăn ý trong công việc. Có thể phải đưa ra lựa chọn giữa hai hướng đi.",
            "finances": "Cần cân nhắc kỹ các giá trị cá nhân trước khi thực hiện các giao dịch lớn.",
            "feelings": "Sự say mê, cảm giác gắn kết linh hồn và sự thấu hiểu.",
            "actions": "Hãy lắng nghe con tim nhưng cũng cần xem xét các giá trị đạo đức khi đưa ra quyết định."
          },
          "reversed": {
            "general": "Sự thiếu thống nhất giữa suy nghĩ và hành động. Các xung đột nội tâm.",
            "love": "Sự xa cách, thiếu sự cam kết hoặc nảy sinh mâu thuẫn không thể dung hòa.",
            "career": "Sự thiếu hợp tác trong nhóm hoặc đưa ra những quyết định công việc vội vàng.",
            "finances": "Mất cân bằng trong chi tiêu hoặc quyết định tài chính dựa trên cảm xúc nhất thời.",
            "feelings": "Sự bối rối, hụt hẫng và cảm thấy không được thấu hiểu.",
            "actions": "Cần xem xét lại các ưu tiên và hàn gắn các mối quan hệ bị rạn nứt."
          }
        },
        "image": "/tarotdeck/majorarcana/the-lovers-meaning.png"
      },
      {
        "id": 7,
        "name": "The Chariot",
        "upright_keywords": ["ý chí", "chiến thắng", "kiểm soát", "quyết tâm", "tốc độ", "thành công"],
        "reversed_keywords": ["mất kiểm soát", "thiếu định hướng", "hung hăng", "thất bại", "áp lực"],
        "description": "Một chiến binh điều khiển cỗ xe được kéo bởi hai con nhân sư đen và trắng, thể hiện việc làm chủ những xung đột để tiến về phía trước.",
        "meanings": {
          "upright": {
            "general": "Sự quyết tâm vượt qua mọi trở ngại. Bạn đang tiến lên phía trước với sự tập trung cao độ.",
            "love": "Cùng nhau vượt qua khó khăn để củng cố mối quan hệ. Sự chủ động trong tình cảm.",
            "career": "Đạt được mục tiêu công việc nhờ sự kiên trì và lãnh đạo xuất sắc.",
            "finances": "Kiểm soát được tài chính và vượt qua những giai đoạn khó khăn về tiền bạc.",
            "feelings": "Cảm giác tự tin, hừng hực quyết tâm và sẵn sàng hành động.",
            "actions": "Hãy tập trung vào mục tiêu và không để bất cứ điều gì làm bạn xao nhãng."
          },
          "reversed": {
            "general": "Cảm thấy bị mất phương hướng hoặc quá vội vàng dẫn đến sai lầm.",
            "love": "Sự tranh giành quyền kiểm soát trong mối quan hệ hoặc thiếu sự đồng thuận.",
            "career": "Dự án gặp trục trặc do thiếu kế hoạch hoặc hành động quá bốc đồng.",
            "finances": "Chi tiêu quá mức, mất kiểm soát tài chính do thiếu tính toán.",
            "feelings": "Cảm thấy bị áp đảo, giận dữ hoặc bất lực trước hoàn cảnh.",
            "actions": "Hãy dừng lại để điều chỉnh hướng đi thay vì cứ cố lao về phía trước."
          }
        },
        "image": "/tarotdeck/majorarcana/the-chariot-meaning.png"
      },
      {
        "id": 8,
        "name": "Strength",
        "upright_keywords": ["sức mạnh nội tâm", "lòng dũng cảm", "trắc ẩn", "kiên nhẫn", "kiềm chế"],
        "reversed_keywords": ["tự ti", "yếu đuối", "thiếu tự tin", "hung hăng", "mất kiểm soát"],
        "description": "Người phụ nữ nhẹ nhàng chế ngự con sư tử hung dữ, tượng trưng cho sức mạnh của tinh thần vượt lên trên bản năng thú tính.",
        "meanings": {
          "upright": {
            "general": "Sự dũng cảm không đến từ bạo lực mà từ sự kiên trì và thấu hiểu nội tâm.",
            "love": "Sự kiên nhẫn và lòng trắc ẩn giúp mối quan hệ vượt qua những sóng gió.",
            "career": "Khả năng xử lý áp lực công việc một cách điềm tĩnh và chuyên nghiệp.",
            "finances": "Kiểm soát được các cơn bốc đồng mua sắm, quản lý tiền bạc một cách khôn ngoan.",
            "feelings": "Cảm thấy bình an, tự tin và có khả năng thấu cảm cao.",
            "actions": "Hãy dùng sự mềm mỏng và kiên nhẫn để giải quyết vấn đề."
          },
          "reversed": {
            "general": "Sự nghi ngờ bản thân và thiếu can đảm để đối mặt với thực tế.",
            "love": "Sự thiếu tự tin khiến bạn khó kết nối hoặc dễ nảy sinh sự ghen tuông vô lối.",
            "career": "Cảm thấy bị choáng ngợp bởi công việc, thiếu sự tập trung và nghị lực.",
            "finances": "Chi tiêu thiếu kiểm soát để bù đắp cho những bất ổn về cảm xúc.",
            "feelings": "Cảm thấy bất an, sợ hãi hoặc dễ nổi nóng.",
            "actions": "Cần học cách đối mặt với nỗi sợ và tìm lại niềm tin vào bản thân."
          }
        },
        "image": "/tarotdeck/majorarcana/strength-meaning.png"
      },
      {
        "id": 9,
        "name": "The Hermit",
        "upright_keywords": ["chiêm nghiệm", "độc hành", "tìm kiếm sự thật", "dẫn dắt", "tĩnh lặng"],
        "reversed_keywords": ["cô lập", "cô đơn", "thu mình quá mức", "mất phương hướng", "vô minh"],
        "description": "Một ông lão cầm chiếc đèn lồng trên đỉnh núi, đại diện cho việc đi tìm ánh sáng tri thức trong sự cô độc và tĩnh lặng.",
        "meanings": {
          "upright": {
            "general": "Thời gian để quay vào bên trong, tự suy ngẫm và tìm ra hướng đi đúng đắn cho bản thân.",
            "love": "Cần thời gian riêng tư để thấu hiểu cảm xúc cá nhân trước khi cam kết với ai đó.",
            "career": "Cần xem xét lại con đường sự nghiệp, học hỏi thêm hoặc làm việc độc lập.",
            "finances": "Thận trọng với các kế hoạch tiền bạc, không nên chạy theo đám đông.",
            "feelings": "Mong muốn sự yên bình, tìm kiếm ý nghĩa thực sự của cảm xúc.",
            "actions": "Hãy tạm dừng các hoạt động ồn ào và dành thời gian cho riêng mình."
          },
          "reversed": {
            "general": "Sự cô lập tiêu cực hoặc từ chối lắng nghe lời khuyên đúng đắn.",
            "love": "Cảm giác cô đơn trong mối quan hệ hoặc xu hướng thu mình lại quá mức.",
            "career": "Thiếu sự kết nối với đồng nghiệp hoặc cảm thấy lạc lõng trong công việc.",
            "finances": "Bỏ qua những lời cảnh báo tài chính hoặc đưa ra quyết định khi chưa suy nghĩ kỹ.",
            "feelings": "Cảm thấy bị bỏ rơi hoặc chán ghét việc phải đối diện với thực tại.",
            "actions": "Cần mở lòng hơn và quay trở lại kết nối với thế giới xung quanh."
          }
        },
        "image": "/tarotdeck/majorarcana/the-hermit-meaning.png"
      },
      {
        "id": 10,
        "name": "Wheel of Fortune",
        "upright_keywords": ["thay đổi", "chu kỳ", "định mệnh", "may mắn", "bước ngoặt"],
        "reversed_keywords": ["vận đen", "kháng cự thay đổi", "mất kiểm soát", "trì hoãn"],
        "description": "Vòng quay với các biểu tượng huyền bí, tượng trưng cho sự luân chuyển không ngừng của cuộc đời.",
        "meanings": {
          "upright": {
            "general": "Mọi thứ đang thay đổi theo hướng có lợi. Định mệnh đang mang đến những cơ hội mới.",
            "love": "Sự xuất hiện của định mệnh hoặc một giai đoạn mới tích cực trong mối quan hệ.",
            "career": "Cơ hội thăng tiến bất ngờ hoặc sự thay đổi công việc mang lại may mắn.",
            "finances": "Tình hình tài chính có bước khởi sắc, vận may mỉm cười.",
            "feelings": "Sự lạc quan, cảm giác rằng mọi thứ đang diễn ra đúng như nó cần.",
            "actions": "Hãy sẵn sàng nắm bắt cơ hội khi nó đến và thích nghi với sự thay đổi."
          },
          "reversed": {
            "general": "Một giai đoạn khó khăn do những tác động khách quan. Cần học cách chấp nhận.",
            "love": "Mối quan hệ gặp trục trặc do ngoại cảnh hoặc cảm giác mọi thứ đang rời xa tầm tay.",
            "career": "Những thay đổi không mong muốn tại nơi làm việc hoặc sự nghiệp bị chững lại.",
            "finances": "Cẩn thận với những rủi ro tài chính đột ngột; không nên đầu tư mạo hiểm.",
            "feelings": "Cảm giác bất an, hoang mang trước những biến động của cuộc sống.",
            "actions": "Đừng cố cưỡng lại thực tế; hãy kiên nhẫn chờ đợi vòng quay đi qua giai đoạn này."
          }
        },
        "image": "/tarotdeck/majorarcana/the-wheel-of-fortune-meaning.png"
      },
      {
        "id": 11,
        "name": "Justice",
        "upright_keywords": ["công lý", "nhân quả", "sự thật", "trách nhiệm", "cân bằng"],
        "reversed_keywords": ["bất công", "thiếu trung thực", "trốn tránh trách nhiệm", "thiên vị"],
        "description": "Hình ảnh vị thần cầm cân và kiếm, đại diện cho việc thực thi công lý dựa trên sự thật khách quan.",
        "meanings": {
          "upright": {
            "general": "Mọi việc sẽ được giải quyết công bằng. Bạn nhận được những gì mình xứng đáng dựa trên hành động quá khứ.",
            "love": "Sự trung thực và sòng phẳng là nền tảng. Các quyết định pháp lý liên quan đến tình cảm có lợi.",
            "career": "Sự ghi nhận xứng đáng cho nỗ lực. Các tranh chấp công việc được giải quyết ổn thỏa.",
            "finances": "Sự minh bạch trong tiền bạc mang lại kết quả tốt. Thu nhập công bằng.",
            "feelings": "Cảm giác thanh thản khi biết mình đã hành động đúng đắn và chính trực.",
            "actions": "Hãy đưa ra quyết định dựa trên sự thật và chấp nhận trách nhiệm cá nhân."
          },
          "reversed": {
            "general": "Sự thiếu công bằng hoặc những hành động không trung thực sắp bị phanh phui.",
            "love": "Cảm giác bị đối xử bất công hoặc có sự gian dối trong mối quan hệ.",
            "career": "Sự thiếu minh bạch tại nơi làm việc hoặc bị đánh giá không đúng năng lực.",
            "finances": "Cẩn thận với các vấn đề pháp lý tài chính hoặc những khoản chi tiêu không minh bạch.",
            "feelings": "Sự phẫn nộ, cảm giác bị oan ức hoặc hối hận về những sai lầm trước đó.",
            "actions": "Cần trung thực với bản thân và sửa chữa những sai lầm đã gây ra."
          }
        },
        "image": "/tarotdeck/majorarcana/justice-meaning.png"
      },
      {
        "id": 12,
        "name": "The Hanged Man",
        "upright_keywords": ["hy sinh", "chờ đợi", "góc nhìn mới", "buông bỏ", "chiêm nghiệm"],
        "reversed_keywords": ["trì hoãn", "bế tắc", "hy sinh vô ích", "thái độ tiêu cực", "chống đối"],
        "description": "Người đàn ông treo ngược mình trên cây nhưng gương mặt bình thản, thể hiện sự hy sinh tự nguyện để đạt được tri thức cao hơn.",
        "meanings": {
          "upright": {
            "general": "Khuyên bạn nên dừng lại, thay đổi góc nhìn và chấp nhận chờ đợi thay vì cố sức hành động.",
            "love": "Cần một khoảng lặng để xem xét lại mối quan hệ hoặc hy sinh lợi ích cá nhân vì người kia.",
            "career": "Công việc có vẻ bị đình trệ nhưng đây là lúc để đánh giá lại hướng đi dài hạn.",
            "finances": "Tạm dừng đầu tư, xem xét lại cách quản lý tiền bạc dưới một lăng kính mới.",
            "feelings": "Sự bình tĩnh trong khi chờ đợi, cảm giác được soi sáng từ những điều giản đơn.",
            "actions": "Hãy tạm dừng mọi thứ và nhìn nhận vấn đề từ một hướng khác hoàn toàn."
          },
          "reversed": {
            "general": "Sự hy sinh không mang lại kết quả hoặc cảm giác bế tắc do không chịu buông bỏ cái cũ.",
            "love": "Mối quan hệ mệt mỏi do sự hy sinh một chiều hoặc sự trì hoãn vô nghĩa.",
            "career": "Cảm thấy tốn thời gian cho những dự án không có tương lai hoặc bị áp lực phải chờ đợi.",
            "finances": "Mất mát tài chính do thiếu sự thay đổi trong tư duy hoặc hành động quá muộn màng.",
            "feelings": "Sự nôn nóng, bực bội và cảm giác mình là nạn nhân của hoàn cảnh.",
            "actions": "Cần quyết đoán hơn hoặc thay đổi thái độ thay vì chỉ than vãn."
          }
        },
        "image": "/tarotdeck/majorarcana/the-hanged-man-meaning.png"
      },
      {
        "id": 13,
        "name": "Death",
        "upright_keywords": ["kết thúc", "biến đổi", "buông bỏ", "khởi đầu mới", "thay đổi triệt để"],
        "reversed_keywords": ["kháng cự thay đổi", "trì trệ", "sợ hãi kết thúc", "sự ám ảnh"],
        "description": "Kỵ sĩ xương trên ngựa trắng mang theo lá cờ có hoa hồng, tượng trưng cho sự kết thúc cũ để mở đường cho cái mới nảy mầm.",
        "meanings": {
          "upright": {
            "general": "Không phải cái chết vật chất mà là sự kết thúc của một giai đoạn và sự bắt đầu của một chương mới.",
            "love": "Sự thay đổi lớn trong mối quan hệ, có thể là chia tay hoặc rũ bỏ những thói quen cũ để phát triển.",
            "career": "Chấm dứt một công việc cũ hoặc thay đổi hoàn toàn phong cách làm việc.",
            "finances": "Sự thay đổi đột ngột trong tình hình tài chính, đòi hỏi sự thích nghi và buông bỏ các thói quen tiêu xài cũ.",
            "feelings": "Sự chuẩn bị cho sự thay đổi, cảm giác giải thoát sau khi đã buông bỏ được gánh nặng.",
            "actions": "Hãy dũng cảm kết thúc những gì không còn phục vụ cho sự phát triển của bạn."
          },
          "reversed": {
            "general": "Cố bám víu vào những điều đã cũ khiến bạn không thể tiến bộ.",
            "love": "Cố duy trì một mối quan hệ đã rạn nứt vì sợ cô đơn hoặc sợ sự thay đổi.",
            "career": "Kháng cự lại những thay đổi tất yếu trong công ty dẫn đến sự thụt lùi.",
            "finances": "Tình hình tài chính khó khăn kéo dài do không chịu thay đổi phương pháp quản lý.",
            "feelings": "Nỗi sợ hãi sâu sắc, sự bất an và cảm giác bế tắc trong quá khứ.",
            "actions": "Cần học cách chấp nhận rằng cái cũ phải ra đi để cái mới có chỗ đứng."
          }
        },
        "image": "/tarotdeck/majorarcana/death-meaning.png"
      },
      {
        "id": 14,
        "name": "Temperance",
        "upright_keywords": ["cân bằng", "điều độ", "kiên nhẫn", "hài hòa", "tìm kiếm mục đích"],
        "reversed_keywords": ["mất cân bằng", "thái quá", "thiếu tầm nhìn", "xung đột", "vội vàng"],
        "description": "Thiên thần rót nước giữa hai chiếc cốc, một chân trên cạn một chân dưới nước, tượng trưng cho sự hòa hợp giữa ý thức và tiềm thức.",
        "meanings": {
          "upright": {
            "general": "Sự cân bằng trong mọi khía cạnh cuộc sống. Cần sự điều độ và tránh những thái cực cực đoan.",
            "love": "Mối quan hệ ổn định, có sự thấu hiểu và cùng nhau tạo dựng sự hài hòa.",
            "career": "Làm việc một cách bền bỉ và điều độ sẽ mang lại thành công bền vững.",
            "finances": "Quản lý tài chính tốt, không quá tiết kiệm cũng không quá hoang phí.",
            "feelings": "Cảm giác bình yên, kiểm soát được cảm xúc và có tâm thế khoan dung.",
            "actions": "Hãy tìm điểm trung dung và hành động một cách kiên nhẫn."
          },
          "reversed": {
            "general": "Sự mất cân bằng dẫn đến căng thẳng. Bạn đang quá đà vào một việc gì đó.",
            "love": "Sự xung đột do thiếu thấu hiểu hoặc nảy sinh những cảm xúc cực đoan.",
            "career": "Làm việc quá sức hoặc thiếu sự phối hợp, dẫn đến hiệu quả kém.",
            "finances": "Chi tiêu bốc đồng hoặc đầu tư vào những lĩnh vực quá mạo hiểm.",
            "feelings": "Sự xáo trộn cảm xúc, cảm thấy bồn chồn và thiếu kiên nhẫn.",
            "actions": "Cần điều chỉnh lại lối sống và tìm lại sự cân bằng nội tâm."
          }
        },
        "image": "/tarotdeck/majorarcana/temperance-meaning.png"
      },
      {
        "id": 15,
        "name": "The Devil",
        "upright_keywords": ["phụ thuộc", "vật chất", "ham muốn", "giới hạn", "nghiện ngập"],
        "reversed_keywords": ["tự do", "giải thoát", "tự nhận thức", "phá bỏ xiềng xích", "khôi phục kiểm soát"],
        "description": "Con quỷ đứng trên bục với hai người bị xích. Sợi xích lỏng lẻo cho thấy họ có thể tự giải thoát nếu họ thực sự muốn.",
        "meanings": {
          "upright": {
            "general": "Cảnh báo về sự lệ thuộc vào vật chất, cảm xúc tiêu cực hoặc những thói quen xấu.",
            "love": "Mối quan hệ dựa trên sự ham muốn thể xác hoặc sự kiểm soát lẫn nhau. Cảm giác bị trói buộc.",
            "career": "Cảm thấy bị mắc kẹt trong công việc hoặc bị cám dỗ bởi các lợi ích ngắn hạn không lành mạnh.",
            "finances": "Nợ nần chồng chất hoặc quá ám ảnh với việc kiếm tiền bằng mọi giá.",
            "feelings": "Sự ám ảnh, cảm giác bất lực và bị chi phối bởi bản năng.",
            "actions": "Hãy nhìn thẳng vào những gì đang giam cầm bạn và tự đặt câu hỏi về tự do của chính mình."
          },
          "reversed": {
            "general": "Sự thức tỉnh và bắt đầu quá trình giải phóng bản thân khỏi các ràng buộc độc hại.",
            "love": "Phá bỏ sự phụ thuộc cảm xúc, chấm dứt những mối quan hệ mang tính thao túng.",
            "career": "Tìm thấy con đường thoát khỏi áp lực công việc, bắt đầu làm chủ sự nghiệp của mình.",
            "finances": "Bắt đầu trả được nợ và thay đổi thói quen chi tiêu tiêu cực.",
            "feelings": "Sự nhẹ nhõm, cảm giác sức mạnh cá nhân đang quay trở lại.",
            "actions": "Hãy mạnh dạn cắt đứt những sợi xích đang kìm hãm sự phát triển của bạn."
          }
        },
        "image": "/tarotdeck/majorarcana/the-devil-meaning.png"
      },
      {
        "id": 16,
        "name": "The Tower",
        "upright_keywords": ["sụp đổ đột ngột", "thảm họa", "thay đổi bất ngờ", "giải phóng", "khai sáng"],
        "reversed_keywords": ["tránh được thảm họa", "resisting change", "trì hoãn sự sụp đổ", "nỗi sợ hãi"],
        "description": "Tòa tháp bị sét đánh trúng, mọi thứ bên trong bị hất tung ra ngoài. Tượng trưng cho sự tan vỡ của những niềm tin sai lầm.",
        "meanings": {
          "upright": {
            "general": "Một sự kiện bất ngờ làm đảo lộn cuộc sống, nhưng nó cần thiết để phá bỏ cái nền móng không vững chắc.",
            "love": "Sự đổ vỡ đột ngột của một mối quan hệ hoặc một cú sốc tình cảm giúp bạn nhìn rõ sự thật.",
            "career": "Mất việc hoặc dự án thất bại bất ngờ. Đây là lúc để xây dựng lại từ đầu.",
            "finances": "Khủng hoảng tài chính đột ngột đòi hỏi phải thay đổi hoàn toàn cách quản lý.",
            "feelings": "Sự bàng hoàng, kinh ngạc nhưng sau đó là cảm giác sáng tỏ.",
            "actions": "Hãy chấp nhận sự sụp đổ và sẵn sàng để xây dựng lại một điều gì đó tốt đẹp hơn."
          },
          "reversed": {
            "general": "Biết trước sự sụp đổ đang đến và cố gắng trì hoãn nó hoặc giảm thiểu thiệt hại.",
            "love": "Cố gắng níu kéo một mối quan hệ đang chết dần hoặc tránh né những sự thật đau lòng.",
            "career": "Tránh được việc bị sa thải trong gang tấc nhưng môi trường vẫn còn nhiều bất ổn.",
            "finances": "Cố gắng cầm cự qua giai đoạn khó khăn tài chính nhưng chưa giải quyết được gốc rễ.",
            "feelings": "Sự lo âu kéo dài, cảm giác ngộp thở khi biết thay đổi là không thể tránh khỏi.",
            "actions": "Đừng cố cứu vãn những gì đã hư hỏng; hãy chuẩn bị tinh thần cho sự chuyển đổi."
          }
        },
        "image": "/tarotdeck/majorarcana/the-tower-meaning.png"
      },
      {
        "id": 17,
        "name": "The Star",
        "upright_keywords": ["hy vọng", "niềm tin", "hồi phục", "truyền cảm hứng", "thanh lọc"],
        "reversed_keywords": ["mất niềm tin", "thất vọng", "thiếu cảm hứng", "bi quan", "bế tắc"],
        "description": "Người phụ nữ đổ nước từ hai bình vào hồ và đất, dưới bầu trời đầy sao. Biểu tượng của sự hy vọng và sự tươi mới sau cơn bão.",
        "meanings": {
          "upright": {
            "general": "Một giai đoạn chữa lành và phục hồi sau những khó khăn. Ánh sáng cuối đường hầm.",
            "love": "Niềm tin vào tình yêu quay trở lại. Mối quan hệ tràn đầy sự lạc quan và thấu hiểu.",
            "career": "Tìm thấy nguồn cảm hứng mới hoặc nhận được sự ghi nhận sau thời gian dài nỗ lực.",
            "finances": "Sự ổn định quay trở lại, niềm tin vào khả năng tài chính của bản thân được củng cố.",
            "feelings": "Sự thanh thản, lạc quan và tràn đầy hy vọng vào tương lai.",
            "actions": "Hãy giữ vững niềm tin và tiếp tục bước đi trên con đường của mình."
          },
          "reversed": {
            "general": "Cảm thấy bi quan và mất kết nối với các mục đích sống.",
            "love": "Sự thất vọng trong tình cảm, cảm thấy không còn tin vào những điều tốt đẹp.",
            "career": "Thiếu sự sáng tạo và cảm thấy công việc hiện tại không còn ý nghĩa.",
            "finances": "Lo lắng quá mức về tiền bạc khiến bạn không thấy được các cơ hội xung quanh.",
            "feelings": "Sự mệt mỏi, chán nản và cảm giác như bị bỏ lại phía sau.",
            "actions": "Cần tìm lại sự kết nối với tâm hồn và học cách trân trọng những gì mình đang có."
          }
        },
        "image": "/tarotdeck/majorarcana/the-star-meaning.png"
      },
      {
        "id": 18,
        "name": "The Moon",
        "upright_keywords": ["ảo tưởng", "nỗi sợ", "trực giác", "bí ẩn", "tiềm thức"],
        "reversed_keywords": ["lộ diện", "giải tỏa nỗi sợ", "sự thật sáng tỏ", "chấm dứt ảo tưởng"],
        "description": "Con chó và con sói sủa dưới ánh trăng, con tôm từ dưới nước bò lên bờ. Biểu tượng cho những nỗi sợ mơ hồ từ tiềm thức trỗi dậy.",
        "meanings": {
          "upright": {
            "general": "Mọi thứ không như vẻ bề ngoài. Cần cẩn thận với những ảo tưởng và lắng nghe trực giác.",
            "love": "Sự mơ hồ và hiểu lầm trong tình cảm. Cần thời gian để làm rõ những cảm xúc thật sự.",
            "career": "Cảnh báo về những thông tin chưa rõ ràng hoặc sự bất ổn tại nơi làm việc.",
            "finances": "Tránh các quyết định đầu tư quan trọng lúc này vì thông tin có thể bị sai lệch.",
            "feelings": "Sự lo âu, nhạy cảm quá mức và bị chi phối bởi những giấc mơ.",
            "actions": "Hãy tin vào bản năng nhưng đừng vội đưa ra kết luận cuối cùng."
          },
          "reversed": {
            "general": "Sự thật dần lộ diện. Những nỗi sợ hãi vô căn cứ bắt đầu tan biến.",
            "love": "Sự giải tỏa các hiểu lầm, mọi bí mật trong mối quan hệ được phơi bày.",
            "career": "Tìm thấy sự rõ ràng trong định hướng công việc sau một thời gian bối rối.",
            "finances": "Nhận ra những sai lầm trong chi tiêu và bắt đầu khắc phục.",
            "feelings": "Sự bình tĩnh quay trở lại, thoát khỏi trạng thái hoang mang.",
            "actions": "Hãy tận dụng sự sáng tỏ này để giải quyết các vấn đề còn tồn đọng."
          }
        },
        "image": "/tarotdeck/majorarcana/the-moon-meaning.png"
      },
      {
        "id": 19,
        "name": "The Sun",
        "upright_keywords": ["niềm vui", "thành công", "tích cực", "sức sống", "ăn mừng"],
        "reversed_keywords": ["thiếu tích cực", "thành công bị trì hoãn", "kiêu ngạo", "buồn chán"],
        "description": "Em bé cưỡi ngựa trắng dưới ánh mặt trời rực rỡ, tượng trưng cho sự thuần khiết, niềm vui và sự thành đạt rạng ngời.",
        "meanings": {
          "upright": {
            "general": "Lá bài tích cực nhất trong bộ bài, báo hiệu sự rạng rỡ, hạnh phúc và thành công vang dội.",
            "love": "Mối quan hệ hạnh phúc, nồng nhiệt và tràn đầy năng lượng tích cực.",
            "career": "Thành công rực rỡ trong công việc, nhận được sự tán thưởng và tôn vinh.",
            "finances": "Tài chính dồi dào, thuận lợi trong việc kiếm tiền và chi tiêu.",
            "feelings": "Hào hứng, tràn đầy sức sống và tự tin vào bản thân.",
            "actions": "Hãy tự tin thể hiện mình và tận hưởng thành quả lao động."
          },
          "reversed": {
            "general": "Vẫn là một lá bài tốt nhưng ánh sáng có phần mờ nhạt hơn. Sự tích cực bị giảm sút.",
            "love": "Có những đám mây che khuất niềm vui trong mối quan hệ, cần thêm sự chân thành.",
            "career": "Thành công chưa đạt được như kỳ vọng do sự chủ quan hoặc thiếu chuẩn bị.",
            "finances": "Vấn đề tiền bạc vẫn ổn nhưng không quá bùng nổ như mong đợi.",
            "feelings": "Cảm thấy hơi thiếu động lực hoặc có chút buồn phiền thoáng qua.",
            "actions": "Cần lấy lại tinh thần lạc quan và tập trung vào những điều tốt đẹp."
          }
        },
        "image": "/tarotdeck/majorarcana/the-sun-meaning.png"
      },
      {
        "id": 20,
        "name": "Judgement",
        "upright_keywords": ["thức tỉnh", "phán xét", "tái sinh", "tha thứ", "tiếng gọi"],
        "reversed_keywords": ["nghi ngờ bản thân", "trốn tránh sự thật", "chậm trễ", "hối tiếc"],
        "description": "Thiên thần thổi kèn và mọi người đứng dậy từ nấm mồ, tượng trưng cho sự hồi sinh và đánh giá lại cuộc đời.",
        "meanings": {
          "upright": {
            "general": "Thời điểm để nhìn lại quá khứ, tha thứ và bắt đầu một hành trình mới cao cả hơn.",
            "love": "Sự đổi mới trong tình cảm hoặc quyết định quan trọng sau thời gian tự kiểm điểm.",
            "career": "Tìm thấy mục tiêu thực sự trong sự nghiệp. Có thể có sự thay đổi lớn về vị trí.",
            "finances": "Đánh giá lại thói quen chi tiêu và thực hiện những điều chỉnh cần thiết.",
            "feelings": "Sự nhẹ nhõm sau khi đã thông suốt và sẵn sàng cho sự khởi đầu mới.",
            "actions": "Hãy lắng nghe tiếng gọi từ bên trong và quyết định dứt khoát."
          },
          "reversed": {
            "general": "Sự chối bỏ tiếng gọi của lương tri hoặc không dám đối diện với những sai lầm.",
            "love": "Trì hoãn những quyết định cần thiết, khiến mối quan hệ rơi vào bế tắc.",
            "career": "Bỏ lỡ cơ hội thăng tiến do sự thiếu tự tin hoặc ám ảnh bởi thất bại cũ.",
            "finances": "Thiếu sự quyết đoán trong các kế hoạch tài chính dẫn đến lãng phí.",
            "feelings": "Sự dằn vặt, hối hận và cảm thấy không xứng đáng.",
            "actions": "Cần trung thực với bản thân và học cách tha thứ cho chính mình để tiến lên."
          }
        },
        "image": "/tarotdeck/majorarcana/judgement-meaning.png"
      },
      {
        "id": 21,
        "name": "The World",
        "upright_keywords": ["viên mãn", "hoàn thành", "hài hòa", "thành đạt", "du lịch"],
        "reversed_keywords": ["thiếu kết nối", "chưa hoàn tất", "trì trệ", "thiếu tầm nhìn tổng thể"],
        "description": "Người phụ nữ múa trong vòng nguyệt quế, bốn góc là biểu tượng của các nguyên tố. Tượng trưng cho sự thống nhất và hoàn thành chu kỳ.",
        "meanings": {
          "upright": {
            "general": "Sự kết thúc hoàn hảo của một hành trình dài. Bạn đạt được sự trọn vẹn và tự do.",
            "love": "Mối quan hệ đạt đến sự viên mãn, hạnh phúc hoặc bước sang giai đoạn cam kết bền vững.",
            "career": "Đạt được mục tiêu lớn lao, sự nghiệp rạng rỡ và có tầm ảnh hưởng rộng.",
            "finances": "Sự thịnh vượng bền vững, không còn phải lo lắng về các nhu cầu vật chất cơ bản.",
            "feelings": "Cảm giác hạnh phúc trọn vẹn, hài lòng với bản thân và thế giới.",
            "actions": "Hãy ăn mừng chiến thắng và chuẩn bị cho một chu kỳ mới tuyệt vời hơn."
          },
          "reversed": {
            "general": "Sắp đạt được mục tiêu nhưng vẫn còn thiếu một vài mảnh ghép cuối cùng.",
            "love": "Cảm giác thiếu hụt điều gì đó trong mối quan hệ mặc dù vẻ ngoài vẫn ổn.",
            "career": "Dự án gần hoàn thành nhưng gặp trở ngại ở phút cuối hoặc chưa cảm thấy thỏa mãn.",
            "finances": "Tình hình tài chính tương đối tốt nhưng chưa đạt được mức kỳ vọng đề ra.",
            "feelings": "Cảm thấy trống rỗng nhẹ hoặc có chút hụt hẫng sau khi đạt được mục tiêu.",
            "actions": "Cần xem xét lại những gì còn dang dở và nỗ lực hơn nữa để hoàn tất chu kỳ."
          }
        },
        "image": "/tarotdeck/majorarcana/the-world-meaning.png"
      }
    ]
  }
};

export default tarotDecks;