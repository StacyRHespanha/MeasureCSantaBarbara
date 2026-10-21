// Data for the carry-over Sankey. Replace values with City figures as they become available;
// set certainty to 'reported' when a value comes from a City document.
window.SANKEY_DATA = {
 "title": "Where is the $46.6M of unspent Measure C money, and what is it for?",
 "asOf": "2026-07-01",
 "units": "$ millions",
 "notes": [
  "My estimates from public documents, pending City figures.",
  "Unknown flows (marked ?) are drawn at a fixed thin width and are not counted in totals.",
  "In the fund, not committed to any project: $0 (audited, June 30, 2025); not drawn."
 ],
 "certaintyLevels": {
  "reported": "Printed in a City document",
  "derived": "Sum of figures printed in City documents",
  "estimated": "My best guess from public documents (range shown in tooltip)",
  "placeholder": "No basis for a size; shown so the category is visible"
 },
 "nodes": [
  {
   "id": "s1_collected",
   "label": "Measure C taxes already collected (in the fund)",
   "stage": 1,
   "certainty": "estimated",
   "shortLabel": "Already collected (in the fund)",
   "displayValue": 28.68
  },
  {
   "id": "s1_future",
   "label": "Measure C taxes not yet collected (future years)",
   "stage": 1,
   "certainty": "estimated",
   "shortLabel": "Not yet collected (future years' taxes)",
   "displayValue": 17.951
  },
  {
   "id": "g_police",
   "label": "New police station",
   "priority": "#1",
   "stage": 2,
   "certainty": "derived",
   "shortLabel": "Police station"
  },
  {
   "id": "g_streets",
   "label": "Streets, sidewalks, bridges, drainage",
   "priority": "#2–3",
   "stage": 2,
   "certainty": "derived",
   "shortLabel": "Streets, sidewalks, drainage"
  },
  {
   "id": "g_parks",
   "label": "Parks and library",
   "priority": "#4",
   "stage": 2,
   "certainty": "derived",
   "shortLabel": "Parks and library"
  },
  {
   "id": "g_downtown",
   "label": "Downtown business district (State Street plans, downtown parking)",
   "priority": "#5",
   "stage": 2,
   "certainty": "derived",
   "shortLabel": "Downtown (State Street plans, parking)"
  },
  {
   "id": "g_buildings",
   "label": "City buildings",
   "priority": "#6",
   "stage": 2,
   "certainty": "derived",
   "shortLabel": "City buildings"
  },
  {
   "id": "g_homeless",
   "label": "Homelessness (Casa Cacique, Faro)",
   "priority": "#7",
   "stage": 2,
   "certainty": "derived",
   "shortLabel": "Homelessness"
  },
  {
   "id": "g_equip",
   "label": "Fire and police equipment, radio system, EV charging",
   "priority": "—",
   "stage": 2,
   "certainty": "derived",
   "shortLabel": "Equipment and radio system"
  },
  {
   "id": "st_contract",
   "label": "Contract signed, not yet paid",
   "stage": 3,
   "certainty": "derived",
   "shortLabel": "Contract signed, not yet paid"
  },
  {
   "id": "st_spend",
   "label": "No contract yet: to be spent on the project",
   "stage": 3,
   "certainty": "estimated",
   "shortLabel": "No contract yet: to be spent on the project"
  },
  {
   "id": "st_overrun",
   "label": "Held for cost overruns?",
   "stage": 3,
   "certainty": "placeholder",
   "shortLabel": "Held for cost overruns?"
  },
  {
   "id": "st_bond",
   "label": "Held for upcoming bond payments?",
   "stage": 3,
   "certainty": "estimated",
   "shortLabel": "Held for upcoming bond payments?"
  },
  {
   "id": "st_payoff",
   "label": "Held to pay off bonds early (allowed from 2034)?",
   "stage": 3,
   "certainty": "placeholder",
   "shortLabel": "Held to pay off bonds early (from 2034)?"
  },
  {
   "id": "st_freed",
   "label": "Ready to be freed up for other projects?",
   "stage": 3,
   "certainty": "estimated",
   "shortLabel": "Ready to be freed up for other projects?"
  }
 ],
 "links": [
  {
   "source": "s1_collected",
   "target": "g_police",
   "value": 10.192,
   "low": 9.836,
   "high": 10.547,
   "certainty": "estimated",
   "group": "g_police",
   "basis": "Pro rata share of the estimated collected amount ($28.7M of $46.6M, 61.5%). Collected amount = audited June 30, 2025 Measure C fund balance ($27.94M) + FY2026 revenue ($32.26M) − FY2026 spending ($31.52M).",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_future",
   "target": "g_police",
   "value": 6.379,
   "low": 6.023,
   "high": 6.734,
   "certainty": "estimated",
   "group": "g_police",
   "basis": "Pro rata share of the estimated not-yet-collected amount ($18.0M of $46.6M, 38.5%): carry-over minus estimated fund balance.",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_police",
   "target": "st_contract",
   "value": 0.004,
   "low": null,
   "high": null,
   "certainty": "reported",
   "group": "g_police",
   "basis": "Encumbered (under contract) at June 30, 2026.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_collected",
   "target": "g_streets",
   "value": 7.203,
   "low": 6.951,
   "high": 7.454,
   "certainty": "estimated",
   "group": "g_streets",
   "basis": "Pro rata share of the estimated collected amount ($28.7M of $46.6M, 61.5%). Collected amount = audited June 30, 2025 Measure C fund balance ($27.94M) + FY2026 revenue ($32.26M) − FY2026 spending ($31.52M).",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_future",
   "target": "g_streets",
   "value": 4.508,
   "low": 4.257,
   "high": 4.759,
   "certainty": "estimated",
   "group": "g_streets",
   "basis": "Pro rata share of the estimated not-yet-collected amount ($18.0M of $46.6M, 38.5%): carry-over minus estimated fund balance.",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_streets",
   "target": "st_contract",
   "value": 0.151,
   "low": null,
   "high": null,
   "certainty": "reported",
   "group": "g_streets",
   "basis": "Encumbered (under contract) at June 30, 2026.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_collected",
   "target": "g_parks",
   "value": 5.213,
   "low": 5.031,
   "high": 5.395,
   "certainty": "estimated",
   "group": "g_parks",
   "basis": "Pro rata share of the estimated collected amount ($28.7M of $46.6M, 61.5%). Collected amount = audited June 30, 2025 Measure C fund balance ($27.94M) + FY2026 revenue ($32.26M) − FY2026 spending ($31.52M).",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_future",
   "target": "g_parks",
   "value": 3.262,
   "low": 3.081,
   "high": 3.444,
   "certainty": "estimated",
   "group": "g_parks",
   "basis": "Pro rata share of the estimated not-yet-collected amount ($18.0M of $46.6M, 38.5%): carry-over minus estimated fund balance.",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_parks",
   "target": "st_contract",
   "value": 0.371,
   "low": null,
   "high": null,
   "certainty": "reported",
   "group": "g_parks",
   "basis": "Encumbered (under contract) at June 30, 2026.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_collected",
   "target": "g_downtown",
   "value": 0.469,
   "low": 0.452,
   "high": 0.485,
   "certainty": "estimated",
   "group": "g_downtown",
   "basis": "Pro rata share of the estimated collected amount ($28.7M of $46.6M, 61.5%). Collected amount = audited June 30, 2025 Measure C fund balance ($27.94M) + FY2026 revenue ($32.26M) − FY2026 spending ($31.52M).",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_future",
   "target": "g_downtown",
   "value": 0.293,
   "low": 0.277,
   "high": 0.31,
   "certainty": "estimated",
   "group": "g_downtown",
   "basis": "Pro rata share of the estimated not-yet-collected amount ($18.0M of $46.6M, 38.5%): carry-over minus estimated fund balance.",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_downtown",
   "target": "st_contract",
   "value": 0.017,
   "low": null,
   "high": null,
   "certainty": "reported",
   "group": "g_downtown",
   "basis": "Encumbered (under contract) at June 30, 2026.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_collected",
   "target": "g_buildings",
   "value": 1.602,
   "low": 1.546,
   "high": 1.658,
   "certainty": "estimated",
   "group": "g_buildings",
   "basis": "Pro rata share of the estimated collected amount ($28.7M of $46.6M, 61.5%). Collected amount = audited June 30, 2025 Measure C fund balance ($27.94M) + FY2026 revenue ($32.26M) − FY2026 spending ($31.52M).",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_future",
   "target": "g_buildings",
   "value": 1.003,
   "low": 0.947,
   "high": 1.058,
   "certainty": "estimated",
   "group": "g_buildings",
   "basis": "Pro rata share of the estimated not-yet-collected amount ($18.0M of $46.6M, 38.5%): carry-over minus estimated fund balance.",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_buildings",
   "target": "st_contract",
   "value": 0,
   "low": null,
   "high": null,
   "certainty": "reported",
   "group": "g_buildings",
   "basis": "Encumbered (under contract) at June 30, 2026.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_collected",
   "target": "g_homeless",
   "value": 0.799,
   "low": 0.771,
   "high": 0.826,
   "certainty": "estimated",
   "group": "g_homeless",
   "basis": "Pro rata share of the estimated collected amount ($28.7M of $46.6M, 61.5%). Collected amount = audited June 30, 2025 Measure C fund balance ($27.94M) + FY2026 revenue ($32.26M) − FY2026 spending ($31.52M).",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_future",
   "target": "g_homeless",
   "value": 0.5,
   "low": 0.472,
   "high": 0.528,
   "certainty": "estimated",
   "group": "g_homeless",
   "basis": "Pro rata share of the estimated not-yet-collected amount ($18.0M of $46.6M, 38.5%): carry-over minus estimated fund balance.",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_homeless",
   "target": "st_contract",
   "value": 0.001,
   "low": null,
   "high": null,
   "certainty": "reported",
   "group": "g_homeless",
   "basis": "Encumbered (under contract) at June 30, 2026.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_collected",
   "target": "g_equip",
   "value": 3.203,
   "low": 3.091,
   "high": 3.314,
   "certainty": "estimated",
   "group": "g_equip",
   "basis": "Pro rata share of the estimated collected amount ($28.7M of $46.6M, 61.5%). Collected amount = audited June 30, 2025 Measure C fund balance ($27.94M) + FY2026 revenue ($32.26M) − FY2026 spending ($31.52M).",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "s1_future",
   "target": "g_equip",
   "value": 2.004,
   "low": 1.893,
   "high": 2.116,
   "certainty": "estimated",
   "group": "g_equip",
   "basis": "Pro rata share of the estimated not-yet-collected amount ($18.0M of $46.6M, 38.5%): carry-over minus estimated fund balance.",
   "ref": "FY2025 ACFR p. 42; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_equip",
   "target": "st_contract",
   "value": 1.336,
   "low": null,
   "high": null,
   "certainty": "reported",
   "group": "g_equip",
   "basis": "Encumbered (under contract) at June 30, 2026.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_police",
   "target": "st_bond",
   "value": 5.163,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_police",
   "basis": "Amount documented; purpose assumed. The City budgeted $5,162,550 of Measure C for police station 'debt payment' in FY2026 (CIP p. 149). That payment was covered by borrowed funds (capitalized interest through Nov 15, 2027), so this money went unused. Whether the City is holding it for future bond payments or will free it up is not stated.",
   "ref": "FY2026–30 CIP p. 149; Official Statement pp. 8, 20"
  },
  {
   "source": "g_police",
   "target": "st_overrun",
   "value": 0.01,
   "low": null,
   "high": null,
   "certainty": "placeholder",
   "group": "g_police",
   "basis": "Unknown. Context: soil contamination used $4.7M of the project contingency, and news coverage reported the City planned to replenish it from Measure C (KEYT, Oct 21, 2025). No document shows whether or how much of this line is held for that. Shown at a token size; not counted in totals.",
   "ref": "KEYT and Independent, Oct 21, 2025"
  },
  {
   "source": "g_police",
   "target": "st_payoff",
   "value": 0.01,
   "low": null,
   "high": null,
   "certainty": "placeholder",
   "group": "g_police",
   "basis": "Unknown. Shown at a token size so the category is visible; not counted in totals.",
   "ref": "—"
  },
  {
   "source": "g_police",
   "target": "st_freed",
   "value": 0.01,
   "low": null,
   "high": null,
   "certainty": "placeholder",
   "group": "g_police",
   "basis": "Unknown (the $5.16M bond-payment amount could belong here instead). Shown at a token size; not counted in totals.",
   "ref": "—"
  },
  {
   "source": "g_police",
   "target": "st_spend",
   "value": 11.404,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_police",
   "basis": "Remainder after the $5.16M documented above. Includes the rest of the FY2026 budget ($8.80M; the CIP says 'additional funds are needed for City furnished items', e.g. furniture, equipment, technology) and earlier money carried in ($2.61M). Some of it may be held for cost overruns (see that category).",
   "ref": "FY2026–30 CIP p. 149; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_streets",
   "target": "st_freed",
   "value": 0.55,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_streets",
   "basis": "Documented items: City listed as Q3 FY2026 decreases (Apr 9, 2026 budget work session, slide 33): Gibraltar & Skofield $0.25M, De La Guerra Plaza $0.30M. Both still show as unspent at June 30, 2026. Other amounts in this group may also be freed up; not estimated.",
   "ref": "Apr 9, 2026 budget work session, slide 33; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_streets",
   "target": "st_spend",
   "value": 11.009,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_streets",
   "basis": "Remainder of the no-contract balance after the documented freed-up items. Some of it may be freed up or held for overruns; cost-overrun contingency for these projects normally sits inside their own budgets.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_parks",
   "target": "st_freed",
   "value": 0.01,
   "low": null,
   "high": null,
   "certainty": "placeholder",
   "group": "g_parks",
   "basis": "Unknown. No documented decreases for this group. Shown at a token size; not counted in totals.",
   "ref": "—"
  },
  {
   "source": "g_parks",
   "target": "st_spend",
   "value": 8.105,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_parks",
   "basis": "All of the no-contract balance, pending City figures. Some of it may be freed up or held for overruns.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_downtown",
   "target": "st_freed",
   "value": 0.01,
   "low": null,
   "high": null,
   "certainty": "placeholder",
   "group": "g_downtown",
   "basis": "Unknown. No documented decreases for this group. Shown at a token size; not counted in totals.",
   "ref": "—"
  },
  {
   "source": "g_downtown",
   "target": "st_spend",
   "value": 0.745,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_downtown",
   "basis": "All of the no-contract balance, pending City figures. Some of it may be freed up or held for overruns.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_buildings",
   "target": "st_freed",
   "value": 0.562,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_buildings",
   "basis": "Documented items: City listed as Q3 FY2026 decreases (Apr 9, 2026 budget work session, slide 33): City Hall minor renewal $0.46M, City Hall plumbing $0.10M, facilities master plan remnant. All still show as unspent at June 30, 2026. Other amounts in this group may also be freed up; not estimated.",
   "ref": "Apr 9, 2026 budget work session, slide 33; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_buildings",
   "target": "st_spend",
   "value": 2.042,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_buildings",
   "basis": "Remainder of the no-contract balance after the documented freed-up items. Some of it may be freed up or held for overruns; cost-overrun contingency for these projects normally sits inside their own budgets.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_homeless",
   "target": "st_freed",
   "value": 0.007,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_homeless",
   "basis": "Documented items: City listed as a Q3 FY2026 decrease (Apr 9, 2026 budget work session, slide 33): Homeless Response remnant $0.0065M. Other amounts in this group may also be freed up; not estimated.",
   "ref": "Apr 9, 2026 budget work session, slide 33; FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_homeless",
   "target": "st_spend",
   "value": 1.291,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_homeless",
   "basis": "Remainder of the no-contract balance after the documented freed-up items. Some of it may be freed up or held for overruns; cost-overrun contingency for these projects normally sits inside their own budgets.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  },
  {
   "source": "g_equip",
   "target": "st_freed",
   "value": 0.01,
   "low": null,
   "high": null,
   "certainty": "placeholder",
   "group": "g_equip",
   "basis": "Unknown. No documented decreases for this group. Shown at a token size; not counted in totals.",
   "ref": "—"
  },
  {
   "source": "g_equip",
   "target": "st_spend",
   "value": 3.871,
   "low": null,
   "high": null,
   "certainty": "estimated",
   "group": "g_equip",
   "basis": "All of the no-contract balance, pending City figures. Some of it may be freed up or held for overruns.",
   "ref": "FY2026 Measure C Accountability Report, pp. 8–10"
  }
 ],
 "estimateNotes": [
  "Already collected / not yet collected: the audited Measure C fund balance at June 30, 2025 ($27.94M, FY2025 ACFR p. 42), plus FY2026 revenue ($32.26M), minus FY2026 spending ($31.52M), gives about $28.7M in the fund. The rest of the $46.6M, about $18.0M, would come from future years' taxes. Each project group's flows are split in the same proportion (61.5% / 38.5%).",
  "Held for upcoming bond payments ($5.16M): the amount is documented and the purpose is assumed. The City budgeted $5,162,550 of Measure C for police station 'debt payment' in FY2026 (CIP p. 149), but borrowed funds paid that interest, so the money went unused. Whether it is being held for future payments or will be freed up is not stated.",
  "Ready to be freed up ($1.12M): only items the City itself listed as mid-year decreases in April 2026 that still show as unspent at year end (streets $0.55M, City buildings $0.56M, homelessness $0.01M). Amounts for other groups are unknown (?).",
  "To be spent on the project: what remains of each group's no-contract balance after the items above. It may include amounts that will be freed up or held for overruns.",
  "Held for cost overruns: unknown (?). The $4.7M soil cleanup at the police station site is context, not a measure of what is held."
 ]
};
