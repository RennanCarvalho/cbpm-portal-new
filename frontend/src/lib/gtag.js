export const GA_TRACKING_ID = "G-39YY18046S";
// export const GA_TRACKING_ID = "G-PTCQ0Y7BMM"; -- Tag anterior

export const pageView = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    })
}

export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}
