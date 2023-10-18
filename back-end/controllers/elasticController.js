

const getRandomPoem = async (req,res) => {
    res.status(200).send(
        {"poem": "නුඹට කවි මල් මාල", "poet": "මහින්ද ප්‍රසාද් මස්ඉඹුල", "year": "2010", "lyrics": "සැමරුම් මල් වත්තෙ යමී හැගුම් එකින් එක නෙළමී සිත් බදුනේ පුරව ගමී අරගෙන මේසයට එමී", "metaphorical terms": "සැමරුම් මල් වත්තෙ", "source_domain": "උත්සවය", "target_domain": "මල් උයන", "Meaning": "සැමරීම මල් වත්තකි", "mood": "Positive"}
    );
}

module.exports = {
    getRandomPoem
}