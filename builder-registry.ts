"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Alert } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";
import Counter from "./components/Counter/Counter";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(withChildren(Alert), {
  name: "Alert",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Calendar), {
  name: "Calendar",
  inputs: [
    {
      name: "captionLayout",
      type: "string",
      enum: ["buttons", "dropdown", "dropdown-buttons"],
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "classNames",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<StyledElement<string>>",
      },
    },
    {
      name: "components",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CustomComponents",
      },
    },
    {
      name: "defaultMonth",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Date",
      },
    },
    {
      name: "disabled",
      type: "string",
      meta: {
        ts: "Matcher | Matcher[]",
      },
    },
    {
      name: "disableNavigation",
      type: "boolean",
    },
    {
      name: "firstWeekContainsDate",
      type: "string",
      meta: {
        ts: "1 | 4",
      },
    },
    {
      name: "fixedWeeks",
      type: "boolean",
    },
    {
      name: "footer",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "formatters",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<Formatters>",
      },
    },
    {
      name: "fromDate",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Date",
      },
    },
    {
      name: "fromMonth",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Date",
      },
    },
    {
      name: "fromYear",
      type: "number",
    },
    {
      name: "hidden",
      type: "string",
      meta: {
        ts: "Matcher | Matcher[]",
      },
    },
    {
      name: "hideHead",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "initialFocus",
      type: "boolean",
    },
    {
      name: "ISOWeek",
      type: "boolean",
    },
    {
      name: "labels",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<Labels>",
      },
    },
    {
      name: "locale",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Locale",
      },
    },
    {
      name: "mode",
      type: "string",
      enum: ["default"],
    },
    {
      name: "modifiers",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "DayModifiers",
      },
    },
    {
      name: "modifiersClassNames",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "ModifiersClassNames",
      },
    },
    {
      name: "modifiersStyles",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "ModifiersStyles",
      },
    },
    {
      name: "month",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Date",
      },
    },
    {
      name: "numberOfMonths",
      type: "number",
    },
    {
      name: "pagedNavigation",
      type: "boolean",
    },
    {
      name: "reverseMonths",
      type: "boolean",
    },
    {
      name: "selected",
      type: "string",
      meta: {
        ts: "Matcher | Matcher[]",
      },
    },
    {
      name: "showOutsideDays",
      type: "boolean",
    },
    {
      name: "showWeekNumber",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "styles",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<Omit<StyledElement<CSSProperties>, InternalModifiersElement>>",
      },
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "toDate",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Date",
      },
    },
    {
      name: "today",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Date",
      },
    },
    {
      name: "toMonth",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Date",
      },
    },
    {
      name: "toYear",
      type: "number",
    },
    {
      name: "weekStartsOn",
      type: "string",
      meta: {
        ts: "0 | 1 | 2 | 3 | 4 | 5 | 6",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Input), {
  name: "Input",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Label), {
  name: "Label",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});
