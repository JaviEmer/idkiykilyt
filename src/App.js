import "./App.css";
import { useState } from "react";
import { ReactTerminal } from "react-terminal";

function App(props) {
    const [locked, setLocked] = useState(true);

    const theme = {
        "dark-blue": {
            themeBGColor: "#272B36",
            themeToolbarColor: "#DBDBDB",
            themeColor: "#FFFEFC",
            themePromptColor: "#1A87B5",
        },
    };

    const introMsg = [
        "hi josh,",
        <br />,
        <br />,
        "happy (belated) monthiversery! ik we already exchanged gifts and celebrated, but i'll be away for the next two weeks, so i wanted to give u one more thing (jic u miss me, jk ill prob listen to it bc imma be missing u 😩)",
        <br />,
        <br />,
        "thing is, this is a public site...so i just wanna make sure it's rly u :)...",
        <br />,
        <br />,
    ];

    const letter = [
        <br />,
        "dayum he figured it out 🙃, maybe u r josh :)",
        <br />,
        <br />,
        "aight so, ur final monthiversery gift this month...i may or may not have made u a mixtape 👀",
        <br />,
        <br />,
        "jk jk, it's just a spotify playlist of a bunch of songs that made me think of u this month 👉👈...ik we might not always be able to talk all the time, so im hoping this playlist helps a bit w de ugly feelings 😫",
        <br />,
        <br />,
        <i>
            side note: bruh i swear im cursed in the gift giving
            department...tried to give u a portable charger and it didn't work
            with ur phone...tried to get u anime crocs and they were bad
            quality...tried to get u a light painting and the seller leaves
            etsy...tried to give u a spotify playlist and ur premium ran out 💀
        </i>,
        <br />,
        <br />,
        <a href="https://open.spotify.com/playlist/34MdMEKDP35qiYiz0ZNT31?si=1a7a640adc2640df&pt=8c9f89f0dd1d7429a5b2a32ef6b2a66b">
            idkiykilyt
        </a>,
        <br />,
    ];

    const songs = [
        [
            "https://open.spotify.com/track/5inDa3sWj8zqJBOdj7Bjqc?si=8812116db94a4cea",
            "Hey Stupid, I Love You",
            "lol i think the title says it all 😉, but nah this song honestly reminded me of the first time we had a talk abt ugly feelings on my couch and i ended up confessing my feelings with that first letter over text",
        ],
        [
            "https://open.spotify.com/track/4ccM2xBxicGigjLqt6A0YY?si=0b2167dd0d9c458c",
            "Accidentally In Love",
            "u said it was the peak of our relationship when i sent this to u on tiktok...ig this is me trying to reignite that flame haha (side note - dk y...but the intro reminds me of good luck charlie? 🤷‍♀️)",
        ],
        [
            "https://open.spotify.com/track/0IktbUcnAGrvD03AWnz3Q8?si=dd3e7a9a74ba4afd",
            "Lucky",
            "one of my fav duets of all time, but it made the playlist cause it reminded me of when we were in cvs and i was tryna figure out what song was playing and u knew it was this one. ik it's cheesy, but it reminds me how lucky i am that u put up with my random af thoughts and questions 🥹",
        ],
        [
            "https://open.spotify.com/track/2tlJ22iQwiO1CWBQSma23n?si=dcac1eef3982416d",
            "Car Crash",
            "bc ive never crashed a car before 🫡 and its jaeeeeeee",
        ],
        [
            "https://open.spotify.com/track/1nfYgAwhHh37Kl6Z0YQf7Q?si=f35832f571fd4b7f",
            "carpool",
            "ig i was thinking abt cars lol, but everytime this song plays, i always get a strong urge to go on a roadtrip w u and i remember all the times we spent driving where i could just admire u 🥹 (from the passenger seat, ofc) and think abt how i ended up in such a surreal situation",
        ],
        [
            "https://open.spotify.com/track/3VduqK7YTkiOAbW1VQN1n1?si=fda58a55989241be",
            "The Reminder",
            "this song honestly hit a little too close to home, bc before u, i literally had no urge to date anyone; but now i'm literally in my feels all the time 😩",
        ],
        [
            "https://open.spotify.com/track/5uCax9HTNlzGybIStD3vDh?si=599e75aa64b84e3e",
            "Say You Won't Let Go",
            "dk y but spotify always plays this when we're apart and i'm hella missing u...maybe it's karma for all the times i made u cry 😭",
        ],
        [
            "https://open.spotify.com/track/12ZYXSzFJUSrFyO1u3Ylqx?si=0ff6d5efbb5e43f1",
            "Constant",
            "i think i told u one time, that I'll always be here for u no matter what and whatnot...then this song popped up and i was like the alg too good 🤣, but i rly like the lyrics...ur my constant, my home 🥹",
        ],
        [
            "https://open.spotify.com/track/1aDp8xY9kW41COJILd8fHZ?si=cb83cf4bd03b4d0f",
            "Sick of You",
            "this song actually came from amber's playlist...she was just playing songs in the living room and i suddenly became aware of the lyrics and thought of u, or rather thought abt how it doesnt make sense that ur not tired of me yet...but, i liked the title too 👀, so i sent it to u 🙃",
        ],
        [
            "https://open.spotify.com/track/3witRpHWHqArlnt6GTlH2Y?si=5e15ef8889134bf5",
            "I Love You 3000 II",
            "i rly just love this song haha...makes me wish we were able to see endgame and stuff together tho T-T 🤟🤟",
        ],
        [
            "https://open.spotify.com/track/4zRZAmBQP8vhNPf9i9opXt?si=bb2b37d68ab3446b",
            "8 Letters",
            "one of my fav bands, so i listened to this song a lot...it always made me think i wouldn't be able to say ily easily (cause i dont usually say it, even to fam), but when u said it to me...i couldn't help but smile and say it back 💙💙",
        ],
        [
            "https://open.spotify.com/track/0Cy7wt6IlRfBPHXXjmZbcP?si=79c7297c31a145b7",
            "Love Me Like You Do",
            "honestly, dk y this song got stuck in my head, but i think i was hanging out w christina or emmy, and this song kept playing in my head and made me think of u instead of paying attention to my convos 💀",
        ],
        [
            "https://open.spotify.com/track/2DWcyKW7Octj99X4lXSjBa?si=2f825fa42f6e43af",
            "Love Me (Like You Do)",
            "funny what shows up when u type in 'love me' in spotify...this is one of my fav youtube couple's first song together after getting married...they're so cute, i hope we end up like them 👉👈",
        ],
        [
            "https://open.spotify.com/track/0RiRZpuVRbi7oqRdSMwhQY?si=d0b30fd1ce0a4128",
            "Sunflower",
            "u prob know this song better than me considering how many times u watched the movie, but this song always reminds me of when u said spiderverse was better than tom's spiderman...had to rly think abt whether i could overlook the red flag ngl 😠",
        ],
        [
            "https://open.spotify.com/track/7ygpwy2qP3NbrxVkHvUhXY?si=05365f3f8fef4b07",
            "Wonderwall",
            "i saw this word/song on tiktok but then forgot to send it to u bc i was searching up the pronunciation and got distracted haha, but then u sent it to meeee (same brain? 🥲)...but yeh 'ur my wonderwall' sounds a lot better than 'ur my backboard' haha",
        ],
        [
            "https://open.spotify.com/track/0AnZrWo2TuUX5BnFjsoy3N?si=39a72dbbaeb94e76",
            "Lucky (by diff ppl than #3?)",
            "how can i not think of u when this song comes up, have u heard the lyrics? fr tho y u taking all my good luck 🥲",
        ],
        [
            "https://open.spotify.com/track/2iUmqdfGZcHIhS3b9E9EWq?si=b439820d093e483b",
            "Everybody Talks",
            "i never rly listened to this song before, but now i love it bc it reminds me of one of the first times we hung out 🙃 (when we were doing the puzzle and the throat clearing made me think of this song and we listened to it together)",
        ],
        [
            "https://open.spotify.com/track/2t0NfhRIiib6zlCw2XlHoq?si=61a3e4f75beb4ca6",
            "All Star",
            "lolll r we back to shrek already? i had no idea that this song was from shrek so i remember being rly surprised when it popped up during our shrek marathon...ty for putting up with my ocd watching habits 🥹...speaking of ocd...i was gonna add Fearless Hero to the playlist too for ur boi, but i wanted an even 50 songs and one of them had to go 🥺",
        ],
        [
            "https://open.spotify.com/track/1YlulsUKDduOmC7WxvXYPW?si=07dd64e695464739",
            "Painkiller",
            "im usually rly good at managing my feelings (understanding and compartmentalizing them), but lately my ugly feelings dont make much sense...and ur hugs r the only thing that make me feel better...so pls save some for me when i get back 👉👈, bc i can already tell imma need a lot of them to make up for how much missing u is gonna hurt 🥺",
        ],
        [
            "https://open.spotify.com/track/5DJWH2fAY7jwFe9AU2WEsb?si=fed7ccf4cf2a4ef8",
            "Stay In It",
            "it's jonathan's fav band so i gotta add it right? lolll but srsly, i'm so grateful that u were able to go bc u made that concert so much more fun and comfortable despite my concert curse 🥹",
        ],
        [
            "https://open.spotify.com/track/6xgkzw6jOVCIJ5h4XPPqAt?si=32dfe0c948844da2",
            "I Sleep With the Windows Open",
            "might be my fav song on the album, but every song on it takes me back to the concert and how fun it was *attempting* to dance and vibe w u",
        ],
        [
            "https://open.spotify.com/track/2YlZnw2ikdb837oKMKjBkW?si=9cdc9fd7476b4a83",
            "Like I'm Gonna Lose You",
            "meghan trainorrrr (aka shark boi's wife) and john legend? imma cry lolll...but yeh i can't help but miss u and be sad when this song comes on 😭",
        ],
        [
            "https://open.spotify.com/track/0GVuLQtPXFaL18ijEOqoAa?si=19bed5701e4540f9",
            "Tightrope",
            "my siblings and i listen to the greatest showman all the time, but none of us had heard of this song...still it's cute to picture u dancing at that debut to this song 💙",
        ],
        [
            "https://open.spotify.com/track/3BajoSb3TjPbcOC873OjbD?si=c4799d55c7d74b5e",
            "May I Ask",
            "whenever this song comes on, i remember u asking me if i knew it, dk y but it's a memory that warms my 🫰...pogi when listening to cute songs? ",
        ],
        [
            "https://open.spotify.com/track/2KMLGJ1mPfRE4GNdL92rl3?si=8cd6ac9763574918",
            "Toss A Coin To Your Witcher",
            "i can't believe we still haven't finished the witcher lmfaooo, but i remember u saying 'this song is actually kinda good' when we were watching and uk what...it kinda is 🤣",
        ],
        [
            "https://open.spotify.com/track/7iocNjLrxPHLl8njgRlv5U?si=76b791ab6214427e",
            "Married Life",
            "oof, if u think i cry a lot during movies now, u shoulda seen me when i watched up 💀...couple goals tho am i right 🙃",
        ],
        [
            "https://open.spotify.com/track/0SccFtYdj75y6lL2OW10Cf?si=e944af1f2ad74323",
            "Steal The Show",
            "elementals was too cute a movie not to add a couple songs from...this was my fav tbh 💙...i cant believe u made fun of me for crying tho 😭",
        ],
        [
            "https://open.spotify.com/track/4wk7glc3dfDHTmIpUkGrfK?si=791dcdb0e49a4080",
            "Rollerblades",
            "also an elementals song 🤣 (ngl i didn't notice it til i searched up the soundtrack tho)...but tis us in heelys?",
        ],
        [
            "https://open.spotify.com/track/62aP9fBQKYKxi7PDXwcUAS?si=fc4017fd27104ff2",
            "ily",
            "also an elementals song? 🎶trust in me when i say, i love u, babyyyy🎶",
        ],
        [
            "https://open.spotify.com/track/66nmEWu5yEHV68lg3VPnyN?si=e847ca4c77b14e2b",
            "The Current",
            "also an elementals song...how did i not hear these during the movie haha...but such a cute song that reminds me of our drives, dancing at the concert, and our late night calls 💙💙...but it makes me sad cause it also makes me wish we could road trip or watch the sunset together (without racing back for a curfew)",
        ],
        [
            "https://open.spotify.com/track/0EcQcdcbQeVJn9fknj44Be?si=21c2baa3c85f44b3",
            "I Like Me Better",
            "honestly can't believe how long it took me to add this song, cause i always talk about how i have to like who i am when im w someone, but honestly i like me better when im w u 🥺",
        ],
        [
            "https://open.spotify.com/track/5iFwAOB2TFkPJk8sMlxP8g?si=779bd4e6cb2f45fe",
            "Make You Mine",
            "🎶put ur hand in mine, uk i want to be w u all the time🎶...virtually ig cause ill be down under 😭...but uhm (tsss) fun fact? the leading guy in this band is the same as the one from my fav couple from the 13th song :)",
        ],
        [
            "https://open.spotify.com/track/11bD1JtSjlIgKgZG2134DZ?si=039d07a221034780",
            "Chasing Cars",
            "i didn't know the name of this song til u pointed it out, and now whenever it plays, i'm reminded...that i suck at remembering songs but ive got someone i can lean on for that now 🙃...🎶would u lie w me and just forget the world🎶",
        ],
        [
            "https://open.spotify.com/track/47BBI51FKFwOMlIiX6m8ya?si=644bc861b3b046c7",
            "I Want It That Way",
            "dk if u remember this, but i randomly mentioned this song when chasing cars was playing and u sang it while chasing cars continued in the background...pogi when singing 👉👈?",
        ],
        [
            "https://open.spotify.com/track/19cL3SOKpwnwoKkII7U3Wh?si=f05fa3e89d0d4737",
            "Geronimo",
            "lol i dont think ive ever actually listened to the lyrics of this song...but it played when i was in front of ur house and then i drove past the sign...ig i just added it here cause i wanted to tell someone that story 🤣",
        ],
        [
            "https://open.spotify.com/track/3TMmmPJ85SMqrhl03qNYNm?si=f9e1e9b8d0294497",
            "friend zone",
            "👀 cant forget ur fav song",
        ],
        [
            "https://open.spotify.com/track/22vgEDb5hykfaTwLuskFGD?si=7914435cfdfe4ae9",
            "Sucker",
            "🎶ur the tattoo inside my brain...im a sucker for u🎶 arent the jonas bros cute tho 👀",
        ],
        [
            "https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f?si=3cd9cfc8da3f48dd",
            "Thinking out Loud",
            "im not 23 yet, but i hope we make it til we 70 👉👈 honestly tho every ed sheeran song got me in my feels abt u 💀",
        ],
        [
            "https://open.spotify.com/track/6M31fPFCYB8Job3MCjjrDV?si=b9eb1a8640694d06",
            "They Don't Know About Us",
            "every time i listen to this song, im right back to when we first started dating and were hiding it from friends and fam...we've come such a long way 🥹, it's nice to finally be able to hold ur hand without looking over my shoulder for more javi's tho 🤣",
        ],
        [
            "https://open.spotify.com/track/79esEXlqqmq0GPz0xQSZTV?si=041d9aab321e4dcf",
            "Lost In Japan",
            "this song literally makes me question my aversion to lotto tickets...if only plane tickets weren't so expensive 😭, this couldve been us",
        ],
        [
            "https://open.spotify.com/track/55p8TQ1ggGYOO1gLQrC52D?si=0baf9724d7f34b7e",
            "Favorite T-Shirt",
            "😭...this song always makes me wanna cuddle and listen to ur heartbeat...also where's ur fav t-shirt 👉👈",
        ],
        [
            "https://open.spotify.com/track/161DnLWsx1i3u1JT05lzqU?si=7bfdf4a8811b4a92",
            "Talking to the Moon",
            "pls fix spotify...y is it feeding me sad songs when we r gonna be apart for two weeks 😭",
        ],
        [
            "https://open.spotify.com/track/4G9lsrM81o93PgEtGpTb3b?si=5e32237783b9449e",
            "W.A.P.",
            "bc i got a...jk lol its the version from joy ride 🤣, the first movie we watched where i didn't cry 👀 fs fs",
        ],
        [
            "https://open.spotify.com/track/2JRLoT6z48Pfihyj1s1u77?si=ab2246f8d77e4429",
            "Day Dreaming",
            "im telling u...im usually a good driver but someone keeps on making me day dream 👀, jk jk im just rly bad at paying attention 😭...someone got me wishin for the first line tho 👉👈, i mean whaaaa-",
        ],
        [
            "https://open.spotify.com/track/3QGsuHI8jO1Rx4JWLUh9jd?si=77c6681353914ce2",
            "Treat You Better",
            "even when we got stuck in stopped traffic and u were hella ded, u still found the energy to sing this...the whole song, i remember thinking idk how i pulled someone like u",
        ],
        [
            "https://open.spotify.com/track/7BKLCZ1jbUBVqRi2FVlTVw?si=c2d6719281e14bde",
            "Closer",
            "im sorry ive got singing trauma and made u sing both the guy and girl part, but ur so cute when u sing :)...maybe thats my passenger princess bias tho 🤣",
        ],
        [
            "https://open.spotify.com/track/6aZ8xwHXBLY8Cph8GWdtWr?si=fb9d9343c4ef44f0",
            "Automatic",
            "🎶taking all the turns wrong, but if it brought me here, im not mad🎶 ive got major imposter syndrome, but it honestly feels like i was meant to make all those missteps in life (ok maybe not all...) to find u",
        ],
        [
            "https://open.spotify.com/track/7x9aauaA9cu6tyfpHnqDLo?si=3d20972a889248eb",
            "Seven",
            "honestly did not expect this song to be so explicit 💀, but had to include this in the list cause i always send u this artist w the 🫰 sign (the innocence of that gif is ironic isnt it 🙃)",
        ],
        [
            "https://open.spotify.com/track/61OtYav1fiUCr73JwZD2Sb?si=b598f25035384251",
            "It's You",
            "when my friends talked abt their relationship probs, i always said this one phrase 'right person, right time', by which i meant that u can find ur person but the timing may not be right...and this song reminded me of that...but isn't it crazy that we found each other when we did?...🎶ur the right time at the right moment🎶",
        ],
        [
            "https://open.spotify.com/track/5qDfGiZz9Soxb9Xn2jQ8hk?si=e30fe32e15dd4557",
            "Favourite Things",
            "whenever i hear this song, i cant help but smile and remember our various highlights and negatives sessions...i also think he has no right being so accurate w the line 🎶never enuf, when it comes to u🎶 ",
        ],
    ];

    const lockedCmds = {
        michelle: "poof poof goof goof wrongey hehe",
        42523: [
            "oop, one num off...heyyyy, did u rly think i forgot ur bday again?",
            <br />,
        ],
        41523: [
            "oop, i lied haha still one num off...sry i get my dates mixed up...we've only been dating a month and a bit right?",
            <br />,
        ],
        61523: () => {
            setLocked(false);
            return letter;
        },
    };

    function getSong(num) {
        return [
            <a href={songs[num][0]}>
                {" "}
                {num + 1}. {songs[num][1]}
            </a>,
            ": " + songs[num][2],
            <br />,
            <br />,
        ];
    }

    const unlockedCmds = {
        all: () => {
            let str = [];
            for (let i = 0; i < 50; i++) {
                str = str.concat(getSong(i));
            }
            return str;
        },
        1: () => {
            return getSong(0);
        },
        2: () => {
            return getSong(1);
        },
        3: () => {
            return getSong(2);
        },
        4: () => {
            return getSong(3);
        },
        5: () => {
            return getSong(4);
        },
        6: () => {
            return getSong(5);
        },
        7: () => {
            return getSong(6);
        },
        8: () => {
            return getSong(7);
        },
        9: () => {
            return getSong(8);
        },
        10: () => {
            return getSong(9);
        },
        11: () => {
            return getSong(10);
        },
        12: () => {
            return getSong(11);
        },
        13: () => {
            return getSong(12);
        },
        14: () => {
            return getSong(13);
        },
        15: () => {
            return getSong(14);
        },
        16: () => {
            return getSong(15);
        },
        17: () => {
            return getSong(16);
        },
        18: () => {
            return getSong(17);
        },
        19: () => {
            return getSong(18);
        },
        20: () => {
            return getSong(19);
        },
        21: () => {
            return getSong(20);
        },
        22: () => {
            return getSong(21);
        },
        23: () => {
            return getSong(22);
        },
        24: () => {
            return getSong(23);
        },
        25: () => {
            return getSong(24);
        },
        26: () => {
            return getSong(25);
        },
        27: () => {
            return getSong(26);
        },
        28: () => {
            return getSong(27);
        },
        29: () => {
            return getSong(28);
        },
        30: () => {
            return getSong(29);
        },
        31: () => {
            return getSong(30);
        },
        32: () => {
            return getSong(31);
        },
        33: () => {
            return getSong(32);
        },
        34: () => {
            return getSong(33);
        },
        35: () => {
            return getSong(34);
        },
        36: () => {
            return getSong(35);
        },
        37: () => {
            return getSong(36);
        },
        38: () => {
            return getSong(37);
        },
        39: () => {
            return getSong(38);
        },
        40: () => {
            return getSong(39);
        },
        41: () => {
            return getSong(40);
        },
        42: () => {
            return getSong(41);
        },
        43: () => {
            return getSong(42);
        },
        44: () => {
            return getSong(43);
        },
        45: () => {
            return getSong(44);
        },
        46: () => {
            return getSong(45);
        },
        47: () => {
            return getSong(46);
        },
        48: () => {
            return getSong(47);
        },
        49: () => {
            return getSong(48);
        },
        50: () => {
            return getSong(49);
        },
    };

    if (locked)
        return (
            <ReactTerminal
                welcomeMessage={introMsg}
                errorMessage={[
                    "nice try haha...but maybe checking my last letter will help 👀",
                    <br />,
                ]}
                prompt="[pls enter the 5 digit passcode] >>>"
                showControlBar={false}
                commands={lockedCmds}
                themes={theme}
                theme="dark-blue"
            />
        );
    return (
        <ReactTerminal
            welcomeMessage={introMsg}
            errorMessage={["mmm...sry dk what u mean loll", <br />]}
            prompt="[pls enter a song #1-50 or just type 'all'] >>>"
            showControlBar={false}
            commands={unlockedCmds}
            themes={theme}
            theme="dark-blue"
        />
    );
}
export default App;
