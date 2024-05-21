import axios from "axios";
import { USER_ACTIVITY__MOCK, USER_AVERAGE_SESSIONS__MOCK, USER_PERFORMANCE__MOCK, USER_MAIN_DATA__MOCK } from "../../data/data";




export async function fetchUserData(userId, devMode) {
    if (devMode) {
        const finalUserData = [USER_MAIN_DATA__MOCK, USER_ACTIVITY__MOCK, USER_AVERAGE_SESSIONS__MOCK, USER_PERFORMANCE__MOCK];
        return Data(finalUserData, 0, true);
    }

    const paths = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/activity`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`
    ];

    try {
        const userData = await Promise.all(paths.map(url => axios.get(url).then(res => res.data).catch(() => null)));
        const validUserData = userData.filter(data => data !== null);
        const index = validUserData.length === 0 ? 0 : '';
        const finalUserData = validUserData.length === 0 ? [USER_MAIN_DATA__MOCK, USER_ACTIVITY__MOCK, USER_AVERAGE_SESSIONS__MOCK, USER_PERFORMANCE__MOCK] : validUserData;
        return Data(finalUserData, index, false);
    } catch (error) {
        console.error(error);
        return null;
    }
}

function Data(users, index, dataMock) {
    const day = ["L", "M", "M", "J", "V", "S", "D"]
    let user = [];
    let kind = [];

    if (index === 0) {
        user = [
            {
                userId: users[0][index].id,
                firstName: users[0][index].userInfos.firstName,
                lastName: users[0][index].userInfos.lastName,
                age: users[0][index].userInfos.age,
                todayScore: [
                    { value: users[0][index].score * 100 || users[0][index].todayScore * 100 },
                    { value: (1 - users[0][index].score) * 100 || (1 - users[0][index].todayScore) * 100 }
                ],
                keyData: {
                    kCal: users[0][index].keyData.calorieCount,
                    protein: users[0][index].keyData.proteinCount,
                    carbohydrate: users[0][index].keyData.carbohydrateCount,
                    lipid: users[0][index].keyData.lipidCount
                },
                activity: users[1][index].sessions,
                timesSessions: users[2][index].sessions,
                performance: users[3][index].data
            }
        ];

        let i = 0;
        day.forEach(el => {
            user[0].timesSessions[i].day = el;
            i++;
        });

        kind = users[3][index].kind;
        let x = 1;
        user[0].performance.forEach(el => {
            el.kind = kind[x];
            x++;
        });
    } else {
        user = [
            {
                userId: users[0].data.id,
                firstName: users[0].data.userInfos.firstName,
                lastName: users[0].data.userInfos.lastName,
                age: users[0].data.userInfos.age,
                todayScore: [
                    { value: users[0].data.score * 100 || users[0].data.todayScore * 100 },
                    { value: (1 - users[0].data.score) * 100 || (1 - users[0].data.todayScore) * 100 }
                ],
                keyData: {
                    kCal: users[0].data.keyData.calorieCount,
                    protein: users[0].data.keyData.proteinCount,
                    carbohydrate: users[0].data.keyData.carbohydrateCount,
                    lipid: users[0].data.keyData.lipidCount
                },
                activity: users[1].data.sessions,
                timesSessions: users[2].data.sessions,
                performance: users[3].data.data
            }
        ];

        let i = 0;
        day.forEach(el => {
            user[0].timesSessions[i].day = el;
            i++;
        });

        kind = users[3].data.kind;
        let x = 1;
        user[0].performance.forEach(el => {
            el.kind = kind[x];
            x++;
        });
    }

    return { user, kind, dataMock };
}