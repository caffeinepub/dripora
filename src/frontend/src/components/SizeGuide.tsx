import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const topsData = [
  {
    size: "XS",
    chest: "82–86",
    chestIn: '32–34"',
    waist: "66–70",
    waistIn: '26–27.5"',
    hips: "86–90",
    hipsIn: '34–35.5"',
    length: "65",
    lengthIn: '25.5"',
  },
  {
    size: "S",
    chest: "87–91",
    chestIn: '34–36"',
    waist: "71–75",
    waistIn: '28–29.5"',
    hips: "91–95",
    hipsIn: '36–37.5"',
    length: "67",
    lengthIn: '26.5"',
  },
  {
    size: "M",
    chest: "92–96",
    chestIn: '36–38"',
    waist: "76–80",
    waistIn: '30–31.5"',
    hips: "96–100",
    hipsIn: '38–39.5"',
    length: "69",
    lengthIn: '27"',
  },
  {
    size: "L",
    chest: "97–102",
    chestIn: '38–40"',
    waist: "81–86",
    waistIn: '32–34"',
    hips: "101–106",
    hipsIn: '40–42"',
    length: "71",
    lengthIn: '28"',
  },
  {
    size: "XL",
    chest: "103–108",
    chestIn: '40.5–42.5"',
    waist: "87–92",
    waistIn: '34.5–36"',
    hips: "107–112",
    hipsIn: '42–44"',
    length: "73",
    lengthIn: '28.5"',
  },
  {
    size: "XXL",
    chest: "109–116",
    chestIn: '43–45.5"',
    waist: "93–100",
    waistIn: '36.5–39.5"',
    hips: "113–120",
    hipsIn: '44.5–47"',
    length: "75",
    lengthIn: '29.5"',
  },
];

const bottomsData = [
  {
    size: "XS",
    waist: "66–70",
    waistIn: '26–27.5"',
    hips: "86–90",
    hipsIn: '34–35.5"',
    inseam: "78",
    inseamIn: '30.5"',
    rise: "26",
    riseIn: '10"',
  },
  {
    size: "S",
    waist: "71–75",
    waistIn: '28–29.5"',
    hips: "91–95",
    hipsIn: '36–37.5"',
    inseam: "79",
    inseamIn: '31"',
    rise: "27",
    riseIn: '10.5"',
  },
  {
    size: "M",
    waist: "76–80",
    waistIn: '30–31.5"',
    hips: "96–100",
    hipsIn: '38–39.5"',
    inseam: "80",
    inseamIn: '31.5"',
    rise: "28",
    riseIn: '11"',
  },
  {
    size: "L",
    waist: "81–86",
    waistIn: '32–34"',
    hips: "101–106",
    hipsIn: '40–42"',
    inseam: "81",
    inseamIn: '32"',
    rise: "29",
    riseIn: '11.5"',
  },
  {
    size: "XL",
    waist: "87–92",
    waistIn: '34.5–36"',
    hips: "107–112",
    hipsIn: '42–44"',
    inseam: "82",
    inseamIn: '32.5"',
    rise: "30",
    riseIn: '12"',
  },
  {
    size: "XXL",
    waist: "93–100",
    waistIn: '36.5–39.5"',
    hips: "113–120",
    hipsIn: '44.5–47"',
    inseam: "82",
    inseamIn: '32.5"',
    rise: "31",
    riseIn: '12.5"',
  },
];

const outerwearData = [
  {
    size: "XS",
    chest: "86–90",
    chestIn: '34–35.5"',
    shoulder: "42",
    shoulderIn: '16.5"',
    sleeve: "62",
    sleeveIn: '24.5"',
    length: "68",
    lengthIn: '27"',
  },
  {
    size: "S",
    chest: "91–96",
    chestIn: '36–38"',
    shoulder: "44",
    shoulderIn: '17.5"',
    sleeve: "63",
    sleeveIn: '25"',
    length: "70",
    lengthIn: '27.5"',
  },
  {
    size: "M",
    chest: "97–102",
    chestIn: '38–40"',
    shoulder: "46",
    shoulderIn: '18"',
    sleeve: "64",
    sleeveIn: '25.5"',
    length: "72",
    lengthIn: '28.5"',
  },
  {
    size: "L",
    chest: "103–108",
    chestIn: '40.5–42.5"',
    shoulder: "48",
    shoulderIn: '19"',
    sleeve: "65",
    sleeveIn: '25.5"',
    length: "74",
    lengthIn: '29"',
  },
  {
    size: "XL",
    chest: "109–114",
    chestIn: '43–45"',
    shoulder: "50",
    shoulderIn: '20"',
    sleeve: "66",
    sleeveIn: '26"',
    length: "76",
    lengthIn: '30"',
  },
  {
    size: "XXL",
    chest: "115–122",
    chestIn: '45.5–48"',
    shoulder: "52",
    shoulderIn: '20.5"',
    sleeve: "67",
    sleeveIn: '26.5"',
    length: "78",
    lengthIn: '30.5"',
  },
];

const headStyle = { color: "oklch(0.62 0.008 240)" };
const accentCyan = "oklch(0.85 0.14 196)";
const accentGreen = "oklch(0.89 0.22 142)";
const bg = "oklch(0.09 0.006 240)";
const cardBg = "oklch(0.12 0.008 240)";
const borderColor = "oklch(0.20 0.01 240)";

export default function SizeGuide() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="size-guide" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="mb-14">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: accentGreen }}
            >
              FIT MATTERS
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white">
              SIZE GUIDE
            </h2>
            <div
              className="mt-4 h-[2px] w-20"
              style={{ background: accentGreen }}
            />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="tops" data-ocid="size-guide.tab">
            <TabsList
              className="mb-8 gap-1 h-auto p-1"
              style={{ background: cardBg, border: `1px solid ${borderColor}` }}
            >
              {["tops", "bottoms", "outerwear"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  data-ocid="size-guide.tab"
                  className="text-xs font-black tracking-[0.25em] uppercase px-6 py-3 transition-all data-[state=active]:text-background"
                  style={
                    {
                      // active state via CSS variable override not possible here;
                      // use inline fallback for inactive
                    } as React.CSSProperties
                  }
                >
                  {tab.toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* TOPS */}
            <TabsContent value="tops">
              <div
                className="overflow-x-auto rounded-none border"
                style={{ borderColor }}
              >
                <Table>
                  <TableHeader>
                    <TableRow style={{ borderColor }}>
                      <TableHead
                        className="font-black tracking-widest uppercase"
                        style={headStyle}
                      >
                        SIZE
                      </TableHead>
                      <TableHead style={headStyle}>CHEST (cm)</TableHead>
                      <TableHead style={headStyle}>CHEST (in)</TableHead>
                      <TableHead style={headStyle}>WAIST (cm)</TableHead>
                      <TableHead style={headStyle}>WAIST (in)</TableHead>
                      <TableHead style={headStyle}>HIPS (cm)</TableHead>
                      <TableHead style={headStyle}>HIPS (in)</TableHead>
                      <TableHead style={headStyle}>LENGTH (cm)</TableHead>
                      <TableHead style={headStyle}>LENGTH (in)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topsData.map((row, i) => (
                      <TableRow
                        key={row.size}
                        data-ocid={`size-guide.row.${i + 1}`}
                        style={{
                          borderColor,
                          background:
                            i % 2 === 0
                              ? "transparent"
                              : "oklch(0.11 0.007 240)",
                        }}
                      >
                        <TableCell
                          className="font-black tracking-widest text-sm"
                          style={{ color: accentCyan }}
                        >
                          {row.size}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.chest}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.chestIn}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.waist}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.waistIn}
                        </TableCell>
                        <TableCell className="text-white">{row.hips}</TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.hipsIn}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.length}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.lengthIn}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* BOTTOMS */}
            <TabsContent value="bottoms">
              <div className="overflow-x-auto border" style={{ borderColor }}>
                <Table>
                  <TableHeader>
                    <TableRow style={{ borderColor }}>
                      <TableHead
                        className="font-black tracking-widest uppercase"
                        style={headStyle}
                      >
                        SIZE
                      </TableHead>
                      <TableHead style={headStyle}>WAIST (cm)</TableHead>
                      <TableHead style={headStyle}>WAIST (in)</TableHead>
                      <TableHead style={headStyle}>HIPS (cm)</TableHead>
                      <TableHead style={headStyle}>HIPS (in)</TableHead>
                      <TableHead style={headStyle}>INSEAM (cm)</TableHead>
                      <TableHead style={headStyle}>INSEAM (in)</TableHead>
                      <TableHead style={headStyle}>RISE (cm)</TableHead>
                      <TableHead style={headStyle}>RISE (in)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bottomsData.map((row, i) => (
                      <TableRow
                        key={row.size}
                        data-ocid={`size-guide.row.${i + 1}`}
                        style={{
                          borderColor,
                          background:
                            i % 2 === 0
                              ? "transparent"
                              : "oklch(0.11 0.007 240)",
                        }}
                      >
                        <TableCell
                          className="font-black tracking-widest text-sm"
                          style={{ color: accentCyan }}
                        >
                          {row.size}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.waist}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.waistIn}
                        </TableCell>
                        <TableCell className="text-white">{row.hips}</TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.hipsIn}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.inseam}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.inseamIn}
                        </TableCell>
                        <TableCell className="text-white">{row.rise}</TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.riseIn}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* OUTERWEAR */}
            <TabsContent value="outerwear">
              <div className="overflow-x-auto border" style={{ borderColor }}>
                <Table>
                  <TableHeader>
                    <TableRow style={{ borderColor }}>
                      <TableHead
                        className="font-black tracking-widest uppercase"
                        style={headStyle}
                      >
                        SIZE
                      </TableHead>
                      <TableHead style={headStyle}>CHEST (cm)</TableHead>
                      <TableHead style={headStyle}>CHEST (in)</TableHead>
                      <TableHead style={headStyle}>SHOULDER (cm)</TableHead>
                      <TableHead style={headStyle}>SHOULDER (in)</TableHead>
                      <TableHead style={headStyle}>SLEEVE (cm)</TableHead>
                      <TableHead style={headStyle}>SLEEVE (in)</TableHead>
                      <TableHead style={headStyle}>LENGTH (cm)</TableHead>
                      <TableHead style={headStyle}>LENGTH (in)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {outerwearData.map((row, i) => (
                      <TableRow
                        key={row.size}
                        data-ocid={`size-guide.row.${i + 1}`}
                        style={{
                          borderColor,
                          background:
                            i % 2 === 0
                              ? "transparent"
                              : "oklch(0.11 0.007 240)",
                        }}
                      >
                        <TableCell
                          className="font-black tracking-widest text-sm"
                          style={{ color: accentCyan }}
                        >
                          {row.size}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.chest}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.chestIn}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.shoulder}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.shoulderIn}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.sleeve}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.sleeveIn}
                        </TableCell>
                        <TableCell className="text-white">
                          {row.length}
                        </TableCell>
                        <TableCell style={{ color: "oklch(0.62 0.008 240)" }}>
                          {row.lengthIn}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>

          {/* Note */}
          <p
            className="mt-6 text-xs tracking-wide leading-relaxed"
            style={{ color: "oklch(0.62 0.008 240)" }}
          >
            * All measurements are in centimeters and inches. For the best fit,
            measure your body and compare to the size chart. When between sizes,
            size up.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
