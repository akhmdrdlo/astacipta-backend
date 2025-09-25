import type { Schema, Struct } from '@strapi/strapi';

export interface KerjasamaMitra extends Struct.ComponentSchema {
  collectionName: 'components_kerjasama_mitras';
  info: {
    displayName: 'Mitra';
    icon: 'emotionHappy';
  };
  attributes: {
    detailKerjasama: Schema.Attribute.Blocks & Schema.Attribute.Required;
    kategori: Schema.Attribute.Enumeration<
      [
        'Institusi Pendidikan',
        'Instansi Dalam Negeri',
        'Instansi Luar Negeri',
        'BUMN',
        'Kolaborator Lainnya',
      ]
    > &
      Schema.Attribute.Required;
    logoInstansi: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    namaInstansi: Schema.Attribute.String & Schema.Attribute.Required;
    tahunKerjasama: Schema.Attribute.Date & Schema.Attribute.Required;
    tipeKerjasama: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface KerjasamaMitraPotensial extends Struct.ComponentSchema {
  collectionName: 'components_kerjasama_mitra_potensials';
  info: {
    displayName: 'Mitra-Potensial';
  };
  attributes: {
    detailPotensi: Schema.Attribute.Blocks;
    logoInstansi: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    namaInstansi: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProgramPasarPotensial extends Struct.ComponentSchema {
  collectionName: 'components_program_pasar_potensials';
  info: {
    displayName: 'Pasar-Potensial';
  };
  attributes: {
    logoInstansi: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
    namaInstansi: Schema.Attribute.String & Schema.Attribute.Required;
    potensiPasar: Schema.Attribute.Blocks;
  };
}

export interface ProgramRoadmap extends Struct.ComponentSchema {
  collectionName: 'components_program_roadmaps';
  info: {
    displayName: 'Roadmap';
    icon: 'apps';
  };
  attributes: {
    judulRoadmap: Schema.Attribute.String;
    roadmap: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'kerjasama.mitra': KerjasamaMitra;
      'kerjasama.mitra-potensial': KerjasamaMitraPotensial;
      'program.pasar-potensial': ProgramPasarPotensial;
      'program.roadmap': ProgramRoadmap;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
