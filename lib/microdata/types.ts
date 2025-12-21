// Типы для микроразметки всех разделов сайта образовательной организации
// Основано на Приказе Рособрнадзора №1493 от 04.08.2023

// ============================================
// 1. ОСНОВНЫЕ СВЕДЕНИЯ (Common)
// ============================================

export interface SchoolInfo {
  // Обязательные поля
  fullName: string;              // itemprop="fullName" - Полное наименование
  shortName?: string;            // itemprop="shortName" - Сокращенное наименование
  regDate: string;               // itemprop="regDate" - Дата создания
  address: string;               // itemprop="address" - Адрес
  telephone: string;             // itemprop="telephone" - Телефон
  email: string;                 // itemprop="email" - Email
  
  // Учредители
  uchreditel: Uchreditel[];      // itemprop="uchreditel"
  
  // Места осуществления деятельности
  addressPlaceGos?: string;      // itemprop="addressPlaceGos"
  addressPlaceFilial?: string;   // itemprop="addressPlaceFilial"
  
  // Режим работы
  workTime?: string;             // itemprop="workTime"
  
  // Лицензия и аккредитация
  licenseDocLink: string;        // itemprop="licenseDocLink" - Ссылка на лицензию
  accreditationDocLink?: string; // itemprop="accreditationDocLink" - Ссылка на аккредитацию
}

export interface Uchreditel {
  nameUchred: string;            // itemprop="nameUchred" - Наименование учредителя
  addressUchred: string;         // itemprop="addressUchred" - Адрес учредителя
  telUchred: string;             // itemprop="telUchred" - Телефон учредителя
  mailUchred: string;            // itemprop="mailUchred" - Email учредителя
  websiteUchred?: string;        // itemprop="websiteUchred" - Сайт учредителя
}

// ============================================
// 2. СТРУКТУРА И ОРГАНЫ УПРАВЛЕНИЯ (Struct)
// ============================================

export interface StructureInfo {
  structOrgUprav: StructOrgUprav[];  // Структурные подразделения
  filInfo?: FilialInfo[];            // Филиалы (если есть)
  repInfo?: RepresentativeInfo[];    // Представительства (если есть)
}

export interface StructOrgUprav {
  name: string;                  // itemprop="name" - Название подразделения
  fio: string;                   // itemprop="fio" - ФИО руководителя
  post: string;                  // itemprop="post" - Должность
  addressStr: string;            // itemprop="addressStr" - Адрес
  site?: string;                 // itemprop="site" - Сайт
  email: string;                 // itemprop="email" - Email
  divisionClauseDocLink?: string;// itemprop="divisionClauseDocLink" - Положение о подразделении
}

export interface FilialInfo {
  nameFil: string;               // itemprop="nameFil" - Название филиала
  addressFil: string;            // itemprop="addressFil" - Адрес
  telephoneFil: string;          // itemprop="telephoneFil" - Телефон
  emailFil: string;              // itemprop="emailFil" - Email
  websiteFil?: string;           // itemprop="websiteFil" - Сайт
  divisionClauseDocLink?: string;// itemprop="divisionClauseDocLink" - Положение
}

export interface RepresentativeInfo {
  nameRep: string;               // itemprop="nameRep"
  addressRep: string;            // itemprop="addressRep"
  telephoneRep: string;          // itemprop="telephoneRep"
  emailRep: string;              // itemprop="emailRep"
  websiteRep?: string;           // itemprop="websiteRep"
}

// ============================================
// 3. ДОКУМЕНТЫ (Document)
// ============================================

export interface DocumentsInfo {
  ustav: string;                 // itemprop="ustav" - Устав
  pravPriem: string;             // itemprop="pravPriem" - Правила приема (с ЭП)
  modeDoc: string;               // itemprop="modeDoc" - Режим занятий (с ЭП)
  formObuch: string;             // itemprop="formObuch" - Формы обучения (с ЭП)
  pravVnutRasp: string;          // itemprop="pravVnutRasp" - Правила внутреннего распорядка (с ЭП)
  pravPerev: string;             // itemprop="pravPerev" - Порядок перевода (с ЭП)
  pravOtchis: string;            // itemprop="pravOtchis" - Порядок отчисления (с ЭП)
  pravVosst: string;             // itemprop="pravVosst" - Порядок восстановления (с ЭП)
  reportEduDoc: string;          // itemprop="reportEduDoc" - Отчет о самообследовании (с ЭП)
  predписания?: string;          // itemprop="predписания" - Предписания (или "нет")
  kolDogovor?: string;           // itemprop="kolDogovor" - Коллективный договор (с ЭП)
}

// ============================================
// 4. ОБРАЗОВАНИЕ (Education)
// ============================================

export interface EducationProgram {
  eduCode: string;               // itemprop="eduCode" - Код специальности
  eduName: string;               // itemprop="eduName" - Наименование
  eduLevel: string;              // itemprop="eduLevel" - Уровень образования
  eduProf?: string;              // itemprop="eduProf" - Направленность/профиль
  eduForm: string;               // itemprop="eduForm" - Форма обучения
  learningTerm: string;          // itemprop="learningTerm" - Срок обучения
  
  // Документы программы
  opMain: string;                // itemprop="opMain" - Описание программы
  educationPlan: string;         // itemprop="educationPlan" - Учебный план
  educationRpd: string[];        // itemprop="educationRpd" - Рабочие программы дисциплин
  educationShedule: string;      // itemprop="educationShedule" - Календарный график
  eduPr?: string;                // itemprop="eduPr" - Программы практик
  methodology?: string;          // itemprop="methodology" - Методические материалы
  
  // Использование электронного обучения
  educationUseEl?: string;       // itemprop="educationUseEl"
  educationDot?: string;         // itemprop="educationDot"
  
  // Численность
  numberAll?: number;            // itemprop="numberAll" - Общая численность
  numberBF?: number;             // itemprop="numberBF" - За счет федерального бюджета
  numberBR?: number;             // itemprop="numberBR" - За счет бюджета субъекта
  numberBM?: number;             // itemprop="numberBM" - За счет местного бюджета
  numberP?: number;              // itemprop="numberP" - По договорам
}

export interface LanguageEducation {
  language: string;              // itemprop="language" - Язык обучения
}

// ============================================
// 5. РУКОВОДСТВО (Managers)
// ============================================

export interface Manager {
  fio: string;                   // itemprop="fio" - ФИО
  post: string;                  // itemprop="post" - Должность
  telephone: string;             // itemprop="telephone" - Телефон
  email: string;                 // itemprop="email" - Email
}

export interface ManagersInfo {
  rucovodstvo: Manager;          // itemprop="rucovodstvo" - Руководитель
  rucovodstvoZam: Manager[];     // itemprop="rucovodstvoZam" - Заместители
  rucovodstvoFil?: FilialManager[];   // itemprop="rucovodstvoFil" - Руководители филиалов
}

export interface FilialManager extends Manager {
  nameFil: string;               // itemprop="nameFil" - Название филиала
}

// ============================================
// 6. ПЕДАГОГИЧЕСКИЙ СОСТАВ (Employees)
// ============================================

export interface Teacher {
  fio: string;                   // itemprop="fio" - ФИО
  post: string;                  // itemprop="post" - Должность
  teachingDiscipline: string;    // itemprop="teachingDiscipline" - Преподаваемые дисциплины
  teachingLevel: string;         // itemprop="teachingLevel" - Уровень образования
  employeeQualification: string; // itemprop="employeeQualification" - Направление подготовки
  degree?: string;               // itemprop="degree" - Ученая степень
  academStat?: string;           // itemprop="academStat" - Ученое звание
  profDevelopment?: string;      // itemprop="profDevelopment" - Повышение квалификации
  genExperience: string;         // itemprop="genExperience" - Общий стаж
  specExperience: string;        // itemprop="specExperience" - Стаж по специальности
  teachingOp: string;            // itemprop="teachingOp" - Образовательные программы
}

// ============================================
// 7. МАТЕРИАЛЬНО-ТЕХНИЧЕСКОЕ ОБЕСПЕЧЕНИЕ (Objects)
// ============================================

export interface Classroom {
  addressCab: string;            // itemprop="addressCab" - Адрес
  nameCab: string;               // itemprop="nameCab" - Название кабинета
  osnCab: string;                // itemprop="osnCab" - Оснащенность
  ovzCab: string;                // itemprop="ovzCab" - Приспособленность для ОВЗ
}

export interface Library {
  objName: string;               // itemprop="objName" - Название
  objAddress: string;            // itemprop="objAddress" - Адрес
  objSq: string;                 // itemprop="objSq" - Площадь
  objCnt?: string;               // itemprop="objCnt" - Количество мест
  objOvz: string;                // itemprop="objOvz" - Приспособленность для ОВЗ
}

export interface ElectronicResources {
  eoisOwn: number;               // itemprop="eoisOwn" - Собственные ресурсы
  eoisSide: number;              // itemprop="eoisSide" - Сторонние ресурсы
  bdec: number;                  // itemprop="bdec" - Базы данных
  erList: string[];              // itemprop="erList" - Ссылки на ресурсы
}

// ============================================
// 8. ВАКАНТНЫЕ МЕСТА (Vacant)
// ============================================

export interface VacantPlace {
  eduCode: string;               // itemprop="eduCode"
  eduName: string;               // itemprop="eduName"
  eduLevel: string;              // itemprop="eduLevel"
  eduProf?: string;              // itemprop="eduProf"
  eduCourse: string;             // itemprop="eduCourse" - Курс
  eduForm: string;               // itemprop="eduForm"
  numberBFVacant: number;        // itemprop="numberBFVacant" - Вакантные места (фед. бюджет)
  numberBRVacant: number;        // itemprop="numberBRVacant" - Вакантные места (рег. бюджет)
  numberBMVacant: number;        // itemprop="numberBMVacant" - Вакантные места (местный бюджет)
  numberPVacant: number;         // itemprop="numberPVacant" - Вакантные места (платно)
}

// ============================================
// 9. МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО (Inter)
// ============================================

export interface InternationalAgreement {
  stateName: string;             // itemprop="stateName" - Государство
  orgName: string;               // itemprop="orgName" - Организация
  dogReg: string;                // itemprop="dogReg" - Реквизиты договора
}

// ============================================
// 10. ОРГАНИЗАЦИЯ ПИТАНИЯ (Catering)
// ============================================

export interface CateringInfo {
  objName: string;               // itemprop="objName"
  objAddress: string;            // itemprop="objAddress"
  objSq: string;                 // itemprop="objSq"
  objCnt?: string;               // itemprop="objCnt"
  objOvz: string;                // itemprop="objOvz"
}

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ТИПЫ
// ============================================

export interface MicrodataProps {
  itemprop?: string;
  itemscope?: boolean;
  itemtype?: string;
  children: React.ReactNode;
  className?: string;
}
