--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.3
-- Dumped by pg_dump version 9.6.8

-- Started on 2018-05-01 10:14:18 CST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12390)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2422 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 198 (class 1259 OID 16443)
-- Name: articulo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.articulo (
    id_articulo integer NOT NULL,
    id_marca integer NOT NULL,
    id_parte integer NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL
);


ALTER TABLE public.articulo OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16441)
-- Name: articulo_id_articulo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.articulo_id_articulo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articulo_id_articulo_seq OWNER TO postgres;

--
-- TOC entry 2423 (class 0 OID 0)
-- Dependencies: 197
-- Name: articulo_id_articulo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.articulo_id_articulo_seq OWNED BY public.articulo.id_articulo;


--
-- TOC entry 203 (class 1259 OID 16473)
-- Name: calendario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calendario (
    id_equipo integer NOT NULL,
    fecha date NOT NULL,
    id_calendario integer NOT NULL
);


ALTER TABLE public.calendario OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 16409)
-- Name: calendario_equipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calendario_equipo (
    id_equipo integer NOT NULL,
    periodo integer NOT NULL,
    id_calendario_equipo integer NOT NULL
);


ALTER TABLE public.calendario_equipo OWNER TO postgres;

--
-- TOC entry 190 (class 1259 OID 16407)
-- Name: calendario_equipo_id_calendario_equipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calendario_equipo_id_calendario_equipo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calendario_equipo_id_calendario_equipo_seq OWNER TO postgres;

--
-- TOC entry 2424 (class 0 OID 0)
-- Dependencies: 190
-- Name: calendario_equipo_id_calendario_equipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calendario_equipo_id_calendario_equipo_seq OWNED BY public.calendario_equipo.id_calendario_equipo;


--
-- TOC entry 202 (class 1259 OID 16471)
-- Name: calendario_id_calendario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.calendario_id_calendario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.calendario_id_calendario_seq OWNER TO postgres;

--
-- TOC entry 2425 (class 0 OID 0)
-- Dependencies: 202
-- Name: calendario_id_calendario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.calendario_id_calendario_seq OWNED BY public.calendario.id_calendario;


--
-- TOC entry 204 (class 1259 OID 16479)
-- Name: calendario_solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.calendario_solicitud (
    id_solicitud integer NOT NULL,
    id_calendario integer NOT NULL
);


ALTER TABLE public.calendario_solicitud OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16540)
-- Name: diagnostico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diagnostico (
    id_diagnostico integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text
);


ALTER TABLE public.diagnostico OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16538)
-- Name: diagnostico_id_diagnostico_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.diagnostico_id_diagnostico_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diagnostico_id_diagnostico_seq OWNER TO postgres;

--
-- TOC entry 2426 (class 0 OID 0)
-- Dependencies: 217
-- Name: diagnostico_id_diagnostico_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.diagnostico_id_diagnostico_seq OWNED BY public.diagnostico.id_diagnostico;


--
-- TOC entry 227 (class 1259 OID 16586)
-- Name: diagnostico_parte; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.diagnostico_parte (
    id_diagnostico integer NOT NULL,
    id_diagnostico_parte integer NOT NULL,
    id_parte integer NOT NULL
);


ALTER TABLE public.diagnostico_parte OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16584)
-- Name: diagnostico_parte_id_diagnostico_parte_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.diagnostico_parte_id_diagnostico_parte_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.diagnostico_parte_id_diagnostico_parte_seq OWNER TO postgres;

--
-- TOC entry 2427 (class 0 OID 0)
-- Dependencies: 226
-- Name: diagnostico_parte_id_diagnostico_parte_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.diagnostico_parte_id_diagnostico_parte_seq OWNED BY public.diagnostico_parte.id_diagnostico_parte;


--
-- TOC entry 189 (class 1259 OID 16401)
-- Name: equipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipo (
    id_equipo integer NOT NULL,
    id_modelo integer NOT NULL,
    id_unidad integer NOT NULL,
    codigo_correlativo character varying(250) NOT NULL
);


ALTER TABLE public.equipo OWNER TO postgres;

--
-- TOC entry 192 (class 1259 OID 16415)
-- Name: equipo_detalle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipo_detalle (
    id_equipo integer NOT NULL,
    numero_serie character varying(100) NOT NULL,
    id_articulo integer NOT NULL
);


ALTER TABLE public.equipo_detalle OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 16399)
-- Name: equipo_id_equipo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.equipo_id_equipo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.equipo_id_equipo_seq OWNER TO postgres;

--
-- TOC entry 2428 (class 0 OID 0)
-- Dependencies: 188
-- Name: equipo_id_equipo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.equipo_id_equipo_seq OWNED BY public.equipo.id_equipo;


--
-- TOC entry 196 (class 1259 OID 16434)
-- Name: marca; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.marca (
    id_marca integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion character varying(100),
    activo boolean DEFAULT true NOT NULL
);


ALTER TABLE public.marca OWNER TO postgres;

--
-- TOC entry 195 (class 1259 OID 16432)
-- Name: marca_id_marca_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.marca_id_marca_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.marca_id_marca_seq OWNER TO postgres;

--
-- TOC entry 2429 (class 0 OID 0)
-- Dependencies: 195
-- Name: marca_id_marca_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.marca_id_marca_seq OWNED BY public.marca.id_marca;


--
-- TOC entry 194 (class 1259 OID 16422)
-- Name: modelo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modelo (
    id_modelo integer NOT NULL,
    nombre character varying(100) NOT NULL,
    activo boolean DEFAULT true NOT NULL,
    descripcion text
);


ALTER TABLE public.modelo OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16465)
-- Name: modelo_detalle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modelo_detalle (
    id_modelo integer NOT NULL,
    id_articulo integer NOT NULL,
    activo boolean DEFAULT true NOT NULL
);


ALTER TABLE public.modelo_detalle OWNER TO postgres;

--
-- TOC entry 193 (class 1259 OID 16420)
-- Name: modelo_id_modelo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modelo_id_modelo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.modelo_id_modelo_seq OWNER TO postgres;

--
-- TOC entry 2430 (class 0 OID 0)
-- Dependencies: 193
-- Name: modelo_id_modelo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.modelo_id_modelo_seq OWNED BY public.modelo.id_modelo;


--
-- TOC entry 206 (class 1259 OID 16486)
-- Name: orden_trabajo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orden_trabajo (
    id_orden_trabajo integer NOT NULL,
    id_solicitud integer NOT NULL,
    id_equipo integer NOT NULL,
    id_prioridad integer NOT NULL,
    id_tipo_mantenimiento integer NOT NULL
);


ALTER TABLE public.orden_trabajo OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16513)
-- Name: orden_trabajo_detalle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orden_trabajo_detalle (
    id_orden_trabajo_detalle integer NOT NULL,
    id_orden_trabajo integer NOT NULL,
    id_equipo_detalle character varying(100) NOT NULL,
    id_responsable integer NOT NULL,
    observacion text
);


ALTER TABLE public.orden_trabajo_detalle OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16549)
-- Name: orden_trabajo_detalle_estado_paso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orden_trabajo_detalle_estado_paso (
    id_orden_trabajo_detalle integer NOT NULL,
    id_procedimiento_paso integer NOT NULL,
    completado boolean NOT NULL
);


ALTER TABLE public.orden_trabajo_detalle_estado_paso OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16511)
-- Name: orden_trabajo_detalle_id_orden_trabajo_detalle_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orden_trabajo_detalle_id_orden_trabajo_detalle_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orden_trabajo_detalle_id_orden_trabajo_detalle_seq OWNER TO postgres;

--
-- TOC entry 2431 (class 0 OID 0)
-- Dependencies: 211
-- Name: orden_trabajo_detalle_id_orden_trabajo_detalle_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orden_trabajo_detalle_id_orden_trabajo_detalle_seq OWNED BY public.orden_trabajo_detalle.id_orden_trabajo_detalle;


--
-- TOC entry 205 (class 1259 OID 16484)
-- Name: orden_trabajo_id_orden_trabajo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orden_trabajo_id_orden_trabajo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orden_trabajo_id_orden_trabajo_seq OWNER TO postgres;

--
-- TOC entry 2432 (class 0 OID 0)
-- Dependencies: 205
-- Name: orden_trabajo_id_orden_trabajo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orden_trabajo_id_orden_trabajo_seq OWNED BY public.orden_trabajo.id_orden_trabajo;


--
-- TOC entry 200 (class 1259 OID 16455)
-- Name: parte; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parte (
    id_parte integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text,
    activo boolean DEFAULT true NOT NULL
);


ALTER TABLE public.parte OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 16453)
-- Name: parte_id_parte_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.parte_id_parte_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.parte_id_parte_seq OWNER TO postgres;

--
-- TOC entry 2433 (class 0 OID 0)
-- Dependencies: 199
-- Name: parte_id_parte_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.parte_id_parte_seq OWNED BY public.parte.id_parte;


--
-- TOC entry 223 (class 1259 OID 16567)
-- Name: pasos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pasos (
    id_paso integer NOT NULL,
    nombre text NOT NULL
);


ALTER TABLE public.pasos OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16565)
-- Name: pasos_id_paso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pasos_id_paso_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pasos_id_paso_seq OWNER TO postgres;

--
-- TOC entry 2434 (class 0 OID 0)
-- Dependencies: 222
-- Name: pasos_id_paso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pasos_id_paso_seq OWNED BY public.pasos.id_paso;


--
-- TOC entry 208 (class 1259 OID 16494)
-- Name: prioridad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prioridad (
    id_prioridad integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion character varying(100)
);


ALTER TABLE public.prioridad OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16492)
-- Name: prioridad_id_prioridad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prioridad_id_prioridad_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prioridad_id_prioridad_seq OWNER TO postgres;

--
-- TOC entry 2435 (class 0 OID 0)
-- Dependencies: 207
-- Name: prioridad_id_prioridad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prioridad_id_prioridad_seq OWNED BY public.prioridad.id_prioridad;


--
-- TOC entry 221 (class 1259 OID 16556)
-- Name: procedimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.procedimiento (
    id_procedimiento integer NOT NULL,
    nombre text NOT NULL
);


ALTER TABLE public.procedimiento OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16592)
-- Name: procedimiento__diagnostico_parte; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.procedimiento__diagnostico_parte (
    id_procedimiento integer NOT NULL,
    id_diagnostico_parte integer NOT NULL
);


ALTER TABLE public.procedimiento__diagnostico_parte OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16554)
-- Name: procedimiento_id_procedimiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.procedimiento_id_procedimiento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.procedimiento_id_procedimiento_seq OWNER TO postgres;

--
-- TOC entry 2436 (class 0 OID 0)
-- Dependencies: 220
-- Name: procedimiento_id_procedimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.procedimiento_id_procedimiento_seq OWNED BY public.procedimiento.id_procedimiento;


--
-- TOC entry 225 (class 1259 OID 16578)
-- Name: procedimiento_paso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.procedimiento_paso (
    id_procedimiento integer NOT NULL,
    id_paso integer NOT NULL,
    id_procedimiento_paso integer NOT NULL
);


ALTER TABLE public.procedimiento_paso OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16576)
-- Name: procedimiento_paso_id_procedimiento_paso_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.procedimiento_paso_id_procedimiento_paso_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.procedimiento_paso_id_procedimiento_paso_seq OWNER TO postgres;

--
-- TOC entry 2437 (class 0 OID 0)
-- Dependencies: 224
-- Name: procedimiento_paso_id_procedimiento_paso_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.procedimiento_paso_id_procedimiento_paso_seq OWNED BY public.procedimiento_paso.id_procedimiento_paso;


--
-- TOC entry 214 (class 1259 OID 16524)
-- Name: responsable; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.responsable (
    id_responsable integer NOT NULL,
    nombre character varying(100) NOT NULL,
    id_tipo_reponsable integer NOT NULL
);


ALTER TABLE public.responsable OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16522)
-- Name: responsable_id_responsable_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.responsable_id_responsable_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.responsable_id_responsable_seq OWNER TO postgres;

--
-- TOC entry 2438 (class 0 OID 0)
-- Dependencies: 213
-- Name: responsable_id_responsable_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.responsable_id_responsable_seq OWNED BY public.responsable.id_responsable;


--
-- TOC entry 186 (class 1259 OID 16388)
-- Name: solicitud; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.solicitud (
    id_solicitud integer NOT NULL,
    unidad character varying(100) NOT NULL,
    solicitante character varying(100) NOT NULL,
    estado boolean
);


ALTER TABLE public.solicitud OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 16394)
-- Name: solicitud_equipo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.solicitud_equipo (
    id_solicitud integer NOT NULL,
    id_equipo integer NOT NULL
);


ALTER TABLE public.solicitud_equipo OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16386)
-- Name: solicitud_id_solicitud_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.solicitud_id_solicitud_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solicitud_id_solicitud_seq OWNER TO postgres;

--
-- TOC entry 2439 (class 0 OID 0)
-- Dependencies: 185
-- Name: solicitud_id_solicitud_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.solicitud_id_solicitud_seq OWNED BY public.solicitud.id_solicitud;


--
-- TOC entry 210 (class 1259 OID 16502)
-- Name: tipo_mantenimiento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_mantenimiento (
    id_tipo_mantenimiento integer NOT NULL,
    nombre character varying(100) NOT NULL,
    descripcion text
);


ALTER TABLE public.tipo_mantenimiento OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16500)
-- Name: tipo_mantenimiento_id_tipo_mantenimiento_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_mantenimiento_id_tipo_mantenimiento_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_mantenimiento_id_tipo_mantenimiento_seq OWNER TO postgres;

--
-- TOC entry 2440 (class 0 OID 0)
-- Dependencies: 209
-- Name: tipo_mantenimiento_id_tipo_mantenimiento_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_mantenimiento_id_tipo_mantenimiento_seq OWNED BY public.tipo_mantenimiento.id_tipo_mantenimiento;


--
-- TOC entry 216 (class 1259 OID 16532)
-- Name: tipo_responsable; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_responsable (
    id_tipo_responsable integer NOT NULL,
    nombre character varying(100) NOT NULL,
    observacion character varying(100)
);


ALTER TABLE public.tipo_responsable OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16530)
-- Name: tipo_responsable_id_tipo_responsable_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_responsable_id_tipo_responsable_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tipo_responsable_id_tipo_responsable_seq OWNER TO postgres;

--
-- TOC entry 2441 (class 0 OID 0)
-- Dependencies: 215
-- Name: tipo_responsable_id_tipo_responsable_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_responsable_id_tipo_responsable_seq OWNED BY public.tipo_responsable.id_tipo_responsable;


--
-- TOC entry 230 (class 1259 OID 16599)
-- Name: unidad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidad (
    id_unidad integer NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.unidad OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16597)
-- Name: unidad_id_unidad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.unidad_id_unidad_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.unidad_id_unidad_seq OWNER TO postgres;

--
-- TOC entry 2442 (class 0 OID 0)
-- Dependencies: 229
-- Name: unidad_id_unidad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unidad_id_unidad_seq OWNED BY public.unidad.id_unidad;


--
-- TOC entry 2155 (class 2604 OID 16446)
-- Name: articulo id_articulo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articulo ALTER COLUMN id_articulo SET DEFAULT nextval('public.articulo_id_articulo_seq'::regclass);


--
-- TOC entry 2160 (class 2604 OID 16476)
-- Name: calendario id_calendario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario ALTER COLUMN id_calendario SET DEFAULT nextval('public.calendario_id_calendario_seq'::regclass);


--
-- TOC entry 2150 (class 2604 OID 16412)
-- Name: calendario_equipo id_calendario_equipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario_equipo ALTER COLUMN id_calendario_equipo SET DEFAULT nextval('public.calendario_equipo_id_calendario_equipo_seq'::regclass);


--
-- TOC entry 2167 (class 2604 OID 16543)
-- Name: diagnostico id_diagnostico; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico ALTER COLUMN id_diagnostico SET DEFAULT nextval('public.diagnostico_id_diagnostico_seq'::regclass);


--
-- TOC entry 2171 (class 2604 OID 16589)
-- Name: diagnostico_parte id_diagnostico_parte; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico_parte ALTER COLUMN id_diagnostico_parte SET DEFAULT nextval('public.diagnostico_parte_id_diagnostico_parte_seq'::regclass);


--
-- TOC entry 2149 (class 2604 OID 16404)
-- Name: equipo id_equipo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo ALTER COLUMN id_equipo SET DEFAULT nextval('public.equipo_id_equipo_seq'::regclass);


--
-- TOC entry 2153 (class 2604 OID 16437)
-- Name: marca id_marca; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marca ALTER COLUMN id_marca SET DEFAULT nextval('public.marca_id_marca_seq'::regclass);


--
-- TOC entry 2151 (class 2604 OID 16425)
-- Name: modelo id_modelo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo ALTER COLUMN id_modelo SET DEFAULT nextval('public.modelo_id_modelo_seq'::regclass);


--
-- TOC entry 2161 (class 2604 OID 16489)
-- Name: orden_trabajo id_orden_trabajo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo ALTER COLUMN id_orden_trabajo SET DEFAULT nextval('public.orden_trabajo_id_orden_trabajo_seq'::regclass);


--
-- TOC entry 2164 (class 2604 OID 16516)
-- Name: orden_trabajo_detalle id_orden_trabajo_detalle; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_detalle ALTER COLUMN id_orden_trabajo_detalle SET DEFAULT nextval('public.orden_trabajo_detalle_id_orden_trabajo_detalle_seq'::regclass);


--
-- TOC entry 2157 (class 2604 OID 16458)
-- Name: parte id_parte; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parte ALTER COLUMN id_parte SET DEFAULT nextval('public.parte_id_parte_seq'::regclass);


--
-- TOC entry 2169 (class 2604 OID 16570)
-- Name: pasos id_paso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasos ALTER COLUMN id_paso SET DEFAULT nextval('public.pasos_id_paso_seq'::regclass);


--
-- TOC entry 2162 (class 2604 OID 16497)
-- Name: prioridad id_prioridad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prioridad ALTER COLUMN id_prioridad SET DEFAULT nextval('public.prioridad_id_prioridad_seq'::regclass);


--
-- TOC entry 2168 (class 2604 OID 16559)
-- Name: procedimiento id_procedimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento ALTER COLUMN id_procedimiento SET DEFAULT nextval('public.procedimiento_id_procedimiento_seq'::regclass);


--
-- TOC entry 2170 (class 2604 OID 16581)
-- Name: procedimiento_paso id_procedimiento_paso; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento_paso ALTER COLUMN id_procedimiento_paso SET DEFAULT nextval('public.procedimiento_paso_id_procedimiento_paso_seq'::regclass);


--
-- TOC entry 2165 (class 2604 OID 16527)
-- Name: responsable id_responsable; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responsable ALTER COLUMN id_responsable SET DEFAULT nextval('public.responsable_id_responsable_seq'::regclass);


--
-- TOC entry 2148 (class 2604 OID 16391)
-- Name: solicitud id_solicitud; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud ALTER COLUMN id_solicitud SET DEFAULT nextval('public.solicitud_id_solicitud_seq'::regclass);


--
-- TOC entry 2163 (class 2604 OID 16505)
-- Name: tipo_mantenimiento id_tipo_mantenimiento; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_mantenimiento ALTER COLUMN id_tipo_mantenimiento SET DEFAULT nextval('public.tipo_mantenimiento_id_tipo_mantenimiento_seq'::regclass);


--
-- TOC entry 2166 (class 2604 OID 16535)
-- Name: tipo_responsable id_tipo_responsable; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_responsable ALTER COLUMN id_tipo_responsable SET DEFAULT nextval('public.tipo_responsable_id_tipo_responsable_seq'::regclass);


--
-- TOC entry 2172 (class 2604 OID 16602)
-- Name: unidad id_unidad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidad ALTER COLUMN id_unidad SET DEFAULT nextval('public.unidad_id_unidad_seq'::regclass);


--
-- TOC entry 2382 (class 0 OID 16443)
-- Dependencies: 198
-- Data for Name: articulo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.articulo (id_articulo, id_marca, id_parte, nombre, descripcion, activo) VALUES (1, 1, 1, 'CPU XPS 6th gen', NULL, true);
INSERT INTO public.articulo (id_articulo, id_marca, id_parte, nombre, descripcion, activo) VALUES (2, 1, 2, 'Monitor XPS 21pulg', NULL, true);
INSERT INTO public.articulo (id_articulo, id_marca, id_parte, nombre, descripcion, activo) VALUES (3, 1, 3, 'Mouse XPS', NULL, true);
INSERT INTO public.articulo (id_articulo, id_marca, id_parte, nombre, descripcion, activo) VALUES (4, 2, 1, 'CPU HP pav', NULL, true);
INSERT INTO public.articulo (id_articulo, id_marca, id_parte, nombre, descripcion, activo) VALUES (5, 2, 2, 'Monitor HP pav', NULL, true);


--
-- TOC entry 2443 (class 0 OID 0)
-- Dependencies: 197
-- Name: articulo_id_articulo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.articulo_id_articulo_seq', 5, true);


--
-- TOC entry 2387 (class 0 OID 16473)
-- Dependencies: 203
-- Data for Name: calendario; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2375 (class 0 OID 16409)
-- Dependencies: 191
-- Data for Name: calendario_equipo; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2444 (class 0 OID 0)
-- Dependencies: 190
-- Name: calendario_equipo_id_calendario_equipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calendario_equipo_id_calendario_equipo_seq', 1, false);


--
-- TOC entry 2445 (class 0 OID 0)
-- Dependencies: 202
-- Name: calendario_id_calendario_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.calendario_id_calendario_seq', 1, false);


--
-- TOC entry 2388 (class 0 OID 16479)
-- Dependencies: 204
-- Data for Name: calendario_solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2402 (class 0 OID 16540)
-- Dependencies: 218
-- Data for Name: diagnostico; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2446 (class 0 OID 0)
-- Dependencies: 217
-- Name: diagnostico_id_diagnostico_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.diagnostico_id_diagnostico_seq', 1, false);


--
-- TOC entry 2411 (class 0 OID 16586)
-- Dependencies: 227
-- Data for Name: diagnostico_parte; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2447 (class 0 OID 0)
-- Dependencies: 226
-- Name: diagnostico_parte_id_diagnostico_parte_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.diagnostico_parte_id_diagnostico_parte_seq', 1, false);


--
-- TOC entry 2373 (class 0 OID 16401)
-- Dependencies: 189
-- Data for Name: equipo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.equipo (id_equipo, id_modelo, id_unidad, codigo_correlativo) VALUES (4, 1, 1, '123456789');
INSERT INTO public.equipo (id_equipo, id_modelo, id_unidad, codigo_correlativo) VALUES (6, 1, 1, '987654321');
INSERT INTO public.equipo (id_equipo, id_modelo, id_unidad, codigo_correlativo) VALUES (7, 2, 1, '759849393');


--
-- TOC entry 2376 (class 0 OID 16415)
-- Dependencies: 192
-- Data for Name: equipo_detalle; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.equipo_detalle (id_equipo, numero_serie, id_articulo) VALUES (7, '17777777777', 4);
INSERT INTO public.equipo_detalle (id_equipo, numero_serie, id_articulo) VALUES (7, '172222222222', 5);


--
-- TOC entry 2448 (class 0 OID 0)
-- Dependencies: 188
-- Name: equipo_id_equipo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.equipo_id_equipo_seq', 7, true);


--
-- TOC entry 2380 (class 0 OID 16434)
-- Dependencies: 196
-- Data for Name: marca; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (35, 'Vaio', 'marca vaio... 
vaio marca', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (36, 'Samsung', 'marca samsung', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (37, 'Chrome', 'Chromebook de google', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (38, 'Alcatel', 'marca alcatel', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (39, 'Lenovo', 'descripcion de marca lenovo', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (3, 'Acer', 'Desc acer', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (2, 'HP', 'Descripcion de HP esta es la descripcion de la marca hp', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (1, 'Dell', 'Descripcion de Dell', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (40, 'Benq', 'Esta es la descripcion de la marca benq... descripcion larga para probar como se muestra una descrip', true);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (5, 'Asus', 'Descripcion de Asus', false);
INSERT INTO public.marca (id_marca, nombre, descripcion, activo) VALUES (4, 'Toshiba', 'Descr toshiba', false);


--
-- TOC entry 2449 (class 0 OID 0)
-- Dependencies: 195
-- Name: marca_id_marca_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.marca_id_marca_seq', 40, true);


--
-- TOC entry 2378 (class 0 OID 16422)
-- Dependencies: 194
-- Data for Name: modelo; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.modelo (id_modelo, nombre, activo, descripcion) VALUES (1, 'Dell XPS', true, NULL);
INSERT INTO public.modelo (id_modelo, nombre, activo, descripcion) VALUES (2, 'HP pavilion 14', true, NULL);


--
-- TOC entry 2385 (class 0 OID 16465)
-- Dependencies: 201
-- Data for Name: modelo_detalle; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.modelo_detalle (id_modelo, id_articulo, activo) VALUES (1, 1, true);
INSERT INTO public.modelo_detalle (id_modelo, id_articulo, activo) VALUES (1, 2, true);
INSERT INTO public.modelo_detalle (id_modelo, id_articulo, activo) VALUES (1, 3, true);
INSERT INTO public.modelo_detalle (id_modelo, id_articulo, activo) VALUES (2, 4, true);
INSERT INTO public.modelo_detalle (id_modelo, id_articulo, activo) VALUES (2, 5, true);


--
-- TOC entry 2450 (class 0 OID 0)
-- Dependencies: 193
-- Name: modelo_id_modelo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modelo_id_modelo_seq', 2, true);


--
-- TOC entry 2390 (class 0 OID 16486)
-- Dependencies: 206
-- Data for Name: orden_trabajo; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2396 (class 0 OID 16513)
-- Dependencies: 212
-- Data for Name: orden_trabajo_detalle; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2403 (class 0 OID 16549)
-- Dependencies: 219
-- Data for Name: orden_trabajo_detalle_estado_paso; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2451 (class 0 OID 0)
-- Dependencies: 211
-- Name: orden_trabajo_detalle_id_orden_trabajo_detalle_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orden_trabajo_detalle_id_orden_trabajo_detalle_seq', 1, false);


--
-- TOC entry 2452 (class 0 OID 0)
-- Dependencies: 205
-- Name: orden_trabajo_id_orden_trabajo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orden_trabajo_id_orden_trabajo_seq', 1, false);


--
-- TOC entry 2384 (class 0 OID 16455)
-- Dependencies: 200
-- Data for Name: parte; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.parte (id_parte, nombre, descripcion, activo) VALUES (1, 'CPU', NULL, true);
INSERT INTO public.parte (id_parte, nombre, descripcion, activo) VALUES (2, 'Monitor', NULL, true);
INSERT INTO public.parte (id_parte, nombre, descripcion, activo) VALUES (3, 'Mouse', NULL, true);


--
-- TOC entry 2453 (class 0 OID 0)
-- Dependencies: 199
-- Name: parte_id_parte_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.parte_id_parte_seq', 3, true);


--
-- TOC entry 2407 (class 0 OID 16567)
-- Dependencies: 223
-- Data for Name: pasos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2454 (class 0 OID 0)
-- Dependencies: 222
-- Name: pasos_id_paso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pasos_id_paso_seq', 1, false);


--
-- TOC entry 2392 (class 0 OID 16494)
-- Dependencies: 208
-- Data for Name: prioridad; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2455 (class 0 OID 0)
-- Dependencies: 207
-- Name: prioridad_id_prioridad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prioridad_id_prioridad_seq', 1, false);


--
-- TOC entry 2405 (class 0 OID 16556)
-- Dependencies: 221
-- Data for Name: procedimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2412 (class 0 OID 16592)
-- Dependencies: 228
-- Data for Name: procedimiento__diagnostico_parte; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2456 (class 0 OID 0)
-- Dependencies: 220
-- Name: procedimiento_id_procedimiento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.procedimiento_id_procedimiento_seq', 1, false);


--
-- TOC entry 2409 (class 0 OID 16578)
-- Dependencies: 225
-- Data for Name: procedimiento_paso; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2457 (class 0 OID 0)
-- Dependencies: 224
-- Name: procedimiento_paso_id_procedimiento_paso_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.procedimiento_paso_id_procedimiento_paso_seq', 1, false);


--
-- TOC entry 2398 (class 0 OID 16524)
-- Dependencies: 214
-- Data for Name: responsable; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2458 (class 0 OID 0)
-- Dependencies: 213
-- Name: responsable_id_responsable_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.responsable_id_responsable_seq', 1, false);


--
-- TOC entry 2370 (class 0 OID 16388)
-- Dependencies: 186
-- Data for Name: solicitud; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2371 (class 0 OID 16394)
-- Dependencies: 187
-- Data for Name: solicitud_equipo; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2459 (class 0 OID 0)
-- Dependencies: 185
-- Name: solicitud_id_solicitud_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.solicitud_id_solicitud_seq', 1, false);


--
-- TOC entry 2394 (class 0 OID 16502)
-- Dependencies: 210
-- Data for Name: tipo_mantenimiento; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2460 (class 0 OID 0)
-- Dependencies: 209
-- Name: tipo_mantenimiento_id_tipo_mantenimiento_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipo_mantenimiento_id_tipo_mantenimiento_seq', 1, false);


--
-- TOC entry 2400 (class 0 OID 16532)
-- Dependencies: 216
-- Data for Name: tipo_responsable; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 2461 (class 0 OID 0)
-- Dependencies: 215
-- Name: tipo_responsable_id_tipo_responsable_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tipo_responsable_id_tipo_responsable_seq', 1, false);


--
-- TOC entry 2414 (class 0 OID 16599)
-- Dependencies: 230
-- Data for Name: unidad; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.unidad (id_unidad, nombre) VALUES (1, 'FMOcc');


--
-- TOC entry 2462 (class 0 OID 0)
-- Dependencies: 229
-- Name: unidad_id_unidad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidad_id_unidad_seq', 1, true);


--
-- TOC entry 2188 (class 2606 OID 16452)
-- Name: articulo id_articulo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articulo
    ADD CONSTRAINT id_articulo PRIMARY KEY (id_articulo);


--
-- TOC entry 2194 (class 2606 OID 16478)
-- Name: calendario id_calendario; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario
    ADD CONSTRAINT id_calendario PRIMARY KEY (id_calendario);


--
-- TOC entry 2180 (class 2606 OID 16414)
-- Name: calendario_equipo id_calendario_equipo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario_equipo
    ADD CONSTRAINT id_calendario_equipo PRIMARY KEY (id_calendario_equipo);


--
-- TOC entry 2196 (class 2606 OID 16483)
-- Name: calendario_solicitud id_calendario_solicitud; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario_solicitud
    ADD CONSTRAINT id_calendario_solicitud PRIMARY KEY (id_solicitud, id_calendario);


--
-- TOC entry 2210 (class 2606 OID 16548)
-- Name: diagnostico id_diagnostico; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico
    ADD CONSTRAINT id_diagnostico PRIMARY KEY (id_diagnostico);


--
-- TOC entry 2220 (class 2606 OID 16591)
-- Name: diagnostico_parte id_diagnostico_parte; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico_parte
    ADD CONSTRAINT id_diagnostico_parte PRIMARY KEY (id_diagnostico_parte);


--
-- TOC entry 2178 (class 2606 OID 16406)
-- Name: equipo id_equipo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo
    ADD CONSTRAINT id_equipo PRIMARY KEY (id_equipo);


--
-- TOC entry 2182 (class 2606 OID 16419)
-- Name: equipo_detalle id_equipo_detalle; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo_detalle
    ADD CONSTRAINT id_equipo_detalle PRIMARY KEY (numero_serie);


--
-- TOC entry 2202 (class 2606 OID 16510)
-- Name: tipo_mantenimiento id_mantenimiento; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_mantenimiento
    ADD CONSTRAINT id_mantenimiento PRIMARY KEY (id_tipo_mantenimiento);


--
-- TOC entry 2186 (class 2606 OID 16440)
-- Name: marca id_marca; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.marca
    ADD CONSTRAINT id_marca PRIMARY KEY (id_marca);


--
-- TOC entry 2184 (class 2606 OID 16431)
-- Name: modelo id_modelo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo
    ADD CONSTRAINT id_modelo PRIMARY KEY (id_modelo);


--
-- TOC entry 2192 (class 2606 OID 16470)
-- Name: modelo_detalle id_modelo_detalle; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo_detalle
    ADD CONSTRAINT id_modelo_detalle PRIMARY KEY (id_modelo, id_articulo);


--
-- TOC entry 2198 (class 2606 OID 16491)
-- Name: orden_trabajo id_orden_trabajo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo
    ADD CONSTRAINT id_orden_trabajo PRIMARY KEY (id_orden_trabajo);


--
-- TOC entry 2204 (class 2606 OID 16521)
-- Name: orden_trabajo_detalle id_orden_trabajo_detalle; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_detalle
    ADD CONSTRAINT id_orden_trabajo_detalle PRIMARY KEY (id_orden_trabajo_detalle);


--
-- TOC entry 2212 (class 2606 OID 16553)
-- Name: orden_trabajo_detalle_estado_paso id_orden_trabajo_detalle__estado_pasos; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_detalle_estado_paso
    ADD CONSTRAINT id_orden_trabajo_detalle__estado_pasos PRIMARY KEY (id_procedimiento_paso, id_orden_trabajo_detalle);


--
-- TOC entry 2190 (class 2606 OID 16464)
-- Name: parte id_parte; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parte
    ADD CONSTRAINT id_parte PRIMARY KEY (id_parte);


--
-- TOC entry 2216 (class 2606 OID 16575)
-- Name: pasos id_paso; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pasos
    ADD CONSTRAINT id_paso PRIMARY KEY (id_paso);


--
-- TOC entry 2200 (class 2606 OID 16499)
-- Name: prioridad id_prioridad; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prioridad
    ADD CONSTRAINT id_prioridad PRIMARY KEY (id_prioridad);


--
-- TOC entry 2214 (class 2606 OID 16564)
-- Name: procedimiento id_procedimiento; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento
    ADD CONSTRAINT id_procedimiento PRIMARY KEY (id_procedimiento);


--
-- TOC entry 2222 (class 2606 OID 16596)
-- Name: procedimiento__diagnostico_parte id_procedimiento_diagnostico_parte; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento__diagnostico_parte
    ADD CONSTRAINT id_procedimiento_diagnostico_parte PRIMARY KEY (id_procedimiento, id_diagnostico_parte);


--
-- TOC entry 2218 (class 2606 OID 16583)
-- Name: procedimiento_paso id_procedimiento_paso; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento_paso
    ADD CONSTRAINT id_procedimiento_paso PRIMARY KEY (id_procedimiento_paso);


--
-- TOC entry 2206 (class 2606 OID 16529)
-- Name: responsable id_responsable; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responsable
    ADD CONSTRAINT id_responsable PRIMARY KEY (id_responsable);


--
-- TOC entry 2174 (class 2606 OID 16393)
-- Name: solicitud id_solicitud; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud
    ADD CONSTRAINT id_solicitud PRIMARY KEY (id_solicitud);


--
-- TOC entry 2176 (class 2606 OID 16398)
-- Name: solicitud_equipo id_solicitud_equipo; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_equipo
    ADD CONSTRAINT id_solicitud_equipo PRIMARY KEY (id_solicitud, id_equipo);


--
-- TOC entry 2208 (class 2606 OID 16537)
-- Name: tipo_responsable id_tipo_responsable; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_responsable
    ADD CONSTRAINT id_tipo_responsable PRIMARY KEY (id_tipo_responsable);


--
-- TOC entry 2224 (class 2606 OID 16604)
-- Name: unidad id_unidad; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidad
    ADD CONSTRAINT id_unidad PRIMARY KEY (id_unidad);


--
-- TOC entry 2234 (class 2606 OID 16650)
-- Name: modelo_detalle id_articulo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo_detalle
    ADD CONSTRAINT id_articulo FOREIGN KEY (id_articulo) REFERENCES public.articulo(id_articulo) MATCH FULL;


--
-- TOC entry 2237 (class 2606 OID 16665)
-- Name: calendario_solicitud id_calendario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario_solicitud
    ADD CONSTRAINT id_calendario FOREIGN KEY (id_calendario) REFERENCES public.calendario(id_calendario) MATCH FULL;


--
-- TOC entry 2249 (class 2606 OID 16725)
-- Name: diagnostico_parte id_diagnostico; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico_parte
    ADD CONSTRAINT id_diagnostico FOREIGN KEY (id_diagnostico) REFERENCES public.diagnostico(id_diagnostico) MATCH FULL;


--
-- TOC entry 2251 (class 2606 OID 16735)
-- Name: procedimiento__diagnostico_parte id_diagnostico_parte; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento__diagnostico_parte
    ADD CONSTRAINT id_diagnostico_parte FOREIGN KEY (id_diagnostico_parte) REFERENCES public.diagnostico_parte(id_diagnostico_parte) MATCH FULL;


--
-- TOC entry 2226 (class 2606 OID 16610)
-- Name: solicitud_equipo id_equipo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_equipo
    ADD CONSTRAINT id_equipo FOREIGN KEY (id_equipo) REFERENCES public.equipo(id_equipo) MATCH FULL;


--
-- TOC entry 2229 (class 2606 OID 16625)
-- Name: calendario_equipo id_equipo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario_equipo
    ADD CONSTRAINT id_equipo FOREIGN KEY (id_equipo) REFERENCES public.equipo(id_equipo) MATCH FULL;


--
-- TOC entry 2230 (class 2606 OID 16630)
-- Name: equipo_detalle id_equipo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo_detalle
    ADD CONSTRAINT id_equipo FOREIGN KEY (id_equipo) REFERENCES public.equipo(id_equipo) MATCH FULL;


--
-- TOC entry 2235 (class 2606 OID 16655)
-- Name: calendario id_equipo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario
    ADD CONSTRAINT id_equipo FOREIGN KEY (id_equipo) REFERENCES public.equipo(id_equipo) MATCH FULL;


--
-- TOC entry 2231 (class 2606 OID 16635)
-- Name: articulo id_marca; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articulo
    ADD CONSTRAINT id_marca FOREIGN KEY (id_marca) REFERENCES public.marca(id_marca) MATCH FULL;


--
-- TOC entry 2227 (class 2606 OID 16615)
-- Name: equipo id_modelo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo
    ADD CONSTRAINT id_modelo FOREIGN KEY (id_modelo) REFERENCES public.modelo(id_modelo) MATCH FULL;


--
-- TOC entry 2233 (class 2606 OID 16645)
-- Name: modelo_detalle id_modelo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modelo_detalle
    ADD CONSTRAINT id_modelo FOREIGN KEY (id_modelo) REFERENCES public.modelo(id_modelo) MATCH FULL;


--
-- TOC entry 2242 (class 2606 OID 16690)
-- Name: orden_trabajo_detalle id_orden_trabajo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_detalle
    ADD CONSTRAINT id_orden_trabajo FOREIGN KEY (id_orden_trabajo) REFERENCES public.orden_trabajo(id_orden_trabajo) MATCH FULL;


--
-- TOC entry 2244 (class 2606 OID 16700)
-- Name: orden_trabajo_detalle_estado_paso id_orden_trabajo_detalle; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_detalle_estado_paso
    ADD CONSTRAINT id_orden_trabajo_detalle FOREIGN KEY (id_orden_trabajo_detalle) REFERENCES public.orden_trabajo_detalle(id_orden_trabajo_detalle) MATCH FULL;


--
-- TOC entry 2232 (class 2606 OID 16640)
-- Name: articulo id_parte; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.articulo
    ADD CONSTRAINT id_parte FOREIGN KEY (id_parte) REFERENCES public.parte(id_parte) MATCH FULL;


--
-- TOC entry 2248 (class 2606 OID 16720)
-- Name: diagnostico_parte id_parte; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.diagnostico_parte
    ADD CONSTRAINT id_parte FOREIGN KEY (id_parte) REFERENCES public.parte(id_parte) MATCH FULL;


--
-- TOC entry 2246 (class 2606 OID 16710)
-- Name: procedimiento_paso id_paso; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento_paso
    ADD CONSTRAINT id_paso FOREIGN KEY (id_paso) REFERENCES public.pasos(id_paso) MATCH FULL;


--
-- TOC entry 2239 (class 2606 OID 16675)
-- Name: orden_trabajo id_prioridad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo
    ADD CONSTRAINT id_prioridad FOREIGN KEY (id_prioridad) REFERENCES public.prioridad(id_prioridad) MATCH FULL;


--
-- TOC entry 2247 (class 2606 OID 16715)
-- Name: procedimiento_paso id_procedimiento; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento_paso
    ADD CONSTRAINT id_procedimiento FOREIGN KEY (id_procedimiento) REFERENCES public.procedimiento(id_procedimiento) MATCH FULL;


--
-- TOC entry 2250 (class 2606 OID 16730)
-- Name: procedimiento__diagnostico_parte id_procedimiento; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.procedimiento__diagnostico_parte
    ADD CONSTRAINT id_procedimiento FOREIGN KEY (id_procedimiento) REFERENCES public.procedimiento(id_procedimiento) MATCH FULL;


--
-- TOC entry 2245 (class 2606 OID 16705)
-- Name: orden_trabajo_detalle_estado_paso id_procedimiento_paso; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_detalle_estado_paso
    ADD CONSTRAINT id_procedimiento_paso FOREIGN KEY (id_procedimiento_paso) REFERENCES public.procedimiento_paso(id_procedimiento_paso) MATCH FULL;


--
-- TOC entry 2241 (class 2606 OID 16685)
-- Name: orden_trabajo_detalle id_responsable; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo_detalle
    ADD CONSTRAINT id_responsable FOREIGN KEY (id_responsable) REFERENCES public.responsable(id_responsable) MATCH FULL;


--
-- TOC entry 2225 (class 2606 OID 16605)
-- Name: solicitud_equipo id_solicitud; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.solicitud_equipo
    ADD CONSTRAINT id_solicitud FOREIGN KEY (id_solicitud) REFERENCES public.solicitud(id_solicitud) MATCH FULL;


--
-- TOC entry 2236 (class 2606 OID 16660)
-- Name: calendario_solicitud id_solicitud; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.calendario_solicitud
    ADD CONSTRAINT id_solicitud FOREIGN KEY (id_solicitud) REFERENCES public.solicitud(id_solicitud) MATCH FULL;


--
-- TOC entry 2238 (class 2606 OID 16670)
-- Name: orden_trabajo id_solicitud; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo
    ADD CONSTRAINT id_solicitud FOREIGN KEY (id_solicitud) REFERENCES public.solicitud(id_solicitud) MATCH FULL;


--
-- TOC entry 2240 (class 2606 OID 16680)
-- Name: orden_trabajo id_tipo_mantenimiento; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orden_trabajo
    ADD CONSTRAINT id_tipo_mantenimiento FOREIGN KEY (id_tipo_mantenimiento) REFERENCES public.tipo_mantenimiento(id_tipo_mantenimiento) MATCH FULL;


--
-- TOC entry 2243 (class 2606 OID 16695)
-- Name: responsable id_tipo_responsable; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.responsable
    ADD CONSTRAINT id_tipo_responsable FOREIGN KEY (id_tipo_reponsable) REFERENCES public.tipo_responsable(id_tipo_responsable) MATCH FULL;


--
-- TOC entry 2228 (class 2606 OID 16620)
-- Name: equipo id_unidad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo
    ADD CONSTRAINT id_unidad FOREIGN KEY (id_unidad) REFERENCES public.unidad(id_unidad) MATCH FULL;


-- Completed on 2018-05-01 10:14:22 CST

--
-- PostgreSQL database dump complete
--

