import { getAscensionLevel, sumObjectArray } from ".";
import { xp } from "./ItemGen";
import { ascensionCosts as fullAscensionCostOf } from "../data/ascensionCost";
import { Character } from "../data/characters";
import { costsTo } from "../data/characterLevels";
import _ from "lodash";
import { BuildItem, items } from "../data/items";
import itemOrder from "./itemOrder";
import { talentCost } from "../data/talentCost";
import { mora as moraGen } from "./ItemGen";

type Progression = { start: number; goal: number };

export function getCharacterMaterials(
    character: Character,
    level: Progression,
    normal: Progression,
    elemental: Progression,
    burst: Progression
) {
    const totalMora: number[] = [];
    const startAsc = getAscensionLevel(level.start);
    const goalAsc = getAscensionLevel(level.goal);

    // leveling
    const levelingCost = getLevelingCost(level.start, level.goal);

    const accurateLevelMaterials = {
        heros_wit: xp(4, levelingCost.accurate[0]),
        adventurers_experience: xp(3, levelingCost.accurate[1]),
        wanderers_advice: xp(2, levelingCost.accurate[2]),
    };

    const lazyLevelMaterial = xp(4, Math.ceil(levelingCost.xp / items.heros_wit.xp));
    lazyLevelMaterial.order = itemOrder.xpLazy;

    // ascension
    const { mora: ascensionMora, items: ascensionMaterials } = getCombinedCost(
        fullAscensionCostOf(character).slice(startAsc, goalAsc)
    );

    function talent(i: Progression) {
        return getCombinedCost(talentCost(character).slice(i.start - 1, i.goal - 1));
    }

    const { mora: normalMora, items: normalMaterials } = talent(normal);
    const { mora: elementalMora, items: elementalMaterials } = talent(elemental);
    const { mora: burstMora, items: burstMaterials } = talent(burst);

    const talents: BuildItem[] = sumObjectArray(
        [...normalMaterials, ...elementalMaterials, ...burstMaterials],
        "order",
        "amount"
    );

    totalMora.push(levelingCost.mora);
    totalMora.push(ascensionMora);
    totalMora.push(normalMora);
    totalMora.push(elementalMora);
    totalMora.push(burstMora);

    const materials = sumObjectArray(
        talents.concat(ascensionMaterials),
        "order",
        "amount"
    ) as BuildItem[];

    const mora = totalMora.reduce((prev, current) => prev + current);

    return {
        xp: levelingCost.xp,
        xpLazy: lazyLevelMaterial,
        xpAccurate: accurateLevelMaterials,
        mora,
        ascension: ascensionMaterials,
        // for some unknown reason normalMaterials is the sum so thats why im recalculating here
        normal: talent(normal).items,
        elemental: elementalMaterials,
        burst: burstMaterials,
        talents,
        materials,
        everything: [moraGen(mora), lazyLevelMaterial, ...materials],
    };
}

function getCombinedCost(requiredAcensions: { mora: number; items: BuildItem[] }[]) {
    const ascensionCost = requiredAcensions.reduce(
        (prev, current) => {
            return {
                mora: prev.mora + current.mora,
                items: [...prev.items, ...current.items],
            };
        },
        { mora: 0, items: [] }
    );

    ascensionCost.items = sumObjectArray(ascensionCost.items, "order", "amount");
    return ascensionCost;
}

function getLevelingCost(start: number, goal: number) {
    return costsTo
        .filter(({ level }) => level > start && level <= goal)
        .reduce(
            (prev, curr) => {
                return {
                    mora: prev.mora + curr.mora,
                    xp: prev.xp + curr.xp,
                    accurate: prev.accurate.map((c, i) => c + curr.accurate[i]),
                };
            },
            { mora: 0, xp: 0, accurate: [0, 0, 0] }
        );
}
// export function getTalentMaterials(
//     character: Character,
//     start: number,
//     goal: number
// ) {
//     if (start < 1 || start > 9) return null;
//     if (goal < 2 || goal > 10) return null;
//     if (start > goal) return null;
// }
