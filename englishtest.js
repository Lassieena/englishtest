const test = new Array();

test[0] = '1. follow her advice';
test[1] = '2. consider the problem seriously';
test[2] = '3. increase by 20%';
test[3] = '4. expect you to arrive soon';
test[4] = '5. decide to tell the truth';
test[5] = '6. develop a unique ability';
test[6] = '7. provide him with information';
test[7] = '8. continue to grow fast';
test[8] = '9. The list includes his name';
test[9] = '10. remain silent';
test[10] = '11. reach the mountain top';
test[11] = '12. allow him to go out';
test[12] = '13. be forced to leave';
test[13] = '14. offer help to the poor';
test[14] = '15. realize the error';
test[15] = '16. require more attention';
test[16] = '17. suggest a new way';
test[17] = '18. worry about money';
test[18] = '19. wonder where he has gone';
test[19] = '20. The car cost me $50,000.';
test[20] = '21. tend to get angry';
test[21] = '22. Everything depends on him.';
test[22] = '23. share a room with a friend';
test[23] = '24. demand more money';
test[24] = '25. support the President';
test[25] = '26. hire many young people';
test[26] = '27. regard him as a friend';
test[27] = '28. This story is based on fact.';
test[28] = '29. improve the quality of life';
test[29] = '30. recognize the importance';
test[30] = '31. notice the color change';
test[31] = '32. You are supposed to wear a seat belt.';
test[32] = '33. raise three children';
test[33] = '34. prefer tea to coffee';
test[34] = '35. enter college at fifteen';
test[35] = '36. suffer heavy damage';
test[36] = '37. describe the lost bag';
test[37] = '38. prevent him from sleeping';
test[38] = '39. reduce weight';
test[39] = '40. mistake salt for sugar';
test[40] = '41. prepare a room for a guest';
test[41] = '42. encourage children to read';
test[42] = '43. prove to be true';
test[43] = '44. join the baseball club';
test[44] = '45. treat him like a child';
test[45] = '46. establish a new relationship';
test[46] = '47. stress-related illness';
test[47] = '48. compare Japan with China';
test[48] = '49. spread the tablecloth';
test[49] = '50. What does this word refer to?';
test[50] = '51. supply the city with water';
test[51] = '52. gain useful knowledge';
test[52] = '53. destroy forest';
test[53] = '54. apply the rule to every case';
test[54] = '55. seek help from the police';
test[55] = '56. search for the stolen car';
test[56] = '57. He claims that he saw a UFO.';
test[57] = '58. draw a map';
test[58] = '59. introduce you to my friend';
test[59] = '60. refuse to kiss him';
test[60] = '61. Never mention it again';
test[61] = '62. judge a person by his look';
test[62] = '63. A typhoon is approaching Japan.';
test[63] = '64. I admit that I was wrong.';
test[64] = '65. reflect the mood of the times';
test[65] = '66. perform the job';
test[66] = '67. a very boring movie';
test[67] = '68. survive in the jungle';
test[68] = '69. Words represent ideas';
test[69] = '70. argue that he is right';
test[70] = '71. take freedom for granted';
test[71] = '72. The data indicate that he is right.';
test[72] = '73. The book belongs to Betty.';
test[73] = '74. acquire a language';
test[74] = '75. reply to his letter';
test[75] = '76. feed a large family';
test[76] = '77. escape from reality';
test[77] = '78. replace the old system';
test[78] = '79. reveal a surprising fact';
test[79] = '80. Japan is surrounded by the sea.';
test[80] = '81. The job suits you.';
test[81] = '82. the estimated population of Japan';
test[82] = '83. aim at the Asian market';
test[83] = '84. earn money for the family';
test[84] = '85. My memory began to decline.';
test[85] = '86. can’t afford to buy a Ford';
test[86] = '87. be confused by her anger';
test[87] = '88. graduate from high school';
test[88] = '89. vary from country to country';
test[89] = '90. remove the cover';
test[90] = '91. insist on going to France';
test[91] = '92. examine every record';
test[92] = '93. remind him of the promise';
test[93] = '94. contribute to world peace';
test[94] = '95. warn him of the danger';
test[95] = '96. connect the computer to the Internet';
test[96] = '97. match him in power';
test[97] = '98. focus on the problem';
test[98] = '99. reject the proposal';
test[99] = '100. convince him that it is true';

const question = document.getElementById('question');
const Answer = document.getElementById('output');
const number = Math.floor(Math.random() * test.length);
question.innerText = test[number];


function nextButtonClick() {
  location.reload();
};





function OnButtonClick() {

  switch (number) {
    case 0:
      Answer.innerText = "彼女の助言に従う";
      break;
    case 1:
      Answer.innerText = "真剣にその問題を考える";
      break;
    case 2:
      Answer.innerText = "20%増加する";
      break;
    case 3:
      Answer.innerText = "君がすぐに来ることを予期する";
      break;
    case 4:
      Answer.innerText = "真実を語る決意をする";
      break;
    case 5:
      Answer.innerText = "特異な能力を発達させる";
      break;
    case 6:
      Answer.innerText = "彼に情報を与える";
      break;
    case 7:
      Answer.innerText = "急速に成長し続ける";
      break;
    case 8:
      Answer.innerText = "リストは彼の名前を含んでいる";
      break;
    case 9:
      Answer.innerText = "黙ったままでいる";
      break;
    case 10:
      Answer.innerText = "山頂に達する";
      break;
    case 11:
      Answer.innerText = "彼に外出を許可する";
      break;
    case 12:
      Answer.innerText = "立ち退きを強制される";
      break;
    case 13:
      Answer.innerText = "貧しい人に援助を申し出る";
      break;
    case 14:
      Answer.innerText = "間違いを悟る";
      break;
    case 15:
      Answer.innerText = "もっと注意を必要とする";
      break;
    case 16:
      Answer.innerText = "新しいやり方を提案する";
      break;
    case 17:
      Answer.innerText = "お金のことを心配する";
      break;
    case 18:
      Answer.innerText = "彼はどこに行ったのかと思う";
      break;
    case 19:
      Answer.innerText = "その車に五万ドルかかった";
      break;
    case 20:
      Answer.innerText = "腹を立てがちである";
      break;
    case 21:
      Answer.innerText = "全ては彼次第だ";
      break;
    case 22:
      Answer.innerText = "友人と部屋を共有する";
      break;
    case 23:
      Answer.innerText = "さらに金を要求する";
      break;
    case 24:
      Answer.innerText = "大統領を支持する";
      break;
    case 25:
      Answer.innerText = "多くの若者を雇う";
      break;
    case 26:
      Answer.innerText = "彼を友達とみなす";
      break;
    case 27:
      Answer.innerText = "この話は事実に基づいている";
      break;
    case 28:
      Answer.innerText = "生活の質を向上させる";
      break;
    case 29:
      Answer.innerText = "重要性を認める";
      break;
    case 30:
      Answer.innerText = "色彩の変化に気づく";
      break;
    case 31:
      Answer.innerText = "シートベルトを締めることになっている";
      break;
    case 32:
      Answer.innerText = "３人の子供を育てる";
      break;
    case 33:
      Answer.innerText = "コーヒーよりもお茶をこのむ";
      break;
    case 34:
      Answer.innerText = "15歳で大学に入る";
      break;
    case 35:
      Answer.innerText = "ひどい損害を受ける";
      break;
    case 36:
      Answer.innerText = "無くしたバッグの特徴を言う";
      break;
    case 37:
      Answer.innerText = "彼が眠るのを妨げる";
      break;
    case 38:
      Answer.innerText = "体重を減らす";
      break;
    case 39:
      Answer.innerText = "塩を砂糖と間違える";
      break;
    case 40:
      Answer.innerText = "客のために部屋を準備する";
      break;
    case 41:
      Answer.innerText = "子供に読書をすすめる";
      break;
    case 42:
      Answer.innerText = "本当だとわかる";
      break;
    case 43:
      Answer.innerText = "野球部に入る";
      break;
    case 44:
      Answer.innerText = "子供みたいに彼を扱う";
      break;
    case 45:
      Answer.innerText = "新しい関係を確立する";
      break;
    case 46:
      Answer.innerText = "ストレスと関係のある病気";
      break;
    case 47:
      Answer.innerText = "日本と中国を比較する";
      break;
    case 48:
      Answer.innerText = "テーブルクロスを広げる";
      break;
    case 49:
      Answer.innerText = "この語は何を指示するか";
      break;
    case 50:
      Answer.innerText = "その都市に水を供給する";
      break;
    case 51:
      Answer.innerText = "有益な知識を得る";
      break;
    case 52:
      Answer.innerText = "森林を破壊する";
      break;
    case 53:
      Answer.innerText = "全ての場合に規則を当てはめる";
      break;
    case 54:
      Answer.innerText = "警察に助けを求める";
      break;
    case 55:
      Answer.innerText = "盗難車を探す";
      break;
    case 56:
      Answer.innerText = "彼はUFOを見たと主張する";
      break;
    case 57:
      Answer.innerText = "地図を描く";
      break;
    case 58:
      Answer.innerText = "友人に君を紹介する";
      break;
    case 59:
      Answer.innerText = "彼にキスするのを拒む";
      break;
    case 60:
      Answer.innerText = "二度とそのことを口にするな";
      break;
    case 61:
      Answer.innerText = "人を外見で判断する";
      break;
    case 62:
      Answer.innerText = "台風が日本に接近している";
      break;
    case 63:
      Answer.innerText = "自分が間違っていたと認める";
      break;
    case 64:
      Answer.innerText = "時代の気分を反映する";
      break;
    case 65:
      Answer.innerText = "仕事を遂行する";
      break;
    case 66:
      Answer.innerText = "すごく退屈な映画";
      break;
    case 67:
      Answer.innerText = "ジャングルで生き残る";
      break;
    case 68:
      Answer.innerText = "言葉は考えを表す";
      break;
    case 69:
      Answer.innerText = "彼は正しいと主張する";
      break;
    case 70:
      Answer.innerText = "自由を当然と考える";
      break;
    case 71:
      Answer.innerText = "データは彼が正しいことを示す";
      break;
    case 72:
      Answer.innerText = "その本はベティのものだ";
      break;
    case 73:
      Answer.innerText = "言葉を習得する";
      break;
    case 74:
      Answer.innerText = "彼の手紙に返事をする";
      break;
    case 75:
      Answer.innerText = "大勢の家族を養う";
      break;
    case 76:
      Answer.innerText = "現実から逃避する";
      break;
    case 77:
      Answer.innerText = "古い制度に取って代わる";
      break;
    case 78:
      Answer.innerText = "驚くべき事実を明らかにする";
      break;
    case 79:
      Answer.innerText = "日本は海に囲まれている";
      break;
    case 80:
      Answer.innerText = "その仕事は君に合っている";
      break;
    case 81:
      Answer.innerText = "日本の推定人口";
      break;
    case 82:
      Answer.innerText = "アジア市場を狙う";
      break;
    case 83:
      Answer.innerText = "家族のためにお金を稼ぐ";
      break;
    case 84:
      Answer.innerText = "記憶力が低下し始めた";
      break;
    case 85:
      Answer.innerText = "フォードの車を買う余裕がない";
      break;
    case 86:
      Answer.innerText = "彼女の怒りに当惑する";
      break;
    case 87:
      Answer.innerText = "高校を卒業する";
      break;
    case 88:
      Answer.innerText = "国によって変わる";
      break;
    case 89:
      Answer.innerText = "カバーを取り除く";
      break;
    case 90:
      Answer.innerText = "フランスに行くと言い張る";
      break;
    case 91:
      Answer.innerText = "あらゆる記録を調べる";
      break;
    case 92:
      Answer.innerText = "彼に約束を思い出させる";
      break;
    case 93:
      Answer.innerText = "世界平和に貢献する";
      break;
    case 94:
      Answer.innerText = "彼に危険を警告する";
      break;
    case 95:
      Answer.innerText = "コンピューターをインターネットに繋ぐ";
      break;
    case 96:
      Answer.innerText = "力で彼に匹敵する";
      break;
    case 97:
      Answer.innerText = "その問題に焦点を合わせる";
      break;
    case 98:
      Answer.innerText = "提案を拒否する";
      break;
    case 99:
      Answer.innerText = "それは本当だと彼に確信させる";
      break;
    default:
      break;
  }
};

function foc() {
  if (document.form1.practice.value == document.form1.practice.defaultValue) {
    document.form1.practice.value = "";
  }
}

document.getElementById('answer').focus();