// Constellation coordinates created by: http://tracing-paper.sinusgear.com
var startConstellations = {
    aries: {
        wiki: 'http://en.wikipedia.org/wiki/Aries_(constellation)',
        unicode: '♈',
        title: 'Aries',
        stars: [
            { x: 16, y: 28 , magnitude: "3" },
            { x: 132, y: 71 , magnitude: "2" },
            { x: 166, y: 100 , magnitude: "2" },
            { x: 171, y: 118 , magnitude: "3" }
        ],
        lines: [
            [0,1], [1,2], [2,3]
        ]
    },

    taurus: {
        wiki: 'http://en.wikipedia.org/wiki/Taurus_constellation',
        unicode: '♉',
        title: 'Taurus',
        stars: [
            { x: 42, y: 28 , magnitude: "2" },
            { x: 195, y: 139 , magnitude: "3" },
            { x: 221, y: 180 , magnitude: "3" },
            { x: 278, y: 217 , magnitude: "4" },
            { x: 375, y: 238 , magnitude: "3" },
            { x: 179, y: 170 , magnitude: "1" },
            { x: 9, y: 113 , magnitude: "3" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [2,5], [5,6]
        ]
    },

    gemini: {
        wiki: 'http://en.wikipedia.org/wiki/Gemini_constellation',
        unicode: '♊',
        title: 'Gemini',
        stars: [
            { x: 24, y: 75 , magnitude: "1" },
            { x: 46, y: 93 , magnitude: "4" },
            { x: 21, y: 117 , magnitude: "3" },
            { x: 84, y: 150 , magnitude: "3" },
            { x: 202, y: 218 , magnitude: "2" },
            { x: 88, y: 213 , magnitude: "4" },
            { x: 179, y: 257 , magnitude: "4" },
            { x: 114, y: 58 , magnitude: "4" },
            { x: 185, y: 117 , magnitude: "3" },
            { x: 225, y: 174 , magnitude: "4" },
            { x: 238, y: 145 , magnitude: "3" },
            { x: 261, y: 148 , magnitude: "5" },
            { x: 290, y: 133 , magnitude: "4" },
            { x: 55, y: 31 , magnitude: "1" },
            { x: 158, y: 11 , magnitude: "3" }
        ],
        lines: [
            [0,1], [1,2], [1,3], [3,5], [5,6], [3,4], [1,7], [7,13], [7,14], [7,8], [8,9], [9,10], [10,11], [11,12]
        ]
    },

    cancer: {
        wiki: 'http://en.wikipedia.org/wiki/Cancer_constellation',
        unicode: '♋',
        title: 'Cancer',
        stars: [
            { x: 61, y: 11 , magnitude: "3" },
            { x: 70, y: 95 , magnitude: "4" },
            { x: 66, y: 134 , magnitude: "3" },
            { x: 24, y: 207 , magnitude: "3" },
            { x: 115, y: 199 , magnitude: "4" },
            { x: 145, y: 240 , magnitude: "3" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [2,4], [4,5]
        ]
    },

    leo: {
        wiki: 'http://en.wikipedia.org/wiki/Leo_constellation',
        unicode: '♌',
        title: 'Leo',
        stars: [
            { x: 98, y: 236 , magnitude: "4" },
            { x: 92, y: 183 , magnitude: "4" },
            { x: 123, y: 126 , magnitude: "3" },
            { x: 309, y: 109 , magnitude: "3" },
            { x: 306, y: 166 , magnitude: "2" },
            { x: 366, y: 27 , magnitude: "3" },
            { x: 404, y: 34 , magnitude: "4" },
            { x: 422, y: 0 , magnitude: "4" },
            { x: 347, y: 0 , magnitude: "3" },
            { x: 281, y: 34 , magnitude: "3" },
            { x: 274, y: 72 , magnitude: "2" },
            { x: 123, y: 68 , magnitude: "3" },
            { x: 20, y: 132 , magnitude: "2" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [3,5], [5,6], [6,7], [7,8], [5,8], [8,9], [9,10], [3,10], [10,11], [2,11],
            [11,12], [2,12]
        ]
    },

    virgo: {
        wiki: 'http://en.wikipedia.org/wiki/Virgo_constellation',
        unicode: '♍',
        title: 'Virgo',
        stars: [
            { x: 20, y: 166 , magnitude: "4" },
            { x: 83, y: 171 , magnitude: "4" },
            { x: 180, y: 118 , magnitude: "4" },
            { x: 302, y: 128 , magnitude: "2" },
            { x: 236, y: 166 , magnitude: "5" },
            { x: 198, y: 218 , magnitude: "1" },
            { x: 352, y: 119 , magnitude: "4" },
            { x: 422, y: 98 , magnitude: "3" },
            { x: 432, y: 55 , magnitude: "3" },
            { x: 388, y: 34 , magnitude: "3" },
            { x: 271, y: 82 , magnitude: "3" },
            { x: 256, y: 11 , magnitude: "3" },
            { x: 117, y: 100 , magnitude: "4" },
            { x: 10, y: 98 , magnitude: "3" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [4,5], [3,6], [6,7], [7,8], [8,9], [6,9], [3,10], [10,11], [2,12], [12,13]
        ]
    },

    libra: {
        wiki: 'http://en.wikipedia.org/wiki/Libra_constellation',
        unicode: '♎',
        title: 'Libra',
        stars: [
            { x: 21, y: 248 , magnitude: "4" },
            { x: 26, y: 228 , magnitude: "4" },
            { x: 27, y: 74 , magnitude: "4" },
            { x: 153, y: 88 , magnitude: "3" },
            { x: 112, y: 197 , magnitude: "4" },
            { x: 80, y: 12 , magnitude: "3" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [3,5], [2,5]
        ]
    },

    scorpius: {
        wiki: 'http://en.wikipedia.org/wiki/Scorpio_(constellation)',
        unicode: '♏',
        title: 'Scorpius',
        stars: [
            { x: 24, y: 218 , magnitude: "4" },
            { x: 65, y: 210 , magnitude: "2" },
            { x: 35, y: 253 , magnitude: "3" },
            { x: 63, y: 284 , magnitude: "2" },
            { x: 121, y: 282 , magnitude: "4" },
            { x: 158, y: 269 , magnitude: "4" },
            { x: 162, y: 217 , magnitude: "4" },
            { x: 164, y: 175 , magnitude: "3" },
            { x: 203, y: 105 , magnitude: "3" },
            { x: 222, y: 84 , magnitude: "1" },
            { x: 242, y: 77 , magnitude: "3" },
            { x: 298, y: 45 , magnitude: "3" },
            { x: 298, y: 86 , magnitude: "3" },
            { x: 301, y: 122 , magnitude: "4" },
            { x: 287, y: 12 , magnitude: "3" },
            { x: 271, y: 7 , magnitude: "4" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [10,11], [11,12], [12,13], [11,14],
            [14,15]
        ]
    },

    sagittarius: {
        wiki: 'http://en.wikipedia.org/wiki/Sagittarius_(constellation)',
        unicode: '♐',
        title: 'Sagittarius',
        stars: [
            { x: 143, y: 352 , magnitude: "4" },
            { x: 140, y: 314 , magnitude: "4" },
            { x: 184, y: 183 , magnitude: "3" },
            { x: 176, y: 156 , magnitude: "4" },
            { x: 153, y: 130 , magnitude: "5" },
            { x: 96, y: 129 , magnitude: "5" },
            { x: 48, y: 155 , magnitude: "5" },
            { x: 207, y: 141 , magnitude: "2" },
            { x: 232, y: 150 , magnitude: "3" },
            { x: 278, y: 138 , magnitude: "3" },
            { x: 321, y: 88 , magnitude: "4" },
            { x: 292, y: 185 , magnitude: "3" },
            { x: 332, y: 199 , magnitude: "3" },
            { x: 281, y: 240 , magnitude: "2" },
            { x: 291, y: 268 , magnitude: "3" },
            { x: 181, y: 88 , magnitude: "4" },
            { x: 170, y: 81 , magnitude: "3" },
            { x: 133, y: 48 , magnitude: "3" },
            { x: 129, y: 24 , magnitude: "4" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [3,7], [7,8], [8,9], [9,10], [9,11], [11, 12], [11,13], [13,14],
            [7,15], [15,16], [16,17], [17,18]
        ]
    },

    capricornus: {
        wiki: 'http://en.wikipedia.org/wiki/Capricorn_(constellation)',
        unicode: '♑',
        title: 'Capricornus',
        stars: [
            { x: 15, y: 59 , magnitude: "3" },
            { x: 44, y: 95 , magnitude: "4" },
            { x: 64, y: 122 , magnitude: "4" },
            { x: 123, y: 157 , magnitude: "4" },
            { x: 135, y: 97 , magnitude: "4" },
            { x: 167, y: 180 , magnitude: "4" },
            { x: 183, y: 157 , magnitude: "4" },
            { x: 130, y: 67 , magnitude: "4" },
            { x: 82, y: 65 , magnitude: "4" },
            { x: 231, y: 79 , magnitude: "4" },
            { x: 257, y: 43 , magnitude: "3" },
            { x: 268, y: 13 , magnitude: "3" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [4,5], [4,6], [4,7], [7,8], [7,9], [9,10], [10,11]
        ]
    },

    aquarius: {
        wiki: 'http://en.wikipedia.org/wiki/Aquarius_(constellation)',
        unicode: '♒',
        title: 'Aquarius',
        stars: [
            { x: 20, y: 144 , magnitude: "4" },
            { x: 78, y: 186 , magnitude: "4" },
            { x: 103, y: 195 , magnitude: "4" },
            { x: 129, y: 150 , magnitude: "3" },
            { x: 138, y: 131 , magnitude: "4" },
            { x: 130, y: 87 , magnitude: "4" },
            { x: 200, y: 88 , magnitude: "4" },
            { x: 220, y: 136 , magnitude: "4" },
            { x: 189, y: 35 , magnitude: "3" },
            { x: 176, y: 25 , magnitude: "4" },
            { x: 162, y: 26 , magnitude: "4" },
            { x: 188, y: 8 , magnitude: "4" },
            { x: 224, y: 28 , magnitude: "4" },
            { x: 290, y: 69 , magnitude: "4" },
            { x: 325, y: 119 , magnitude: "4" },
            { x: 375, y: 106 , magnitude: "4" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [6,8], [8,9], [9,10], [9,11], [8,12], [12,13], [13,14],
            [14,15]
        ]
    },

    pisces: {
        wiki: 'http://en.wikipedia.org/wiki/Pisces_(constellation)',
        unicode: '♓',
        title: 'Pisces',
        stars: [
            { x: 124, y: 24 , magnitude: "4" },
            { x: 106, y: 47 , magnitude: "4" },
            { x: 117, y: 66 , magnitude: "4" },
            { x: 81, y: 136 , magnitude: "4" },
            { x: 49, y: 181 , magnitude: "4" },
            { x: 12, y: 228 , magnitude: "4" },
            { x: 60, y: 212 , magnitude: "4" },
            { x: 131, y: 196 , magnitude: "4" },
            { x: 160, y: 200 , magnitude: "4" },
            { x: 257, y: 202 , magnitude: "4" },
            { x: 295, y: 212 , magnitude: "4" },
            { x: 292, y: 241 , magnitude: "4" },
            { x: 323, y: 245 , magnitude: "4" },
            { x: 341, y: 224 , magnitude: "4" },
            { x: 324, y: 204 , magnitude: "4" }
        ],
        lines: [
            [0,1], [1,2], [0,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [10,11], [11,12], [12,13],
            [13,14], [10,14]
        ]
    },
    outro: {
        unicode: '☺',
        title: '',
        wiki: 'http://pf2014.sinusgear.com',
        stars: [
            { x: 19, y: 132 , magnitude: "2" },
            { x: 19, y: 79 , magnitude: "2" },
            { x: 43, y: 79 , magnitude: "2" },
            { x: 51, y: 92 , magnitude: "2" },
            { x: 42, y: 106 , magnitude: "2" },
            { x: 18, y: 106 , magnitude: "2" },
            { x: 68, y: 133 , magnitude: "2" },
            { x: 68, y: 104 , magnitude: "2" },
            { x: 92, y: 105 , magnitude: "2" },
            { x: 68, y: 78 , magnitude: "2" },
            { x: 97, y: 78 , magnitude: "2" },
            { x: 159, y: 132 , magnitude: "2" },
            { x: 124, y: 131 , magnitude: "2" },
            { x: 157, y: 94 , magnitude: "2" },
            { x: 145, y: 78 , magnitude: "2" },
            { x: 128, y: 81 , magnitude: "2" },
            { x: 188, y: 134 , magnitude: "2" },
            { x: 203, y: 118 , magnitude: "2" },
            { x: 201, y: 86 , magnitude: "2" },
            { x: 186, y: 79 , magnitude: "2" },
            { x: 175, y: 99 , magnitude: "2" },
            { x: 173, y: 113 , magnitude: "2" },
            { x: 236, y: 131 , magnitude: "2" },
            { x: 236, y: 78 , magnitude: "2" },
            { x: 232, y: 87 , magnitude: "2" },
            { x: 291, y: 133 , magnitude: "2" },
            { x: 288, y: 79 , magnitude: "2" },
            { x: 262, y: 114 , magnitude: "2" },
            { x: 301, y: 116 , magnitude: "2" },
            { x: 163, y: 240 , magnitude: "2" },
            { x: 185, y: 242 , magnitude: "2" },
            { x: 186, y: 186 , magnitude: "2" },
            { x: 205, y: 206 , magnitude: "2" },
            { x: 204, y: 226 , magnitude: "2" },
            { x: 220, y: 239 , magnitude: "2" },
            { x: 234, y: 223 , magnitude: "2" },
            { x: 235, y: 202 , magnitude: "2" },
            { x: 235, y: 243 , magnitude: "2" },
            { x: 272, y: 204 , magnitude: "2" },
            { x: 255, y: 216 , magnitude: "2" },
            { x: 256, y: 201 , magnitude: "2" },
            { x: 255, y: 244 , magnitude: "2" },
            { x: 309, y: 244 , magnitude: "2" },
            { x: 307, y: 221 , magnitude: "2" },
            { x: 304, y: 204 , magnitude: "2" },
            { x: 289, y: 204 , magnitude: "2" },
            { x: 285, y: 224 , magnitude: "2" },
            { x: 281, y: 238 , magnitude: "2" },
            { x: 294, y: 244 , magnitude: "2" },
            { x: 317, y: 258 , magnitude: "2" },
            { x: 330, y: 246 , magnitude: "2" },
            { x: 330, y: 202 , magnitude: "2" },
            { x: 331, y: 186 , magnitude: "2" },
            { x: 158, y: 235 , magnitude: "2" }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [4,5], // P
            [6,7], [7,8], [7,9], [9,10], // F
            [11,12], [12,13], [13,14], [14,15], // 2
            [16,17], [17,18], [18,19], [19,20], [20,21], [16,21], // 0
            [22,23], [23,24], // 1
            [25,26], [26,27], [27,28], // 4
            [29,30], [30,31], // J
            [32,33], [33,34], [34,35], [35,36], [35,37], // u
            [38,39], [39,40], [39,41], // r
            [42,43], [43,44], [44,45], [43,46], [46,47], [47,48], [42,48], // a
            [49,50], [50,51] // j
        ]
    }
};
