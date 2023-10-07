/**
 * Both thePartial andRequired types only work on the ﬁrst level of the type property list.
 * This means that they will not recurse into deeply nestedproperties of objects and so on.
 * If you know that an object contains multiplenested objects, then you will have to explicitly mark them asPartial orRequired as well.
 */

//Record type
//set key and its value type
const serviceConfig: Record<string, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: false,
};

serviceConfig.enablePayments = true;

console.log(serviceConfig);

type ServiceConfigParams = "port" | "basePath" | "enableStripePayments";

const serviceConfigChecked: Record<ServiceConfigParams, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: false,
};

console.log(serviceConfigChecked); // prints http://localhost

//Partial Type
//using optional types based on another required type
enum PRIORITY {
  DEFAULT,
  LOW,
  HIGH,
}
interface TodoItemProps {
  title: string;
  description: string;
  priority: PRIORITY;
}

class TodoItem {
  description?: string;
  title = "Default item title";
  priority = PRIORITY.DEFAULT;

  constructor(todoItemProps: Partial<TodoItemProps> = {}) {
    Object.assign(this, todoItemProps);
  }
}

const item = new TodoItem({ description: "Some description" });

console.debug(item.description); // prints "Some description"
console.debug(item.title); // prints "Some description"

//Required Type
//oposite of partial
type OriginalTodoItemProps = Required<Partial<TodoItemProps>>; // type is same as TodoItemProps

//Pick Type
//pull out certain properties from a fat interface or types
type FullPerson = {
  name: string;
  age: number;
  address: string;
  phoneNumber: string;
};

type PersonBasicInfo = Pick<FullPerson, "name" | "age">;

const person: PersonBasicInfo = { age: 11, name: "Meet" };

console.log(person);

//Omit Type
//omit the certain properties from a fat interface or types
type OriginalThemeProps = {
  colors: string[];
  elevations: string[];
  margins: string[];
  defaultTypography: string;
};

type CustomThemeProps = {
  colors: Set<string>;
};

type ThemeProps = Omit<OriginalThemeProps, "colors"> & {
  data?: CustomThemeProps;
};

const colors: ThemeProps = {
  data: { colors: new Set(["Hello"]) },
  defaultTypography: "",
  elevations: [],
  margins: [],
};

console.log(colors);
