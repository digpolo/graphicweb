'use client'
import React, { useState, FormEvent } from "react"
import InputSelect from "./input-select-country"
import CustomSelect from "./input-select"

interface FormDetails {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
    country: string
    company: string
    companySize: string
    jobTitle: string
    industry: string
    check: string
}

const ContactForm: React.FC = () => {
    const formInitialDetails: FormDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        company: "",
        companySize: "",
        jobTitle: "",
        industry: "",
        message: "",
        check: ''
    };
    const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
    const [buttonText, setButtonText] = useState<string>("Enviar");
    const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setButtonText("Enviando datos...");
        let response = await fetch("http://localhost:5000/drhernanjojoa-c6928/us-central1/app/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        }); 0
        setButtonText("Datos enviados");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Ya tenemos tús datos, nos comunicaremos pronto" });
        } else {
            setStatus({ success: false, message: "Algo salió mal, intentalo más tarde", });
        }
    };
    var callback = function () {
        console.log('Done!!!!');
    };

    const [selectedOption, setSelectedOption] = useState<string>('Opción 1');

    const handleSelectChange = (value: string) => {
        setSelectedOption(value);
    };

    const company = [
        { value: '1 - 50', label: '1 - 50' },
        { value: '51 - 100', label: '51 - 100' },
        { value: '101 - 500', label: '101 - 500' },
        { value: '501 - 1,000', label: '501 - 1,000' },
        { value: '1,001 - 5,000', label: '1,001 - 5,000' },
        { value: '5,001 - 10,000', label: '5,001 - 10,000' },
        { value: '10,000 - 20,000', label: '10,000 - 20,000' },
        { value: '+ 20,000', label: '+ 20,000' }
    ]

    const industry = [
        { value: 'Publicidad / Marketing', label: 'Publicidad / Marketing' },
        { value: 'Agricultura', label: 'Agricultura' },
        { value: 'Aerolíneas, Aeropuertos & Servicios aéreos', label: 'Aerolíneas, Aeropuertos & Servicios aéreos' },
        { value: 'Servicios Bancarios', label: 'Servicios Bancarios' },
        { value: 'Químicos', label: 'Químicos' },
        { value: 'Colegios & Universidades', label: 'Colegios & Universidades' },
        { value: 'Software de computador', label: 'Software de computador' },
        { value: 'Educación', label: 'Educación' },
        { value: 'Servicios de Electricidad, aceite & gas', label: 'Servicios de Electricidad, aceite & gas' },
        { value: 'Entretenimiento', label: 'Entretenimiento' },
        { value: 'Comidas y Bebidas', label: 'Comidas y Bebidas' },
        { value: 'Gubernamental', label: 'Gubernamental' },
        { value: 'Cuidado de la salud', label: 'Cuidado de la salud' },
        { value: 'Recursos humanos', label: 'Recursos humanos' },
        { value: 'Servicios legales', label: 'Servicios legales' },
        { value: 'Logística & transporte', label: 'Logística & transporte' },
        { value: 'Consultoría', label: 'Consultoría' },
        { value: 'Manufacturación', label: 'Manufacturación' },
        { value: 'Minerales y minería', label: 'Minerales y minería' },
        { value: 'Periódicos y revistas', label: 'Periódicos y revistas' },
        { value: 'Sin fines de lucro', label: 'Sin fines de lucro' },
        { value: 'Farmacéuticos', label: 'Farmacéuticos' },
        { value: 'Servicios profesionales', label: 'Servicios profesionales' },
        { value: 'Vienes raíces', label: 'Vienes raíces' },
        { value: 'Investigación y desarrollo ', label: 'Investigación y desarrollo' },
        { value: 'Minorista', label: 'Minorista' },
        { value: 'Servicios', label: 'Servicios' },
        { value: 'Telecomunicaciones y servicios de comunicación', label: 'Telecomunicaciones y servicios de comunicación' },
        { value: 'Viajes y ocio', label: 'Viajes y ocio' },
        { value: 'Venta al por mayor', label: 'Venta al por mayor' },

    ]
    const industryOptions = [
        'Publicidad / Marketing',
        'Agricultura',
        'Aerolíneas, Aeropuertos & Servicios aéreos',
        'Servicios Bancarios',
        'Químicos',
        'Colegios & Universidades',
        'Software de computador',
        'Educación',
        'Servicios de Electricidad, aceite & gas',
        'Entretenimiento',
        'Comidas y Bebidas',
        'Gubernamental',
        'Cuidado de la salud',
        'Recursos humanos',
        'Servicios legales',
        'Logística & transporte',
        'Consultoría',
        'Manufacturación',
        'Minerales y minería',
        'Periódicos y revistas',
        'Sin fines de lucro',
        'Farmacéuticos',
        'Servicios profesionales',
        'Vienes raíces',
        'Investigación y desarrollo',
        'Minorista',
        'Servicios',
        'Telecomunicaciones y servicios de comunicación',
        'Viajes y ocio',
        'Venta al por mayor',
    ]



    return (
        <div className="flex flex-col text-black">
            <h2 className=' font-semibold text-[30px] text-white'>Cuéntanos cómo podemos ayudarte</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="row">
                    <label
                        htmlFor={"name"}
                        className={`block text-sm font-light`}
                    >
                        Mensaje
                    </label>
                    <textarea
                        rows={3}
                        value={formDetails.message}

                        onChange={(e) => onFormUpdate("message", e.target.value)}
                        className={`w-full rounded-[12px] border-none  bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 `}
                    ></textarea>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="row">
                        <label
                            htmlFor={"name"}
                            className={`block text-sm font-light`}
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            value={formDetails.firstName}

                            onChange={(e) => onFormUpdate("firstName", e.target.value)}
                            className={`w-full rounded-xl bg-[#f2f2f2] border-none font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 `}
                        />
                    </div>
                    <div className="row">
                        <label
                            htmlFor={"name"}
                            className={`block text-sm font-light`}
                        >
                            Apellido
                        </label>
                        <input
                            type="text"
                            value={formDetails.lastName}

                            onChange={(e) => onFormUpdate("lastName", e.target.value)}
                            className={`w-full rounded-xl bg-[#f2f2f2] border-none font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 `}
                        />
                    </div>
                </div>
                <div className="row">
                    <label
                        htmlFor={"name"}
                        className={`block text-sm font-light`}
                    >
                        E-Mail
                    </label>
                    <input
                        type="email"
                        value={formDetails.email}
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        className={`w-full rounded-xl border-none  bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2  py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="row">
                        <label
                            htmlFor={"name"}
                            className={`block text-sm font-light`}
                        >
                            Telefono
                        </label>
                        <input
                            type="tel"
                            value={formDetails.phone}
                            onChange={(e) => onFormUpdate("phone", e.target.value)}
                            className={`w-full rounded-xl border-none  bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2  py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    {/* <InputSelect
                        label="Pais"
                        name="country"
                        value={selectedValue}
                        onChange={(e) => onFormUpdate("country", e.target.value)}
                    /> */}
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="row">
                        <label
                            htmlFor={"name"}
                            className={`block text-sm font-light`}
                        >
                            Empresa
                        </label>
                        <input
                            type="text"
                            value={formDetails.company}
                            onChange={(e) => onFormUpdate("company", e.target.value)}
                            className={`w-full rounded-xl border-none  bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2  py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    {/* <InputSelect
                        label="Tamaño de la compañía"
                        name="companySize"
                        value={selectedValue}
                        onChange={(e) => onFormUpdate("companySize", e.target.value)}
                        options={company}
                    /> */}
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="row">
                        <label
                            htmlFor={"jobTitle"}
                            className={`block text-sm font-light`}
                        >
                            Cargo
                        </label>
                        <input
                            type="tel"
                            value={formDetails.jobTitle}
                            onChange={(e) => onFormUpdate("jobTitle", e.target.value)}
                            className={`w-full rounded-xl border-none  bg-[#f2f2f2] font-medium text-[16px] pl-3 my-2  py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    {/* <InputSelect
                        label="Industria"
                        name="industry"
                        value={selectedValue}
                        onChange={(e) => onFormUpdate("industry", e.target.value)}
                        options={industry}
                    /> */}
                </div>
                <CustomSelect onChange={(e) => onFormUpdate("industry", e.target.value)} options={industryOptions} value={selectedOption} />

                <div className='flex gap-4'>
                    <input
                        id="comments"
                        value="si"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        onChange={(e) => onFormUpdate("check", e.target.value)}
                        className="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label className="text-xs">Me gustaria registrarme con mi E-mail para recibir el boletín  de Graphicweb con actualizaciones, recursos valiosos y consejos útiles.</label>
                </div>
                <span className="text-xs">Al completar este formulario, aceptas que estás de acuerdo con la política de confidencialidad de Globant.</span>
                <button className="bg-blue-700 py-4 rounded-lg my-5 font-medium text-lg  py-10 text-white" type="submit">{buttonText}</button>
                {status.message && (
                    <div className="row text-center text-blue">
                        <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                        </p>
                    </div>
                )}
            </form>
        </div>
    )
}

export default ContactForm