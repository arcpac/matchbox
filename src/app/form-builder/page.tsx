"use client";
import {
  BuilderView,
  FormBuilder,
  IFormBuilder,
} from "@react-form-builder/designer";
import { rSuiteComponents } from "@react-form-builder/components-rsuite";

import { matInput } from "./components/MatInput";
import { matButton } from "./components/MatButton";
import { rsMessage } from "./components/Message";
import { useRef, useState } from "react";
import { createView, FormViewer } from "@react-form-builder/core";

function FormBuilderPage() {
  const formBuilderRef = useRef<IFormBuilder>();
  const [form, setForm] = useState<string>("");
  const components = rSuiteComponents.map((c) => c.build());
  const builderView = new BuilderView([
    ...components,
    matButton.build(),
    matInput.build(),
    rsMessage.build(),
  ]);

  const viewComponents = rSuiteComponents.map((c) => c.build().model);
  const view = createView([
    ...viewComponents,
    matButton.build().model,
    matInput.build().model,
    rsMessage.build().model,
  ]);
  const setRef = (builder: IFormBuilder | null) => {
    if (builder) {
      formBuilderRef.current = builder;
    }
  };

  const handleFormDataChange = () => {
    if (formBuilderRef.current) {
      const updatedForm = JSON.parse(formBuilderRef.current.formAsString);
      setForm(updatedForm);
      console.log("Form data changed", updatedForm);
    }
  };
  // const testForm = `{
  //   "form": {
  //     "key": "Screen",
  //     "type": "Screen",
  //     "props": {},
  //     "children": [
  //       {
  //         "key": "RsInput 1",
  //         "type": "RsInput",
  //         "props": {}
  //       }
  //     ]
  //   }
  // }`;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col rounded-t-lg border mb-4">
        <div className="bg-orange-500 text-white p-2 rounded-t-lg">
          <h1 className="text-lg font-bold">EDITOR MODE</h1>
        </div>
        <div className="mb-4">
          <FormBuilder
            view={builderView}
            builderRef={setRef}
            onFormDataChange={handleFormDataChange}
          />
        </div>
      </div>

      <div className="flex flex-col border p-4 rounded-lg shadow-lg">
        <div className="flex flex-col border rounded-t-lg">
          <div className="bg-green-500 text-white p-2 rounded-t-lg">
            <h1 className="text-lg font-bold">VIEW MODE</h1>
          </div>
          <div className="p-4">
            {/* <FormViewer view={view} getForm={(_) => testForm} /> */}

            <FormViewer
              view={view}
              getForm={() => JSON.stringify(form)}
              onFormDataChange={(e) => console.log(e.data)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBuilderPage;
