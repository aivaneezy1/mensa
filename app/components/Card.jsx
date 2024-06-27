import React from "react";
import Image from "next/image";

const Card = (props) => {
  const hasPersonalData =
    props.name ||
    props.email ||
    props.phone ||
    props.address ||
    props.dateBirth ||
    props.placeBirth ||
    props.genere ||
    props.nationality ||
    props.civilStatus ||
    props.license ||
    props.website ||
    props.linkin;

  const datiPersonali = (image, dati) => {
    return (
      <div className="flex flex-row gap-5 items-center  w-sm ">
        <div className="w-6 h-6 flex-shrink-0">{image}</div>
        <div className=" flex-grow break-words break-all  whitespace-normal w-sm">
          {dati}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 ">
      <div
        className={` p-5  ${
          hasPersonalData ? "border-r border-gray-500 border-solid" : ""
        } bg-gray-100 `}
      >
        <header>
          {hasPersonalData ? (
            <h2 className="text-blue-500 border-b border-gray-500 border-solid text-2xl mb-5 whitespace-nowrap text-center">
              Dati Personali
            </h2>
          ) : (
            ""
          )}
          {props.name ? (
            <div className="whitespace-normal">
              {datiPersonali(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>,
                props.name
              )}
            </div>
          ) : (
            ""
          )}
          {props.email ? (
            <div className="">
              {datiPersonali(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>,
                props.email
              )}
            </div>
          ) : (
            ""
          )}{" "}
          <div>
            {props.phone
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>,
                  props.phone
                )
              : " "}
          </div>
          <div>
            {props.address
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M10 12h4v4h-4z" />
                  </svg>,
                  props.address
                )
              : " "}
          </div>
          <div>
            {props.dateBirth
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                    <path d="M16 3v4" />
                    <path d="M8 3v4" />
                    <path d="M4 11h16" />
                    <path d="M7 14h.013" />
                    <path d="M10.01 14h.005" />
                    <path d="M13.01 14h.005" />
                    <path d="M16.015 14h.005" />
                    <path d="M13.015 17h.005" />
                    <path d="M7.01 17h.005" />
                    <path d="M10.01 17h.005" />
                  </svg>,
                  props.dateBirth
                )
              : " "}
          </div>
          <div>
            {props.placeBirth
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>,
                  props.placeBirth
                )
              : ""}
          </div>
          <div>
            {props.genere
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 11m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M19 3l-5 5" />
                    <path d="M15 3h4v4" />
                    <path d="M11 16v6" />
                    <path d="M8 19h6" />
                  </svg>,
                  props.genere
                )
              : ""}
          </div>
          <div>
            {props.nationality
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
                    <path d="M5 21v-7" />
                  </svg>,
                  props.nationality
                )
              : ""}
          </div>
          <div>
            {props.civilStatus
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>,
                  props.civilStatus
                )
              : ""}
          </div>
          {/*Options input field */}
          <div>
            {props.license
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M16 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M5 9l2 -4h7.438a2 2 0 0 1 1.94 1.515l.622 2.485h3a2 2 0 0 1 2 2v3" />
                    <path d="M10 9v-4" />
                    <path d="M2 7v4" />
                    <path d="M22.001 14.001a4.992 4.992 0 0 0 -4.001 -2.001a4.992 4.992 0 0 0 -4 2h-3a4.998 4.998 0 0 0 -8.003 .003" />
                    <path d="M5 12v-3h13" />
                  </svg>,
                  props.license
                )
              : ""}
          </div>
          <div>
            {props.website
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>,
                  props.website
                )
              : ""}
          </div>
          <div>
            {props.linkin
              ? datiPersonali(
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user w-full h-full mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#00abfb"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>,
                  props.linkin
                )
              : ""}
          </div>
          {/*Competenze */}
          <div className="flex justify-center  flex-col max-w-lg">
            {props.compFieldList.length > 0 && (
              <h2 className="text-blue-500 text-2xl m-5 whitespace-normal w-auto border-b border-gray-500 border-solid text-center">
                Competenza
              </h2>
            )}
            {props.compDati ? (
              <div>
                <h2 className="text-1xl font-semibold">Competenza</h2>
                <h2>{props.compDati}</h2>
              </div>
            ) : (
              props.compFieldList.map((post, index) => (
                <>
                  <div
                    className="max-w-sm break-words whitespace-normal mt-2"
                    key={index}
                  >
                    <h2 className=" text-1xl">{post.competenza}</h2>
                    <h2 className="text-gray-500">{post.livello}</h2>
                  </div>
                </>
              ))
            )}
          </div>
          {/*Language */}
          <div className="flex justify-center  flex-col">
            {props.langFieldList.length > 0 && (
              <h2 className="text-blue-500 text-2xl m-5 whitespace-normal w-auto border-b border-gray-500 border-solid text-center">
                Languages
              </h2>
            )}
            {props.langDati ? (
              <div>
                <h2 className="text-1xl font-semibold">Languages</h2>
                <h2>{props.langDati}</h2>
              </div>
            ) : (
              props.langFieldList.map((post, index) => (
                <>
                  <div
                    key={index}
                    className="max-w-sm break-words whitespace-normal mt-2"
                  >
                    <h2 className=" text-1xl">{post.competenza}</h2>
                    <h2 className="text-gray-500">{post.livello}</h2>
                  </div>
                </>
              ))
            )}
          </div>
        </header>
      </div>

      <div className="p-5">
        {/*Profilo */}
        <div>
          <section>
            <h2 className="text-blue-500 border-b border-gray-500 border-solid text-2xl mb-5 text-left">
              Profilo
            </h2>
            <p className=" break-words break-all  whitespace-normal">
              Sono un professionista con oltre 10 anni di esperienza nel settore
              [specifica il settore, ad esempio: IT, marketing, finanza],
              specializzato in [specifica la tua specializzazione, ad esempio:
              sviluppo software, gestione progetti, analisi finanziaria]. Ho una
              comprovata esperienza nel migliorare l'efficienza operativa e nel
              guidare team verso il raggiungimento degli obiettivi aziendali. Mi
              distingue la mia capacità di risolvere problemi complessi, di
              comunicare efficacemente con stakeholder a tutti i livelli e di
              implementare soluzioni innovative che migliorano i risultati
              aziendali. Sono motivato da nuove sfide e sono sempre alla ricerca
              di opportunità per crescere professionalmente e contribuire al
              successo dell'organizzazione.
            </p>
          </section>
        </div>

        {/*Formazione */}
        <div className="my-5">
          <section>
            <h2 className="text-blue-500 border-b border-gray-500 border-solid text-2xl mb-5  text-left">
              Formazione
            </h2>

            <div className="flex justify-between gap-5">
              <div className="flex flex-col">
                <h2 className="font-medium whitespace-nowrap">
                  Senior Software Engineer
                </h2>
                <p className="text-gray-500 whitespace-nowrap">
                  Tech Solutions S.p.A., Roma
                </p>
                <ul className="list-disc list-inside whitespace-normal">
                  <li>
                    Progettazione e sviluppo di soluzioni software avanzate per
                    clienti nel settore industriale.
                  </li>
                  <li>
                    Coordinamento di un team di 10 sviluppatori, garantendo il
                    rispetto delle scadenze e degli standard di qualità.
                  </li>
                  <li>
                    Implementazione di algoritmi di machine learning per
                    l'analisi predittiva dei dati.
                  </li>
                </ul>
              </div>
              <p className="text-blue-500 whitespace-nowrap">
                2010 set - 2012 set
              </p>
            </div>

              <div className="flex justify-between gap-5">
              <div className="flex flex-col">
                <h2 className="font-medium whitespace-nowrap">
                  Senior Software Engineer
                </h2>
                <p className="text-gray-500 whitespace-nowrap">
                  Tech Solutions S.p.A., Roma
                </p>
                <ul className="list-disc list-inside whitespace-normal">
                  <li>
                    Progettazione e sviluppo di soluzioni software avanzate per
                    clienti nel settore industriale.
                  </li>
                  <li>
                    Coordinamento di un team di 10 sviluppatori, garantendo il
                    rispetto delle scadenze e degli standard di qualità.
                  </li>
                  <li>
                    Implementazione di algoritmi di machine learning per
                    l'analisi predittiva dei dati.
                  </li>
                </ul>
              </div>
              <p className="text-blue-500 whitespace-nowrap">
                2010 set - 2012 set
              </p>
            </div>
          </section>
        </div>

        {/*Experience */}
        <div className="my-5">
          <section>
            <h2 className="text-blue-500 border-b border-gray-500 border-solid text-2xl mb-5 text-left">
              Experience
            </h2>
            <div className="flex justify-between gap-5">
              <div className="flex flex-col">
                <h2 className="font-medium whitespace-nowrap">
                  Senior Software Engineer
                </h2>
                <p className="text-gray-500 whitespace-nowrap">
                  Tech Solutions S.p.A., Roma
                </p>
                <ul className="list-disc list-inside whitespace-normal">
                  <li>
                    Progettazione e sviluppo di soluzioni software avanzate per
                    clienti nel settore industriale.
                  </li>
                  <li>
                    Coordinamento di un team di 10 sviluppatori, garantendo il
                    rispetto delle scadenze e degli standard di qualità.
                  </li>
                  <li>
                    Implementazione di algoritmi di machine learning per
                    l'analisi predittiva dei dati.
                  </li>
                </ul>
              </div>
              <p className="text-blue-500 whitespace-nowrap">
                2010 set - 2012 set
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
