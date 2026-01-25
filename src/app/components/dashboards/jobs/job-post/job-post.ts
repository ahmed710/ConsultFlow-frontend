import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
interface SelectType {
  value:string;
  label:string;
}
@Component({
  selector: 'app-job-post',
  imports: [SharedModule, SpkNgSelect,SpkFlatpickr],
  templateUrl: './job-post.html',
  styleUrl: './job-post.scss'
})
export class JobPost {
  Employeesname:SelectType[] = [
    {value:'Obligation Pvt.Ltd', label:'Obligation Pvt.Ltd'},
    {value:'Voluptatem Pvt.Ltd', label:'Voluptatem Pvt.Ltd'},
    {value:'BloomTech.Inc', label:'BloomTech.Inc'},
    {value:'Spotech Technical Solutions', label:'Spotech Technical Solutions'},
]
CountrySelect:SelectType[] = [
    {value:'India', label:'India'},
    {value:'USA', label:'USA'},
    {value:'Germany', label:'Germany'},
    {value:'Spain', label:'Spain'},
    {value:'Urgentina', label:'Urgentina'},
]
CategoriesSelect:SelectType[] = [
    {value:'Development', label:'Development'},
    {value:'Marketing', label:'Marketing'},
    {value:'IT Software', label:'IT Software'},
]
WorkSelect:SelectType[] = [
    {value:'0 - 1 Years', label:'0 - 1 Years'},
    {value:'1 - 3 Years', label:'1 - 3 Years'},
    {value:'3 - 5 Years', label:'3 - 5 Years'},
]
JobSelect:SelectType[] = [
    {value:'Contract', label:'Contract'},
    {value:'Freelance', label:'Freelance'},
    {value:'Full Time', label:'Full Time'},
    {value:'Part Time', label:'Part Time'},
    {value:'Internship', label:'Internship'},
]
PrioritySelect:SelectType[] = [
    {value:'Normal', label:'Normal'},
    {value:'Urgent', label:'Urgent'},
]
Vacancieselect:SelectType[] = [
    {value:'10', label:'10'},
    {value:'20', label:'20'},
    {value:'30', label:'30'},
    {value:'40', label:'40'},
]
Salaryselect:SelectType[] = [
    {value:'0 - $1,00,000 / Year', label:'0 - $1,00,000 / Year'},
    {value:'$1,00,000 - $3,00,000 / Year', label:'$1,00,000 - $3,00,000 / Year'},
    {value:'$3,00,000 - $5,00,000 / Year', label:'$3,00,000 - $5,00,000 / Year'},
]
Skillselect:SelectType[] = [
    {value:'HTML', label:'HTML'},
    {value:'CSS', label:'CSS'},
    {value:'JavaScript', label:'JavaScript'},
    {value:'React', label:'React'},
]
selectedSkills=['HTML','CSS','JavaScript']
Genderselect:SelectType[] = [
    {value:'No Preferences', label:'No Preferences'},
    {value:'Male Only', label:'Male Only'},
    {value:'Female Only', label:'Female Only'},
]
Languagesselect:SelectType[] = [
    {value:'English', label:'English'},
    {value:'French', label:'French'},
    {value:'Arabic', label:'Arabic'},
    {value:'Hindi', label:'Hindi'},
]
selectedLanguagesselect=['English','French']
Qualificationselect:SelectType[] = [
    {value:'Graduate', label:'Graduate'},
    {value:'Diploma', label:'Diploma'},
    {value:'MBA', label:'MBA'},
    {value:'MCA', label:'MCA'},
]
selectedQualificationselect=['Graduate','MBA','MCA']
}
