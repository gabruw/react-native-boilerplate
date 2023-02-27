import FatalErrorAnimation from "@app/assets/animations/errors/fatal.json";
import SecurityErrorAnimation from "@app/assets/animations/errors/security.json";
import { AnimatedScreenProps } from "@app/components/AnimatedScreen";

enum CriticalErrors {
    FATAL = "fatal",
    JAIL_BREAK = "jailbreak",
}

const CRITICAL_ERRORS: Record<CriticalErrors, AnimatedScreenProps> = {
    [CriticalErrors.FATAL]: {
        animation: FatalErrorAnimation,
        error: {
            title: "errors.fatal.title",
            instruction: "errors.fatal.instruction",
            description: "errors.fatal.description",
        },
    },
    [CriticalErrors.JAIL_BREAK]: {
        animation: SecurityErrorAnimation,
        error: {
            title: "errors.jail-break.title",
            instruction: "errors.jail-break.instruction",
            description: "errors.jail-break.description",
        },
    },
};

export { CRITICAL_ERRORS, CriticalErrors };
