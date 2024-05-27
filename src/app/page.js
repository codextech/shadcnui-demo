import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Info, Plus } from "lucide-react";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/date-picker";

export default function Home() {
  return (
    <div className="bg-slate-50 p-8 max-w-5xl mx-auto pb-24">
      <section className="w-full py-6 md:py-8 border-b mb-8">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-syne">
            Permits
          </h1>
        </div>
      </section>

      <div className="border-b pb-4 mb-4 border-stone-300">
        <h1 className="text-2xl font-bold mb-1">
          Flight Permission Request Form
        </h1>
        <p className="text-sm mb-6 max-w-3xl text-stone-500 ">
          EXCEPT FOR URGENT FLIGHTS, THIS FORM SHALL BE SUBMITTED TO BELOW EMAIL
          5 DAYS PRIOR FOR LANDING AND 48 HRS PRIOR FOR OVERFLY
        </p>
      </div>
      <div className="p-2">
        <p className="text-xs text-center mb-4 ">
          Below details must be filled out completely and is required for
          issuing flight permission
        </p>
        <div className="space-y-4 mb-6">
          <div className="space-y-0.5 max-w-[19rem]">
            <Label htmlFor="date-of-request">Date of Request</Label>
            {/* <Input id="date-of-request" placeholder="Date of Request" /> */}
            <DatePicker />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="name-of-requester">Name of Requester</Label>
              <Input id="name-of-requester" placeholder="Name of Requester" />
            </div>
            <div className="space-y-0.5">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" placeholder="Phone Number" />
            </div>
            <div className="space-y-0.5">
              <Label htmlFor="email-address">Email Address</Label>
              <Input
                id="email-address"
                placeholder="Email Address"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row flex-nowrap max-w-2xl gap-4 mb-6">
          <div className="space-y-0.5 w-full">
            <Label htmlFor="operator-company-name">
              Operator / Company Name
            </Label>
            <Input
              id="operator-company-name"
              placeholder="Operator / Company Name"
            />
          </div>
          <div className="space-y-0.5 max-w-[15rem]">
            <Label htmlFor="city">CITY</Label>
            <Input id="city" placeholder="CITY" />
          </div>
        </div>
        <div className="space-y-0.5 max-w-2xl">
          <Label htmlFor="operator-full-address">Operator full Address</Label>
          <Textarea
            className="min-h-[100px] w-full"
            id="operator-full-address"
            placeholder="Operator full Address"
          />
        </div>
        <div className="mt-16">
          <div className="flex flex-wrap flex-row gap-4 items-center  mb-7">
            <h1 className="text-2xl font-bold text-stone-600">
              Flight Information:
            </h1>

            <Button
              size="sm"
              variant="secondary"
              className="px-7 gap-2 ms-auto"
            >
              <Plus className="h-4 w-4 shrink-0" /> Add Row
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="[&_th]:whitespace-nowrap">
                <TableHead>DATE OF FLIGHT</TableHead>
                <TableHead>CALL SIGN</TableHead>
                <TableHead>A/C TYPE</TableHead>
                <TableHead>A/C REGISTRATION N</TableHead>
                <TableHead>IATA AIRLINE CODE</TableHead>
                <TableHead>DEP STN</TableHead>
                <TableHead>ETD</TableHead>
                <TableHead>ARR STN</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead>ROUTE</TableHead>
                <TableHead>ENTRY / TIME UTC</TableHead>
                <TableHead>EXIT / TIME UTC</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="[&_td]:min-w-[13rem]">
                <TableCell>
                  <Input placeholder="DATE OF FLIGHT" />
                </TableCell>
                <TableCell>
                  <Input placeholder="CALL SIGN" />
                </TableCell>
                <TableCell>
                  <Input placeholder="A/C TYPE" />
                </TableCell>
                <TableCell>
                  <Input placeholder="A/C REGISTRATION N" />
                </TableCell>
                <TableCell>
                  <Input placeholder="IATA AIRLINE CODE" />
                </TableCell>
                <TableCell>
                  <Input placeholder="DEP STN" />
                </TableCell>
                <TableCell>
                  <Input placeholder="ETD" />
                </TableCell>
                <TableCell>
                  <Input placeholder="ARR STN" />
                </TableCell>
                <TableCell>
                  <Input placeholder="ETA" />
                </TableCell>
                <TableCell>
                  <Input placeholder="ROUTE" />
                </TableCell>
                <TableCell>
                  <Input placeholder="ENTRY / TIME UTC" />
                </TableCell>
                <TableCell>
                  <Input placeholder="EXIT / TIME UTC" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-8">
          <RadioGroup
            className="flex flex-wrap flex-row items-center gap-10"
            defaultValue="option-one"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one" className="text-base">
                Landing
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two" className="text-base">
                Departure
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three" className="text-base">
                Overfly
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-wrap flex-row gap-4 items-center mt-14 mb-4">
          <h1 className="text-2xl font-bold text-stone-600">
            Category of Flight
          </h1>

          <Button variant="secondary" size="sm" className="px-7 gap-2 ms-auto">
            <Plus className="h-4 w-4 shrink-0" /> Add Row
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="[&_th]:whitespace-nowrap">
              <TableHead className="text-center">CIVIL</TableHead>
              <TableHead>MILITARY</TableHead>
              <TableHead>UN</TableHead>
              <TableHead>NON SCHEDULE</TableHead>
              <TableHead>SUMMER SCHEDULE</TableHead>
              <TableHead>WINTER SCHEDULE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="min-w-[5rem] text-center">
                <Checkbox />
              </TableCell>
              <TableCell className="min-w-[13rem]">
                <Input placeholder="MILITARY" />
              </TableCell>
              <TableCell className="min-w-[13rem]">
                <Input placeholder="UN" />
              </TableCell>
              <TableCell className="min-w-[5rem] text-center">
                <Checkbox />
              </TableCell>
              <TableCell className="min-w-[13rem]">
                <Input placeholder="SUMMER SCHEDULE" />
              </TableCell>
              <TableCell className="min-w-[13rem]">
                <Input placeholder="WINTER SCHEDULE" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="flex flex-wrap flex-row gap-4 items-center  mt-14 mb-4">
          <h1 className="text-2xl font-bold text-stone-600">
            Purpose of Flight
          </h1>

          <Button variant="secondary" size="sm" className="px-7 gap-2 ms-auto">
            <Plus className="h-4 w-4 shrink-0" /> Add Row
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="[&_th]:whitespace-nowrap">
              <TableHead className="text-center">COMMERICAL / PAX</TableHead>
              <TableHead>CARGO</TableHead>
              <TableHead>VVIP</TableHead>
              <TableHead>VIP</TableHead>
              <TableHead>AMBULANCE/MEDVAC</TableHead>
              <TableHead>TEST FLIGHT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="min-w-[5rem] text-center">
                <Checkbox />
              </TableCell>
              <TableCell className="min-w-[10rem]">
                <Input placeholder="Cargo" />
              </TableCell>
              <TableCell className="min-w-[10rem]">
                <Input placeholder="VVIP" />
              </TableCell>
              <TableCell className="min-w-[10rem]">
                <Input placeholder="VIP" />
              </TableCell>
              <TableCell className="min-w-[10rem]">
                <Input placeholder="Amulance/MEDVAC" />
              </TableCell>
              <TableCell className="min-w-[10rem]">
                <Input placeholder="Test Flight" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="text-xs text-red-600 font-medium mt-3 max-w-3xl  flex flex-nowrap gap-2 items-start">
          <Info className="h-3.5 w-3.5 shrink-0 mt-[1px]" />
          MEDVAC / AMBULANCE FLIGHT: PAITENT PASSPORT DETAILS REQUIRED IN
          REMARKS (THE HARD COPY OF PASSPORT, ATTACHED MEDICAL REPORT OF
          PATIENT, THE HARD DOCUMENTS OF PRIVATE PASSENGER IS REQUIRED) / NATURE
          OF CARGO DETIALS REQUIRED IN REMARKS FOR CARGO FLIGHTS.
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-5">
          <div className="space-y-0.5 max-w-2xl">
            <Label htmlFor="Remarks">Remarks</Label>
            <Textarea className="min-h-[100px] w-full" id="Remarks" />
          </div>
          <div className="space-y-0.5 max-w-2xl">
            <Label htmlFor="Billing-Address">
              Operator&apos;s Billing Address
            </Label>
            <Textarea className="min-h-[100px] w-full" id="Billing-Address" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-stone-600 mt-14 mb-3">
          Purpose of Flight
        </h1>

        <Table>
          <TableHeader>
            <TableRow className="[&_th]:whitespace-nowrap">
              <TableHead>AOC</TableHead>
              <TableHead>A/C INSURANCE</TableHead>
              <TableHead>A/C AIRWORTHINESS CERTIFICATE</TableHead>
              <TableHead>A/C REGISTRATION</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="[&:td]:px-5 ">
              <TableCell>
                <RadioGroup defaultValue="aoc-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aoc-one" id="aoc-one" />
                    <Label htmlFor="aoc-one">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aoc-two" id="aoc-two" />
                    <Label htmlFor="aoc-two">No</Label>
                  </div>
                </RadioGroup>
              </TableCell>

              <TableCell>
                <RadioGroup defaultValue="INSURANCE-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="INSURANCE-one" id="INSURANCE-one" />
                    <Label htmlFor="INSURANCE-one">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="INSURANCE-two" id="INSURANCE-two" />
                    <Label htmlFor="INSURANCE-two">No</Label>
                  </div>
                </RadioGroup>
              </TableCell>

              <TableCell>
                <RadioGroup defaultValue="CERTIFICATE-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="CERTIFICATE-one"
                      id="CERTIFICATE-one"
                    />
                    <Label htmlFor="CERTIFICATE-one">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="CERTIFICATE-two"
                      id="CERTIFICATE-two"
                    />
                    <Label htmlFor="CERTIFICATE-two">No</Label>
                  </div>
                </RadioGroup>
              </TableCell>

              <TableCell>
                <RadioGroup defaultValue="REGISTRATION-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="REGISTRATION-one"
                      id="REGISTRATION-one"
                    />
                    <Label htmlFor="REGISTRATION-one">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="REGISTRATION-two"
                      id="REGISTRATION-two"
                    />
                    <Label htmlFor="REGISTRATION-two">No</Label>
                  </div>
                </RadioGroup>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="text-end mt-10 border-t border-stone-300 pt-4">
          <Button className="px-10 text-base">Submit</Button>
        </div>
      </div>
    </div>
  );
}
