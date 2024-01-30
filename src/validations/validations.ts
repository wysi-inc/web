import { t } from "elysia";

export const id_number = {
    params: t.Object(
        {
            id: t.Numeric()
        },
        {
            error: "Invalid ID"
        }
    )
}
