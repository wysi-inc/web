import type { Setup } from "@/src/models/User";

const Tablet = ({ tablet }: { tablet: Setup["tablet"] }) => {

    if (!tablet) return <div>No tablet found</div>;

    // lets do the inner area relative in percents
    // and the outer area in pixels
    // so we can have a responsive design

    const innerArea = {
        w: tablet.area.w / tablet.size.w * 100,
        h: tablet.area.h / tablet.size.h * 100,
        y: tablet.position.y / tablet.size.h * 100,
        x: tablet.position.x / tablet.size.w * 100,
        r: tablet.position.r,
    };

    // show aspect ration of the area as a string like 16:9
    const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
    const aspectRatio = (tablet.area.w / gcd(tablet.area.w, tablet.area.h)) + ":" + (tablet.area.h / gcd(tablet.area.w, tablet.area.h));

    return (
        <div>
            <h1>Tablet</h1>
            <div class="relative bg-accent overflow-hidden rounded-lg" style={{
                height: `${tablet.size.h}px`,
                width: `${tablet.size.w}px`,
            }}>
                <div class="absolute bg-primary" style={{
                    height: `${innerArea.h}%`,
                    width: `${innerArea.w}%`,
                    top: `${innerArea.y}%`,
                    left: `${innerArea.x}%`,
                    rotate: `${innerArea.r}deg`,
                }}>
                    <div>{tablet.area.w} x {tablet.area.h} mm</div>
                    <div>{aspectRatio}</div>
                </div>
            </div>
        </div>
    );
}

export default Tablet;
