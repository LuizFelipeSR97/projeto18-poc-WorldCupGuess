PGDMP         ;            
    z            worldcupguesser #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    17839    worldcupguesser    DATABASE     d   CREATE DATABASE worldcupguesser WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE worldcupguesser;
                postgres    false            �            1259    17906    palpite    TABLE     �   CREATE TABLE public.palpite (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "gameId" integer NOT NULL,
    result character varying(1),
    status text DEFAULT 'open'::text
);
    DROP TABLE public.palpite;
       public         heap    postgres    false            �            1259    17905    palpite_id_seq    SEQUENCE     �   CREATE SEQUENCE public.palpite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.palpite_id_seq;
       public          postgres    false    210                       0    0    palpite_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.palpite_id_seq OWNED BY public.palpite.id;
          public          postgres    false    209            �           2604    17909 
   palpite id    DEFAULT     h   ALTER TABLE ONLY public.palpite ALTER COLUMN id SET DEFAULT nextval('public.palpite_id_seq'::regclass);
 9   ALTER TABLE public.palpite ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210                      0    17906    palpite 
   TABLE DATA           I   COPY public.palpite (id, "userId", "gameId", result, status) FROM stdin;
    public          postgres    false    210   �
                  0    0    palpite_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.palpite_id_seq', 9, true);
          public          postgres    false    209            �           2606    17914    palpite palpite_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.palpite
    ADD CONSTRAINT palpite_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.palpite DROP CONSTRAINT palpite_pkey;
       public            postgres    false    210               E   x�3�4B#�����.c0�5�r�R�L�c��1�q́S��. ���rA*�Jc���� �u     