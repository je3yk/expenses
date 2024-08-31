import { Meta, StoryObj } from "@storybook/react";

const ColorBox = ({
  className,
  title,
}: {
  className: string;
  title?: string;
}) => (
  <div className={`h-32 w-96 ${className} flex items-center justify-center`}>
    {title}
  </div>
);

const meta: Meta<typeof ColorBox> = {
  title: "Colors",
  component: ColorBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ColorBox>;

export const Default: Story = {
  args: {
    className: "bg-background text-foreground",
    title: "Primary",
  },
};

export const Colors: Story = {
  decorators: [
    () => {
      return (
        <div className="flex flex-col items-start gap-2">
          <ColorBox className="bg-background text-foreground" title="Main" />
          <ColorBox className="bg-card text-card-foreground" title="Card" />
          <ColorBox
            className="bg-popover text-popover-foreground"
            title="Popover"
          />
          <ColorBox
            className="bg-primary text-primary-foreground"
            title="Primary"
          />
          <ColorBox
            className="bg-secondary text-secondary-foreground"
            title="Secondary"
          />
          <ColorBox className="bg-muted text-muted-foreground" title="Muted" />
          <ColorBox
            className="bg-accent text-accent-foreground"
            title="Accent"
          />
          <ColorBox
            className="bg-destructive text-destructive-foreground"
            title="Destructive"
          />
          <ColorBox className="border border-border" title="border" />
          <ColorBox className="bg-input text-foreground" title="Input" />
        </div>
      );
    },
  ],
};
