"use strict";

// // verses - random
const verses = [
  "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
  "A joyful heart makes a cheerful face, but a sorrowful spirit dries up the bones.",
  "Jesus wept.",
  "He makes me lie down in green pastures. He leads me beside quiet waters.",
  "Commit your work to the Lord, and your plans will be established.",
];

const versesAuthors = [
  "Isaiah 41:10",
  "Proverbs 15:13",
  "John 11:35",
  "Psalm 23:2",
  "Proverbs 16:3",
];

// //  verses - fear
const versesFear = [
  "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.",
  "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
  "Be strong and courageous. Do not fear, and do not be dismayed, for the Lord your God is with you wherever you go.",
  "For God gave us a spirit not of fear but of power and love and self-control.",
  "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.",
];

const versesFearAuthors = [
  "Isaiah 41:10",
  "Psalm 23:4",
  "Deuteronomy 31:6",
  "2 Timothy 1:7",
  "2 Timothy 1:9",
];

// //  verses - Happy
const versesHappy = [
  "A joyful heart makes a cheerful face, but a sorrowful spirit dries up the bones.",
  "Rejoice in the Lord always; I will say it again, rejoice!",
  "You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore.",
  "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.",
  "Consider it all joy, my brethren, when you encounter various trials, knowing that the testing of your faith produces endurance. And let endurance have its perfect result, so that you may be perfect and complete, lacking in nothing.",
];

const versesHappyAuthors = [
  "Proverbs 15:1",
  "Philippians 4:4",
  "Psalm 16:11",
  "Romans 15:13 ",
  "James 1:2-4 ]",
];

// //  verses - sad
const versesSad = [
  "The Lord is near to the brokenhearted and saves the crushed in spirit.",
  "A time to weep, and a time to laugh; a time to mourn, and a time to dance.",
  "Blessed are those who mourn, for they shall be comforted.",
  "To grant to those who mourn in Zion— to give them a beautiful headdress instead of ashes, the oil of gladness instead of mourning, the garment of praise instead of the faint spirit; that they may be called oaks of righteousness, the planting of the Lord, that he may be glorified.",
  "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and the God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.",
];

const versesSadAuthors = [
  "Psalm 34:18",
  "Ecclesiastes 3:4",
  "Matthew 5:4 ",
  "Isaiah 61:3 ",
  "2 Corinthians 1:3-4",
];

// //  verses - grief
const versesGrief = [
  "Jesus wept.",
  "Sorrow is better than laughter, for when a face is downcast, it makes the heart better.",
  "For weeping may tarry for the night, but joy comes with the morning.",
  "For we do not have a high priest who is unable to sympathize with our weaknesses, but one who has been tempted in all things as we are, yet without sin. Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.",
  "The Spirit of the Lord God is upon me, because the Lord has anointed me to bring good news to the poor; he has sent me to bind up the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to those who are bound.",
];

const versesGriefAuthors = [
  "John 11:35",
  "Ecclesiastes 7:3",
  "Psalm 30:5 ",
  "Hebrews 4:15-16",
  "Isaiah 61:1",
];

// //  verses - tired
const versesTired = [
  "He makes me lie down in green pastures. He leads me beside quiet waters.",
  "Come to me, all who labor and are heavy laden, and I will give you rest.",
  "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways submit to him, and he will make your paths straight.",
  "He gives strength to the weary and increases the power of the weak.",
  "And the Lord said, “My presence will go with you, and I will give you rest.”",
];

const versesTiredAuthors = [
  "Psalm 23:2",
  "Matthew 11:28",
  "Proverbs 3:5-6",
  "Isaiah 40:29 ",
  "Exodus 33:14",
];

// //  verses - proverbs
const versesProverbs = [
  "Commit your work to the Lord, and your plans will be established.",
  "When pride comes, then comes disgrace, but with the humble is wisdom.",
  "Iron sharpens iron, and one man sharpens another.",
  "Where words are many, sin is not absent, but he who holds his tongue is wise.",
  "Train up a child in the way he should go, and even when he is old he will not depart from it.",
];

const versesProverbsAuthors = [
  "Proverbs 16:3 ",
  "  Proverbs 11:2",
  "  Proverbs 27:17",
  " Proverbs 10:19",
  "  Proverbs 22:6",
];

// //  verses - Encouragement
const versesEncouragement = [
  "I can do all things through him who strengthens me.",
  "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  "He gives strength to the weary and increases the power of the weak.",
  "So we can confidently say, 'The Lord is my helper, I will not fear; what can man do to me?'",
];

const versesEncouragementAuthors = [
  "Philippians 4:13",
  "Joshua 1:9",
  "Romans 8:28",
  "Isaiah 40:29",
  "Hebrews 13:6",
];
// //  verses - Love
const versesLove = [
  "Whoever does not love does not know God, because God is love.",
  "Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. Love bears all things, believes all things, hopes all things, endures all things.",
  "Greater love has no one than this, that someone lay down his life for his friends.",
  "Husbands, love your wives, just as Christ loved the church and gave himself up for her.",
  "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
];

const versesLoveAuthors = [
  "1 John 4:8 ",
  "1 Corinthians 13:4-7",
  "John 15:13",
  "Ephesians 5:25",
  "Romans 5:8",
];

const genreContainer = document.querySelectorAll(".image-container");

genreContainer.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const verseInfo = link.closest(".img-container");
    const imagePath = verseInfo.querySelector(".image").src;
    const verseGenre = verseInfo.querySelector(".overlay p").textContent;

    localStorage.setItem("imagePath", imagePath);
    localStorage.setItem("verseGenre", verseGenre);

    window.location.href = "quotes.html";
  });
});

const imagePath = localStorage.getItem("imagePath");
const pickedGenre = localStorage.getItem("verseGenre");

console.log(pickedGenre);

const imageCover = document.querySelector(".bg-img");
const verse = document.querySelector(".bible-verse");
const verseAuthor = document.querySelector(".verse-author");
const verseBtn = document.querySelector(".verse-btn");
imageCover.src = imagePath;

const usedIndexes = new Set();

if (pickedGenre === "Quotes") redirectVerse(verses, versesAuthors);
else if (pickedGenre === "Happy")
  redirectVerse(versesHappy, versesHappyAuthors);
else if (pickedGenre === "Fear") redirectVerse(versesFear, versesFearAuthors);
else if (pickedGenre === "Sad") redirectVerse(versesSad, versesSadAuthors);
else if (pickedGenre === "Grief")
  redirectVerse(versesGrief, versesGriefAuthors);
else if (pickedGenre === "Proverbs")
  redirectVerse(versesProverbs, versesProverbsAuthors);
else if (pickedGenre === "Tired")
  redirectVerse(versesTired, versesTiredAuthors);
else if (pickedGenre === "Love") redirectVerse(versesLove, versesLoveAuthors);
else if (pickedGenre === "Encouragement")
  redirectVerse(versesEncouragement, versesEncouragementAuthors);

function redirectVerse(pickedVerse, pickedAuthors) {
  verseBtn.addEventListener("click", function () {
    if (usedIndexes.size >= pickedVerse.length) {
      usedIndexes.clear();
    }
    while (true) {
      const randomIdx = Math.floor(Math.random() * pickedVerse.length);

      if (usedIndexes.has(randomIdx)) continue;

      const newVerse = pickedVerse[randomIdx];
      const newAuthor = pickedAuthors[randomIdx];

      verse.innerHTML = newVerse;
      verseAuthor.innerHTML = newAuthor;
      usedIndexes.add(randomIdx);
      break;
    }
  });
}
