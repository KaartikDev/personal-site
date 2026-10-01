"use client";

import { useState } from "react";
import Image from "next/image";
import { config } from "@/config/config";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  const { experience } = config;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (ci: number, ri: number) => {
    const key = `${ci}-${ri}`;
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section>
      <SectionHeading>Experiences</SectionHeading>
      <div className="space-y-10">
        {experience.map((company, ci) => (
          <div key={ci}>
            <div className="flex items-center gap-2.5">
              {company.photo && (
                <Image
                  src={company.photo}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-cover"
                />
              )}
              <h3 className="font-display text-xl font-medium text-ink dark:text-foam">
                {company.company}
              </h3>
            </div>

            <div className="mt-4 space-y-6 border-l border-tide/20 pl-5">
              {company.roles.map((role, ri) => {
                const hasDetails =
                  (role.bullets?.length ?? 0) > 0 || (role.tech?.length ?? 0) > 0;
                const open = !!expanded[`${ci}-${ri}`];

                return (
                  <div key={ri}>
                    <button
                      type="button"
                      onClick={() => hasDetails && toggle(ci, ri)}
                      className={`block w-full text-left ${hasDetails ? "cursor-pointer" : "cursor-default"}`}
                    >
                      <p className="font-medium text-ink dark:text-foam">{role.title}</p>
                      <p className="mt-1 font-mono text-xs tracking-wide text-slate dark:text-mist">
                        {role.location} · {role.type} · {role.startDate}–{role.endDate}
                        {hasDetails && (
                          <span className="ml-2 text-tide">{open ? "[–]" : "[+]"}</span>
                        )}
                      </p>
                    </button>

                    {hasDetails && (
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div
                          className={`overflow-hidden transition-opacity duration-200 ${
                            open ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="pt-3">
                            {role.bullets && role.bullets.length > 0 && (
                              <ul className="mb-3 space-y-1.5">
                                {role.bullets.map((bullet, bi) => (
                                  <li
                                    key={bi}
                                    className="text-sm leading-6 text-slate dark:text-mist"
                                  >
                                    – {bullet}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {role.tech && role.tech.length > 0 && (
                              <p className="font-mono text-xs text-tide">
                                {role.tech.join("  /  ")}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
