import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// Different sections of stepper
import ContactAreaSection from "../Create/ContactArea";
import WorkInformationSection from "../Create/WorkInformation";
import CoachingCapacitySection from "../Create/CoachingCapacity";
import TrainingAndDevelopmentSection from "../Create/TrainingAndDevelopment";
import MentoringCapacitySection from "../Create/MentoringCapacity";
import CoachingProfileSection from "../Create/CoachingProfile";
import MentorProfileSection from "../Create/MentorProfile";
import FacilitationSection from "../Create/Facilitation";
import AccessmentSection from "../Create/Accessment";
import GdprSection from "../Create/Gdpr";
import { ValidateEmail } from "../../../../../Common/Utils/common_utils";
// Different actions to perform
import {
  SetContactAreaOrgId,
  UpdateContactArea,
  SetContactAreaError,
} from "../Create/ContactArea/ContactAreaActions";
import {
  UpdateEmployeeIdWorkInformation,
  UpdateWorkInformation,
  SetWorkInformationError,
} from "../Create/WorkInformation/WorkInformationActions";
import {
  UpdateEmployeeIdTrainingAndDevelopment,
  UpdateTrainingAndDevelopment,
  SetTrainingAndDevelopmentError,
} from "../Create/TrainingAndDevelopment/TrainingAndDevelopmentActions";
import {
  UpdateEmployeeIdCoachingCapacity,
  UpdateCoachingCapacity,
  SetCoachingCapacityError,
} from "../Create/CoachingCapacity/CoachingCapatityActions";
import {
  UpdateEmployeeIdMentoringCapacity,
  UpdateMentoringCapacity,
  SetMentoringCapacityError,
} from "../Create/MentoringCapacity/MentoringCapatityActions";
import {
  UpdateEmployeeIdCoachingProfile,
  UpdateCoachingProfile,
  SetCoachingProfileError,
} from "../Create/CoachingProfile/CoachingProfileActions";
import {
  UpdateEmployeeIdMentorProfile,
  UpdateMentorProfile,
  SetMentorProfileError,
} from "../Create/MentorProfile/MentorProfileActions";
import {
  UpdateEmployeeIdFacilitation,
  UpdateFacilitation,
  SetFacilitationError,
} from "../Create/Facilitation/FacilitationActions";
import {
  UpdateEmployeeIdAccessment,
  UpdateAccessment,
  SetAccessmentError,
} from "../Create/Accessment/AccessmentActions";
import {
  UpdateEmployeeIdGdpr,
  UpdateGdpr,
  SetGdprError,
} from "../Create/Gdpr/GdprActions";
import { useSelector, useDispatch } from "react-redux";
import DataService from "../../../../../Service";
import Loader from "../../../../../Components/Loader";
import { showSnackbar } from "../../../../../Components/Snackbar/SnackbarActions";
import { useParams, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepperButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "50px",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiStepper: {
      root: {
        padding: "0px",
      },
    },
    MuiStep: {
      root: {
        width: "200px",
        border: "1px solid #3b86ff",
        padding: "10px",
        margin: "2px",
      },
      completed: {
        backgroundColor: "#3b86ff",
      },
      active: {
        backgroundColor: "#3b86ff",
      },
    },
    MuiStepLabel: {
      label: {
        color: "#3b86ff",
        fontWeight: "normal",
        fontSize: "10px",
      },
      active: {
        color: "white !important",
      },
      completed: {
        color: "white !important",
      },
    },
    MuiStepIcon: {
      root: {
        color: "#3b86ff",
      },
      completed: {
        color: "white !important",
      },
      active: {
        color: "white !important",
      },
      text: {
        fill: "white",
      },
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: "#3b86ff",
      },
    },
  },
});

export default function EmployeeLinearStepper(props) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  let location = useLocation();
  let { id, employeeid } = useParams();

  useEffect(() => {
    dispatch(SetContactAreaOrgId(id));
    console.log(employeeid)
    if(employeeid){
      setLoading(true);
      DataService.getDirectData(`/employees/${employeeid}`).then((res) => {
        setLoading(false);
        dispatch(UpdateContactArea(res.data))
        dispatch(UpdateEmployeeIdTrainingAndDevelopment({section_id: res.employee_training_development_id, id: employeeid}));
        dispatch(UpdateEmployeeIdCoachingCapacity({section_id: res.employee_coaching_capacity_id, id: employeeid}));
        dispatch(UpdateEmployeeIdMentoringCapacity({section_id: res.employee_mentoring_capacity_id, id: employeeid}));
        dispatch(UpdateEmployeeIdCoachingProfile({section_id: res.employee_coaching_profile_id, id: employeeid}));
        dispatch(UpdateEmployeeIdMentorProfile({section_id: res.employee_mentoring_profile_id, id: employeeid}));
        dispatch(UpdateEmployeeIdFacilitation({section_id: res.employee_facilitation_id, id: employeeid}));
        dispatch(UpdateEmployeeIdAccessment({section_id: res.employee_assessment_id, id: employeeid}));
        dispatch(UpdateEmployeeIdGdpr({section_id: res.employee_gdpr_id, id: employeeid}));
      }).catch((err) => {
        setLoading(false);
        dispatch(showSnackbar("success", err.errors));
      })
    }
  },[]);

  function getSteps() {
    return [
      "Contact Area",
      "Employee Current Work Information And History",
      "Training and Development",
      "Coaching Capacity",
      "Mentoring Capacity",
      "Coaching Profile",
      "Mentor Profile",
      "Facilitation",
      "Assessment",
      "GDPR",
    ];
  }

  const ContactArea = useSelector((state) => state.contactAreaReducer);
  const WorkInformation = useSelector((state) => state.workInformationReducer);
  const CoachingCapacity = useSelector((state) => state.coachingCapacityReducer);
  const TrainingAndDevelopment = useSelector((state) => state.trainingAndDevelopmentReducer);
  const MentoringCapacity = useSelector((state) => state.mentoringCapacityReducer);
  const CoachingProfileCapacity = useSelector((state) => state.coachingProfileReducer);
  const MentorProfile = useSelector((state) => state.mentorProfileReducer);
  const Facilitation = useSelector((state) => state.facilitationReducer);
  const Accessment = useSelector((state) => state.accessmentReducer);
  const Gdpr = useSelector((state) => state.gdprReducer);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <ContactAreaSection />;
      case 1:
        return <WorkInformationSection />;
      case 2:
        return <TrainingAndDevelopmentSection />;
      case 3:
        return <CoachingCapacitySection />;
      case 4:
        return <MentoringCapacitySection />;
      case 5:
        return <CoachingProfileSection />;
      case 6:
        return <MentorProfileSection />;
      case 7:
        return <FacilitationSection />;
      case 8:
        return <AccessmentSection />;
      case 9:
        return <GdprSection />;
      default:
        return "Not available";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleSubmit = (data, apiVariable, dispatchVariable, sectionId) => {
    console.log("handleSubmit");
    if (sectionId !== null) {
      setLoading(true);
      DataService.updateData(data, sectionId, apiVariable)
        .then((res) => {
          dispatch(dispatchVariable(res.data));
          setLoading(false);
          dispatch(showSnackbar("success", ["Success!"]));
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((err) => {
          dispatch(showSnackbar("error", err.errors));
        });
    } else {
      // DataService.createData(ObjectToFormdata(data), apiVariable)
      setLoading(true);
      DataService.createData(data, apiVariable)
        .then((res) => {
          setLoading(false);
          dispatch(showSnackbar("success", ["Success!"]));
          if (dispatchVariable === UpdateContactArea) {
            console.log("then block");
            dispatch(dispatchVariable(res.data));
            dispatch(UpdateEmployeeIdTrainingAndDevelopment({section_id: res.employee_training_development_id, id: employeeid}));
            dispatch(UpdateEmployeeIdCoachingCapacity({section_id: res.employee_coaching_capacity_id, id: employeeid}));
            dispatch(UpdateEmployeeIdMentoringCapacity({section_id: res.employee_mentoring_capacity_id, id: employeeid}));
            dispatch(UpdateEmployeeIdCoachingProfile({section_id: res.employee_coaching_profile_id, id: employeeid}));
            dispatch(UpdateEmployeeIdMentorProfile({section_id: res.employee_mentoring_profile_id, id: employeeid}));
            dispatch(UpdateEmployeeIdFacilitation({section_id: res.employee_facilitation_id, id: employeeid}));
            dispatch(UpdateEmployeeIdAccessment({section_id: res.employee_assessment_id, id: employeeid}));
            dispatch(UpdateEmployeeIdGdpr({section_id: res.employee_gdpr_id, id: employeeid}));
          } else {
            dispatch(dispatchVariable(res.data));
          }
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((err) => {
          setLoading(false);
          dispatch(showSnackbar("error", ['err.errors']));
        });
    }
  };

  const handleNext = (submitData, submitUrl) => {
    if (activeStep === 0) {
      let valid = true;
      let errors = {
        title: false,
        first_name: false,
        middle_name: false,
        last_name: false,
        primary_email: false,
        authorisation_to_access_the_service: false,
        authorisation_provided_by: false,
        nationality_list_id: false,
        bame: false,
        diversity_and_inclusion: false,
        languages_list: false,
        mobile: false,
        phone: false,
      };
      if (!ContactArea.data.title || !ContactArea.data.title.length) {
        errors.title = true;
        valid = false;
      }
      if (!ContactArea.data.first_name || !ContactArea.data.first_name.length) {
        errors.first_name = true;
        valid = false;
      }
      if (
        !ContactArea.data.middle_name ||
        !ContactArea.data.middle_name.length
      ) {
        errors.middle_name = true;
        valid = false;
      }
      if (!ContactArea.data.last_name || !ContactArea.data.last_name.length) {
        errors.last_name = true;
        valid = false;
      }
      // if (
      //   !ContactArea.data.primary_email ||
      //   !ContactArea.data.primary_email.length
      // ) {
      //   errors.primary_email = true;
      //   valid = false;
      // }
      if(ValidateEmail(ContactArea.data.primary_email)){
        errors.primary_email = true;
        valid = false;
      }
      if (
        !ContactArea.data.authorisation_to_access_the_service ||
        !ContactArea.data.authorisation_to_access_the_service.length
      ) {
        errors.authorisation_to_access_the_service = true;
        valid = false;
      }
      if (
        !ContactArea.data.authorisation_provided_by ||
        !ContactArea.data.authorisation_provided_by.length
      ) {
        errors.authorisation_provided_by = true;
        valid = false;
      }
      if (!ContactArea.data.bame || !ContactArea.data.bame.length) {
        errors.bame = true;
        valid = false;
      }
      if (
        !ContactArea.data.diversity_and_inclusion ||
        !ContactArea.data.diversity_and_inclusion.length
      ) {
        errors.diversity_and_inclusion = true;
        valid = false;
      }
      if (
        !ContactArea.data.languages_list ||
        !ContactArea.data.languages_list.length || ContactArea.data.languages_list === undefined
      ) {
        errors.languages_list = true;
        valid = false;
      }
      if (!ContactArea.data.mobile || !ContactArea.data.mobile.length) {
        errors.mobile = true;
        valid = false;
      }
      if (!ContactArea.data.phone || !ContactArea.data.phone.length) {
        errors.phone = true;
        valid = false;
      }
      if (!ContactArea.data.nationality_list_id || typeof(ContactArea.data.nationality_list_id) !== 'number') {
        errors.nationality_list_id = true;
        valid = false;
      }

      if (!valid) {
        console.log('errors :>> ', errors);
        dispatch(SetContactAreaError(errors));
        return;
      }
      handleSubmit(
        ContactArea.data,
        "employee_contact_area",
        UpdateContactArea,
        ContactArea.section_id
      );
    } else if (activeStep === 1) {
      let valid = true;
      let errors = {
        job_title: false,
        employee_status: false,
        current_role_history_notes: false,
        date_follow_up_contact_made: false,
        organisation_moved_to: false,
        level:false,
        line_manager_name: false,
        line_manager_contact_details: false,
        hr_sponsor_title: false,
        hr_sponsor_contact_details: false,
        department_list_id: false,
        office_list_id: false,
        function_list_id: false,
        address_line1: false,
        city: false,
        county: false,
        country_list_id: false,
        zipcode: false,
        mobile: false,
        phone: false,
        job_role_lists: false,
        left_organisation_follow_up_action: false,
        past_organisation: false  
      };
      if (
        !WorkInformation.data.job_title ||
        !WorkInformation.data.job_title.length
      ) {
        errors.job_title = true;
        valid = false;
      }
      if (
        !WorkInformation.data.employee_status ||
        !WorkInformation.data.employee_status.length
      ) {
        errors.employee_status = true;
        valid = false;
      }
      if (!WorkInformation.data.current_role_history_notes || !WorkInformation.data.current_role_history_notes.length) {
        errors.current_role_history_notes = true;
        valid = false;
      }
      if (
        !WorkInformation.data.date_follow_up_contact_made
      ) {
        errors.date_follow_up_contact_made = true;
        valid = false;
      }
      if (!WorkInformation.data.organisation_moved_to || !WorkInformation.data.organisation_moved_to.length) {
        errors.organisation_moved_to = true;
        valid = false;
      }
      if (!WorkInformation.data.level || !WorkInformation.data.level.length) {
        errors.level = true;
        valid = false;
      }
      if (!WorkInformation.data.line_manager_name || !WorkInformation.data.line_manager_name.length) {
        errors.line_manager_name = true;
        valid = false;
      }
      if (!WorkInformation.data.line_manager_contact_details || !WorkInformation.data.line_manager_contact_details.length) {
        errors.line_manager_contact_details = true;
        valid = false;
      }
      if (!WorkInformation.data.hr_sponsor_title || !WorkInformation.data.hr_sponsor_title.length) {
        errors.hr_sponsor_title = true;
        valid = false;
      }
      if (!WorkInformation.data.hr_sponsor_name || !WorkInformation.data.hr_sponsor_name.length) {
        errors.hr_sponsor_name = true;
        valid = false;
      }
      if (!WorkInformation.data.hr_sponsor_contact_details || !WorkInformation.data.hr_sponsor_contact_details.length) {
        errors.hr_sponsor_contact_details = true;
        valid = false;
      }
      if (!WorkInformation.data.group || !WorkInformation.data.group.length) {
        errors.group = true;
        valid = false;
      }
      if (
        !WorkInformation.data.department_list_id ||
        typeof WorkInformation.data.department_list_id !== "number"
      ) {
        errors.department_list_id = true;
        valid = false;
      }
      if (
        !WorkInformation.data.office_list_id ||
        typeof WorkInformation.data.office_list_id !== "number"
      ) {
        errors.office_list_id = true;
        valid = false;
      }
      if (
        !WorkInformation.data.function_list_id ||
        typeof WorkInformation.data.function_list_id !== "number"
      ) {
        errors.function_list_id = true;
        valid = false;
      }
      if (!WorkInformation.data.address_line1 || !WorkInformation.data.address_line1.length) {
        errors.address_line1 = true;
        valid = false;
      }
      if (!WorkInformation.data.city || !WorkInformation.data.city.length) {
        errors.city = true;
        valid = false;
      }
      if (!WorkInformation.data.county || !WorkInformation.data.county.length) {
        errors.county = true;
        valid = false;
      }
      if (
        !WorkInformation.data.country_list_id ||
        typeof WorkInformation.data.country_list_id !== "number"
      ) {
        errors.country_list_id = true;
        valid = false;
      }
      if (!WorkInformation.data.zipcode || !WorkInformation.data.zipcode.length) {
        errors.zipcode = true;
        valid = false;
      }
      if (!WorkInformation.data.mobile || !WorkInformation.data.mobile.length) {
        errors.mobile = true;
        valid = false;
      }
      if (!WorkInformation.data.phone || !WorkInformation.data.phone.length) {
        errors.phone = true;
        valid = false;
      }
      if (
        !WorkInformation.data.job_role_lists ||
        typeof WorkInformation.data.job_role_lists !== "number"
      ) {
        errors.job_role_lists = true;
        valid = false;
      }
      if (
        !WorkInformation.data.past_organisation ||
        typeof WorkInformation.data.past_organisation !== "number"
      ) {
        errors.past_organisation = true;
        valid = false;
      }
      if (!WorkInformation.data.left_organisation_follow_up_action || !WorkInformation.data.left_organisation_follow_up_action.length) {
        errors.left_organisation_follow_up_action = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetWorkInformationError(errors));
        return;
      }
      handleSubmit(
        WorkInformation.data,
        "employee_work_information",
        UpdateWorkInformation,
        WorkInformation.section_id
      );
      console.log('WorkInformation.data.date_follow_up_contact_made :>> ', WorkInformation.data.date_follow_up_contact_made);
    }
    else if (activeStep === 2) {
      let valid = true;
      let errors = {
      };
      if (!valid) {
        dispatch(SetTrainingAndDevelopmentError(errors));
        return;
      }
      handleSubmit(
        TrainingAndDevelopment.data,
        "employee_training_and_development",
        UpdateTrainingAndDevelopment,
        TrainingAndDevelopment.section_id
      );
    }else if (activeStep === 3) {
      let valid = true;
      let errors = {
        role: false,
      };
      if (
        !CoachingCapacity.data.role ||
        !CoachingCapacity.data.role.length
      ) {
        errors.role = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetCoachingCapacityError(errors));
        return;
      }
      handleSubmit(
        CoachingCapacity.data,
        "employee_coaching_capacity",
        UpdateCoachingCapacity,
        CoachingCapacity.section_id
      );
    }else if (activeStep === 4) {
      let valid = true;
      let errors = {
        role: false,
      };
      if (
        !MentoringCapacity.data.role ||
        !MentoringCapacity.data.role.length
      ) {
        errors.role = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetMentoringCapacityError(errors));
        return;
      }
      handleSubmit(
        MentoringCapacity.data,
        "employee_mentoring_capacity",
        UpdateMentoringCapacity,
        MentoringCapacity.section_id
      );
    }else if (activeStep === 5) {
      let valid = true;
      let errors = {
        role : false,
        overview : false,
        approach : false,
        background : false,
        areas_of_expertise : false,
        client_specific_areas_of_expertise : false,
        representatitive_clients : false,
        education_and_qualifications : false,
        client_testimonials : false,
        diagnostic_tool_id : false,
        language_list_id : false,
        client_type_id : false,
        picture : false,
      };
      if (
        !CoachingProfileCapacity.data.role ||
        !CoachingProfileCapacity.data.role.length
      ) {
        errors.role = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.overview ||
        !CoachingProfileCapacity.data.overview.length
      ) {
        errors.overview = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.approach ||
        !CoachingProfileCapacity.data.approach.length
      ) {
        errors.approach = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.background ||
        !CoachingProfileCapacity.data.background.length
      ) {
        errors.background = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.areas_of_expertise ||
        !CoachingProfileCapacity.data.areas_of_expertise.length
      ) {
        errors.areas_of_expertise = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.client_specific_areas_of_expertise ||
        !CoachingProfileCapacity.data.client_specific_areas_of_expertise.length
      ) {
        errors.client_specific_areas_of_expertise = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.representatitive_clients ||
        !CoachingProfileCapacity.data.representatitive_clients.length
      ) {
        errors.representatitive_clients = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.education_and_qualifications ||
        !CoachingProfileCapacity.data.education_and_qualifications.length
      ) {
        errors.education_and_qualifications = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.client_testimonials ||
        !CoachingProfileCapacity.data.client_testimonials.length
      ) {
        errors.client_testimonials = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.diagnostic_tool_id ||
        typeof CoachingProfileCapacity.data.diagnostic_tool_id !== "number"
      ) {
        errors.diagnostic_tool_id = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.language_list_id ||
        typeof CoachingProfileCapacity.data.language_list_id !== "number"
      ) {
        errors.language_list_id = true;
        valid = false;
      }
      if (
        !CoachingProfileCapacity.data.client_type_id ||
        typeof CoachingProfileCapacity.data.client_type_id !== "number"
      ) {
        errors.client_type_id = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetCoachingProfileError(errors));
        return;
      }
      handleSubmit(
        CoachingProfileCapacity.data,
        "employee_coaching_profile",
        UpdateCoachingProfile,
        CoachingProfileCapacity.section_id
      );
    }
    else if (activeStep === 6) {
      let valid = true;
      let errors = {
        role : false,
        overview : false,
        approach : false,
        background : false,
        areas_of_expertise : false,
        client_specific_areas_of_expertise : false,
        representatitive_clients : false,
        education_and_qualifications : false,
        client_testimonials : false,
        diagnostic_tool_id : false,
        language_list_id : false,
        client_type_id : false,
        picture : false,
      };
      if (
        !MentorProfile.data.role ||
        !MentorProfile.data.role.length
      ) {
        errors.role = true;
        valid = false;
      }
      if (
        !MentorProfile.data.overview ||
        !MentorProfile.data.overview.length
      ) {
        errors.overview = true;
        valid = false;
      }
      if (
        !MentorProfile.data.approach ||
        !MentorProfile.data.approach.length
      ) {
        errors.approach = true;
        valid = false;
      }
      if (
        !MentorProfile.data.background ||
        !MentorProfile.data.background.length
      ) {
        errors.background = true;
        valid = false;
      }
      if (
        !MentorProfile.data.areas_of_expertise ||
        !MentorProfile.data.areas_of_expertise.length
      ) {
        errors.areas_of_expertise = true;
        valid = false;
      }
      if (
        !MentorProfile.data.client_specific_areas_of_expertise ||
        !MentorProfile.data.client_specific_areas_of_expertise.length
      ) {
        errors.client_specific_areas_of_expertise = true;
        valid = false;
      }
      if (
        !MentorProfile.data.representatitive_clients ||
        !MentorProfile.data.representatitive_clients.length
      ) {
        errors.representatitive_clients = true;
        valid = false;
      }
      if (
        !MentorProfile.data.education_and_qualifications ||
        !MentorProfile.data.education_and_qualifications.length
      ) {
        errors.education_and_qualifications = true;
        valid = false;
      }
      if (
        !MentorProfile.data.client_testimonials ||
        !MentorProfile.data.client_testimonials.length
      ) {
        errors.client_testimonials = true;
        valid = false;
      }
      if (
        !MentorProfile.data.diagnostic_tool_id ||
        typeof MentorProfile.data.diagnostic_tool_id !== "number"
      ) {
        errors.diagnostic_tool_id = true;
        valid = false;
      }
      if (
        !MentorProfile.data.language_list_id ||
        typeof MentorProfile.data.language_list_id !== "number"
      ) {
        errors.language_list_id = true;
        valid = false;
      }
      if (
        !MentorProfile.data.client_type_id ||
        typeof MentorProfile.data.client_type_id !== "number"
      ) {
        errors.client_type_id = true;
        valid = false;
      }
      if (!valid) {
        dispatch(SetMentorProfileError(errors));
        return;
      }
      handleSubmit(
        MentorProfile.data,
        "employee_coaching_profile",
        UpdateMentorProfile,
        MentorProfile.section_id
      );
    }
    else if (activeStep === 7) {
      let valid = true;
      let errors = {
      };
      if (!valid) {
        dispatch(SetFacilitationError(errors));
        return;
      }
      handleSubmit(
        Facilitation.data,
        "employee_facilitations",
        UpdateFacilitation,
        Facilitation.section_id
      );
      }
      else if (activeStep === 8) {
        let valid = true;
        let errors = {
        };
        if (!valid) {
          dispatch(SetAccessmentError(errors));
          return;
        }
        handleSubmit(
          Accessment.data,
          "employee_assessments",
          UpdateAccessment,
          Accessment.section_id
        );
      }
      else if (activeStep === 9) {
        let valid = true;
        let errors = {
          consent_status : false,
          consent_expiry_date : false,
          consent_terms : false,
          lawful_bias : false,
          purposes : false,
          contact_status : false
        };
        if (
          !Gdpr.data.consent_status ||
          !Gdpr.data.consent_status.length
        ) {
          errors.consent_status = true;
          valid = false;
        }
        if (
          !Gdpr.data.consent_expiry_date
        ) {
          errors.consent_expiry_date = true;
          valid = false;
        }
        if (
          !Gdpr.data.consent_terms ||
          !Gdpr.data.consent_terms.length
        ) {
          errors.consent_terms = true;
          valid = false;
        }
        if (
          !Gdpr.data.lawful_bias ||
          !Gdpr.data.lawful_bias.length
        ) {
          errors.lawful_bias = true;
          valid = false;
        }
        if (
          !Gdpr.data.purposes ||
          typeof Gdpr.data.purposes !== "number"
        ) {
          errors.purposes = true;
          valid = false;
        }
        if (
          !Gdpr.data.contact_status ||
          !Gdpr.data.contact_status.length
        ) {
          errors.contact_status = true;
          valid = false;
        }
        
        if (!valid) {
          dispatch(SetGdprError(errors));
          return;
        }
        handleSubmit(
          Gdpr.data,
          "employee_gdprs",
          UpdateGdpr,
          Gdpr.section_id
        );
      }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleTabChange = (index) => {
    setActiveStep(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        {loading && <Loader />}
        {/* <Snackbar/> */}
        <Stepper activeStep={activeStep} connector={false}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step
                onClick={() => handleTabChange(index)}
                key={label}
                {...stepProps}
                style={{
                  backgroundColor: activeStep === index ? "#3b86ff" : "",
                  cursor: "pointer",
                }}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Some message to be displayed here
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div className={classes.stepperButtons}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1
                    ? "Finish"
                    : "Save & Proceed"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
