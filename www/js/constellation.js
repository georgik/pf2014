var constellations = {
    aries: {
        wiki: 'http://en.wikipedia.org/wiki/Aries_(constellation)',
        unicode: '♈',
        stars: [
            { x: 23, y: 24, spectralType: 'G', magnitude: 3 },
            { x: 139, y: 67, spectralType: 'A', magnitude: 2 },
            { x: 171, y: 95, spectralType: 'A', magnitude: 2 },
            { x: 178, y: 110, spectralType: 'G', magnitude: 3 }
        ],
        lines: [
            [0,1], [1,2], [2,3]
        ]
    },

    taurus: {
        stars: [
            { x: 48, y: 16, spectralType: 'G', magnitude: 2 },
            { x: 174, y: 102, spectralType: 'G', magnitude: 3 },
            { x: 201, y: 91, spectralType: 'G', magnutide: 4 },
            { x: 227, y: 78, spectralType: 'G', magnitude: 4 },
            { x: 263, y: 60, spectralType: 'G', magnitude: 2 },
            { x: 186, y: 119, spectralType: 'G', magnitude: 4 },
            { x: 195, y: 134, spectralType: 'G', magnitude: 4 },
            { x: 238, y: 163, spectralType: 'G', magnitude: 3 },
            { x: 309, y: 186, spectralType: 'G', magnitude: 3 },
            { x: 175, y: 132, spectralType: 'G', magnitude: 3 },
            { x: 160, y: 126, spectralType: 'A', magnitude: 1 },
            { x: 89, y: 110, spectralType: 'G', magnitude: 4 },
            { x: 23, y: 85, spectralType: 'G', magnitude: 3 }
        ],
        lines: [
            [0,1], [1,2], [2,3], [3,4], [1,5], [5,6], [6,7], [7,8], [6,9], [9,10], [10, 1], [10,11], [11,12]
        ]
    }
};
