import { GrowthBook } from "@growthbook/growthbook";

const growthbook = new GrowthBook({
    apiHost: "https://proxy.growthbook.planiphy.com",
    clientKey: import.meta.env.VITE_GB_KEY,
    enableDevMode: true,
    trackingCallback: (experiment, result) => {
        // TODO: Use your real analytics tracking system
        console.log("Viewed Experiment", {
            experimentId: experiment.key,
            variationId: result.key
        });
    }
});

export async function initGrowthbook() {
    await growthbook.loadFeatures({ autoRefresh: true });
    growthbook.setAttributes({
        "id": "planiphy.com",
        "deviceId": "web",
        "company": "Planiphy",
    });
}

export const addListener = (feature, cb) => {
    cb(growthbook.isOn(feature));
}
