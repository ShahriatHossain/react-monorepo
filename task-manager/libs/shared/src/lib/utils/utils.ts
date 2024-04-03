import { breadcrumbData } from "@task-manager/shared";

export const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9); // Generating a random alphanumeric string
}

// Function to find breadcrumb based on location pathname
export const findBreadcrumb = (pathname: string) => {
    // Iterate through breadcrumbData array
    for (const breadcrumb of breadcrumbData) {
        const breadcrumbPath = breadcrumb.path;
        const regexPattern = breadcrumbPath
            // Escape characters with special meaning in regex
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            // Replace dynamic parameters with regex capturing groups
            .replace(/:\w+/g, '([^/]+)');

        const regex = new RegExp(`^${regexPattern}$`);

        // Check if the pathname matches the regex pattern
        if (regex.test(pathname)) {
            return breadcrumb;
        }
    }
    // If no match is found, return undefined
    return undefined;
}
