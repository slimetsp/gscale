import { IItem } from "./contracts/IItem";
import ItemsKey from "./keys/ItemsKey";

export const Items: { [key in ItemsKey]: IItem } = {
  unknown: {
    name: "Unknown Item",
    normalizedName: "unknown",
    rarity: 0,
    category: "none",
  },
  none: {
    name: "",
    normalizedName: "none",
    rarity: 0,
    category: "none",
  },

  tears_of_the_calamitous_god: {
    name: "Tears of the Calamitous God",
    normalizedName: "tears_of_the_calamitous_god",
    rarity: 5,
    category: "weekly",
  },

  runic_fang: {
    name: "Runic Fang",
    normalizedName: "runic_fang",
    rarity: 4,
    category: "boss",
  },

  mudra_of_the_malefic_general: {
    name: "Mudra of the Malefic General",
    normalizedName: "mudra_of_the_malefic_general",
    rarity: 5,
    category: "weekly",
  },
  the_meaning_of_aeons: {
    name: "The Meaning of Aeons",
    normalizedName: "the_meaning_of_aeons",
    rarity: 5,
    category: "weekly",
  },
  dragonheirs_false_fin: {
    name: "Dragonheir's False Fin",
    normalizedName: "dragonheirs_false_fin",
    rarity: 4,
    category: "boss",
  },

  // Inazuma weapon materials
  chaos_oculus: {
    name: "Chaos Oculus",
    normalizedName: "chaos_oculus",
    rarity: 4,
    groupId: "sentinel_gear",
    category: "weaponCommon",
  },
  chaos_axis: {
    name: "Chaos Axis",
    normalizedName: "chaos_axis",
    rarity: 3,
    groupId: "sentinel_gear",
    category: "weaponCommon",
  },
  chaos_gear: {
    name: "Chaos Gear",
    normalizedName: "chaos_gear",
    rarity: 2,
    groupId: "sentinel_gear",
    category: "weaponCommon",
  },

  polarizing_prism: {
    name: "Polarizing Prism",
    normalizedName: "polarizing_prism",
    rarity: 4,
    groupId: "prism",
    category: "weaponCommon",
  },
  crystal_prism: {
    name: "Crystal Prism",
    normalizedName: "crystal_prism",
    rarity: 3,
    groupId: "prism",
    category: "weaponCommon",
  },
  dismal_prism: {
    name: "Dismal Prism",
    normalizedName: "dismal_prism",
    rarity: 2,
    groupId: "prism",
    category: "weaponCommon",
  },

  concealed_talon: {
    name: "Concealed Talon",
    normalizedName: "concealed_talon",
    rarity: 4,
    groupId: "claw",
    category: "weaponCommon",
  },
  concealed_unguis: {
    name: "Concealed Unguis",
    normalizedName: "concealed_unguis",
    rarity: 3,
    groupId: "claw",
    category: "weaponCommon",
  },
  concealed_claw: {
    name: "Concealed Claw",
    normalizedName: "concealed_claw",
    rarity: 2,
    groupId: "claw",
    category: "weaponCommon",
  },

  narukamis_affection: {
    name: "Narukami's Affection",
    normalizedName: "narukamis_affection",
    rarity: 4,
    groupId: "narukami",
    category: "weaponAscension",
  },
  narukamis_joy: {
    name: "Narukami's Joy",
    normalizedName: "narukamis_joy",
    rarity: 3,
    groupId: "narukami",
    category: "weaponAscension",
  },
  narukamis_wisdom: {
    name: "Narukami's Wisdom",
    normalizedName: "narukamis_wisdom",
    rarity: 2,
    groupId: "narukami",
    category: "weaponAscension",
  },

  mask_of_the_one_horned: {
    name: "Mask of the One-Horned",
    normalizedName: "mask_of_the_one_horned",
    rarity: 4,
    groupId: "oni_mask",
    category: "weaponAscension",
  },
  mask_of_the_tigers_bite: {
    name: "Mask of the Tiger's Bite",
    normalizedName: "Mask of the Tiger's Bite",
    rarity: 3,
    groupId: "oni_mask",
    category: "weaponAscension",
  },
  mask_of_the_wicked_lieutenant: {
    name: "Mask of the Wicked Lieutenant",
    normalizedName: "mask_of_the_wicked_lieutenant",
    rarity: 2,
    groupId: "oni_mask",
    category: "weaponAscension",
  },

  jade_branch_of_a_distant_sea: {
    name: "Jade Branch of a Distant Sea",
    normalizedName: "jade_branch_of_a_distant_sea",
    rarity: 4,
    groupId: "coral",
    category: "weaponAscension",
  },
  jeweled_branch_of_a_distant_sea: {
    name: "Jeweled Branch of a Distant Sea",
    normalizedName: "jeweled_branch_of_a_distant_sea",
    rarity: 3,
    groupId: "coral",
    category: "weaponAscension",
  },
  coral_branch_of_a_distant_sea: {
    name: "Coral Branch of a Distant Sea",
    normalizedName: "coral_branch_of_a_distant_sea",
    rarity: 2,
    groupId: "coral",
    category: "weaponAscension",
  },

  onikabuto: { name: "Onikabuto", normalizedName: "onikabuto", rarity: 1, category: "local" },
  riftborn_regalia: { name: "Riftborn Regalia", normalizedName: "riftborn_regalia", rarity: 4, category: "boss" },

  fluorescent_fungus: {
    name: "Fluorescent Fungus",
    normalizedName: "fluorescent_fungus",
    rarity: 1,
    category: "local",
  },

  spectral_nucleus: {
    name: "Spectral Nucleus",
    normalizedName: "spectral_nucleus",
    rarity: 3,
    groupId: "spectral",
    category: "common",
  },
  spectral_heart: {
    name: "Spectral Heart",
    normalizedName: "spectral_heart",
    rarity: 2,
    groupId: "spectral",
    category: "common",
  },
  spectral_husk: {
    name: "Spectral Husk",
    normalizedName: "spectral_husk",
    rarity: 1,
    groupId: "spectral",
    category: "common",
  },
  sango_pearl: {
    name: "Sango Pearl",
    normalizedName: "sango_pearl",
    rarity: 1,
    category: "local",
  },
  dew_of_repudiation: {
    name: "Dew of Repudiation",
    normalizedName: "dew_of_repudiation",
    rarity: 4,
    category: "boss",
  },
  ashen_heart: {
    name: "Ashen Heart",
    normalizedName: "ashen_heart",
    rarity: 5,
    category: "weekly",
  },
  molten_moment: {
    name: "Molten Moment",
    normalizedName: "molten_moment",
    rarity: 5,
    category: "weekly",
  },
  hellfire_butterfly: {
    name: "Hellfire Butterfly",
    normalizedName: "hellfire_butterfly",
    rarity: 5,
    category: "weekly",
  },
  amakumo_fruit: {
    name: "Amakumo Fruit",
    normalizedName: "amakumo_fruit",
    rarity: 1,
    category: "local",
  },
  storm_beads: {
    name: "Storm Beads",
    normalizedName: "storm_beads",
    rarity: 4,
    category: "boss",
  },
  dendrobium: {
    name: "Dendrobium",
    normalizedName: "dendrobium",
    rarity: 1,
    category: "local",
  },
  crystal_marrow: {
    name: "Crystal Marrow",
    normalizedName: "crystal_marrow",
    rarity: 1,
    category: "local",
  },
  naku_weed: {
    name: "Naku Weed",
    normalizedName: "naku_weed",
    rarity: 1,
    category: "local",
  },
  smoldering_pearl: {
    name: "Smoldering Pearl",
    normalizedName: "smoldering_pearl",
    rarity: 4,
    category: "boss",
  },
  teachings_of_light: {
    name: "Teachings of Light",
    normalizedName: "teachings_of_light",
    rarity: 2,
    groupId: "light",
    category: "book",
  },
  guide_to_light: {
    name: "Guide to Light",
    normalizedName: "guide_to_light",
    rarity: 3,
    groupId: "light",
    category: "book",
  },
  philosophies_of_light: {
    name: "Philosophies of Light",
    normalizedName: "philosophies_of_light",
    rarity: 4,
    groupId: "light",
    category: "book",
  },
  teachings_of_transience: {
    name: "Teachings of Transience",
    normalizedName: "teachings_of_transience",
    rarity: 2,
    groupId: "transience",
    category: "book",
  },
  guide_to_transience: {
    name: "Guide to Transience",
    normalizedName: "guide_to_transience",
    rarity: 3,
    groupId: "transience",
    category: "book",
  },
  philosophies_of_transience: {
    name: "Philosophies of Transience",
    normalizedName: "philosophies_of_transience",
    rarity: 4,
    groupId: "transience",
    category: "book",
  },
  perpetual_heart: {
    name: "Perpetual Heart",
    normalizedName: "perpetual_heart",
    rarity: 4,
    category: "boss",
  },
  sakura_bloom: {
    name: "Sakura Bloom",
    normalizedName: "sakura_bloom",
    rarity: 1,
    category: "local",
  },
  old_handguard: {
    name: "Old Handguard",
    normalizedName: "old_handguard",
    rarity: 1,
    groupId: "handguard",
    category: "common",
  },
  kageuchi_handguard: {
    name: "Kageuchi Handguard",
    normalizedName: "kageuchi_handguard",
    rarity: 2,
    groupId: "handguard",
    category: "common",
  },
  famed_handguard: {
    name: "Famed Handguard",
    normalizedName: "famed_handguard",
    rarity: 3,
    groupId: "handguard",
    category: "common",
  },
  teachings_of_elegance: {
    name: "Teachings of Elegance",
    normalizedName: "teachings_of_elegance",
    rarity: 2,
    groupId: "elegance",
    category: "book",
  },
  guide_to_elegance: {
    name: "Guide to Elegance",
    normalizedName: "guide_to_elegance",
    rarity: 3,
    groupId: "elegance",
    category: "book",
  },
  philosophies_of_elegance: {
    name: "Philosophies of Elegance",
    normalizedName: "philosophies_of_elegance",
    rarity: 4,
    groupId: "elegance",
    category: "book",
  },
  sea_ganoderma: {
    name: "Sea Ganoderma",
    normalizedName: "sea_ganoderma",
    rarity: 1,
    category: "local",
  },
  marionette_core: {
    name: "Marionette Core",
    normalizedName: "marionette_core",
    rarity: 4,
    category: "boss",
  },
  crown_of_insight: {
    name: "Crown of Insight",
    normalizedName: "crown_of_insight",
    rarity: 5,
    category: "special_talent",
  },
  gilded_scale: {
    name: "Gilded Scale",
    normalizedName: "gilded_scale",
    rarity: 5,
    category: "weekly",
  },
  enhancement_ore: {
    name: "Enhancement Ore",
    normalizedName: "enhancement_ore",
    rarity: 1,
    category: "weapon_leveling",
  },
  fine_enhancement_ore: {
    name: "Fine Enhancement Ore",
    normalizedName: "fine_enhancement_ore",
    rarity: 2,
    category: "weapon_leveling",
  },
  mystic_enhancement_ore: {
    name: "Mystic Enhancement Ore",
    normalizedName: "mystic_enhancement_ore",
    rarity: 3,
    category: "weapon_leveling",
  },
  crystalline_bloom: {
    name: "Crystalline Bloom",
    normalizedName: "crystalline_bloom",
    rarity: 4,
    category: "boss",
  },
  wanderers_advice: {
    name: "Wanderer's Advice",
    normalizedName: "wanderers_advice",
    rarity: 2,
    category: "character_leveling",
  },
  adventurers_experience: {
    name: "Adventurer's Experience",
    normalizedName: "adventurers_experience",
    rarity: 3,
    category: "character_leveling",
  },
  heros_wit: {
    name: "Hero's Wit",
    normalizedName: "heros_wit",
    rarity: 4,
    category: "character_leveling",
  },
  agnidus_agate_sliver: {
    name: "Agnidus Agate Sliver",
    normalizedName: "agnidus_agate_sliver",
    rarity: 2,
    groupId: "pyro_gem",
    category: "gem",
  },
  agnidus_agate_fragment: {
    name: "Agnidus Agate Fragment",
    normalizedName: "agnidus_agate_fragment",
    rarity: 3,
    groupId: "pyro_gem",
    category: "gem",
  },
  agnidus_agate_chunk: {
    name: "Agnidus Agate Chunk",
    normalizedName: "agnidus_agate_chunk",
    rarity: 4,
    groupId: "pyro_gem",
    category: "gem",
  },
  agnidus_agate_gemstone: {
    name: "Agnidus Agate Gemstone",
    normalizedName: "agnidus_agate_gemstone",
    rarity: 5,
    groupId: "pyro_gem",
    category: "gem",
  },
  prithiva_topaz_sliver: {
    name: "Prithiva Topaz Sliver",
    normalizedName: "prithiva_topaz_sliver",
    rarity: 2,
    groupId: "geo_gem",
    category: "gem",
  },
  prithiva_topaz_fragment: {
    name: "Prithiva Topaz Fragment",
    normalizedName: "prithiva_topaz_fragment",
    rarity: 3,
    groupId: "geo_gem",
    category: "gem",
  },
  prithiva_topaz_chunk: {
    name: "Prithiva Topaz Chunk",
    normalizedName: "prithiva_topaz_chunk",
    rarity: 4,
    groupId: "geo_gem",
    category: "gem",
  },
  prithiva_topaz_gemstone: {
    name: "Prithiva Topaz Gemstone",
    normalizedName: "prithiva_topaz_gemstone",
    rarity: 5,
    groupId: "geo_gem",
    category: "gem",
  },
  shivada_jade_sliver: {
    name: "Shivada Jade Sliver",
    normalizedName: "shivada_jade_sliver",
    rarity: 2,
    groupId: "cryo_gem",
    category: "gem",
  },
  shivada_jade_fragment: {
    name: "Shivada Jade Fragment",
    normalizedName: "shivada_jade_fragment",
    rarity: 3,
    groupId: "cryo_gem",
    category: "gem",
  },
  shivada_jade_chunk: {
    name: "Shivada Jade Chunk",
    normalizedName: "shivada_jade_chunk",
    rarity: 4,
    groupId: "cryo_gem",
    category: "gem",
  },
  shivada_jade_gemstone: {
    name: "Shivada Jade Gemstone",
    normalizedName: "shivada_jade_gemstone",
    rarity: 5,
    groupId: "cryo_gem",
    category: "gem",
  },
  vajrada_amethyst_sliver: {
    name: "Vajrada Amethyst Sliver",
    normalizedName: "vajrada_amethyst_sliver",
    rarity: 2,
    groupId: "electro_gem",
    category: "gem",
  },
  vajrada_amethyst_fragment: {
    name: "Vajrada Amethyst Fragment",
    normalizedName: "vajrada_amethyst_fragment",
    rarity: 3,
    groupId: "electro_gem",
    category: "gem",
  },
  vajrada_amethyst_chunk: {
    name: "Vajrada Amethyst Chunk",
    normalizedName: "vajrada_amethyst_chunk",
    rarity: 4,
    groupId: "electro_gem",
    category: "gem",
  },
  vajrada_amethyst_gemstone: {
    name: "Vajrada Amethyst Gemstone",
    normalizedName: "vajrada_amethyst_gemstone",
    rarity: 5,
    groupId: "electro_gem",
    category: "gem",
  },
  varunada_lazurite_sliver: {
    name: "Varunada Lazurite Sliver",
    normalizedName: "varunada_lazurite_sliver",
    rarity: 2,
    groupId: "hydro_gem",
    category: "gem",
  },
  varunada_lazurite_fragment: {
    name: "Varunada Lazurite Fragment",
    normalizedName: "varunada_lazurite_fragment",
    rarity: 3,
    groupId: "hydro_gem",
    category: "gem",
  },
  varunada_lazurite_chunk: {
    name: "Varunada Lazurite Chunk",
    normalizedName: "varunada_lazurite_chunk",
    rarity: 4,
    groupId: "hydro_gem",
    category: "gem",
  },
  varunada_lazurite_gemstone: {
    name: "Varunada Lazurite Gemstone",
    normalizedName: "varunada_lazurite_gemstone",
    rarity: 5,
    groupId: "hydro_gem",
    category: "gem",
  },
  vayuda_turquoise_sliver: {
    name: "Vayuda Turquoise Sliver",
    normalizedName: "vayuda_turquoise_sliver",
    rarity: 2,
    groupId: "anemo_gem",
    category: "gem",
  },
  vayuda_turquoise_fragment: {
    name: "Vayuda Turquoise Fragment",
    normalizedName: "vayuda_turquoise_fragment",
    rarity: 3,
    groupId: "anemo_gem",
    category: "gem",
  },
  vayuda_turquoise_chunk: {
    name: "Vayuda Turquoise Chunk",
    normalizedName: "vayuda_turquoise_chunk",
    rarity: 4,
    groupId: "anemo_gem",
    category: "gem",
  },
  vayuda_turquoise_gemstone: {
    name: "Vayuda Turquoise Gemstone",
    normalizedName: "vayuda_turquoise_gemstone",
    rarity: 5,
    groupId: "anemo_gem",
    category: "gem",
  },
  brilliant_diamond_sliver: {
    name: "Brilliant Diamond Sliver",
    normalizedName: "brilliant_diamond_sliver",
    rarity: 2,
    groupId: "traveler_gem",
    category: "gem",
  },
  brilliant_diamond_fragment: {
    name: "Brilliant Diamond Fragment",
    normalizedName: "brilliant_diamond_fragment",
    rarity: 3,
    groupId: "traveler_gem",
    category: "gem",
  },
  brilliant_diamond_chunk: {
    name: "Brilliant Diamond Chunk",
    normalizedName: "brilliant_diamond_chunk",
    rarity: 4,
    groupId: "traveler_gem",
    category: "gem",
  },
  brilliant_diamond_gemstone: {
    name: "Brilliant Diamond Gemstone",
    normalizedName: "brilliant_diamond_gemstone",
    rarity: 5,
    groupId: "traveler_gem",
    category: "gem",
  },
  mora: {
    name: "Mora",
    normalizedName: "mora",
    rarity: 1,
    category: "currency",
  },
  primogem: {
    name: "Primogem",
    normalizedName: "primogem",
    rarity: 5,
    category: "currency",
  },
  cecilia: {
    name: "Cecilia",
    normalizedName: "cecilia",
    rarity: 1,
    category: "local",
  },
  tusk_of_monoceros_caeli: {
    name: "Tusk of Monoceros Caeli",
    normalizedName: "tusk_of_monoceros_caeli",
    rarity: 5,
    category: "weekly",
  },
  basalt_pillar: {
    name: "Basalt Pillar",
    normalizedName: "basalt_pillar",
    rarity: 4,
    category: "boss",
  },
  divining_scroll: {
    name: "Divining Scroll",
    normalizedName: "divining_scroll",
    rarity: 1,
    groupId: "scroll",
    category: "common",
  },
  sealed_scroll: {
    name: "Sealed Scroll",
    normalizedName: "sealed_scroll",
    rarity: 2,
    groupId: "scroll",
    category: "common",
  },
  forbidden_curse_scroll: {
    name: "Forbidden Curse Scroll",
    normalizedName: "forbidden_curse_scroll",
    rarity: 3,
    groupId: "scroll",
    category: "common",
  },
  small_lamp_grass: {
    name: "Small Lamp Grass",
    normalizedName: "small_lamp_grass",
    rarity: 1,
    category: "local",
  },
  dvalins_sigh: {
    name: "Dvalin's Sigh",
    normalizedName: "dvalins_sigh",
    rarity: 5,
    category: "weekly",
  },
  everflame_seed: {
    name: "Everflame Seed",
    normalizedName: "everflame_seed",
    rarity: 4,
    category: "boss",
  },
  firm_arrowhead: {
    name: "Firm Arrowhead",
    normalizedName: "firm_arrowhead",
    rarity: 1,
    groupId: "arrowhead",
    category: "common",
  },
  sharp_arrowhead: {
    name: "Sharp Arrowhead",
    normalizedName: "sharp_arrowhead",
    rarity: 2,
    groupId: "arrowhead",
    category: "common",
  },
  weathered_arrowhead: {
    name: "Weathered Arrowhead",
    normalizedName: "weathered_arrowhead",
    rarity: 3,
    groupId: "arrowhead",
    category: "common",
  },
  philanemo_mushroom: {
    name: "Philanemo Mushroom",
    normalizedName: "philanemo_mushroom",
    rarity: 1,
    category: "local",
  },
  ring_of_boreas: {
    name: "Ring of Boreas",
    normalizedName: "ring_of_boreas",
    rarity: 5,
    category: "weekly",
  },
  cleansing_heart: {
    name: "Cleansing Heart",
    normalizedName: "cleansing_heart",
    rarity: 4,
    category: "boss",
  },
  noctilucous_jade: {
    name: "Noctilucous Jade",
    normalizedName: "noctilucous_jade",
    rarity: 1,
    category: "local",
  },
  lightning_prism: {
    name: "Lightning Prism",
    normalizedName: "lightning_prism",
    rarity: 4,
    category: "boss",
  },
  treasure_hoarder_insignia: {
    name: "Treasure Hoarder Insignia",
    normalizedName: "treasure_hoarder_insignia",
    rarity: 1,
    groupId: "treasure_hoarder_insignia",
    category: "common",
  },
  silver_raven_insignia: {
    name: "Silver Raven Insignia",
    normalizedName: "silver_raven_insignia",
    rarity: 2,
    groupId: "treasure_hoarder_insignia",
    category: "common",
  },
  golden_raven_insignia: {
    name: "Golden Raven Insignia",
    normalizedName: "golden_raven_insignia",
    rarity: 3,
    groupId: "treasure_hoarder_insignia",
    category: "common",
  },
  windwheel_aster: {
    name: "Windwheel Aster",
    normalizedName: "windwheel_aster",
    rarity: 1,
    category: "local",
  },
  dvalins_plume: {
    name: "Dvalin's Plume",
    normalizedName: "dvalins_plume",
    rarity: 5,
    category: "weekly",
  },
  cor_lapis: {
    name: "Cor Lapis",
    normalizedName: "cor_lapis",
    rarity: 1,
    category: "local",
  },
  hoarfrost_core: {
    name: "Hoarfrost Core",
    normalizedName: "hoarfrost_core",
    rarity: 4,
    category: "boss",
  },
  damaged_mask: {
    name: "Damaged Mask",
    normalizedName: "damaged_mask",
    rarity: 1,
    groupId: "mask",
    category: "common",
  },
  stained_mask: {
    name: "Stained Mask",
    normalizedName: "stained_mask",
    rarity: 2,
    groupId: "mask",
    category: "common",
  },
  ominous_mask: {
    name: "Ominous Mask",
    normalizedName: "ominous_mask",
    rarity: 3,
    groupId: "mask",
    category: "common",
  },
  recruits_insignia: {
    name: "Recruit's Insignia",
    normalizedName: "recruits_insignia",
    rarity: 1,
    groupId: "fatui_insignia",
    category: "common",
  },
  sergeants_insignia: {
    name: "Sergeant's Insignia",
    normalizedName: "sergeants_insignia",
    rarity: 2,
    groupId: "fatui_insignia",
    category: "common",
  },
  lieutenants_insignia: {
    name: "Lieutenant's Insignia",
    normalizedName: "lieutenants_insignia",
    rarity: 3,
    groupId: "fatui_insignia",
    category: "common",
  },
  calla_lily: {
    name: "Calla Lily",
    normalizedName: "calla_lily",
    rarity: 1,
    category: "local",
  },
  shard_of_a_foul_legacy: {
    name: "Shard of a Foul Legacy",
    normalizedName: "shard_of_a_foul_legacy",
    rarity: 5,
    category: "weekly",
  },
  spirit_locket_of_boreas: {
    name: "Spirit Locket of Boreas",
    normalizedName: "spirit_locket_of_boreas",
    rarity: 5,
    category: "weekly",
  },
  qingxin: {
    name: "Qingxin",
    normalizedName: "qingxin",
    rarity: 1,
    category: "local",
  },
  shadow_of_the_warrior: {
    name: "Shadow of the Warrior",
    normalizedName: "shadow_of_the_warrior",
    rarity: 5,
    category: "weekly",
  },
  whopperflower_nectar: {
    name: "Whopperflower Nectar",
    normalizedName: "whopperflower_nectar",
    rarity: 1,
    groupId: "nectar",
    category: "common",
  },
  shimmering_nectar: {
    name: "Shimmering Nectar",
    normalizedName: "shimmering_nectar",
    rarity: 2,
    groupId: "nectar",
    category: "common",
  },
  energy_nectar: {
    name: "Energy Nectar",
    normalizedName: "energy_nectar",
    rarity: 3,
    groupId: "nectar",
    category: "common",
  },
  silk_flower: {
    name: "Silk Flower",
    normalizedName: "silk_flower",
    rarity: 1,
    category: "local",
  },
  juvenile_jade: {
    name: "Juvenile Jade",
    normalizedName: "juvenile_jade",
    rarity: 4,
    category: "boss",
  },
  dandelion_seed: {
    name: "Dandelion Seed",
    normalizedName: "dandelion_seed",
    rarity: 1,
    category: "local",
  },
  hurricane_seed: {
    name: "Hurricane Seed",
    normalizedName: "hurricane_seed",
    rarity: 4,
    category: "boss",
  },
  valberry: {
    name: "Valberry",
    normalizedName: "valberry",
    rarity: 1,
    category: "local",
  },
  dvalins_claw: {
    name: "Dvalin's Claw",
    normalizedName: "dvalins_claw",
    rarity: 5,
    category: "weekly",
  },
  slime_condensate: {
    name: "Slime Condensate",
    normalizedName: "slime_condensate",
    rarity: 1,
    groupId: "slime",
    category: "common",
  },
  slime_secretions: {
    name: "Slime Secretions",
    normalizedName: "slime_secretions",
    rarity: 2,
    groupId: "slime",
    category: "common",
  },
  slime_concentrate: {
    name: "Slime Concentrate",
    normalizedName: "slime_concentrate",
    rarity: 3,
    groupId: "slime",
    category: "common",
  },
  glaze_lily: {
    name: "Glaze Lily",
    normalizedName: "glaze_lily",
    rarity: 1,
    category: "local",
  },
  violetgrass: {
    name: "Violetgrass",
    normalizedName: "violetgrass",
    rarity: 1,
    category: "local",
  },
  tail_of_boreas: {
    name: "Tail of Boreas",
    normalizedName: "tail_of_boreas",
    rarity: 5,
    category: "weekly",
  },
  wolfhook: {
    name: "Wolfhook",
    normalizedName: "wolfhook",
    rarity: 1,
    category: "local",
  },
  starconch: {
    name: "Starconch",
    normalizedName: "starconch",
    rarity: 1,
    category: "local",
  },
  jueyun_chili: {
    name: "Jueyun Chili",
    normalizedName: "jueyun_chili",
    rarity: 1,
    category: "local",
  },
  bloodjade_branch: {
    name: "Bloodjade Branch",
    normalizedName: "bloodjade_branch",
    rarity: 5,
    category: "weekly",
  },
  dragon_lords_crown: {
    name: "Dragon Lord's Crown",
    normalizedName: "dragon_lords_crown",
    rarity: 5,
    category: "weekly",
  },
  chaos_device: {
    name: "Chaos Device",
    normalizedName: "chaos_device",
    rarity: 1,
    groupId: "chaos",
    category: "weaponCommon",
  },
  chaos_circuit: {
    name: "Chaos Circuit",
    normalizedName: "chaos_circuit",
    rarity: 2,
    groupId: "chaos",
    category: "weaponCommon",
  },
  chaos_core: {
    name: "Chaos Core",
    normalizedName: "chaos_core",
    rarity: 3,
    groupId: "chaos",
    category: "weaponCommon",
  },
  heavy_horn: {
    name: "Heavy Horn",
    normalizedName: "heavy_horn",
    rarity: 1,
    groupId: "horn",
    category: "weaponCommon",
  },
  black_bronze_horn: {
    name: "Black Bronze Horn",
    normalizedName: "black_bronze_horn",
    rarity: 2,
    groupId: "horn",
    category: "weaponCommon",
  },
  black_crystal_horn: {
    name: "Black Crystal Horn",
    normalizedName: "black_crystal_horn",
    rarity: 3,
    groupId: "horn",
    category: "weaponCommon",
  },
  fragile_bone_shard: {
    name: "Fragile Bone Shard",
    normalizedName: "fragile_bone_shard",
    rarity: 1,
    groupId: "bone_shard",
    category: "weaponCommon",
  },
  sturdy_bone_shard: {
    name: "Sturdy Bone Shard",
    normalizedName: "sturdy_bone_shard",
    rarity: 2,
    groupId: "bone_shard",
    category: "weaponCommon",
  },
  fossilized_bone_shard: {
    name: "Fossilized Bone Shard",
    normalizedName: "fossilized_bone_shard",
    rarity: 3,
    groupId: "bone_shard",
    category: "weaponCommon",
  },
  hunters_sacrificial_knife: {
    name: "Hunter's Sacrificial Knife",
    normalizedName: "hunters_sacrificial_knife",
    rarity: 1,
    groupId: "sacrificial_knife",
    category: "weaponCommon",
  },
  agents_sacrificial_knife: {
    name: "Agent's Sacrificial Knife",
    normalizedName: "agents_sacrificial_knife",
    rarity: 2,
    groupId: "sacrificial_knife",
    category: "weaponCommon",
  },
  inspectors_sacrificial_knife: {
    name: "Inspector's Sacrificial Knife",
    normalizedName: "inspectors_sacrificial_knife",
    rarity: 3,
    groupId: "sacrificial_knife",
    category: "weaponCommon",
  },
  mist_grass_pollen: {
    name: "Mist Grass Pollen",
    normalizedName: "mist_grass_pollen",
    rarity: 1,
    groupId: "mist_grass",
    category: "weaponCommon",
  },
  mist_grass: {
    name: "Mist Grass",
    normalizedName: "mist_grass",
    rarity: 2,
    groupId: "mist_grass",
    category: "weaponCommon",
  },
  mist_grass_wick: {
    name: "Mist Grass Wick",
    normalizedName: "mist_grass_wick",
    rarity: 3,
    groupId: "mist_grass",
    category: "weaponCommon",
  },
  dead_ley_line_branch: {
    name: "Dead Ley Line Branch",
    normalizedName: "dead_ley_line_branch",
    rarity: 1,
    groupId: "ley_line",
    category: "weaponCommon",
  },
  dead_ley_line_leaves: {
    name: "Dead Ley Line Leaves",
    normalizedName: "dead_ley_line_leaves",
    rarity: 2,
    groupId: "ley_line",
    category: "weaponCommon",
  },
  ley_line_sprouts: {
    name: "Ley Line Sprouts",
    normalizedName: "ley_line_sprouts",
    rarity: 3,
    groupId: "ley_line",
    category: "weaponCommon",
  },
  teachings_of_ballad: {
    name: "Teachings of Ballad",
    normalizedName: "teachings_of_ballad",
    rarity: 2,
    groupId: "ballad",
    category: "book",
  },
  guide_to_ballad: {
    name: "Guide to Ballad",
    normalizedName: "guide_to_ballad",
    rarity: 3,
    groupId: "ballad",
    category: "book",
  },
  philosophies_of_ballad: {
    name: "Philosophies of Ballad",
    normalizedName: "philosophies_of_ballad",
    rarity: 4,
    groupId: "ballad",
    category: "book",
  },
  teachings_of_freedom: {
    name: "Teachings of Freedom",
    normalizedName: "teachings_of_freedom",
    rarity: 2,
    groupId: "freedom",
    category: "book",
  },
  guide_to_freedom: {
    name: "Guide to Freedom",
    normalizedName: "guide_to_freedom",
    rarity: 3,
    groupId: "freedom",
    category: "book",
  },
  philosophies_of_freedom: {
    name: "Philosophies of Freedom",
    normalizedName: "philosophies_of_freedom",
    rarity: 4,
    groupId: "freedom",
    category: "book",
  },
  teachings_of_gold: {
    name: "Teachings of Gold",
    normalizedName: "teachings_of_gold",
    rarity: 2,
    groupId: "gold",
    category: "book",
  },
  guide_to_gold: {
    name: "Guide to Gold",
    normalizedName: "guide_to_gold",
    rarity: 3,
    groupId: "gold",
    category: "book",
  },
  philosophies_of_gold: {
    name: "Philosophies of Gold",
    normalizedName: "philosophies_of_gold",
    rarity: 4,
    groupId: "gold",
    category: "book",
  },
  teachings_of_resistance: {
    name: "Teachings of Resistance",
    normalizedName: "teachings_of_resistance",
    rarity: 2,
    groupId: "resistance",
    category: "book",
  },
  guide_to_resistance: {
    name: "Guide to Resistance",
    normalizedName: "guide_to_resistance",
    rarity: 3,
    groupId: "resistance",
    category: "book",
  },
  philosophies_of_resistance: {
    name: "Philosophies of Resistance",
    normalizedName: "philosophies_of_resistance",
    rarity: 4,
    groupId: "resistance",
    category: "book",
  },
  teachings_of_diligence: {
    name: "Teachings of Diligence",
    normalizedName: "teachings_of_diligence",
    rarity: 2,
    groupId: "diligence",
    category: "book",
  },
  guide_to_diligence: {
    name: "Guide to Diligence",
    normalizedName: "guide_to_diligence",
    rarity: 3,
    groupId: "diligence",
    category: "book",
  },
  philosophies_of_diligence: {
    name: "Philosophies of Diligence",
    normalizedName: "philosophies_of_diligence",
    rarity: 4,
    groupId: "diligence",
    category: "book",
  },
  teachings_of_prosperity: {
    name: "Teachings of Prosperity",
    normalizedName: "teachings_of_prosperity",
    rarity: 2,
    groupId: "prosperity",
    category: "book",
  },
  guide_to_prosperity: {
    name: "Guide to Prosperity",
    normalizedName: "guide_to_prosperity",
    rarity: 3,
    groupId: "prosperity",
    category: "book",
  },
  philosophies_of_prosperity: {
    name: "Philosophies of Prosperity",
    normalizedName: "philosophies_of_prosperity",
    rarity: 4,
    groupId: "prosperity",
    category: "book",
  },
  fetters_of_the_dandelion_gladiator: {
    name: "Fetters of the Dandelion Gladiator",
    normalizedName: "fetters_of_the_dandelion_gladiator",
    rarity: 2,
    groupId: "dandelion_gladiator",
    category: "weaponAscension",
  },
  chains_of_the_dandelion_gladiator: {
    name: "Chains of the Dandelion Gladiator",
    normalizedName: "chains_of_the_dandelion_gladiator",
    rarity: 3,
    groupId: "dandelion_gladiator",
    category: "weaponAscension",
  },
  shackles_of_the_dandelion_gladiator: {
    name: "Shackles of the Dandelion Gladiator",
    normalizedName: "shackles_of_the_dandelion_gladiator",
    rarity: 4,
    groupId: "dandelion_gladiator",
    category: "weaponAscension",
  },
  dream_of_the_dandelion_gladiator: {
    name: "Dream of the Dandelion Gladiator",
    normalizedName: "dream_of_the_dandelion_gladiator",
    rarity: 5,
    groupId: "dandelion_gladiator",
    category: "weaponAscension",
  },
  tile_of_decarabians_tower: {
    name: "Tile of Decarabian's Tower",
    normalizedName: "tile_of_decarabians_tower",
    rarity: 2,
    groupId: "decarabians",
    category: "weaponAscension",
  },
  debris_of_decarabians_city: {
    name: "Debris of Decarabian's City",
    normalizedName: "debris_of_decarabians_city",
    rarity: 3,
    groupId: "decarabians",
    category: "weaponAscension",
  },
  fragment_of_decarabians_epic: {
    name: "Fragment of Decarabian's Epic",
    normalizedName: "fragment_of_decarabians_epic",
    rarity: 4,
    groupId: "decarabians",
    category: "weaponAscension",
  },
  scattered_piece_of_decarabians_dream: {
    name: "Scattered Piece of Decarabian's Dream",
    normalizedName: "scattered_piece_of_decarabians_dream",
    rarity: 5,
    groupId: "decarabians",
    category: "weaponAscension",
  },
  grain_of_aerosiderite: {
    name: "Grain of Aerosiderite",
    normalizedName: "grain_of_aerosiderite",
    rarity: 2,
    groupId: "aerosiderite",
    category: "weaponAscension",
  },
  piece_of_aerosiderite: {
    name: "Piece of Aerosiderite",
    normalizedName: "piece_of_aerosiderite",
    rarity: 3,
    groupId: "aerosiderite",
    category: "weaponAscension",
  },
  bit_of_aerosiderite: {
    name: "Bit of Aerosiderite",
    normalizedName: "bit_of_aerosiderite",
    rarity: 4,
    groupId: "aerosiderite",
    category: "weaponAscension",
  },
  chunk_of_aerosiderite: {
    name: "Chunk of Aerosiderite",
    normalizedName: "chunk_of_aerosiderite",
    rarity: 5,
    groupId: "aerosiderite",
    category: "weaponAscension",
  },
  luminous_sands_from_guyun: {
    name: "Luminous Sands from Guyun",
    normalizedName: "luminous_sands_from_guyun",
    rarity: 2,
    groupId: "guyun",
    category: "weaponAscension",
  },
  lustrous_stone_from_guyun: {
    name: "Lustrous Stone from Guyun",
    normalizedName: "lustrous_stone_from_guyun",
    rarity: 3,
    groupId: "guyun",
    category: "weaponAscension",
  },
  relic_from_guyun: {
    name: "Relic from Guyun",
    normalizedName: "relic_from_guyun",
    rarity: 4,
    groupId: "guyun",
    category: "weaponAscension",
  },
  divine_body_from_guyun: {
    name: "Divine Body from Guyun",
    normalizedName: "divine_body_from_guyun",
    rarity: 5,
    groupId: "guyun",
    category: "weaponAscension",
  },
  mist_veiled_lead_elixir: {
    name: "Mist Veiled Lead Elixir",
    normalizedName: "mist_veiled_lead_elixir",
    rarity: 2,
    groupId: "mist_elixir",
    category: "weaponAscension",
  },
  mist_veiled_mercury_elixir: {
    name: "Mist Veiled Mercury Elixir",
    normalizedName: "mist_veiled_mercury_elixir",
    rarity: 3,
    groupId: "mist_elixir",
    category: "weaponAscension",
  },
  mist_veiled_gold_elixir: {
    name: "Mist Veiled Gold Elixir",
    normalizedName: "mist_veiled_gold_elixir",
    rarity: 4,
    groupId: "mist_elixir",
    category: "weaponAscension",
  },
  mist_veiled_primo_elixir: {
    name: "Mist Veiled Primo Elixir",
    normalizedName: "mist_veiled_primo_elixir",
    rarity: 5,
    groupId: "mist_elixir",
    category: "weaponAscension",
  },
  boreal_wolfs_milk_tooth: {
    name: "Boreal Wolf's Milk Tooth",
    normalizedName: "boreal_wolfs_milk_tooth",
    rarity: 2,
    groupId: "wolf_tooth",
    category: "weaponAscension",
  },
  boreal_wolfs_cracked_tooth: {
    name: "Boreal Wolf's Cracked Tooth",
    normalizedName: "boreal_wolfs_cracked_tooth",
    rarity: 3,
    groupId: "wolf_tooth",
    category: "weaponAscension",
  },
  boreal_wolfs_broken_fang: {
    name: "Boreal Wolf's Broken Fang",
    normalizedName: "boreal_wolfs_broken_fang",
    rarity: 4,
    groupId: "wolf_tooth",
    category: "weaponAscension",
  },
  boreal_wolfs_nostalgia: {
    name: "Boreal Wolf's Nostalgia",
    normalizedName: "boreal_wolfs_nostalgia",
    rarity: 5,
    groupId: "wolf_tooth",
    category: "weaponAscension",
  },
  rukkhashava_mushrooms: {
    normalizedName: "rukkhashava_mushrooms",
    name: "Rukkhashava Mushrooms",
    category: "local",
    rarity: 1,
  },
  nagadus_emerald_gemstone: {
    normalizedName: "nagadus_emerald_gemstone",
    name: "Nagadus Emerald Gemstone",
    category: "gem",
    rarity: 5,
    groupId: "dendro_gem",
  },
  nagadus_emerald_chunk: {
    normalizedName: "nagadus_emerald_chunk",
    name: "Nagadus Emerald Chunk",
    category: "gem",
    rarity: 4,
    groupId: "dendro_gem",
  },
  nagadus_emerald_fragment: {
    normalizedName: "nagadus_emerald_fragment",
    name: "Nagadus Emerald Fragment",
    category: "gem",
    rarity: 3,
    groupId: "dendro_gem",
  },
  nagadus_emerald_sliver: {
    normalizedName: "nagadus_emerald_sliver",
    name: "Nagadus Emerald Sliver",
    category: "gem",
    rarity: 2,
    groupId: "dendro_gem",
  },
  rich_red_brocade: {
    normalizedName: "rich_red_brocade",
    name: "Rich Red Brocade",
    rarity: 3,
    category: "common",
    groupId: "red_satin",
  },
  trimmed_red_silk: {
    normalizedName: "trimmed_red_silk",
    name: "Trimmed Red Silk",
    rarity: 2,
    category: "common",
    groupId: "red_satin",
  },
  faded_red_satin: {
    normalizedName: "faded_red_satin",
    name: "Faded Red Satin",
    rarity: 1,
    category: "common",
    groupId: "red_satin",
  },
  kalpalata_lotus: {
    normalizedName: "kalpalata_lotus",
    name: "Kalpalata Lotus",
    category: "local",
    rarity: 1,
  },
  nilotpala_lotus: {
    normalizedName: "nilotpala_lotus",
    name: "Nilotpala Lotus",
    rarity: 1,
    category: "local",
  },
  fungal_spores: {
    normalizedName: "fungal_spores",
    name: "Fungal Spores",
    rarity: 1,
    category: "common",
    groupId: "fungal_spores",
  },
  luminescent_pollen: {
    normalizedName: "luminescent_pollen",
    name: "Luminescent Pollen",
    rarity: 2,
    category: "common",
    groupId: "fungal_spores",
  },
  crystalline_cyst_dust: {
    normalizedName: "crystalline_cyst_dust",
    name: "Crystalline Cyst Dust",
    rarity: 3,
    category: "common",
    groupId: "fungal_spores",
  },
  majestic_hooked_beak: {
    normalizedName: "majestic_hooked_beak",
    name: "Majestic Hooked Beak",
    rarity: 4,
    category: "boss",
  },
  philosophies_of_praxis: {
    normalizedName: "philosophies_of_praxis",
    name: "Philosophies of Praxis",
    rarity: 4,
    category: "book",
    groupId: "praxis",
  },
  guide_to_praxis: {
    normalizedName: "guide_to_praxis",
    name: "Guide to Praxis",
    rarity: 3,
    category: "book",
    groupId: "praxis",
  },
  teachings_of_praxis: {
    normalizedName: "teachings_of_praxis",
    name: "Teachings of Praxis",
    rarity: 2,
    category: "book",
    groupId: "praxis",
  },
  philosophies_of_admonition: {
    normalizedName: "philosophies_of_admonition",
    name: "Philosophies of Admonition",
    rarity: 4,
    category: "book",
    groupId: "admonition",
  },
  guide_to_admonition: {
    normalizedName: "guide_to_admonition",
    name: "Guide to Admonition",
    rarity: 3,
    category: "book",
    groupId: "admonition",
  },
  teachings_of_admonition: {
    normalizedName: "teachings_of_admonition",
    name: "Teachings of Admonition",
    rarity: 2,
    category: "book",
    groupId: "admonition",
  },
  thunderclap_fruitcore: {
    normalizedName: "thunderclap_fruitcore",
    name: "Thunderclap Fruitcore",
    rarity: 4,
    category: "boss",
  },
  philosophies_of_ingenuity: {
    normalizedName: "philosophies_of_ingenuity",
    name: "Philosophies of Ingenuity",
    rarity: 4,
    category: "book",
    groupId: "ingenuity",
  },
  guide_to_ingenuity: {
    normalizedName: "guide_to_ingenuity",
    name: "Guide to Ingenuity",
    rarity: 3,
    category: "book",
    groupId: "ingenuity",
  },
  teachings_of_ingenuity: {
    normalizedName: "teachings_of_ingenuity",
    name: "Teachings of Ingenuity",
    rarity: 2,
    category: "book",
    groupId: "ingenuity",
  },
  redcrest: {
    normalizedName: "redcrest",
    name: "Redcrest",
    rarity: 1,
    category: "local",
  },
  light_guiding_tetrahedron: {
    normalizedName: "light_guiding_tetrahedron",
    name: "Light Guiding Tetrahedron",
    rarity: 4,
    category: "boss",
  },
  scarab: {
    normalizedName: "scarab",
    name: "Scarab",
    rarity: 1,
    category: "local",
  },
};
