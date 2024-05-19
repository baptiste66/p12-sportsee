export const USER_MAIN_DATA__MOCK = [
    {
        id: 'test',
        userInfos: {
            firstName: 'Thomas',
            lastName: 'Thomas',
            age: 25,
        },
        score: 0.12,
        keyData: {
            calorieCount: 1935,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    }
]

export const USER_ACTIVITY__MOCK = [
    {
        userId: 'test',
        sessions: [
            {
                day: '1',
                kilogram: 68,
                calories: 250
            },
            {
                day: '2',
                kilogram: 68,
                calories: 275
            },
            {
                day: '3',
                kilogram: 68,
                calories: 356
            },
            {
                day: '4',
                kilogram: 68,
                calories: 668
            },
            {
                day: '5',
                kilogram: 68,
                calories: 150
            },
            {
                day: '6',
                kilogram: 68,
                calories: 369
            },
            {
                day: '7',
                kilogram: 68,
                calories: 620
            }
        ]
    }
]


export const USER_AVERAGE_SESSIONS__MOCK = [
    {
        userId: 'test',
        sessions: [
            {
                day: 1,
                sessionLength: 68
            },
            {
                day: 2,
                sessionLength: 68
            },
            {
                day: 3,
                sessionLength: 65
            },
            {
                day: 4,
                sessionLength: 68
            },
            {
                day: 5,
                sessionLength: 68
            },
            {
                day: 6,
                sessionLength: 68
            },
            {
                day: 7,
                sessionLength: 68
            }
        ]
    }
]


export const USER_PERFORMANCE__MOCK = [
    {
        userId: 'test',
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 250,
                kind: 1
            },
            {
                value: 150,
                kind: 2
            },
            {
                value: 42,
                kind: 3
            },
            {
                value: 99,
                kind: 4
            },
            {
                value: 300,
                kind: 5
            },
            {
                value: 103,
                kind: 6
            }
        ]
    }
]