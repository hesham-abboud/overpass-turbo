// Visual Query Builder module
import $ from "jquery";
import ffs_free from "./ffs/free";

// --- DATA SOURCE: TOP OSM FEATURES ---
// Matches the React version's dataset
const OSM_TAG_DATA: {[key: string]: string[]} = {
  aeroway: [
    "aerodrome",
    "apron",
    "gate",
    "hangar",
    "helipad",
    "heliport",
    "runway",
    "taxiway",
    "terminal",
    "windsock"
  ],
  amenity: [
    "bar",
    "bbq",
    "biergarten",
    "cafe",
    "drinking_water",
    "fast_food",
    "food_court",
    "ice_cream",
    "pub",
    "restaurant",
    "college",
    "kindergarten",
    "library",
    "school",
    "university",
    "bicycle_parking",
    "bicycle_rental",
    "boat_rental",
    "bus_station",
    "car_rental",
    "car_sharing",
    "car_wash",
    "charging_station",
    "ferry_terminal",
    "fuel",
    "parking",
    "taxi",
    "atm",
    "bank",
    "bureau_de_change",
    "clinic",
    "dentist",
    "doctors",
    "hospital",
    "nursing_home",
    "pharmacy",
    "veterinary",
    "arts_centre",
    "casino",
    "cinema",
    "community_centre",
    "fountain",
    "nightclub",
    "planetarium",
    "social_centre",
    "theatre",
    "bench",
    "courthouse",
    "fire_station",
    "police",
    "post_box",
    "post_office",
    "prison",
    "shelter",
    "toilets",
    "townhall",
    "waste_basket",
    "waste_disposal",
    "recycling",
    "marketplace",
    "place_of_worship"
  ],
  barrier: [
    "cable_barrier",
    "city_wall",
    "ditch",
    "fence",
    "gate",
    "guard_rail",
    "handrail",
    "hedge",
    "kerb",
    "retaining_wall",
    "wall",
    "bollard",
    "cycle_barrier",
    "block",
    "turnstile",
    "stile",
    "toll_booth"
  ],
  boundary: [
    "administrative",
    "maritime",
    "national_park",
    "protected_area",
    "postal_code",
    "census",
    "political"
  ],
  building: [
    "apartments",
    "barn",
    "bungalow",
    "cabin",
    "commercial",
    "detached",
    "dormitory",
    "farm",
    "garage",
    "garages",
    "greenhouse",
    "house",
    "hut",
    "industrial",
    "office",
    "public",
    "residential",
    "retail",
    "roof",
    "school",
    "semidetached_house",
    "shed",
    "static_caravan",
    "terrace",
    "train_station",
    "warehouse",
    "church",
    "cathedral",
    "chapel",
    "mosque",
    "temple",
    "synagogue",
    "shrine",
    "civic",
    "construction",
    "hospital",
    "kindergarten",
    "university",
    "stadium",
    "transportation",
    "ruins",
    "yes"
  ],
  craft: [
    "agricultural_engines",
    "basket_maker",
    "beekeeper",
    "blacksmith",
    "boatbuilder",
    "bookbinder",
    "brewery",
    "carpenter",
    "carpet_layer",
    "caterer",
    "clockmaker",
    "confectionery",
    "dressmaker",
    "electrician",
    "electronics_repair",
    "embroiderer",
    "engraver",
    "floorer",
    "gardener",
    "glaziery",
    "handicraft",
    "hvac",
    "insulation",
    "jeweller",
    "key_cutter",
    "locksmith",
    "metal_construction",
    "optician",
    "painter",
    "photographer",
    "photographic_laboratory",
    "plasterer",
    "plumber",
    "pottery",
    "printer",
    "roofer",
    "sawmill",
    "scaffolder",
    "sculptor",
    "shoemaker",
    "sign_maker",
    "stand_builder",
    "stonemason",
    "tailor",
    "tiler",
    "tinsmith",
    "upholsterer",
    "watchmaker",
    "window_construction",
    "winery"
  ],
  cuisine: [
    "bagel",
    "barbecue",
    "bougatsa",
    "burger",
    "cake",
    "chicken",
    "coffee_shop",
    "crepe",
    "couscous",
    "curry",
    "donut",
    "empanada",
    "fish_and_chips",
    "fried_food",
    "friture",
    "greek",
    "ice_cream",
    "indian",
    "italian",
    "kebab",
    "mediterranean",
    "mexican",
    "noodles",
    "pancake",
    "pasta",
    "pie",
    "pizza",
    "regional",
    "sandwich",
    "seafood",
    "steak_house",
    "sushi",
    "tapas",
    "thai",
    "turkish",
    "vegan",
    "vegetarian",
    "vietnamese",
    "waffle"
  ],
  emergency: [
    "ambulance_station",
    "defibrillator",
    "fire_hydrant",
    "fire_station",
    "phone",
    "siren",
    "suction_point",
    "water_tank",
    "lifeguard",
    "assembly_point"
  ],
  highway: [
    "motorway",
    "trunk",
    "primary",
    "secondary",
    "tertiary",
    "unclassified",
    "residential",
    "service",
    "motorway_link",
    "trunk_link",
    "primary_link",
    "secondary_link",
    "tertiary_link",
    "living_street",
    "pedestrian",
    "track",
    "bus_guideway",
    "escape",
    "raceway",
    "road",
    "footway",
    "bridleway",
    "steps",
    "corridor",
    "path",
    "cycleway",
    "construction",
    "bus_stop",
    "crossing",
    "elevator",
    "give_way",
    "mini_roundabout",
    "motorway_junction",
    "passing_place",
    "rest_area",
    "speed_camera",
    "street_lamp",
    "stop",
    "traffic_signals",
    "turning_circle"
  ],
  historic: [
    "aircraft",
    "archaeological_site",
    "battlefield",
    "bomb_crater",
    "boundary_stone",
    "building",
    "cannon",
    "castle",
    "castle_wall",
    "church",
    "city_gate",
    "citywalls",
    "farm",
    "fort",
    "gallows",
    "highwater_mark",
    "house",
    "locomotive",
    "manor",
    "memorial",
    "milestone",
    "monastery",
    "monument",
    "optical_telegraph",
    "pillbox",
    "railway_car",
    "ruins",
    "runestone",
    "ship",
    "tank",
    "tower",
    "tree_shrine",
    "vehicle",
    "wayside_cross",
    "wayside_shrine",
    "wreck"
  ],
  landuse: [
    "allotments",
    "basin",
    "brownfield",
    "cemetery",
    "commercial",
    "construction",
    "depot",
    "farmland",
    "farmyard",
    "forest",
    "garages",
    "grass",
    "greenfield",
    "greenhouse_horticulture",
    "industrial",
    "landfill",
    "meadow",
    "military",
    "orchard",
    "plant_nursery",
    "port",
    "quarry",
    "railway",
    "recreation_ground",
    "religious",
    "reservoir",
    "residential",
    "retail",
    "salt_pond",
    "village_green",
    "vineyard",
    "winter_sports"
  ],
  leisure: [
    "adult_gaming_centre",
    "amusement_arcade",
    "bandstand",
    "beach_resort",
    "bird_hide",
    "bowling_alley",
    "common",
    "dance",
    "disc_golf_course",
    "dog_park",
    "escape_game",
    "firepit",
    "fishing",
    "fitness_centre",
    "fitness_station",
    "garden",
    "golf_course",
    "hackerspace",
    "horse_riding",
    "ice_rink",
    "marina",
    "miniature_golf",
    "nature_reserve",
    "park",
    "picnic_table",
    "pitch",
    "playground",
    "slipway",
    "sports_centre",
    "stadium",
    "summer_camp",
    "swimming_area",
    "swimming_pool",
    "track",
    "water_park"
  ],
  man_made: [
    "adit",
    "beacon",
    "breakwater",
    "bridge",
    "bunker_silo",
    "campanile",
    "chimney",
    "clearcut",
    "communications_tower",
    "crane",
    "cross",
    "cutline",
    "dyke",
    "embankment",
    "flagpole",
    "gasometer",
    "goods_conveyor",
    "groyne",
    "kiln",
    "lighthouse",
    "manhole",
    "mast",
    "mineshaft",
    "monitoring_station",
    "obelisk",
    "offshore_platform",
    "petroleum_well",
    "pier",
    "pipeline",
    "pumping_station",
    "reservoir_covered",
    "silo",
    "snow_fence",
    "storage_tank",
    "street_cabinet",
    "surveillance",
    "survey_point",
    "telescope",
    "tower",
    "utility_pole",
    "wastewater_plant",
    "water_tap",
    "water_tower",
    "water_well",
    "water_works",
    "windmill",
    "works"
  ],
  natural: [
    "arete",
    "bare_rock",
    "bay",
    "beach",
    "cape",
    "cave_entrance",
    "cliff",
    "coastline",
    "dune",
    "fell",
    "geyser",
    "glacier",
    "grassland",
    "heath",
    "hot_spring",
    "isthmus",
    "mud",
    "peak",
    "peninsula",
    "reef",
    "ridge",
    "rock",
    "saddle",
    "sand",
    "scree",
    "scrub",
    "shingle",
    "sinkhole",
    "spring",
    "stone",
    "strait",
    "tree",
    "tree_row",
    "valley",
    "volcano",
    "water",
    "wetland",
    "wood"
  ],
  office: [
    "accountant",
    "advertising_agency",
    "architect",
    "association",
    "charity",
    "company",
    "consulting",
    "courier",
    "coworking",
    "diplomatic",
    "educational_institution",
    "employment_agency",
    "energy_supplier",
    "engineer",
    "estate_agent",
    "financial",
    "forestry",
    "foundation",
    "government",
    "guide",
    "insurance",
    "it",
    "lawyer",
    "logistics",
    "moving_company",
    "newspaper",
    "ngo",
    "notary",
    "political_party",
    "property_management",
    "quango",
    "religion",
    "research",
    "security",
    "surveyor",
    "tax_advisor",
    "telecommunication",
    "travel_agent",
    "union",
    "water_utility"
  ],
  place: [
    "country",
    "state",
    "region",
    "province",
    "district",
    "county",
    "municipality",
    "city",
    "borough",
    "suburb",
    "quarter",
    "neighbourhood",
    "city_block",
    "plot",
    "town",
    "village",
    "hamlet",
    "isolated_dwelling",
    "farm",
    "allotments",
    "continent",
    "archipelago",
    "island",
    "islet",
    "square",
    "locality"
  ],
  power: [
    "cable",
    "catenary_mast",
    "compensator",
    "converter",
    "generator",
    "heliostat",
    "insulator",
    "line",
    "minor_line",
    "plant",
    "pole",
    "portal",
    "substation",
    "switch",
    "switchgear",
    "terminal",
    "tower",
    "transformer"
  ],
  public_transport: ["stop_position", "platform", "station", "stop_area"],
  railway: [
    "abandoned",
    "construction",
    "disused",
    "funicular",
    "light_rail",
    "miniature",
    "monorail",
    "narrow_gauge",
    "preserved",
    "rail",
    "subway",
    "tram",
    "halt",
    "station",
    "subway_entrance",
    "tram_stop",
    "level_crossing",
    "crossing",
    "signal",
    "switch",
    "turntable",
    "roundhouse"
  ],
  shop: [
    "alcohol",
    "bakery",
    "beverages",
    "brewing_supplies",
    "butcher",
    "cheese",
    "chocolate",
    "coffee",
    "confectionery",
    "convenience",
    "deli",
    "dairy",
    "farm",
    "frozen_food",
    "greengrocer",
    "health_food",
    "ice_cream",
    "pasta",
    "pastry",
    "seafood",
    "spices",
    "tea",
    "water",
    "wine",
    "department_store",
    "general",
    "kiosk",
    "mall",
    "supermarket",
    "wholesale",
    "baby_goods",
    "bag",
    "boutique",
    "clothes",
    "fabric",
    "fashion",
    "fashion_accessories",
    "jewelry",
    "leather",
    "sewing",
    "shoes",
    "tailor",
    "watches",
    "wool",
    "charity",
    "second_hand",
    "variety_store",
    "beauty",
    "chemist",
    "cosmetics",
    "drugstore",
    "erotic",
    "hairdresser",
    "hairdresser_supply",
    "hearing_aids",
    "herbalist",
    "massage",
    "medical_supply",
    "nutrition_supplements",
    "optician",
    "perfumery",
    "tattoo",
    "wig",
    "agarian",
    "appliance",
    "bathroom_furnishing",
    "doityourself",
    "electrical",
    "energy",
    "fireplace",
    "florist",
    "garden_centre",
    "garden_furniture",
    "gas",
    "glaziery",
    "hardware",
    "houseware",
    "locksmith",
    "paint",
    "security",
    "trade",
    "antiques",
    "bed",
    "candles",
    "carpet",
    "curtain",
    "doors",
    "flooring",
    "furniture",
    "interior_decoration",
    "kitchen",
    "lighting",
    "tiles",
    "window_blind",
    "computer",
    "electronics",
    "hifi",
    "mobile_phone",
    "radiotechnics",
    "robot",
    "vacuum_cleaner",
    "video_games",
    "bicycle",
    "boat",
    "car",
    "car_repair",
    "car_parts",
    "caravan",
    "fuel",
    "fishing",
    "golf",
    "hunting",
    "jetski",
    "military_surplus",
    "motorcycle",
    "outdoor",
    "scuba_diving",
    "ski",
    "snowmobile",
    "sports",
    "swimming_pool",
    "trailer",
    "tyres",
    "art",
    "camera",
    "collector",
    "craft",
    "frame",
    "games",
    "model",
    "music",
    "musical_instrument",
    "photo",
    "trophy",
    "video",
    "anime",
    "books",
    "gift",
    "lottery",
    "newsagent",
    "stationery",
    "ticket",
    "copyshop",
    "dry_cleaning",
    "e-cigarette",
    "funeral_directors",
    "laundry",
    "money_lender",
    "party",
    "pawnbroker",
    "pet",
    "pet_grooming",
    "pest_control",
    "pyrotechnics",
    "religion",
    "storage_rental",
    "tobacco",
    "toys",
    "travel_agency",
    "vacant",
    "weapons"
  ],
  sport: [
    "9pin",
    "10pin",
    "aikido",
    "american_football",
    "archery",
    "athletics",
    "australian_football",
    "badminton",
    "baseball",
    "basketball",
    "beachvolleyball",
    "billiards",
    "bmx",
    "bobsleigh",
    "boules",
    "bowls",
    "boxing",
    "canadian_football",
    "canoe",
    "chess",
    "cliff_diving",
    "climbing",
    "climbing_adventure",
    "cockfighting",
    "cricket",
    "croquet",
    "curling",
    "cycling",
    "darts",
    "dog_racing",
    "equestrian",
    "fencing",
    "field_hockey",
    "free_flying",
    "gaelic_games",
    "golf",
    "gymnastics",
    "handball",
    "hangu",
    "hockey",
    "horse_racing",
    "ice_hockey",
    "ice_stock",
    "judo",
    "karate",
    "karting",
    "kitesurfing",
    "korfball",
    "krachtbal",
    "lacrosse",
    "long_jump",
    "model_aerodrome",
    "motocross",
    "motor",
    "multi",
    "netball",
    "obstacle_course",
    "orienting",
    "paddle_tennis",
    "padel",
    "parachuting",
    "paragliding",
    "pelota",
    "racquet",
    "rc_car",
    "rowing",
    "rugby",
    "rugby_league",
    "rugby_union",
    "running",
    "sailing",
    "scuba_diving",
    "shooting",
    "skateboard",
    "skating",
    "skiing",
    "ski_jumping",
    "soccer",
    "surfing",
    "swimming",
    "table_soccer",
    "table_tennis",
    "taekwondo",
    "tennis",
    "toboggan",
    "volleyball",
    "water_polo",
    "water_ski",
    "weightlifting",
    "wrestling",
    "yoga"
  ],
  tourism: [
    "alpine_hut",
    "apartment",
    "aquarium",
    "artwork",
    "attraction",
    "camp_pitch",
    "camp_site",
    "caravan_site",
    "chalet",
    "gallery",
    "guest_house",
    "hostel",
    "hotel",
    "information",
    "motel",
    "museum",
    "picnic_site",
    "theme_park",
    "viewpoint",
    "wilderness_hut",
    "zoo"
  ],
  waterway: [
    "canal",
    "dam",
    "ditch",
    "dock",
    "drain",
    "lock_gate",
    "pressurised",
    "river",
    "riverbank",
    "stream",
    "tidal_channel",
    "waterfall",
    "weir"
  ]
};

// Keys that are generally free-text and shouldn't force a dropdown of values
const FREE_TEXT_KEYS = [
  "name",
  "alt_name",
  "maxspeed",
  "layer",
  "level",
  "capacity",
  "height",
  "width",
  "ref",
  "ele",
  "opening_hours",
  "phone",
  "website",
  "addr:housenumber",
  "addr:street",
  "addr:city",
  "addr:postcode"
];

type Condition = {
  id: string;
  geometry: "node" | "way" | "relation" | "nwr";
  key: string;
  operator: "=" | "!=" | "~" | "!~";
  value: string;
  logic: "and" | "or" | null;
};

type QueryState = {
  location: "bbox" | "area" | "around" | "global";
  locationValue: string;
  conditions: Condition[];
};

class VisualQueryBuilder {
  private conditionIdCounter = 0;
  private codeEditor: any = null;
  private presets: any = {};
  private isUpdating = false;

  constructor(codeEditor: any) {
    this.codeEditor = codeEditor;
  }

  async init() {
    // Load presets for tag suggestions
    await this.loadPresets();

    // Setup event handlers
    this.setupEventHandlers();

    // Add initial condition block
    this.addConditionBlock();
  }

  private async loadPresets() {
    return new Promise<void>((resolve) => {
      ffs_free((freeFormQuery) => {
        // Presets are loaded in ffs_free
        // We can access them through the module if needed
        resolve();
      });
    });
  }

  // Generate options based on the OSM_TAG_DATA + FREE_TEXT_KEYS
  private getKeyOptionsHtml(): string {
    const allKeys = [...Object.keys(OSM_TAG_DATA), ...FREE_TEXT_KEYS].sort();
    return allKeys
      .map((key) => `<option value="${key}">${key}</option>`)
      .join("");
  }

  private setupEventHandlers() {
    // Add condition button
    $("#add-condition").on("click", () => {
      this.addConditionBlock();
      this.updateCodeEditor();
    });

    // Clear all button
    $("#visual-builder-clear").on("click", () => {
      this.clearAll();
    });

    // Location type change
    $('input[name="location-type"]').on("change", () => {
      const locationType = $(
        'input[name="location-type"]:checked'
      ).val() as string;
      if (locationType === "area" || locationType === "around") {
        $("#location-params").show();
      } else {
        $("#location-params").hide();
      }
      this.updateCodeEditor();
    });

    // Location value change
    $("#location-value").on("input", () => {
      this.updateCodeEditor();
    });

    // Geometry type change (Global) - removed, now handled per condition

    // Delegate event handlers for condition blocks
    $("#condition-blocks").on(
      "change",
      ".tag-key-select, .operator-select, .tag-value-input, .logic-select, .geometry-select",
      (e) => {
        // Special handler for key change to update value dropdowns
        if (
          $(e.target).hasClass("tag-key-select") &&
          $(e.target).is("select")
        ) {
          this.updateValueOptions($(e.target));
        }
        this.updateCodeEditor();
      }
    );

    $("#condition-blocks").on("input", ".tag-value-input", () => {
      this.updateCodeEditor();
    });

    $("#condition-blocks").on("click", ".remove-condition", (e) => {
      const blockId = $(e.target).closest(".condition-block").data("id");
      this.removeConditionBlock(blockId);
      this.updateCodeEditor();
    });
  }

  // Updates the <datalist> for the value input based on the selected key
  private updateValueOptions($keySelect: JQuery) {
    const key = $keySelect.val() as string;
    const $block = $keySelect.closest(".condition-block");
    const $valueInput = $block.find(".tag-value-input");
    const blockId = $block.data("id");
    const datalistId = `datalist-${blockId}`;
    let $datalist = $(`#${datalistId}`);

    // Create datalist if it somehow doesn't exist (though addConditionBlock creates it)
    if ($datalist.length === 0) {
      $datalist = $(`<datalist id="${datalistId}"></datalist>`);
      $valueInput.after($datalist);
    }

    $datalist.empty();

    // Clear the current value when key changes to prevent mismatch
    // (e.g. changing from 'highway' to 'building' but keeping 'motorway')
    $valueInput.val("");

    // Check if we have data for this key
    if (key && OSM_TAG_DATA[key]) {
      // Populate options
      const options = OSM_TAG_DATA[key].sort();
      const optionsHtml = options.map((v) => `<option value="${v}">`).join("");
      $datalist.html(optionsHtml);

      // Attach datalist to input
      $valueInput.attr("list", datalistId);
    } else {
      // Free text or unknown key - remove list association
      $valueInput.removeAttr("list");
    }
  }

  addConditionBlock() {
    const id = `condition-${this.conditionIdCounter++}`;
    const isFirst = $("#condition-blocks .condition-block").length === 0;

    const block = $(`
      <div class="condition-block" data-id="${id}">
        <button class="button is-small is-danger remove-condition" title="Remove condition">
          <span class="icon"><span class="fas fa-times"></span></span>
        </button>
        <div class="select geometry-select">
            <select>
                <option value="nwr">All (nwr)</option>
                <option value="node">Node</option>
                <option value="way">Way</option>
                <option value="relation">Relation</option>
            </select>
        </div>
        <div class="select tag-key-select">
          <select class="tag-key-select">
            <option value="">-- Select Tag --</option>
            ${this.getKeyOptionsHtml()}
            <option value="__custom__">Custom...</option>
          </select>
        </div>
        <div class="select operator-select">
          <select class="operator-select">
            <option value="=">=</option>
            <option value="!=">!=</option>
            <option value="~">~ (regex)</option>
            <option value="!~">!~ (no regex)</option>
          </select>
        </div>
        <div class="value-container">
            <input type="text" class="input tag-value-input" placeholder="Value">
            <datalist id="datalist-${id}"></datalist>
        </div>
        ${
          !isFirst
            ? `
        <div class="select logic-select">
          <select class="logic-select">
            <option value="and">AND</option>
            <option value="or">OR</option>
          </select>
        </div>
        `
            : ""
        }
      </div>
    `);

    $("#condition-blocks").append(block);

    // Handle custom tag key input
    const self = this;
    block.find(".tag-key-select").on("change", function handleCustomTag() {
      const $select = $(this);
      if ($select.val() === "__custom__") {
        const customInput = $(
          '<input type="text" class="input" placeholder="Custom tag key">'
        );
        $select.replaceWith(customInput);

        // Custom key implies free text, so ensure value input is disconnected from datalist
        const $block = customInput.closest(".condition-block");
        $block.find(".tag-value-input").removeAttr("list");

        customInput.on("blur", () => {
          const value = customInput.val() as string;
          const selectWrapper = $(`
            <div class="select tag-key-select">
              <select class="tag-key-select">
                <option value="">-- Select Tag --</option>
                ${self.getKeyOptionsHtml()}
                <option value="__custom__">Custom...</option>
              </select>
            </div>
          `);

          if (value) {
            // If the custom value matches a known key, select it
            const matchingOption = selectWrapper.find(
              `option[value="${value}"]`
            );
            if (matchingOption.length > 0) {
              selectWrapper.find("select").val(value);
            } else {
              selectWrapper.find("select").val("__custom__");
            }
          } else {
            selectWrapper.find("select").val("__custom__");
          }

          customInput.replaceWith(selectWrapper);
          const newSelect = selectWrapper.find("select");
          newSelect.on("change", handleCustomTag);

          // Trigger update to populate values if we landed on a known key
          self.updateValueOptions(newSelect);
          self.updateCodeEditor();
        });
        customInput.focus();
      }
    });
  }

  removeConditionBlock(id: string) {
    $(`.condition-block[data-id="${id}"]`).remove();
    // Update logic selectors - first block shouldn't have one
    const blocks = $("#condition-blocks .condition-block");
    if (blocks.length > 0) {
      blocks.first().find(".logic-select").remove();
    }
  }

  clearAll() {
    $("#condition-blocks").empty();
    this.addConditionBlock();
    this.updateCodeEditor();
  }

  getQueryState(): QueryState {
    const location = $('input[name="location-type"]:checked').val() as
      | "bbox"
      | "area"
      | "around"
      | "global";
    const locationValue = ($("#location-value").val() as string) || "";
    // Geometry is now per-condition, default to "nwr" for backward compatibility
    const geometry = "nwr" as "node" | "way" | "relation" | "nwr";

    const conditions: Condition[] = [];
    $("#condition-blocks .condition-block").each((index, block) => {
      const $block = $(block);
      // Get tag key - could be from select or custom input
      let key = "";
      const $keySelect = $block.find(".tag-key-select select");
      if ($keySelect.length > 0) {
        key = ($keySelect.val() as string) || "";
      } else {
        // It's a custom input
        key = ($block.find(".tag-key-select input").val() as string) || "";
      }

      const operator = $block
        .find(".operator-select select")
        .val() as Condition["operator"];
      const geometry =
        ($block
          .find(".geometry-select select")
          .val() as Condition["geometry"]) || "nwr";

      const value = ($block.find(".tag-value-input").val() as string) || "";
      const logic =
        index > 0
          ? ($block.find(".logic-select select").val() as "and" | "or") || "and"
          : null;

      // Only add if key is valid
      if (key && key !== "__custom__") {
        conditions.push({
          id: $block.data("id"),
          geometry: geometry,
          key: key,
          operator: operator,
          value: value,
          logic: logic
        });
      }
    });

    return {
      location,
      locationValue,
      geometry,
      conditions
    };
  }

  generateOverpassQL(state: QueryState): string {
    const parts: string[] = [];

    // Header
    parts.push("[out:json][timeout:25];");

    // Location handling
    let boundsPart: string | undefined;
    switch (state.location) {
      case "area":
        if (state.locationValue) {
          parts.push(`{{geocodeArea:${state.locationValue}}}->.searchArea;`);
          boundsPart = "(area.searchArea)";
        }
        break;
      case "around":
        if (state.locationValue) {
          parts.push("{{radius=1000}}");
          boundsPart = `(around:{{radius}},{{geocodeCoords:${state.locationValue}}})`;
        }
        break;
      case "bbox":
        boundsPart = "({{bbox}})";
        break;
      case "global":
        boundsPart = undefined;
        break;
    }

    // Build query clauses
    if (state.conditions.length === 0) {
      // No conditions - return minimal query structure using global geometry state
      if (boundsPart) {
        parts.push(`  ${state.geometry}${boundsPart};`);
      } else {
        parts.push(`  ${state.geometry};`);
      }
      parts.push("out geom;");
      return parts.join("\n");
    }

    // Generate query - each condition on its own line
    if (state.conditions.length > 1) {
      parts.push("(");
    }

    // Each condition becomes its own query line
    for (const condition of state.conditions) {
      // Use the per-condition geometry instead of global state
      let queryLine = `  ${condition.geometry}`;

      if (condition.value) {
        // Standard Key-Value check
        queryLine += `["${this.escapeString(condition.key)}"${condition.operator}"${this.escapeString(condition.value)}"]`;
      } else {
        // Existence check (key exists, value is empty)
        queryLine += `["${this.escapeString(condition.key)}"]`;
      }

      if (boundsPart) {
        queryLine += boundsPart;
      }
      queryLine += ";";
      parts.push(queryLine);
    }

    if (state.conditions.length > 1) {
      parts.push(");");
    }

    // Output
    parts.push("out geom;");

    return parts.join("\n");
  }

  private escapeString(str: string): string {
    return str
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n");
  }

  updateCodeEditor() {
    if (this.isUpdating || !this.codeEditor) return;

    const state = this.getQueryState();
    const query = this.generateOverpassQL(state);

    this.isUpdating = true;
    try {
      if (typeof this.codeEditor.setValue === "function") {
        this.codeEditor.setValue(query);
        // Trigger onChange if it exists (for CodeMirror)
        if (typeof this.codeEditor.getOption === "function") {
          const onChange = this.codeEditor.getOption("onChange");
          if (typeof onChange === "function") {
            onChange(this.codeEditor);
          }
        }
      }
    } finally {
      this.isUpdating = false;
    }
  }

  setCodeEditor(codeEditor: any) {
    this.codeEditor = codeEditor;
  }
}

export default VisualQueryBuilder;
